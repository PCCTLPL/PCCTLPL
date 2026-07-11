import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center bg-black overflow-hidden">
      {/* Background Image/Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#4a001f] to-black opacity-80 z-10"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2000')] bg-cover bg-center"></div>

      {/* Content */}
      <div className="relative z-20 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Premium <span className="text-[#d4af37]">Car Carriers</span>
        </h1>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Safely delivering your vehicle across India with precision and trust.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-[#d4af37] text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition">
            Get A Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
