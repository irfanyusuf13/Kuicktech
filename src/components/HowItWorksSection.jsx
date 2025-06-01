import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaComments, FaHandshake, FaListAlt, FaCheckCircle, FaDollarSign, FaUserShield, FaPlusCircle } from 'react-icons/fa'; // Ikon yang diperbarui

const stepsData = {
  penyewa: [
    { 
      id: "p1", 
      icon: <FaSearch size={28} className="text-blue-500" />, 
      title: "Cari & Temukan", 
      description: "Jelajahi ribuan perangkat dari laptop hingga drone. Filter berdasarkan lokasi, harga, dan spek. Temukan yang paling pas!" 
    },
    { 
      id: "p2", 
      icon: <FaComments size={28} className="text-blue-500" />, 
      title: "Chat & Negosiasi", 
      description: "Hubungi pemilik via chat aman. Tanyakan detail, nego harga, atur jadwal & lokasi serah terima yang nyaman." 
    },
    { 
      id: "p3", 
      icon: <FaHandshake size={28} className="text-blue-500" />, 
      title: "Sewa & Nikmati", 
      description: "Bayar aman via platform. Ambil perangkatmu, gunakan sesuai kebutuhan, dan kembalikan tepat waktu. Simpel!" 
    },
  ],
  pemilik: [
    { 
      id: "o1", 
      icon: <FaUserShield size={28} className="text-green-500" />, 
      title: "Daftar & Verifikasi Akun", 
      description: "Buat akunmu dengan mudah. Lengkapi verifikasi untuk membangun kepercayaan. Hanya butuh beberapa menit!" 
    },
    { 
      id: "o2", 
      icon: <FaPlusCircle size={28} className="text-green-500" />, 
      title: "Listing Perangkat Kerenmu", 
      description: "Unggah foto perangkat, tulis deskripsi menarik, tentukan harga sewa, dan atur ketersediaan. Gratis!" 
    },
    { 
      id: "o3", 
      icon: <FaDollarSign size={28} className="text-green-500" />, 
      title: "Terima Pesanan & Cuan!", 
      description: "Dapatkan notifikasi pesanan, layani penyewa, dan raih penghasilan ekstra dari perangkatmu. Aman & untung!" 
    },
  ]
};

const HowItWorksSection = () => {
  const [activeTab, setActiveTab] = useState('penyewa'); // Default tab 'penyewa'

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } }
  };

  const cardHoverEffect = {
    scale: 1.03,
    boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
    transition: { duration: 0.3 }
  };

  return (
    <section id="howitworks" className="py-16 md:py-24 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity:0, y: -30 }}
          whileInView={{ opacity:1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-brand-dark mb-12 md:mb-16"
        >
          Cara Kerja <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-purple-600">KuickTech</span> Super Gampang!
        </motion.h2>

        <div className="flex justify-center mb-10 md:mb-12 rounded-lg p-1 bg-gray-200/70 backdrop-blur-sm w-fit mx-auto shadow-md">
          {['penyewa', 'pemilik'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 md:px-8 md:py-3 text-sm md:text-base font-semibold rounded-md transition-all duration-300 relative focus:outline-none
                ${activeTab === tab ? 
                  (tab === 'penyewa' ? 'text-white' : 'text-white') : 
                  'text-gray-600 hover:text-brand-dark'
                }`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="activePill"
                  className={`absolute inset-0 rounded-md z-0 ${tab === 'penyewa' ? 'bg-brand-primary' : 'bg-green-600'}`}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                />
              )}
              <span className="relative z-10 capitalize">Untuk {tab}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab} // Penting untuk AnimatePresence
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid md:grid-cols-3 gap-6 md:gap-8"
          >
            {stepsData[activeTab].map((step, index) => (
              <motion.div
                key={step.id}
                className={`p-6 rounded-xl shadow-lg border-t-4
                  ${activeTab === 'penyewa' ? 'bg-blue-50 border-blue-500' : 'bg-green-50 border-green-500'}
                   cursor-default`} // Added cursor-default for non-interactive cards
                whileHover={cardHoverEffect}
                initial={{ opacity: 0, y: 20 }} // Animasi individual card
                animate={{ opacity: 1, y: 0, transition: { delay: index * 0.1, duration: 0.4 } }}
              >
                <div className={`p-3 inline-block rounded-full mb-4 
                  ${activeTab === 'penyewa' ? 'bg-blue-100' : 'bg-green-100'}`}>
                  {step.icon}
                </div>
                <h4 className="text-xl font-semibold text-brand-dark mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HowItWorksSection;