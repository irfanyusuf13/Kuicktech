const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-24 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold text-blue-900 leading-tight">
          Sewa & Sewakan Gadget Berkualitas <br className="hidden sm:inline" /> Dalam Sekejap
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          KuickTech mempertemukan kamu dengan orang yang punya atau butuh perangkat digital — laptop, HP, dan aksesoris lainnya.
        </p>
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition">
            Mulai Sekarang
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
