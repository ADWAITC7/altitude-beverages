import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { playClickSound } from '../utils/sound';

import canPPM from "../assets/images/PPM CAN.avif";
import canRS from "../assets/images/RS CAN.avif";
import canLMT from "../assets/images/LMT CAN.avif"; 

const productData = {
  prickly: {
    id: 'prickly',
    name: 'Prickly Pear Margarita',
    navName: 'Prickly Pear Margarita',
    image: canPPM,
    tagline: "This classic blend of salt and lime is always right when you're in your element.",
    flavor: "Citrus | Crisp | Invigorating",
    description: "Anticipation and mariachi horns fill the air. You know how to dance without overdoing it. This crisp, citrus and invigorating take on a classic will always make the right impression.",
    functional: [
      { name: "L-Theanine", text: "Support for relaxation and balanced energy; promotes alertness without anxiety." },
      { name: "Magnesium", text: "Supports nervous-system regulation and a calm mood." },
      { name: "Lion's Mane", text: "Supports mental clarity, focus and flow." }
    ],
    ingredients: "Carbonated Water, Organic Cane Sugar, Prickly Pear Puree, Organic Lime Juice Concentrate, Vegetable Glycerin, Natural Flavors, Citric Acid, Monk Fruit Juice Concentrate, Magnesium Glycinate, L-Theanine, Lion's Mane Mushroom Powder, Sugar Cane Reb M.",
    nutrition: [
      { label: "Calories", value: "40" },
      { label: "Total Fat", value: "0g" },
      { label: "Saturated Fat", value: "0g" },
      { label: "Trans Fat", value: "0g" },
      { label: "Cholesterol", value: "0mg" },
      { label: "Sodium", value: "0mg" },
      { label: "Total Carbohydrate", value: "8g" },
      { label: "Dietary Fiber", value: "0g" },
      { label: "Total Sugars", value: "8g" },
      { label: "Added Sugars", value: "8g" },
      { label: "Protein", value: "0g" },
      { label: "Magnesium", value: "50mg" },
    ]
  },
  lilikoi: {
    id: 'lilikoi',
    name: "Lili'Koi Mai Tai",
    navName: "Lili'Koi Mai Tai",
    image: canLMT,
    tagline: "This juicy burst of sweetness is just bold enough.",
    flavor: "Bold | Lush | Smooth",
    description: "You’ve left the resort behind. After dusk, your sunburn is barely even visible. This bold, lush, and smooth refresher will last you all the way till last call—or watching sunrise back on the beach.",
    functional: [
      { name: "L-Theanine", text: "Support for relaxation and balanced energy." },
      { name: "Magnesium", text: "Supports nervous-system regulation and calm mood." },
      { name: "Lion's Mane", text: "Supports mental clarity, focus and flow." }
    ],
    ingredients: "Carbonated Water, Organic Cane Sugar, Organic Passion Fruit Juice, Vegetable Glycerin, Natural Flavors, Citric Acid, Turmeric (for color), Monk Fruit Juice Concentrate, Fruit and Vegetable Juices (color), Magnesium Glycinate, L-Theanine, Lion's Mane Mushroom Powder, Sugar Cane Reb M.",
    nutrition: [
      { label: "Calories", value: "40" },
      { label: "Total Fat", value: "0g" },
      { label: "Saturated Fat", value: "0g" },
      { label: "Trans Fat", value: "0g" },
      { label: "Cholesterol", value: "0mg" },
      { label: "Sodium", value: "0mg" },
      { label: "Total Carbohydrate", value: "8g" },
      { label: "Dietary Fiber", value: "0g" },
      { label: "Total Sugars", value: "8g" },
      { label: "Added Sugars", value: "8g" },
      { label: "Protein", value: "0g" },
      { label: "Magnesium", value: "50mg" },
    ]
  },
  rosemary: {
    id: 'rosemary',
    name: 'Rosemary Spritz',
    navName: 'Rosemary Spritz',
    image: canRS,
    tagline: "Listen to the lapping waves while you sip this low-key sophisticated spritz.",
    flavor: "Herbal | Bittersweet | Refreshing",
    description: "Crashing waves outside your coastal villa. Your hair tousled into photogenic perfection by the breeze. Enjoy a moment to exhale with this herbal, bittersweet, refreshing spritz.",
    functional: [
      { name: "L-Theanine", text: "Relaxation + balanced energy." },
      { name: "Magnesium", text: "Nervous-system support + calm mood." },
      { name: "Lion's Mane", text: "Mental clarity, focus + flow." }
    ],
    ingredients: "Carbonated Water, Organic Cane Sugar, Vegetable Glycerin, Natural Flavors, Organic Grapefruit Juice Concentrate, Citric Acid, L-Malic Acid, Fruit and Vegetable Juices (color), Turmeric (for color), Monk Fruit Juice Concentrate, Rosemary Oil, Magnesium Glycinate, L-Theanine, Lion's Mane Mushroom Powder, Sugar Cane Reb M.",
    nutrition: [
      { label: "Calories", value: "40" },
      { label: "Total Fat", value: "0g" },
      { label: "Saturated Fat", value: "0g" },
      { label: "Trans Fat", value: "0g" },
      { label: "Cholesterol", value: "0mg" },
      { label: "Sodium", value: "0mg" },
      { label: "Total Carbohydrate", value: "8g" },
      { label: "Dietary Fiber", value: "0g" },
      { label: "Total Sugars", value: "8g" },
      { label: "Added Sugars", value: "8g" },
      { label: "Protein", value: "0g" },
      { label: "Magnesium", value: "50mg" },
    ]
  }
};

