
import React from 'react';
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import CategoryTiles from '../components/CategoryTiles';
import ProductCarousel from '../components/ProductCarousel';
import BrandStory from '../components/BrandStory';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroBanner />
      <CategoryTiles />
      <ProductCarousel />
      <BrandStory />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
