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
      // Jika scroll lebih dari 100px, tampilkan tombol
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Tambahkan event listener untuk scroll
    window.addEventListener("scroll", handleScroll);

    // Hapus event listener saat komponen di-unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 0 }); // Mengubah posisi untuk animasi keluar
    }
  }, [isVisible, controls]);

  return (
    <motion.button
      onClick={handleClick}
      initial={{ opacity: 0, y: 0 }} // Posisi awal tombol
      animate={controls}
      exit={{ opacity: 0, y: 0 }} // Animasi saat menghilang
      transition={{ duration: 0.3, ease: "easeInOut" }} // Durasi transisi
      className="group fixed bottom-8 right-8 p-3 border border-secondary rounded-full flex justify-center items-center bg-white/10 backdrop-blur-md hover:bg-white/15 transition">
      <ChevronUp className="group-hover:-translate-y-1 transition" />
    </motion.button>
  );
};

export default ToUp;
