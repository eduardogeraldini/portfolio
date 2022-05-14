import imageAbout from '../../../assets/image-about.jpg';

export function About() {
  return (
    <section id="about">
      <h1 className="text-3xl font-bold mb-8 lg:text-2xl md:text-xl">
        <span className="text-cyan-300">{'<b>'}</span> About <span className="text-cyan-300">{'</b>'}</span>
      </h1>

      <div className="flex flex-row-reverse items-center mb-16 lg:flex-col-reverse gap-8">
        <div className="basis-1/2">
          <h1 className="text-xl font-bold lg:text-lg lg:mt-4">Who am I ?</h1>
          <p className="mt-4 lg:text-sm text-justify">
          I am a programmer, I am 25 years old, I have a degree in Information Systems and I have been passionate about technology since I was 12 years old. Currently I work as a programmer in an Italian company in Brazil. I like to face new challenges by creating projects and studying new technologies that allow me to acquire knowledge and contribute to the community.
          In my spare time I like to play guitar, read about codes and technology, and play video games. And currently I'm also dedicating myself to learning English.
          I love my job, and I do my best to deliver a quality final product.
          At the end of the page, you can find my social networks so we can get to know each other better.
          </p>
        </div>

        <div className="basis-1/2 justify-self-center flex justify-center items-center">
          <img className="max-w-md rounded-md md:max-w-sm" src={imageAbout} alt="my photo" />
        </div>
      </div>
    </section>
  );
}
