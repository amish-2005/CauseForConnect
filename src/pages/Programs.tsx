
import React from 'react';
import Header from '@/components/Header';
import ProgramsComponent from '@/components/Programs';
import Footer from '@/components/Footer';

const Programs = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <ProgramsComponent />
      </div>
      <Footer />
    </div>
  );
};

export default Programs;
