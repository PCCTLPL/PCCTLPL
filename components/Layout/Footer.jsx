import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-10 px-6 text-center">
      <div className="mb-6">
        <h3 className="text-white font-bold text-lg">Pragati Car Carriers</h3>
        <p className="text-sm">Safe & Reliable Transport Solutions</p>
      </div>
      <div className="flex justify-center space-x-6 text-sm">
        <Link to="/terms" className="hover:text-[#d4af37]">Terms & Conditions</Link>
        <Link to="/privacy" className="hover:text-[#d4af37]">Privacy Policy</Link>
      </div>
      <p className="mt-6 text-xs">&copy; 2026 Pragati Car Carriers. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
