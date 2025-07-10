
import React from 'react';
import Header from '@/components/Header';
import AboutComponent from '@/components/About';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <AboutComponent />
      </div>
      <Footer />
    </div>
  );
};

export default About;
