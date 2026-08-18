import React from 'react';
import { Link } from 'react-router-dom';
import { playClickSound } from '../utils/sound';

const Header = () => {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-[#1c1c1e]/80 backdrop-blur-md border border-white/10 rounded-full px-8 py-3 flex items-center gap-8 shadow-2xl">
      <Link to="/" onClick={playClickSound} className="text-white font-black tracking-tighter uppercase text-sm">ALTITUDE</Link>
      <Link to="/shop" onClick={playClickSound} className="text-white/70 hover:text-white text-xs font-bold tracking-widest uppercase transition-colors">SHOP</Link>
      <Link to="/about" onClick={playClickSound} className="text-white/70 hover:text-white text-xs font-bold tracking-widest uppercase transition-colors">ABOUT</Link>
    </header>
  );
};

export default Header;
