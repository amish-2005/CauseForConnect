
import React from 'react';
import Header from '@/components/Header';
import DonateComponent from '@/components/Donate';
import Transparency from '@/components/Transparency';
import Footer from '@/components/Footer';

const Donate = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <DonateComponent />
        <Transparency />
      </div>
      <Footer />
    </div>
  );
};

export default Donate;
