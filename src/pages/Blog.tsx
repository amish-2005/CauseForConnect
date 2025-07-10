
import React from 'react';
import Header from '@/components/Header';
import StoriesComponent from '@/components/Stories';
import Footer from '@/components/Footer';

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <StoriesComponent />
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
