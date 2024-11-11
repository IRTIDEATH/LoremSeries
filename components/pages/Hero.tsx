
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { Cover } from "../ui/Cover";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex justify-center items-center"
    >
      <div className="text-center space-y-4">
          <h1 className="text-4xl lg:text-5xl">Lorem Your Ipsum</h1>
          <div className="relative mt-2 flex items-center gap-2 justify-center">
            <Cover>
              <p className="text-3xl relative inline tracking-tight opacity-90 lg:text-4xl">
                Dolor Amet
              </p>
            </Cover>
          </div>
        <p className="max-w-lg pt-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
          illo, rerum totam modi minima aliquam.
        </p>
        <div className="flex items-center pt-3 justify-center space-x-3">
          <Button variant="outline" className="text-white hover:text-yellow hover:border-yellow transition duration-200">Get Started</Button>
          <Button variant="shadowhover" className="">Lorem Docs</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
