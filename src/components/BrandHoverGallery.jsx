import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Importing BRAND ST images
import brand1 from '../assets/images/BRAND ST1.avif';
import brand2 from '../assets/images/BRAND ST2.avif';
import brand3 from '../assets/images/BRAND ST3.avif';
import brand4 from '../assets/images/BRAND ST4.jpg';
import brand5 from '../assets/images/BRAND ST5.jpg';
import brand6 from '../assets/images/BRAND ST6.avif';
import brand7 from '../assets/images/BRAND ST7.avif';
import brand8 from '../assets/images/BRAND ST8.avif';
import brand9 from '../assets/images/BRAND ST9.jpg';

const galleryItems = [
  { title: "The Element", subtitle: "Crafted for Altitude", image: brand1 },
  { title: "Elevation", subtitle: "Pure Refreshment", image: brand2 },
  { title: "The Vibe", subtitle: "Savor Every Sip", image: brand3 },
  { title: "Balance", subtitle: "Functional Ingredients", image: brand4 },
  { title: "Atmosphere", subtitle: "Meet the Moment", image: brand5 },
  { title: "Clarity", subtitle: "Natural Flow", image: brand6 },
  { title: "Ascent", subtitle: "Unmistakably Distinctive", image: brand7 },
  { title: "Horizons", subtitle: "Enjoy the View", image: brand8 },
  { title: "The Summit", subtitle: "Always Right", image: brand9 },
];

const BrandHoverGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const activeImage = hoveredIndex !== null ? galleryItems[hoveredIndex].image : null;

  return (
    <div className="relative w-full max-w-5xl mx-auto px-6 py-16 my-12">
      <div className="flex flex-col border-t border-white/20">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="group relative flex justify-between items-center py-8 border-b border-white/20 cursor-pointer transition-colors duration-300"
          >
            <span className="text-2xl md:text-5xl font-serif text-white/60 group-hover:text-white group-hover:translate-x-4 transition-all duration-300">
              {item.title}
            </span>
            <span className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-white/40 group-hover:text-white/80 transition-colors">
              {item.subtitle}
            </span>
          </div>
        ))}
      </div>

      {/* Floating Hover Image Preview */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 w-[280px] md:w-[360px] aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.8)]"
          >
            <img src={activeImage} alt="Hover Preview" className="w-full h-full object-cover" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BrandHoverGallery;
