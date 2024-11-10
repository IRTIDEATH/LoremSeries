import Gallery from "@/components/pages/Gallery";
import Hero from "@/components/pages/Hero";

export default function Home() {
  return (
    <div className="w-full mx-auto px-8">
      <Hero/>
      <Gallery/>
    </div>
  );
}
