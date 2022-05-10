import { ArrowRight, GithubLogo } from "phosphor-react";

interface CardPortfolioProps {
  title: string;
  description: string;
  image: string;
  type: string;
}

export function CardPortfolio({ title, description, image, type }: CardPortfolioProps) {
  return (
    <div className={`flex ${type === "left" ? "flex-row-reverse" : "flex-row"} items-center lg:flex-col-reverse gap-8`}>
      <div className="basis-1/2">
        <h1 className="text-xl font-bold lg:text-base">{title}</h1>

        <p className="mt-4 lg:text-sm text-justify">
          {description}
        </p>

        <div className="flex flex-row gap-8 font-medium text-green-300">
          <a className="flex flex-row gap-2 items-center mt-4 lg:text-sm" href="">
            <ArrowRight />
            Live demo
          </a>
          <a className="flex flex-row gap-2 items-center mt-4 lg:text-sm" href="">
            <GithubLogo />
            Code
          </a>
        </div>
      </div>

      <div className="basis-1/2 justify-self-center flex justify-center items-center lg:mb-4">
        <img className="max-w-md rounded-md" src={image} alt="" />
      </div>
    </div>
  );
}
