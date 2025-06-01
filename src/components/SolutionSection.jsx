import React from 'react';
import { motion } from 'framer-motion';
// import SolutionMockup from '../assets/solution-mockup-dynamic.png'; // Ganti dengan mockup platform yang dinamis dan menarik

const SolutionSection = () => {
  const textVariants = {
    offscreen: { x: -50, opacity: 0 },
    onscreen: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };
  const imageVariants = {
    offscreen: { x: 50, opacity: 0, scale: 0.8 },
    onscreen: { x: 0, opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut", delay:0.2 } }
  };

  return (
    <section id="solution" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity:0, y: -40 }}
          whileInView={{ opacity:1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-brand-dark mb-12 md:mb-20"
        >
          <span className="text-brand-primary">KuickTech Hadir</span> Membawa Solusi <span className="underline decoration-brand-secondary decoration-4 underline-offset-4">Brilian!</span>
        </motion.h2>
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
          <motion.div
            variants={textVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:w-1/2 space-y-6 text-gray-700 text-lg md:text-xl leading-relaxed"
          >
            <p>
              Capek ribet? <strong>KuickTech</strong> adalah platform web revolusioner yang menghubungkan pemilik gadget dengan penyewa secara <strong className="text-brand-primary">instan, aman, dan nyaman</strong>. Sewa laptop, smartphone, kamera, hingga aksesoris pendukung jadi segampang itu! 
            </p>
            <p>
              Buat pemilik, daftarkan barangmu, tentukan harga, dan atur detailnya cuma dalam hitungan menit. Buat penyewa, cari, filter, pesan, dan ngobrol langsung sama pemilik via chat terintegrasi. Gak pake lama, gak pake was-was! 
            </p>
            <p>
              Dengan <strong className="text-brand-primary">verifikasi pengguna, sistem rating,</strong> dan <strong className="text-brand-primary">pembayaran digital terpadu</strong>, semua transaksi jadi lebih transparan dan fleksibel.  Hemat budget, penuhi kebutuhan teknologi jangka pendekmu tanpa harus beli baru! 
            </p>
          </motion.div>
          <motion.div
            variants={imageVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:w-1/2 mt-8 lg:mt-0"
          >
            <div className="bg-gradient-to-br from-brand-primary to-indigo-700 p-3 md:p-4 rounded-2xl shadow-2xl transform lg:rotate-3 hover:rotate-0 transition-transform duration-500 ease-out">
              {/* <img src={SolutionMockup} alt="Platform KuickTech di Berbagai Perangkat" className="w-full h-auto rounded-lg object-cover" /> */}
              <div className="aspect-[16/10] bg-gray-700 rounded-lg flex items-center justify-center">
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;