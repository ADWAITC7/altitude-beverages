import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { playClickSound } from '../utils/sound';
import ShopLoader from './ShopLoader';

// Center Can Images
import canPPM from "../assets/images/PPM CAN.avif";
import canRS from "../assets/images/RS CAN.avif";
import canLMT from "../assets/images/LMT CAN.avif";

// Side Panel Lifestyle Images (Using the __SHOP folder assets)
import shopPPM from "../assets/images/PPM SHOP.avif";
import shopRS from "../assets/images/RS SHOP.avif";
import shopLMT from "../assets/images/LMT SHOP.avif";
const productData = {
  prickly: {
    id: 'prickly',
    name: 'Prickly Pear Margarita',
    image: canPPM,
    leftImage: shopPPM, // Fallbacks if you only have one per flavor
    rightImage: shopRS,
    centerGradient: 'from-[#1b4353] to-[#cf6a28]/80',
    tagline: "This classic blend of salt and lime is always right when you're in your element.",
    functional: ["L-Theanine", "Magnesium", "Lion's Mane"],
    price: "$24"
  },
  lilikoi: {
    id: 'lilikoi',
    name: "Lili'Koi Mai Tai",
    image: canLMT,
    leftImage: shopLMT,
    rightImage: shopPPM,
    centerGradient: 'from-[#1b4353] to-[#a3b14b]/80',
    tagline: "This juicy burst of sweetness is just bold enough.",
    functional: ["L-Theanine", "Magnesium", "Lion's Mane"],
    price: "$24"
  },
  rosemary: {
    id: 'rosemary',
    name: 'Rosemary Spritz',
    image: canRS,
    leftImage: shopRS,
    rightImage: shopLMT,
    centerGradient: 'from-[#1b4353] to-[#cf6a28]/80',
    tagline: "Listen to the lapping waves while you sip this low-key sophisticated spritz.",
    functional: ["L-Theanine", "Magnesium", "Lion's Mane"],
    price: "$24"
  }
};

