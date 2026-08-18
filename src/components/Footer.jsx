import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full min-h-[75vh] bg-[#151619] text-white overflow-hidden font-sans z-20"
    >
      {/* SOFT FADE / ATMOSPHERE */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#151619] via-[#151619]/80 to-transparent" />
        <div className="absolute left-1/2 top-1/2 w-[65vw] h-[65vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(255,255,255,0.045),transparent_48%)]" />
      </motion.div>

      {/* TOP NAV */}
      <div className="relative z-10 px-6 md:px-12 lg:px-16 pt-10 md:pt-14">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap gap-3"
          >
            {['TALK(AT)ALTITUDE.BEV', 'INSTAGRAM', 'TIKTOK'].map((text, i) => (
              <a
                key={i}
                href="#contact"
                className="group px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.025] backdrop-blur-xl text-[9px] font-bold tracking-[0.22em] uppercase text-white/50 hover:text-white hover:border-white/25 hover:bg-white/[0.06] transition-all duration-500"
              >
                <span className="group-hover:tracking-[0.28em] transition-all duration-500">
                  {text}
                </span>
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex gap-3"
          >
            {['POLICIES', 'ACCOUNT'].map((text, i) => (
              <a
                key={i}
                href="#account"
                className="px-5 py-2.5 rounded-full border border-white/10 bg-transparent text-[9px] font-bold tracking-[0.22em] uppercase text-white/35 hover:text-white hover:border-white/25 transition-all duration-500"
              >
                {text}
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CENTER BRAND MOMENT */}
      <div className="relative z-10 min-h-[52vh] flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 48, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="h-px bg-white/30 mb-7"
        />

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="text-[9px] tracking-[0.5em] uppercase text-white/30 font-bold mb-6"
        >
          ALTITUDE BEVERAGES
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, scale: 0.92, y: 25 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-[17vw] md:text-[13vw] font-black tracking-[-0.08em] leading-[0.78] text-white/[0.055] uppercase select-none"
        >
          you've arrived.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 text-xs md:text-sm text-white/35 tracking-wide"
        >
          Stay awhile. The moment is yours.
        </motion.p>
      </div>

      {/* BOTTOM */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="relative z-10 mx-6 md:mx-12 lg:mx-16 pb-8"
      >
        <div className="h-px bg-white/10 mb-6" />
        <div className="flex flex-col md:flex-row justify-between gap-4 text-[8px] md:text-[9px] font-bold tracking-[0.28em] text-white/25 uppercase">
          <span>© 2026 ALTITUDE BEVERAGES</span>
          <span>STANDARD SITE · BUILT BY US</span>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;