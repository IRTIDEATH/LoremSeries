"use client";

import dynamic from "next/dynamic";

const Animatecursor = () => {
  const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
    ssr: false,
  });

  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={32}
      innerScale={1}
      outerScale={1.7}
      outerAlpha={0}
      outerStyle={{
        border: "3px solid #F0ED75",
      }}
      innerStyle={{
        backgroundColor: "#fff",
      }}
    />
  );
};

export default Animatecursor;