const ShopPage = () => {
  const [activeFlavor, setActiveFlavor] = useState('prickly');
  const currentProduct = productData[activeFlavor];

  return (
    <div className="w-full min-h-screen bg-[#050505] p-4 font-sans overflow-visible">
      <ShopLoader />

      {/* PRODUCT EXPERIENCE */}
      <div className="w-full h-[calc(100vh-2rem)] flex gap-4">

        {/* LEFT PANEL: Lifestyle Image + Glass UI */}
        <div className="relative w-1/4 h-full rounded-[2rem] overflow-hidden flex flex-col justify-between p-6">
          {/* Background Image */}
          <AnimatePresence mode="wait">
            <motion.img
              key={`left-${currentProduct.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              src={currentProduct.leftImage}
              alt="Lifestyle Left"
              className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-black/30 z-0"></div>

          {/* Top Glass Card: Title & Tagline */}
          <motion.div
            className="relative z-10 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2rem] p-8 shadow-2xl"
            key={`title-${currentProduct.id}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-serif text-white leading-tight mb-4">{currentProduct.name}</h1>
            <p className="text-sm text-white/90 mb-6 leading-relaxed">
              {currentProduct.tagline}
            </p>
            <div className="flex flex-wrap gap-2">
              {currentProduct.functional.map((badge, i) => (
                <span key={i} className="text-[9px] font-bold text-white border border-white/40 rounded-full px-3 py-1.5 uppercase tracking-widest bg-white/5">
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Bottom Glass Card: Selectors */}
          <div className="relative z-10 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2rem] p-8 shadow-2xl flex flex-col gap-6">

            {/* Flavor Selector */}
            <div>
              <p className="text-white/70 text-xs font-bold tracking-[0.2em] uppercase mb-4">Flavor</p>
              <div className="flex gap-3">
                {['prickly', 'lilikoi', 'rosemary'].map((key) => (
                  <button
                    key={key}
                    onClick={() => { setActiveFlavor(key); playClickSound(); }}
                    className={`relative h-16 w-8 rounded-md transition-all ${activeFlavor === key ? 'ring-2 ring-white scale-110 opacity-100' : 'opacity-40 hover:opacity-100'}`}
                  >
                    <img src={productData[key].image} alt={key} className="h-full w-full object-cover drop-shadow-lg" />
                  </button>
                ))}
              </div>
            </div>

            {/* Pack Selector */}
            <div>
              <p className="text-white/70 text-xs font-bold tracking-[0.2em] uppercase mb-3">Pack</p>
              <div className="flex gap-2">
                <button onClick={playClickSound} className="flex-1 py-2.5 border border-white/20 rounded-full text-white/50 text-xs font-bold uppercase hover:bg-white/10 transition-colors">6-Pack</button>
                <button onClick={playClickSound} className="flex-1 py-2.5 border border-white/50 bg-white/5 rounded-full text-white text-xs font-bold uppercase">12-Pack</button>
              </div>
            </div>

            {/* Purchase Selector */}
            <div>
              <p className="text-white/70 text-xs font-bold tracking-[0.2em] uppercase mb-3">Purchase</p>
              <div className="flex gap-2 relative">
                <button onClick={playClickSound} className="flex-1 py-2.5 border border-white/50 bg-white/5 rounded-full text-white text-[10px] font-bold uppercase tracking-wider">One-Time</button>
                <button onClick={playClickSound} className="flex-1 py-2.5 border border-white/20 rounded-full text-white/50 text-[10px] font-bold uppercase tracking-wider hover:bg-white/10 relative">
                  Subscribe
                  <span className="absolute -top-2 -right-2 bg-[#ff2a2a] text-white text-[8px] px-2 py-0.5 rounded-full shadow-lg">10% OFF</span>
                </button>
              </div>
            </div>

            <button disabled className="w-full mt-2 py-4 bg-white text-black text-xs rounded-full font-extrabold uppercase tracking-widest opacity-95 shadow-lg">
              SOLD OUT — {currentProduct.price}
            </button>
          </div>
        </div>

        {/* CENTER PANEL: Gradient & Product Display */}
        <div className={`relative w-1/2 h-full rounded-[2rem] overflow-hidden flex flex-col items-center justify-center bg-gradient-to-b ${currentProduct.centerGradient} transition-colors duration-700`}>

          {/* Top Navigation Overlay Removed */}

          <AnimatePresence mode="wait">
            <motion.div
              key={`center-${currentProduct.id}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative z-10 w-full flex justify-center h-[75%]"
            >
              <img
                src={currentProduct.image}
                alt={currentProduct.name}
                className="h-full object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.5)]"
              />
            </motion.div>
          </AnimatePresence>

          {/* Pagination Dots */}
          <div className="absolute bottom-8 flex gap-3 z-20">
            {['prickly', 'lilikoi', 'rosemary'].map((key) => (
              <div key={key} className={`h-1.5 rounded-full transition-all duration-300 ${activeFlavor === key ? 'w-6 bg-white' : 'w-1.5 bg-white/40'}`} />
            ))}
          </div>
        </div>

        {/* RIGHT PANEL: Secondary Lifestyle Image */}
        <div className="relative w-1/4 h-full rounded-[2rem] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={`right-${currentProduct.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              src={currentProduct.rightImage}
              alt="Lifestyle Right"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Optional brand mark top right */}
          <div className="absolute top-8 right-8 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 z-10">
            <span className="text-white font-black text-xl leading-none">Λ</span>
          </div>
        </div>

      </div>

      {/* CINEMATIC SCROLL OUTRO */}
      <section className="relative w-full min-h-[120vh] rounded-[2rem] overflow-hidden bg-[#151619] flex items-center justify-center">

        {/* Giant brand word */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 80 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <h2 className="text-[24vw] md:text-[22vw] font-black tracking-[-0.08em] text-white/[0.06] select-none whitespace-nowrap">
            altitude
          </h2>
        </motion.div>

        {/* Soft cinematic lighting */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.045),transparent_55%)]" />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#151619]/10 via-transparent to-[#151619]" />

        {/* Outro content */}
        <motion.div
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 flex flex-col items-center justify-center text-center px-6"
        >
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 56, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="h-px bg-white/50 mb-8"
          />

          <p className="text-white/40 tracking-[0.5em] uppercase text-[10px] md:text-xs font-bold mb-7">
            THE MOMENT CONTINUES
          </p>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[0.95] tracking-tight mb-8">
            Take your time.
            <br />
            Find your moment.
          </h2>

          <p className="text-white/45 text-sm md:text-base max-w-lg leading-relaxed mb-10">
            Elevated flavors. Functional ingredients.
            <br className="hidden md:block" />
            Made for wherever the moment takes you.
          </p>

          <button
            onClick={playClickSound}
            className="group px-9 py-4 rounded-full border border-white/20 bg-white/[0.04] backdrop-blur-xl text-white text-[10px] tracking-[0.25em] uppercase font-bold hover:bg-white hover:text-black transition-all duration-500"
          >
            <span className="group-hover:tracking-[0.3em] transition-all duration-500">
              EXPLORE THE COLLECTION
            </span>
          </button>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="absolute bottom-12 flex flex-col items-center gap-3 text-white/25"
        >
          <span className="text-[9px] tracking-[0.35em] uppercase">
            Continue
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>

      </section>

    </div>
  );
};

export default ShopPage;