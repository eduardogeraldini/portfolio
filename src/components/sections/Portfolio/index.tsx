import { CardPortfolio } from "../../CardPortfolio";

import projectImg from "../../../assets/project.jpg";

const projects = [
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

type ProjectType = typeof projects;

export function Portfolio() {
  return (
    <section id="portfolio">
      <h1 className="text-3xl font-bold mb-8 lg:text-2xl md:text-xl">
        <span className="text-cyan-300">{'<b>'}</span> Portfolio <span className="text-cyan-300">{'</b>'}</span>
      </h1>

      {projects.map((project, index) => {
        return (
          <div key={index} className="mb-16 lg:mb-12">
            <CardPortfolio
              title={project.name}
              description={project.description}
              image={project.image}
              type={index % 2 === 0 ? "right" : "left"}
            />
          </div>
        )
      })}
    </section>
  );
}
