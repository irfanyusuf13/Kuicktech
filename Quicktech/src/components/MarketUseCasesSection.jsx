import React, { useState } from 'react'; // useState jika ingin modal
import { motion, AnimatePresence} from 'framer-motion';
import { FaUserGraduate, FaBriefcase, FaCameraRetro, FaHome, FaBullhorn, FaPaintBrush } from 'react-icons/fa'; // Ikon yang diperbarui

const useCasesData = [
  { 
    icon: <FaUserGraduate size={32} />, 
    title: "Mahasiswa & Pelajar Anti Mati Gaya", 
    description: "Nugas berat butuh laptop spek dewa? Laptop lama tiba-tiba ngambek? Sewa aja di KuickTech!", 
    color: "indigo" 
  },
  { 
    icon: <FaBriefcase size={32} />, 
    title: "Pekerja & Freelancer Produktif", 
    description: "Presentasi dadakan? Butuh device cadangan buat kerja remote? KuickTech siap bantu!", 
    color: "cyan" 
  },
  {
    icon: <FaCameraRetro size={32} />,
    title: "Event Goers & Konten Kreator Hits",
    description: "Nonton konser, wisuda, atau traveling? Abadikan momen dengan kamera HP terbaik tanpa beli! Lihat contohnya nih 👉",
    alt: "Contoh sewa HP iPhone untuk konser oleh Djenouary Rent",
    color: "rose"
  },
  { 
    icon: <FaHome size={32} />, 
    title: "Pemilik Gadget Cerdas & Cuan", 
    description: "Laptop, HP, kamera nganggur di rumah? Sulap jadi passive income lewat KuickTech! Aman, mudah, menguntungkan.", 
    color: "lime" 
  },
];

const caseColorVariants = {
  indigo: { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-500", iconBg: "bg-indigo-100" },
  cyan: { bg: "bg-cyan-50", text: "text-cyan-600", border: "border-cyan-500", iconBg: "bg-cyan-100" },
  rose: { bg: "bg-rose-50", text: "text-rose-600", border: "border-rose-500", iconBg: "bg-rose-100" },
  lime: { bg: "bg-lime-50", text: "text-lime-600", border: "border-lime-500", iconBg: "bg-lime-100" },
};

// Modal Component (Simple Example)
const ImageModal = ({ src, alt, onClose }) => {
  if (!src) return null;
  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[200] p-4"
      onClick={onClose} // Close on overlay click
    >
      <motion.div 
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        className="bg-white p-2 rounded-lg shadow-2xl max-w-3xl max-h-[80vh] relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on image
      >
        <img src={src} alt={alt} className="max-w-full max-h-[calc(80vh-1rem)] object-contain rounded"/>
        <button 
          onClick={onClose} 
          className="absolute -top-3 -right-3 bg-brand-accent text-white rounded-full h-8 w-8 flex items-center justify-center text-lg shadow-md hover:bg-red-700 transition-colors"
          aria-label="Tutup modal"
        >
          &times;
        </button>
      </motion.div>
    </div>
  );
};


const MarketUseCasesSection = () => {
  const [modalImage, setModalImage] = useState(null); // State for modal image src
  const [modalAlt, setModalAlt] = useState('');

  const openModal = (imageSrc, imageAlt) => {
    setModalImage(imageSrc);
    setModalAlt(imageAlt);
  };
  const closeModal = () => {
    setModalImage(null);
    setModalAlt('');
  };

  const cardVariants = (index) => ({
    offscreen: { opacity: 0, x: index % 2 === 0 ? -60 : 60, rotate: index % 2 === 0 ? -5 : 5 },
    onscreen: { 
      opacity: 1, 
      x: 0, 
      rotate: 0,
      transition: { type: "spring", stiffness: 40, damping: 12, delay: index * 0.1 }
    }
  });

  return (
    <section id="market" className="py-16 md:py-24 bg-white overflow-hidden"> {/* Added overflow-hidden */}
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity:0, y: -30 }}
          whileInView={{ opacity:1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-brand-dark mb-12 md:mb-16"
        >
          Siapa Aja Sih yang Cocok Pakai <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-rose-500">KuickTech</span>?
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {useCasesData.map((useCase, index) => {
            const colors = caseColorVariants[useCase.color];
            return (
              <motion.div
                key={index}
                className={`${colors.bg} p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 ${colors.border} flex flex-col`}
                variants={cardVariants(index)}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="flex items-center mb-4">
                  <div className={`inline-flex p-3 rounded-full ${colors.iconBg} ${colors.text} mr-4`}>
                    {useCase.icon}
                  </div>
                  <h3 className={`text-xl md:text-2xl font-semibold ${colors.text.replace('-600', '-700')}`}>{useCase.title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-4 flex-grow">{useCase.description}</p>
                {useCase.image && (
                  <div 
                    className="mt-auto border border-gray-300 rounded-lg overflow-hidden shadow-inner group cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => openModal(useCase.image, useCase.alt)}
                  >
                    <img src={useCase.image} alt={useCase.alt} className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"/>
                    <p className="text-xs text-center py-1.5 bg-gray-100 text-gray-600 group-hover:bg-gray-200 transition-colors">
                      Contoh Kasus Nyata <span className="font-semibold">(Klik untuk zoom)</span>
                    </p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }} // Small delay after cards
            className="text-center mt-16 md:mt-20 p-6 md:p-8 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 rounded-xl shadow-lg border border-gray-200"
        >
            <FaBullhorn className="text-3xl md:text-4xl text-brand-primary mx-auto mb-3" />
            <p className="text-gray-700 text-lg md:text-xl font-medium">
                Kebutuhan ini <strong className="text-brand-primary">NYATA</strong> dan <strong className="text-brand-primary">MENINGKAT</strong> di kota besar (Jakarta, Bandung, Surabaya), area kampus, dan perkantoran!
            </p>
            <p className="text-gray-600 text-base md:text-lg mt-3">
                Paling dicari: <span className="font-semibold text-brand-dark">laptop, HP spek tinggi, kamera, headset, modem, charger, proyektor,</span> dan lainnya.
            </p>
        </motion.div>
      </div>
      <AnimatePresence>
        {modalImage && <ImageModal src={modalImage} alt={modalAlt} onClose={closeModal} />}
      </AnimatePresence>
    </section>
  );
};

export default MarketUseCasesSection;