import React from 'react';

const QuoteModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="bg-[#4a001f] border border-[#d4af37] p-8 rounded-2xl w-full max-w-md shadow-2xl relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-[#d4af37] text-2xl">×</button>
        <h2 className="text-2xl font-bold text-[#d4af37] mb-6">Get Quick Quote</h2>
        
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg bg-white/10 text-white border border-white/20" />
          <input type="text" placeholder="Car Model" className="w-full p-3 rounded-lg bg-white/10 text-white border border-white/20" />
          <input type="text" placeholder="Pickup City" className="w-full p-3 rounded-lg bg-white/10 text-white border border-white/20" />
          <input type="text" placeholder="Destination City" className="w-full p-3 rounded-lg bg-white/10 text-white border border-white/20" />
          
          <button type="submit" className="w-full bg-[#d4af37] text-black font-bold py-3 rounded-lg hover:bg-white transition">
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuoteModal;
