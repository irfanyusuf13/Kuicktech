import React, { useState } from 'react';

const CTASection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError('Mohon masukkan alamat email yang valid.');
      return;
    }
    setError('');
    // TODO: Integrasi dengan backend atau layanan email (misal: Netlify Forms, Mailchimp API)
    console.log('Email untuk notifikasi:', email);
    setIsSubmitted(true);
    setEmail(''); // Kosongkan input setelah submit
  };

  return (
    <section id="cta" className="py-20 md:py-32 bg-blue-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Jangan Sampai Ketinggalan!
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto text-blue-100">
          Masukkan email Anda untuk menjadi yang pertama tahu saat KuickTech diluncurkan dan dapatkan penawaran spesial untuk pengguna awal!
        </p>
        {isSubmitted ? (
          <p className="text-yellow-300 text-xl font-semibold">
            Terima kasih! Kami akan segera menghubungimu. 🎉
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row items-stretch gap-3 sm:gap-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Alamat email Anda"
                className="px-5 py-3 rounded-md sm:rounded-l-md sm:rounded-r-none text-gray-800 focus:ring-2 focus:ring-yellow-400 focus:outline-none flex-grow w-full"
                aria-label="Alamat email"
              />
              <button
                type="submit"
                className="bg-yellow-400 text-blue-700 font-bold px-6 py-3 rounded-md sm:rounded-r-md sm:rounded-l-none hover:bg-yellow-300 transition-colors w-full sm:w-auto"
              >
                Beritahu Saya!
              </button>
            </div>
            {error && <p className="text-red-300 mt-2 text-sm">{error}</p>}
          </form>
        )}
      </div>
    </section>
  );
};

export default CTASection;