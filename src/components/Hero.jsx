import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowDownCircle } from 'react-icons/fi';
// import HeroDeviceMockup from '../assets/hero-devices.png'; // Contoh gambar mockup multi-device

const Hero = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
  };

  const itemVariants = (delay = 0) => ({
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut", delay } }
  });

  // Partikel animasi untuk background (opsional, bisa jadi berat)
  const particles = Array.from({ length: 15 });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-brand-primary via-indigo-600 to-purple-700 text-white pt-24 pb-12" // Ruang untuk navbar dan tombol scroll down
    >
      {/* Animated background particles (optional) */}
      <div className="absolute inset-0 z-0 opacity-50 overflow-hidden">
        {particles.map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            initial={{
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
            }}
            transition={{
              duration: Math.random() * 10 + 10, // 10-20 detik
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut"
            }}
            style={{
              width: Math.random() * 100 + 50, // 50-150px
              height: Math.random() * 100 + 50,
              filter: `blur(${Math.random() * 5 + 2}px)` // blur 2-7px
            }}
          />
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 sm:px-6 text-center z-10"
      >
        <motion.h1
          variants={itemVariants()}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tighter"
        >
          Sewa Teknologi <span className="italic">Next-Level</span>? <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-secondary via-yellow-300 to-orange-300">
            KuickTech Jawabannya!
          </span>
        </motion.h1>
        <motion.p
          variants={itemVariants(0.2)}
          className="text-lg sm:text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-blue-100"
        >
          Platform penyewaan laptop, smartphone, dan aksesoris dengan proses <strong className="text-white">super cepat</strong>, <strong className="text-white">fleksibel</strong>, dan pastinya <strong className="text-white">aman terpercaya</strong>.
        </motion.p>
        <motion.div variants={itemVariants(0.4)}>
          <button
            onClick={() => scrollToSection('cta')}
            className="bg-brand-secondary text-brand-primary font-bold px-8 py-4 md:px-10 md:py-4 rounded-full text-lg md:text-xl
                       shadow-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-opacity-50"
          >
            Daftar Sekarang, Jadi yang Pertama!
          </button>
        </motion.div>
      </motion.div>

      {/* Placeholder untuk Ilustrasi/Mockup yang Gacor */}
      {/* <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        className="mt-12 md:mt-16 z-10 w-full max-w-3xl px-4"
      >
        <img src={HeroDeviceMockup} alt="Sewa Laptop dan HP di KuickTech" className="w-full h-auto" />
      </motion.div> */}

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        onClick={() => scrollToSection('problem')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white hover:text-brand-secondary transition-colors animate-bounce"
        aria-label="Scroll ke bawah"
      >
        <FiArrowDownCircle size={40} />
      </motion.button>
    </section>
  );
};

export default Hero;