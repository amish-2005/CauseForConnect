
import React from 'react';
import Header from '@/components/Header';
import VolunteerComponent from '@/components/Volunteer';
import Footer from '@/components/Footer';

const Volunteer = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <VolunteerComponent />
      </div>
      <Footer />
    </div>
  );
};

export default Volunteer;
