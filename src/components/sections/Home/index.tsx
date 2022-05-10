import { Button } from "../../Button";

export function Home() {
  return (
    <div className="flex flex-1 flex-col justify-center items-center h-full fade-in-left">
      <div>
        <h6 className="text-4xl font-medium mb-5 lg:text-3xl md:text-2xl sm:text-xl">Hello!</h6>
        <h1 className="text-7xl font-bold text-cyan-300 lg:text-6xl md:text-5xl sm:text-4xl">I am Eduardo Geraldini.</h1>
        <h1 className="text-7xl font-bold lg:text-6xl md:text-5xl sm:text-4xl">I create things for the web!</h1>

        <div className="mt-5 text-lg lg:text-sm ">
          <p>I like to craft solid and scalable web application with a great user experiences.</p>
          <p>I value work team, and accessibility.</p>
        </div>

        <div className="mt-8">
          <Button title="Portfolio" />
        </div>
      </div>
    </div>
  );
}
