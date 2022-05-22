import { ArrowRight, GithubLogo } from "phosphor-react";

interface CardPortfolioProps {
  title: string;
  description: string;
  image: string;
  type: string;
  liveUrl?:string;
  codeUrl?: string;
}

export function CardPortfolio({ title, description, image, type, liveUrl, codeUrl }: CardPortfolioProps) {
  return (
    <div className={`flex ${type === "left" ? "flex-row-reverse" : "flex-row"} items-center lg:flex-col-reverse gap-6 bg-neutral-900 p-4 rounded-md`}>
      <div className="basis-1/2">
        <h1 className="text-xl font-bold lg:text-base">{title}</h1>

        <p className="mt-4 lg:text-sm text-justify">
          {description}
        </p>

        <div className="flex flex-row gap-8 font-medium text-green-300">
          {liveUrl &&
            <a className="flex flex-row gap-2 items-center mt-4 lg:text-sm" href={liveUrl} target="_blank">
              <ArrowRight />
              Live demo
            </a>
          }
          {codeUrl &&
            <a className="flex flex-row gap-2 items-center mt-4 lg:text-sm" href={codeUrl} target="_blank">
              <GithubLogo />
              Code
            </a>
          }
        </div>
      </div>

      <div className="basis-1/2 justify-self-center flex justify-center items-center">
        <img className="rounded-md max-h-full max-w-full" src={image}  alt={'This is a screenshot of project ' + title} />
      </div>
    </div>
  );
}
