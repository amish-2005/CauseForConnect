
import React from 'react';
import Header from '@/components/Header';
import ContactComponent from '@/components/Contact';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <ContactComponent />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
