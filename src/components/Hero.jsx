import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroVideo from '../assets/videos/hero-bg.mp4';

const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center text-center px-4 bg-[#0a0a0a] overflow-hidden">
      {/* Looping Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover opacity-50 z-0 pointer-events-none"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mt-16">
        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-tight mb-6">
          Elevate Your<br />Everyday.
        </h1>
        <p className="text-lg md:text-2xl text-white/90 font-medium mb-10 max-w-2xl mx-auto">
          Discover our premium selection of refreshing beverages crafted for altitude.
        </p>
        <button 
          onClick={() => navigate('/shop')}
          className="text-white font-bold tracking-widest uppercase hover:text-gray-300 transition-colors bg-transparent border-none cursor-pointer"
        >
          Shop the Collection
        </button>
      </div>
    </section>
  );
};

export default Hero;
