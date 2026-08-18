import React from 'react';
import { motion } from 'framer-motion';
import MaskedHeading from './MaskedHeading';
import BrandHoverGallery from './BrandHoverGallery';

// Importing the Brand Story images (Ensure these paths and extensions match your folder structure exactly)
import brandImg1 from '../assets/images/BRAND ST1.avif';
import brandImg2 from '../assets/images/BRAND ST2.avif';
import brandImg3 from '../assets/images/BRAND ST3.avif';
import brandImg4 from '../assets/images/BRAND ST4.jpg';
import brandImg5 from '../assets/images/BRAND ST5.jpg';
import brandImg6 from '../assets/images/BRAND ST6.avif';
import brandImg7 from '../assets/images/BRAND ST7.avif';
import brandImg8 from '../assets/images/BRAND ST8.avif';
import brandImg9 from '../assets/images/BRAND ST9.jpg';

const images = [brandImg1, brandImg2, brandImg3, brandImg4, brandImg5, brandImg6, brandImg7, brandImg8, brandImg9];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#151619] text-white font-sans overflow-x-hidden pt-32 flex flex-col justify-between">

      {/* Main Content Area */}
      <div className="relative flex-grow flex flex-col items-center w-full mb-0">

        {/* MASKED BRAND STATEMENT */}
        <section className="w-full px-5 md:px-10 mb-20 md:mb-28">
          <div className="w-full max-w-[1200px] mx-auto">
            <MaskedHeading
              text="Non-alcoholic refreshers that rise to any occasion."
              src={brandImg4}
              reveal="rise"
              trigger="view"
              fillScale={1.35}
              parallax={30}
              drift={12}
              brightness={0.9}
              saturation={1.12}
              duration={1.15}
              stagger={0.08}
              align="center"
              weight={800}
              tracking={-0.045}
              lineHeight={0.92}
              textScale={0.095}
              className="text-white"
            />
          </div>
        </section>

        {/* INFINITE DIGITAL GALLERY */}
        <section className="relative w-full mb-24 overflow-hidden">

          {/* Soft edge fades make the gallery melt into the page */}
          <div className="absolute inset-y-0 left-0 w-24 md:w-40 z-20 pointer-events-none bg-gradient-to-r from-[#151619] to-transparent" />
          <div className="absolute inset-y-0 right-0 w-24 md:w-40 z-20 pointer-events-none bg-gradient-to-l from-[#151619] to-transparent" />

          <div className="flex flex-col gap-5 md:gap-7">

            {/* ROW 1 — slow left */}
            <div className="relative overflow-hidden">
              <motion.div
                className="flex w-max gap-5 md:gap-7"
                animate={{ x: ['0%', '-50%'] }}
                transition={{ repeat: Infinity, repeatType: 'loop', ease: 'linear', duration: 42 }}
                whileHover={{ animationPlayState: 'paused' }}
              >
                {[...images, ...images].map((imgSrc, index) => (
                  <motion.div
                    key={`row1-${index}`}
                    className="group relative w-[48vw] md:w-[22vw] lg:w-[18vw] aspect-[4/5] shrink-0 overflow-hidden rounded-[1.5rem] md:rounded-[2rem] bg-white/5"
                    whileHover={{ scale: 0.985 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src={imgSrc}
                      alt={`Brand Story ${index + 1}`}
                      className="w-full h-full object-cover grayscale-[15%] scale-[1.01] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* ROW 2 — slower right, offset visual rhythm */}
            <div className="relative overflow-hidden">
              <motion.div
                className="flex w-max gap-5 md:gap-7"
                initial={{ x: '-50%' }}
                animate={{ x: ['-50%', '0%'] }}
                transition={{ repeat: Infinity, repeatType: 'loop', ease: 'linear', duration: 50 }}
              >
                {[...images.slice().reverse(), ...images.slice().reverse()].map((imgSrc, index) => (
                  <motion.div
                    key={`row2-${index}`}
                    className="group relative w-[38vw] md:w-[18vw] lg:w-[15vw] aspect-[1/1] shrink-0 overflow-hidden rounded-[1.5rem] md:rounded-[2rem] bg-white/5"
                    whileHover={{ scale: 0.985 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src={imgSrc}
                      alt={`Brand Story detail ${index + 1}`}
                      className="w-full h-full object-cover grayscale-[25%] scale-[1.01] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors duration-700" />
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* ROW 3 — slow left, larger editorial frames */}
            <div className="relative overflow-hidden">
              <motion.div
                className="flex w-max gap-5 md:gap-7"
                animate={{ x: ['0%', '-50%'] }}
                transition={{ repeat: Infinity, repeatType: 'loop', ease: 'linear', duration: 58 }}
              >
                {[...images.slice(3), ...images.slice(0, 3), ...images.slice(3), ...images.slice(0, 3)].map((imgSrc, index) => (
                  <motion.div
                    key={`row3-${index}`}
                    className="group relative w-[55vw] md:w-[25vw] lg:w-[21vw] aspect-[16/10] shrink-0 overflow-hidden rounded-[1.5rem] md:rounded-[2rem] bg-white/5"
                    whileHover={{ scale: 0.985 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src={imgSrc}
                      alt={`Brand Story landscape ${index + 1}`}
                      className="w-full h-full object-cover grayscale-[20%] scale-[1.01] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
                  </motion.div>
                ))}
              </motion.div>
            </div>

          </div>

          {/* Fade down into the brand story copy */}
          <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none bg-gradient-to-t from-[#151619] to-transparent z-10" />

        </section>

        {/* Bottom Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="px-6 text-center max-w-4xl mx-auto"
        >
          <p className="text-2xl md:text-4xl font-serif text-white/80 leading-relaxed">
            Altitude is for the moments you want to drink in. For going out, for kicking back, for turning up, for marking the occasion. For savoring the vibe, but never chasing it. With unmistakably distinctive flavors and functional ingredients that promote mood balance, clarity, and relaxation, every sip has been crafted to savor.<br /><br />
            Enjoy the view—wherever you are.
          </p>
        </motion.div>

        {/* Brand Hover Gallery */}
        <BrandHoverGallery />

      </div>

    </div>
  );
};

export default AboutPage;