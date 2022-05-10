import { FormEvent, useRef, useState } from 'react';

import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

export function ContactForm() {
  const formRef = useRef<any>();
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  async function sendEmail(event: FormEvent) {
    event.preventDefault();

    if (!name) {
      toast.error('Please, fill the name.');
      return;
    }

    if (!email) {
      toast.error('Please, fill the email.');
      return;
    }

    if (!message) {
      toast.error('Please, fill the message.');
      return;
    }

    setIsSendingEmail(true);

    try {
      await emailjs.sendForm('service_esucxci', 'template_zuta9xe', formRef.current, 'osDlgdMS7Gg5MnEft');
      toast.success('The email has been sent!');
    } catch {
      toast.error('It was not possible to send the email. Please use another form of contact!');
    } finally {
      setIsSendingEmail(false);
    }
  }

  return (
    <form
      ref={formRef}
      className="basis-1/2 flex flex-col gap-4"
      onSubmit={sendEmail}
    >
      <input
        type="text"
        name="user_name"
        onChange={(event) => setName(event.target.value)}
        className="w-full h-12 text-sm placeholder-neutral-400 text-zinc-100 border-none bg-neutral-900 rounded-md
                focus:ring-cyan-300 focus:ring-2 focus:outline-none"
        placeholder="Name"
      />
      <input
        type="email"
        name="user_email"
        onChange={(event) => setEmail(event.target.value)}
        className="w-full h-12 text-sm placeholder-neutral-400 text-zinc-100 border-none bg-neutral-900 rounded-md
                focus:ring-cyan-300 focus:ring-2 focus:outline-none"
        placeholder="Email"
      />
      <textarea
        onChange={(event) => setMessage(event.target.value)}
        name="message"
        className="min-h-[112px] w-full text-sm placeholder-neutral-400 text-zinc-100 border-none bg-neutral-900 rounded-md
                focus:ring-cyan-300 focus:ring-2 focus:outline-none resize-none scrollbar-thumb-zinc-400
                  scrollbar-track-transparent scrollbar-thin"
        placeholder="Message"
      />

      <button
        type="submit"
        disabled={isSendingEmail}
        className="border-2 rounded-md p-2 border-cyan-300 font-medium hover:opacity-60 transition-opacity
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white
                  disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Send Message!
      </button>

    </form>
  );
}
