import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ShopLoader = ({ onLoadingComplete }) => {
  const [count, setCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsComplete(true);
            if (onLoadingComplete) onLoadingComplete();
          }, 400);
          return 100;
        }
        return prev + 4;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 bg-[#0a0a0a] text-white flex flex-col items-center justify-between p-12 font-sans select-none pointer-events-none"
        >
          {/* Top Branding */}
          <div className="w-full flex justify-between items-center text-xs tracking-[0.3em] uppercase text-white/50">
            <span>ALTITUDE BEVERAGES</span>
            <span>LOADING SHOP</span>
          </div>

          {/* Center Minimalist Counter */}
          <div className="flex flex-col items-center">
            <motion.h1 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-7xl md:text-9xl font-black tracking-tighter"
            >
              {count}%
            </motion.h1>
            <p className="text-xs uppercase tracking-[0.4em] text-white/40 mt-4">Preparing Experience</p>
          </div>

          {/* Bottom Progress Bar */}
          <div className="w-full max-w-md h-[2px] bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-white"
              style={{ width: `${count}%` }}
              transition={{ ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ShopLoader;
