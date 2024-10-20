import { TextEffect } from "@/components/ui/Text-effect";

export default function Home() {
  return (
    <div className="w-full flex items-center justify-center">
      <TextEffect per="word" as="h1" preset="blur" className="text-4xl">
        Lorem Your Ipsum
      </TextEffect>
    </div>
  );
}
