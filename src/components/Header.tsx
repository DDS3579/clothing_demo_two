
import React, { useState } from 'react';
import { Search, User, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('');

  const categories = [
    {
      name: 'Women',
      subcategories: ['Dresses', 'Tops', 'Bottoms', 'Outerwear', 'Accessories']
    },
    {
      name: 'Men',
      subcategories: ['Shirts', 'Pants', 'Jackets', 'Accessories', 'Shoes']
    },
    {
      name: 'Collections',
      subcategories: ['New Arrivals', 'Best Sellers', 'Sale', 'Seasonal']
    },
    {
      name: 'About',
      subcategories: ['Our Story', 'Sustainability', 'Size Guide', 'Contact']
    }
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-black tracking-tight">MODA</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {categories.map((category) => (
              <div
                key={category.name}
                className="relative group"
                onMouseEnter={() => setActiveCategory(category.name)}
                onMouseLeave={() => setActiveCategory('')}
              >
                <Link
                  to={`/${category.name.toLowerCase()}`}
                  className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {category.name}
                </Link>
                
                {/* Mega Menu */}
                <div className={`absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ${
                  activeCategory === category.name ? 'opacity-100 visible' : ''
                }`}>
                  <div className="py-2">
                    {category.subcategories.map((sub) => (
                      <Link
                        key={sub}
                        to={`/${category.name.toLowerCase()}/${sub.toLowerCase().replace(' ', '-')}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-150"
                      >
                        {sub}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>

          {/* Utility Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200">
              <Search className="h-5 w-5" />
            </button>
            <Link to="/account" className="p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200">
              <User className="h-5 w-5" />
            </Link>
            <Link to="/wishlist" className="p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200">
              <Heart className="h-5 w-5" />
            </Link>
            <Link to="/cart" className="p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                2
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  to={`/${category.name.toLowerCase()}`}
                  className="block px-3 py-2 text-gray-900 hover:bg-gray-50 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
