import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// import logoKuicktech from '../assets/logo-kuicktech.png'; // Gunakan logo SVG jika ada untuk kualitas terbaik

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Deteksi scroll lebih awal
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <motion.nav
      initial={{ y: -120 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ease-in-out
                  ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg py-3' : 'bg-transparent py-5'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        <div
          className={`font-extrabold text-2xl md:text-3xl cursor-pointer transition-colors duration-300 ${scrolled ? 'text-brand-primary' : 'text-white'}`}
          onClick={() => scrollToSection('hero')}
        >
          {/* <img src={logoKuicktech} alt="KuickTech" className={`transition-all duration-300 ${scrolled ? 'h-8' : 'h-10'}`} /> */}
          KuickTech.
        </div>
        <div className="hidden md:flex space-x-2">
          {['problem', 'solution', 'features', 'market'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`capitalize px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
                          ${scrolled ? 'text-gray-700 hover:text-brand-primary hover:bg-blue-50' : 'text-blue-100 hover:text-white hover:bg-white/10'}`}
            >
              {item === 'market' ? 'Target Pasar' : item}
            </button>
          ))}
        </div>
        <button
          onClick={() => scrollToSection('cta')}
          className={`font-semibold text-sm md:text-base px-5 py-2.5 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 group relative overflow-hidden
                      ${scrolled ? 'bg-brand-primary text-white hover:bg-blue-700' : 'bg-brand-secondary text-brand-primary hover:bg-yellow-300'}`}
        >
          <span className="relative z-10">Join Waitlist</span>
          {/* Efek kilau saat hover (opsional) */}
          <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 transform scale-150 group-hover:scale-100 rounded-full"></span>
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;