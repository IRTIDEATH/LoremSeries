import CarouselContainer from "@/components/Carousel";
import Hero from "@/components/pages/Hero";

export default function Home() {
  return (
    <div className="w-full mx-auto px-20">
      <Hero/>
      <CarouselContainer/>
    </div>
  );
}
