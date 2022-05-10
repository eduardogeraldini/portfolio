import { CardPortfolio } from "../../CardPortfolio";
import { projects } from "../../../data/projects";

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
