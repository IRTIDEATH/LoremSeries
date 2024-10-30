"use client";
import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const ToUp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  const handleClick = () => {
    if (typeof window !== "undefined" && window.scrollTo) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start({ opacity: 1 });
    } else {
      controls.start({ opacity: 0 });
    }
  }, [isVisible, controls]);

  return (
    <motion.button
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={controls}
      exit={{ opacity: 0 }} 
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="group fixed bottom-8 right-8 p-3 border border-secondary rounded-full flex justify-center items-center bg-white/10 backdrop-blur-md hover:bg-white/15 transition">
      <ChevronUp className="group-hover:-translate-y-1 transition" />
    </motion.button>
  );
};

export default ToUp;
