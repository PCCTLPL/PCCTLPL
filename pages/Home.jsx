import React, { useState } from 'react';
import Hero from '../components/Sections/Hero';
import QuoteModal from '../components/Common/QuoteModal';
import FloatingButtons from '../components/Layout/FloatingButtons';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <Hero onQuoteClick={() => setIsModalOpen(true)} />
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <FloatingButtons />
    </div>
  );
};

export default Home;
