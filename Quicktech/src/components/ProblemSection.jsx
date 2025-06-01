const ProblemSection = () => {
  const problems = [
    { emoji: "💻", text: "Laptop rusak saat skripsi" },
    { emoji: "📱", text: "HP jadul, ga bisa dokumentasi konser" },
    { emoji: "📦", text: "Punya gadget nganggur tapi mubazir" },
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Masalah yang Sering Terjadi</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((item, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition">
              <div className="text-4xl">{item.emoji}</div>
              <p className="mt-4 text-lg text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
