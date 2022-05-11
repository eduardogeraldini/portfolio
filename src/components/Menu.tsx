import { useState } from "react";

import { Link } from 'react-scroll';
import { Code, List, X } from "phosphor-react";
import { Button } from "./Button";

export function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuClick(){
    setIsMenuOpen((prevState) => !prevState);
  }

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-16 flex flex-row justify-between items-center px-8 bg-black z-50">

        <Code className="text-cyan-300" weight="bold" size={32}/>

        <div className="flex flex-row gap-8 items-center justify-center h-full sm:hidden">
          <Link
            to="about"
            spy={false}
            smooth="easeInOutQuart"
            offset={-64}
            className="cursor-pointer hover:text-cyan-300"
          >
            About
          </Link>
          <Link
            to="portfolio"
            spy={false}
            smooth="easeInOutQuart"
            offset={-64}
            className="cursor-pointer hover:text-cyan-300"
          >
            Portfolio
          </Link>
          <Link
            to="contact"
            spy={false}
            smooth="easeInOutQuart"
            className="cursor-pointer hover:text-cyan-300"
          >
            Contact
          </Link>
        </div>

        {isMenuOpen &&
          <div className="hidden absolute top-16 left-0 w-full h-screen bg-black sm:flex sm:items-center sm:justify-center fade-in-left">
            <div className="flex flex-col gap-8 items-center justify-center pb-16">
              <Link
                to="about"
                spy={false}
                smooth="easeInOutQuart"
                offset={-64}
                onClick={handleMenuClick}
                className="cursor-pointer hover:text-cyan-300"
              >
                About
              </Link>
              <Link
                to="portfolio"
                spy={false}
                smooth="easeInOutQuart"
                offset={-64}
                onClick={handleMenuClick}
                className="cursor-pointer hover:text-cyan-300"
              >
                Portfolio
              </Link>
              <Link
                to="contact"
                spy={false}
                smooth="easeInOutQuart"
                onClick={handleMenuClick}
                className="cursor-pointer hover:text-cyan-300"
              >
                Contact
              </Link>
            </div>
          </div>}

        <div></div>

        <button
          onClick={handleMenuClick}
          className="hidden sm:inline"
        >
          {isMenuOpen
            ? <X className="text-white" weight="bold" size={26} />
            : <List className="text-white" weight="bold" size={26} />
          }
        </button>
      </nav>
    </>
  );
}
