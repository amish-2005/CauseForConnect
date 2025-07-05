
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Programs from '@/components/Programs';
import Donate from '@/components/Donate';
import Volunteer from '@/components/Volunteer';
import Stories from '@/components/Stories';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Newsletter from '@/components/Newsletter';
import Transparency from '@/components/Transparency';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Programs />
      <Donate />
      <Volunteer />
      <Stories />
      <Gallery />
      <Contact />
      <Newsletter />
      <Transparency />
      <Footer />
    </div>
  );
};

export default Index;
