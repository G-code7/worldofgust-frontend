"use client";
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-primary-bg/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-black tracking-tighter">
          G<span className="text-accent-blue">.</span>
        </div>
        
        <div className="hidden md:flex gap-8 text-sm font-mono tracking-widest uppercase">
          <a href="#work" className="hover:text-accent-blue transition-colors">Work</a>
          <a href="#expertise" className="hover:text-accent-blue transition-colors">Expertise</a>
          <a href="#contact" className="hover:text-accent-blue transition-colors">Contact</a>
        </div>

        <button className="bg-white text-black px-6 py-2 rounded-full text-xs font-bold hover:bg-accent-blue hover:text-white transition-all">
          G-CODE7
        </button>
      </div>
    </nav>
  );
}