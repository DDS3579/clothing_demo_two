
import React from 'react';
import { Link } from 'react-router-dom';

const HeroBanner = () => {
  return (
    <div className="relative h-screen bg-gray-900 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="relative z-10 text-center text-white max-w-4xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Winter Collection 2024
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light">
          Discover timeless elegance with our curated selection of premium fashion
        </p>
        <div className="space-x-4">
          <Link
            to="/women"
            className="inline-block bg-white text-black px-8 py-3 font-medium hover:bg-gray-100 transition-colors duration-200"
          >
            Shop Women
          </Link>
          <Link
            to="/men"
            className="inline-block border-2 border-white text-white px-8 py-3 font-medium hover:bg-white hover:text-black transition-colors duration-200"
          >
            Shop Men
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
