import projectImg from "../assets/project.jpg";
import portolioImg from "../assets/readme-image.jpg";

export const projects = [
  {
    name: "Portfolio",
    description: `This is a website to show my personal projects that are already completed or still in development.
                  The technologies used for development were: ReactJS, Typescript, TailwindCSS and ViteJS.`,
    image: portolioImg,
    liveUrl: "https://eduardo-geraldini.vercel.app/",
    codeUrl: "https://github.com/eduardogeraldini/portfolio",
  },
  {
    name: "Brand nice studio",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    image: projectImg,
  },
  {
    name: "Brand nice studio",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    image: projectImg
  },
  {
    name: "Brand nice studio",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    image: projectImg
  },
];

export type ProjectType = {
  name: string;
  description: string;
  image: string;
  liveUrl?: string;
  codeUrl?: string;
};
