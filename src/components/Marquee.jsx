import React from 'react';

const Marquee = () => {
  const marqueeText = "NON-ALCOHOLIC REFRESHER • FUNCTIONAL BEVERAGES • ZERO PROOF • ";
  
  return (
    <div className="bg-zinc-900 text-white overflow-hidden py-4 whitespace-nowrap relative flex">
      <style>
        {`
          @keyframes scroll-marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-infinite {
            animation: scroll-marquee 20s linear infinite;
            display: inline-block;
          }
        `}
      </style>
      <div className="animate-marquee-infinite font-sans font-bold uppercase tracking-widest text-sm">
        {/* We repeat the text to ensure a seamless loop. The animation transforms it by 50% which corresponds to exactly one block of the repeated content. */}
        <span>{marqueeText.repeat(10)}</span>
      </div>
    </div>
  );
};

export default Marquee;
