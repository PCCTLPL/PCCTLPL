import React from 'react';

const Contact = () => {
  return (
    <div className="py-16 px-6 bg-[#4a001f] text-white min-h-screen">
      <h1 className="text-4xl font-bold text-[#d4af37] text-center mb-12">Contact Us</h1>
      
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Details */}
        <div className="space-y-6">
          <h2 className="text-2xl text-[#d4af37] font-semibold">Get In Touch</h2>
          <p>For any inquiries regarding your vehicle transport, reach out to us.</p>
          <div>
            <p className="font-bold">Phone:</p>
            <a href="tel:+918743040007" className="text-white hover:text-[#d4af37]">+91 8743040007</a>
          </div>
          <div>
            <p className="font-bold">Email:</p>
            <a href="mailto:pragaticarcarriers@gmail.com" className="text-white hover:text-[#d4af37]">pragaticarcarriers@gmail.com</a>
          </div>
          <div>
            <p className="font-bold">Address:</p>
            <p>Gurugram, Haryana, India</p>
          </div>
        </div>

        {/* Inquiry Form */}
        <form className="bg-white/5 p-8 rounded-2xl border border-[#d4af37]/30 shadow-xl">
          <div className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full p-3 rounded-lg bg-black/20 border border-white/10" />
            <input type="email" placeholder="Email Address" className="w-full p-3 rounded-lg bg-black/20 border border-white/10" />
            <textarea placeholder="Your Message" rows="4" className="w-full p-3 rounded-lg bg-black/20 border border-white/10"></textarea>
            <button type="submit" className="w-full bg-[#d4af37] text-black font-bold py-3 rounded-lg hover:bg-white transition">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
