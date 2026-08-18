import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const BrandText = () => {
  const { scrollYProgress } = useScroll();
  
  // Slight scale up as you scroll down
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1.05]);
  // Stays visible for the shop section, then fades to 0 before the About Us/Footer
  const opacity = useTransform(scrollYProgress, [0, 0.6, 0.8], [0.06, 0.06, 0]);

  return (
    <div className="fixed inset-0 w-full h-screen flex justify-center items-center pointer-events-none z-[0] overflow-hidden">
      <motion.h2 
        style={{ scale, opacity }}
        className="text-[20vw] font-black text-white tracking-tighter select-none uppercase blur-[2px]"
      >
        altitude
      </motion.h2>
    </div>
  );
};

export default BrandText;
