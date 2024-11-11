import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex justify-center items-center"
    >
      <div className="text-center space-y-2">
          <h1 className="text-4xl">Lorem Your Ipsum</h1>
          <div className="flex items-center justify-center">
            <h1 className="bg-[#636363] text-3xl px-5 py-3">
              Dolor Amet
            </h1>
          </div>
        <p className="max-w-lg pt-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
          illo, rerum totam modi minima aliquam.
        </p>
        <div className="flex items-center space-x-2 pt-3 justify-center">
          <button className="px-4 py-2 rounded-md bg-yellow text-black text-sm transition duration-200">
            Get Started
          </button>
          <button className="px-4 py-2 rounded-md bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_gray] transition duration-200">
            Lorem Ipsum Docs
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
