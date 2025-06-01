const FeaturesSection = () => {
  const features = [
    { emoji: "🔒", title: "Verifikasi & Rating", desc: "Aman dari penipuan dengan sistem reputasi pengguna." },
    { emoji: "💬", title: "Chat Langsung", desc: "Diskusi detail barang & lokasi dengan nyaman." },
    { emoji: "📍", title: "Dekat Lokasimu", desc: "Temukan barang pinjaman terdekat secara instan." },
    { emoji: "💸", title: "Pembayaran Aman", desc: "Transaksi langsung melalui platform digital." },
    { emoji: "🛡️", title: "Asuransi Opsional", desc: "Perlindungan bila barang rusak saat dipinjam." },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Fitur Unggulan</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-2">{f.emoji}</div>
              <h3 className="text-xl font-semibold text-blue-800 mb-1">{f.title}</h3>
              <p className="text-gray-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
