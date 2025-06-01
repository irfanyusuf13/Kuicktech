import React from 'react';
import { motion } from 'framer-motion';
import { FaSearchDollar, FaBoxOpen, FaBan, FaExclamationTriangle } from 'react-icons/fa'; // Ikon yang lebih relevan

const problemsData = [
  {
    icon: <FaSearchDollar className="text-5xl text-brand-accent" />,
    title: "Sewa Cepat & Terpercaya? Mimpi!",
    text: "Butuh perangkat elektronik mendadak tapi sulit nemu layanan sewa yang fleksibel, cepat, dan bisa dipegang omongannya",
  },
  {
    icon: <FaBoxOpen className="text-5xl text-brand-accent" />,
    title: "Gadget Jadi Debu di Lemari?",
    text: "Punya perangkat canggih nganggur? Sayang banget! Padahal bisa jadi cuan tambahan lho",
  },
  {
    icon: <FaBan className="text-5xl text-brand-accent" />,
    title: "Beli Baru = Dompet Kering!",
    text: "Membeli perangkat baru itu boros kalau pakainya cuma sesekali. Sewa konvensional? Duh, ribet, mahal, gak transparan!",
  },
  {
    icon: <FaExclamationTriangle className="text-5xl text-brand-accent" />,
    title: "Wadah Aman & Teratur Mana?",
    text: "Belum ada platform yang benar-benar aman dan terorganisir buat sewa-menyewa perangkat teknologi",
  }
];

const ProblemSection = () => {
  const cardVariants = {
    offscreen: { y: 60, opacity: 0 },
    onscreen: (i) => ({
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 50, damping: 15, delay: i * 0.1 }
    })
  };

  return (
    <section id="problem" className="py-16 md:py-24 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity:0, y: -40 }}
          whileInView={{ opacity:1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-brand-dark mb-12 md:mb-20"
        >
          Kenapa <span className="text-brand-accent">KuickTech</span> Penting Buat Kamu?
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {problemsData.map((problem, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white p-6 md:p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-brand-accent"
            >
              <div className="flex items-start mb-4">
                <div className="mr-5 flex-shrink-0">{problem.icon}</div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-brand-dark mb-1">{problem.title}</h3>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">{problem.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;