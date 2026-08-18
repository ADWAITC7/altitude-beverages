import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-[#121212] flex items-center justify-center"
      exit={{ y: '-100%' }}
      transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.8 }}
    >
      <motion.h1
        className="text-white text-5xl md:text-7xl font-extrabold tracking-tighter uppercase"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        ALTITUDE
      </motion.h1>
    </motion.div>
  );
};

export default Preloader;
