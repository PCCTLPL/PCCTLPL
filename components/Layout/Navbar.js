import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#4a001f] text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-[#d4af37]">PCC</Link>
        
        {/* Menu Items */}
        <div className="hidden md:flex space-x-6">
          <Link to="/">Home</Link>
          <div className="relative group">
            <button className="hover:text-[#d4af37]">Services ▼</button>
            <div className="absolute hidden group-hover:block bg-white text-black p-4 w-48 shadow-lg">
              <Link to="/services" className="block py-1">All Services</Link>
              <Link to="/services/car" className="block py-1">Car Carrier</Link>
            </div>
          </div>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
