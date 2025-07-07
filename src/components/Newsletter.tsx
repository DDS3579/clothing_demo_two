
import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
    // Add toast notification here
  };

  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Stay in Style
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter and be the first to know about new arrivals, 
          exclusive sales, and fashion updates.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              className="bg-white text-black px-8 py-3 font-medium rounded-md hover:bg-gray-100 transition-colors duration-200"
            >
              Subscribe
            </button>
          </div>
        </form>
        
        <p className="text-sm text-gray-400 mt-4">
          No spam, unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
