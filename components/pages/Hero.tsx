import { TextEffect } from "../ui/Text-effect";

const Hero = () => {
  return (
    <section className="min-h-screen flex justify-center items-center">
      <div className="items-center text-center space-y-2">
        <TextEffect per="word" as="h1" preset="blur" className="text-4xl">
          Lorem Your Ipsum
        </TextEffect>
        <TextEffect per="word" as="h1" preset="blur" className="text-3xl">
          Dolor Amet
        </TextEffect>
        <p className="max-w-lg pt-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
          illo, rerum totam modi minima aliquam.
        </p>
        <div className="flex items-center space-x-2 pt-3 justify-center">
          <button className="px-4 py-2 rounded-md border border-black bg-primary text-black text-sm     hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
            Get Started
          </button>
          <button className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm     hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
            Lorem Ipsum Docs
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
