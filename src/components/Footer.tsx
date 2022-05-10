import { Envelope, GithubLogo, LinkedinLogo } from "phosphor-react";

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center pb-8 pt-14">

      <div className="flex flex-row items-center justify-center gap-2 mb-2">

        <button
          className="hover:opacity-60 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white"
          onClick={() => window.open("https://github.com/eduardogeraldini")}
        >
          <GithubLogo className="text-cyan-300" weight="regular" size={20}/>
        </button>

        <button
          className="hover:opacity-60 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white"
          onClick={() => window.open("https://www.linkedin.com/in/eduardogeraldini/")}
        >
          <LinkedinLogo className="text-cyan-300" weight="regular" size={20}/>
        </button>

        <button
          className="hover:opacity-60 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white"
          onClick={() => window.open("mailto:eduardopr.geraldini@gmail.com")}
        >
          <Envelope className="text-cyan-300" weight="regular" size={20}/>
        </button>

      </div>

      <div className="text-sm">
        Developed by Eduardo Geraldini
      </div>
    </footer>
  );
}
