import { Envelope, Phone } from "phosphor-react";
import { ContactForm } from '../../ContactForm';

export function Contact() {
  return (
    <section id="contact">
      <h1 className="text-3xl font-bold mb-8 lg:text-2xl md:text-xl">
        <span className="text-cyan-300">{'<b>'}</span> Contact <span className="text-cyan-300">{'</b>'}</span>
      </h1>

      <div className="flex flex-row justify-between lg:text-sm lg:flex-col gap-8">
        <div className="basis-1/2 lg:mb-4">
          <p className="mb-4 text-justify">
            Want to work together or have any question ?
            You can contact me by phone or using the form on the side. It will be a pleasure to chat with you.
          </p>
          <p className="flex gap-2 mb-2">
            <Envelope className="text-cyan-300" size={24}/>
            eduardopr.geraldini@gmail.com
          </p>
          <p className="flex gap-2">
            <Phone className="text-cyan-300" size={24}/>
            +55 19 99576-1666
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
