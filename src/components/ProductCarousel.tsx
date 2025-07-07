
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: 1,
      name: 'Classic White Shirt',
      price: 89,
      originalPrice: 120,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      isNew: true,
      onSale: true
    },
    {
      id: 2,
      name: 'Elegant Black Dress',
      price: 149,
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      isNew: false,
      onSale: false
    },
    {
      id: 3,
      name: 'Casual Denim Jacket',
      price: 129,
      originalPrice: 180,
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      isNew: false,
      onSale: true
    },
    {
      id: 4,
      name: 'Premium Leather Bag',
      price: 199,
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      isNew: true,
      onSale: false
    }
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Featured Products
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our most popular items, handpicked for style and quality
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="relative aspect-square overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Badges */}
              <div className="absolute top-3 left-3 flex flex-col gap-1">
                {product.isNew && (
                  <span className="bg-black text-white text-xs font-medium px-2 py-1 rounded">
                    NEW
                  </span>
                )}
                {product.onSale && (
                  <span className="bg-red-500 text-white text-xs font-medium px-2 py-1 rounded">
                    SALE
                  </span>
                )}
              </div>

              {/* Quick Actions */}
              <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors duration-200">
                  <Heart className="h-4 w-4 text-gray-600" />
                </button>
                <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors duration-200">
                  <ShoppingBag className="h-4 w-4 text-gray-600" />
                </button>
              </div>

              {/* Quick Shop Overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <Link
                  to={`/product/${product.id}`}
                  className="block w-full text-center bg-white text-black py-2 font-medium hover:bg-gray-100 transition-colors duration-200"
                >
                  Quick View
                </Link>
              </div>
            </div>

            <div className="p-4">
              <Link to={`/product/${product.id}`}>
                <h3 className="text-lg font-medium text-gray-900 mb-2 hover:text-gray-600 transition-colors duration-200">
                  {product.name}
                </h3>
              </Link>
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold text-gray-900">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          to="/products"
          className="inline-block bg-black text-white px-8 py-3 font-medium hover:bg-gray-800 transition-colors duration-200"
        >
          View All Products
        </Link>
      </div>
    </section>
  );
};

export default ProductCarousel;
