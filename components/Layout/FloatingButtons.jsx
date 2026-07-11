import React from 'react';

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/918743040007" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-green-500 p-4 rounded-full shadow-2xl hover:scale-110 transition animate-bounce"
      >
        <span className="text-2xl">💬</span>
      </a>
      
      {/* Call Button */}
      <a 
        href="tel:+918743040007" 
        className="bg-blue-600 p-4 rounded-full shadow-2xl hover:scale-110 transition"
      >
        <span className="text-2xl">📞</span>
      </a>
    </div>
  );
};

export default FloatingButtons;
