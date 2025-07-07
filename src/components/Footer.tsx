
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">MODA</h3>
            <p className="text-gray-400 mb-4">
              Redefining modern fashion with style, quality, and sustainability.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Twitter
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><Link to="/women" className="text-gray-400 hover:text-white transition-colors duration-200">Women</Link></li>
              <li><Link to="/men" className="text-gray-400 hover:text-white transition-colors duration-200">Men</Link></li>
              <li><Link to="/accessories" className="text-gray-400 hover:text-white transition-colors duration-200">Accessories</Link></li>
              <li><Link to="/sale" className="text-gray-400 hover:text-white transition-colors duration-200">Sale</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">Contact Us</Link></li>
              <li><Link to="/shipping" className="text-gray-400 hover:text-white transition-colors duration-200">Shipping</Link></li>
              <li><Link to="/returns" className="text-gray-400 hover:text-white transition-colors duration-200">Returns</Link></li>
              <li><Link to="/size-guide" className="text-gray-400 hover:text-white transition-colors duration-200">Size Guide</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-200">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors duration-200">Careers</Link></li>
              <li><Link to="/sustainability" className="text-gray-400 hover:text-white transition-colors duration-200">Sustainability</Link></li>
              <li><Link to="/press" className="text-gray-400 hover:text-white transition-colors duration-200">Press</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 MODA. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
