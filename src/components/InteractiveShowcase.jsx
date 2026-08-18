import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Strands from "./Strands/Strands";

// Image imports
import imgPPM from "../assets/images/PPM DRINK.avif";
import imgRS from "../assets/images/RS DRINK.avif";
import imgLMT from "../assets/images/LMT DRINK.avif";

const drinks = [
  {
    id: 0,
    src: imgPPM,
    name: "PRICKLY PEAR MARGARITA",
    flavor: "Citrus | Crisp | Invigorating",
    badges: ["L-Theanine", "Lion's Mane", "Magnesium"],
    colors: ['#FF4242', '#06B6D4', '#EAB308'] // Custom strand colors per drink
  },
  {
    id: 1,
    src: imgRS,
    name: "ROSEMARY SPRITZ",
    flavor: "Bittersweet | Refreshing",
    badges: ["L-Theanine", "Lion's Mane", "Magnesium"],
    colors: ['#F97316', '#7C3AED', '#FF4242']
  },
  {
    id: 2,
    src: imgLMT,
    name: "LILI'KOI MAI TAI",
    flavor: "Bold | Lush | Smooth",
    badges: ["L-Theanine", "Lion's Mane", "Magnesium"],
    colors: ['#EAB308', '#7C3AED', '#06B6D4']
  }
];

const InteractiveShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeDrink = drinks[activeIndex];

  return (
    <section className="relative w-full h-screen bg-[#0a0a0a] overflow-hidden flex items-center justify-center">
      {/* BACKGROUND: WebGL Strands */}
      <div className="absolute inset-0 z-0 opacity-80">
        <Strands
          colors={activeDrink.colors}
          count={3}
          speed={0.5}
          amplitude={1.2}
          waviness={1}
          thickness={0.8}
          glow={3.0}
          taper={3}
          spread={1.5}
          intensity={0.7}
          saturation={1.5}
          opacity={1}
          scale={1.5}
        />
      </div>

      {/* FOREGROUND: Glass UI Layout */}
      <div className="relative z-10 w-full max-w-7xl px-8 flex flex-col md:flex-row h-[80vh] items-center gap-12 pt-16">

        {/* LEFT COLUMN: Interactive Menu */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 pl-4">
          <h3 className="text-white/50 text-sm tracking-[0.3em] uppercase mb-4 font-bold">Select Your Vibe</h3>
          {drinks.map((drink, index) => (
            <button
              key={drink.id}
              onClick={() => setActiveIndex(index)}
              className={`text-left text-3xl md:text-5xl font-extrabold uppercase tracking-tighter transition-all duration-500 ${activeIndex === index
                ? "text-white scale-105 origin-left"
                : "text-white/30 hover:text-white/60"
                }`}
            >
              {drink.name}
            </button>
          ))}
        </div>

        {/* RIGHT COLUMN: Dynamic Showcase */}
        <div className="w-full md:w-1/2 h-full flex items-center justify-center relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex flex-col items-center text-center w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 shadow-2xl"
            >
              {/* Product Image */}
              <div className="relative w-48 h-96 mb-6">
                <img
                  src={activeDrink.src}
                  alt={activeDrink.name}
                  className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl"
                />
              </div>

              {/* Details */}
              <p className="text-xl text-white/90 font-medium mb-5">
                {activeDrink.flavor}
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {activeDrink.badges.map((badge, i) => (
                  <span
                    key={i}
                    className="text-[10px] md:text-xs font-bold text-white border border-white/40 rounded-full px-3 py-1 uppercase tracking-widest bg-black/20"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default InteractiveShowcase;
