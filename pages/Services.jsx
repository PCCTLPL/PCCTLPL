import React from 'react';
import { servicesList } from '../data/constants';

const Services = () => {
  return (
    <div className="py-16 px-6 bg-[#4a001f] min-h-screen">
      <h1 className="text-4xl font-bold text-[#d4af37] text-center mb-12">Our Professional Services</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {servicesList.map((service) => (
          <div 
            key={service.id} 
            className="p-6 rounded-xl bg-white/5 border border-[#d4af37]/30 hover:bg-[#d4af37] hover:text-black transition-all duration-300 cursor-pointer group"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-white group-hover:text-black">{service.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