const ShopSection = () => {
  const [activeFlavor, setActiveFlavor] = useState('lilikoi');
  const [activeTab, setActiveTab] = useState('DESCRIPTION');
  const currentProduct = productData[activeFlavor];
  const navigate = useNavigate();

  return (
    <section className="relative w-full bg-transparent font-sans">
      
      {/* Spacer for the 2-second empty scroll transition */}
      <div className="h-[60vh] w-full pointer-events-none"></div>

      {/* Smooth Pop-out Animation Container */}
      <motion.div 
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        className="relative z-10 w-full flex flex-col items-center px-4 md:px-12 pb-24"
      >
        
        {/* The Glass Nav Bar */}
        <nav className="flex flex-wrap justify-center gap-4 md:gap-10 mb-12 text-base md:text-xl text-white/60 font-medium bg-[#121212]/90 backdrop-blur-2xl border border-white/10 rounded-full px-8 py-4 shadow-xl">
          {['prickly', 'lilikoi', 'rosemary'].map((key) => (
            <button 
              key={key}
              onClick={() => { setActiveFlavor(key); playClickSound(); }}
              className={`transition-all duration-300 ${activeFlavor === key ? 'text-white font-bold drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]' : 'hover:text-white/80'}`}
            >
              {productData[key].navName}
            </button>
          ))}
        </nav>

        {/* Content Split */}
        <div className="w-full max-w-[1200px] flex flex-col lg:flex-row gap-8 lg:gap-16 relative">
          
          {/* LEFT: Uncropped Can Image Display */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentProduct.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={currentProduct.image} 
                  alt={currentProduct.name} 
                  className="w-full max-w-[18rem] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT: Transparent Details Card */}
          <div className="w-full lg:w-1/2 flex flex-col pt-4 lg:pt-8 text-white">
            
            {/* Info Tabs */}
            <div className="flex gap-4 mb-8 border-b border-white/20 pb-3 w-max">
              {['DESCRIPTION', 'INGREDIENTS', 'NUTRITION'].map((tab) => (
                <button 
                  key={tab}
                  onClick={() => { setActiveTab(tab); playClickSound(); }}
                  className={`px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all ${
                    activeTab === tab ? 'border border-white text-white' : 'border border-transparent text-white/50 hover:text-white/80'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Dynamic Content based on Tab */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentProduct.id}-${activeTab}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="w-full min-h-[300px]"
              >
                {/* DESCRIPTION TAB */}
                {activeTab === 'DESCRIPTION' && (
                  <>
                    <h3 className="text-2xl md:text-4xl font-serif leading-snug mb-6 max-w-xl text-white/90">
                      {currentProduct.description}
                    </h3>
                    <p className="text-base text-white/70 italic mb-8 max-w-xl border-l-2 border-white/20 pl-4">
                      "{currentProduct.tagline}"
                    </p>
                    <div className="flex flex-col gap-4 max-w-xl">
                      {currentProduct.functional.map((item, index) => (
                        <div key={index} className="flex flex-col sm:flex-row gap-2 sm:gap-6 border-t border-white/10 pt-3">
                          <span className="sm:w-1/3 font-serif text-lg text-white/80">{item.name}</span>
                          <p className="sm:w-2/3 text-xs text-white/60 leading-relaxed">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* INGREDIENTS TAB */}
                {activeTab === 'INGREDIENTS' && (
                  <div className="max-w-xl">
                    <h4 className="text-lg font-bold uppercase tracking-widest text-white/80 mb-3">Ingredients</h4>
                    <p className="text-base text-white/70 leading-relaxed font-sans mb-6">
                      {currentProduct.ingredients}
                    </p>
                    <div className="bg-white/5 p-5 rounded-xl border border-white/10 backdrop-blur-sm">
                      <p className="text-xs text-white/50 uppercase tracking-widest mb-1 font-bold">Flavor Profile</p>
                      <p className="text-lg text-white/90 font-serif">{currentProduct.flavor}</p>
                    </div>
                  </div>
                )}

                {/* NUTRITION TAB */}
                {activeTab === 'NUTRITION' && (
                  <div className="max-w-sm bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                    <h4 className="text-xl font-bold border-b-2 border-white/20 pb-2 mb-3">Nutrition Facts</h4>
                    <p className="text-xs text-white/60 mb-3">Serving Size: 1 can (12 oz)</p>
                    <div className="flex flex-col">
                      {currentProduct.nutrition.map((item, index) => (
                        <div key={index} className={`flex justify-between py-1.5 ${index === 0 ? 'border-b-[4px] border-white/20 font-black text-lg mb-1' : 'border-b border-white/10 text-xs'}`}>
                          <span className={item.label.includes('Total') || item.label.includes('Protein') ? 'font-bold text-white/90' : 'text-white/70'}>
                            {item.label}
                          </span>
                          <span className="font-bold text-white/90">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Integrated Shop Now Button */}
            <div className="mt-8 pt-6 border-t border-white/10 flex justify-start">
              <button 
                onClick={() => { playClickSound(); navigate('/shop'); }}
                className="px-10 py-3 bg-white text-black text-xs font-extrabold uppercase tracking-widest rounded-full hover:bg-gray-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.15)] cursor-pointer"
              >
                SHOP NOW
              </button>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ShopSection;
