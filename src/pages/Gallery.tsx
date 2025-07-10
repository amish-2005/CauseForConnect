
import React from 'react';
import Header from '@/components/Header';
import GalleryComponent from '@/components/Gallery';
import Footer from '@/components/Footer';

const Gallery = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <GalleryComponent />
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
