import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import imgPPM from "../assets/images/PPM DRINK.avif";
import imgRS from "../assets/images/RS DRINK.avif";
import imgLMT from "../assets/images/LMT DRINK.avif";

const ProductGrid = () => {
  const drinks = [
    { src: imgPPM, name: "PRICKLY PEAR MARGARITA", flavor: "Citrus | Crisp | Invigorating", badges: "L-Theanine | Lion's Mane | Magnesium" },
    { src: imgRS, name: "ROSEMARY SPRITZ", flavor: "Bittersweet | Refreshing", badges: "L-Theanine | Lion's Mane | Magnesium" },
    { src: imgLMT, name: "LILI'KOI MAI TAI", flavor: "Bold | Lush | Smooth", badges: "L-Theanine | Lion's Mane | Magnesium" }
  ];
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden pt-10">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative w-full h-full px-2 md:px-4">
        <div className="flex w-full h-[85vh] items-center justify-center gap-2 md:gap-4">
          {drinks.map((image, index) => (
            <motion.div
              key={index}
              className="relative cursor-pointer overflow-hidden rounded-[2.5rem] bg-zinc-900 border border-white/5"
              animate={{ width: activeIndex === index ? "75vw" : "12vw", height: "100%" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setActiveIndex(index)}
              onHoverStart={() => setActiveIndex(index)}
            >
              <AnimatePresence>
                {activeIndex !== index && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/60 z-10 hover:bg-black/30 transition-colors" />}
              </AnimatePresence>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.4, delay: 0.2 }} className="absolute bottom-12 left-12 z-20 flex flex-col items-start p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
                    <h2 className="text-6xl font-extrabold text-white uppercase tracking-tighter mb-1 leading-none">{image.name}</h2>
                    <p className="text-lg text-white/90 font-medium mb-5">{image.flavor}</p>
                    <div className="flex gap-2">
                      {image.badges.split(" | ").map((b, i) => <span key={i} className="text-xs font-bold text-white border border-white/40 rounded-full px-3 py-1 uppercase tracking-widest bg-white/5">{b}</span>)}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <img src={image.src} className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ${activeIndex === index ? 'scale-100' : 'scale-[1.2]'}`} alt={image.name} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
export default ProductGrid;
