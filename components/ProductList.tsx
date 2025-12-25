import React from 'react';
import { Plus, ShoppingBag } from 'lucide-react';
import { PENS } from '../constants';
import { Pen } from '../types';

interface ProductListProps {
  addToCart: (pen: Pen) => void;
}

const ProductList: React.FC<ProductListProps> = ({ addToCart }) => {
  return (
    <section id="products" className="py-24 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white mb-4">
            Curated Collection
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            Discover the perfect tool for your thoughts, starting at just ₹5.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PENS.map((pen) => (
            <div 
              key={pen.id} 
              className="group bg-gray-50 dark:bg-slate-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-slate-700"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={pen.image} 
                  alt={pen.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white dark:bg-slate-900 px-3 py-1 rounded-full text-xs font-bold text-slate-900 dark:text-white shadow-md">
                  {pen.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                    {pen.name}
                  </h3>
                  <span className="text-lg font-bold text-gold-600 dark:text-gold-400">
                    ₹{pen.price}
                  </span>
                </div>
                
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-6 h-10">
                  {pen.description}
                </p>

                <div className="flex gap-3">
                  <button 
                    onClick={() => addToCart(pen)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                  >
                    <Plus className="w-4 h-4" /> Add to Cart
                  </button>
                  <button 
                    onClick={() => {
                      addToCart(pen);
                      alert(`Proceeding to checkout with ${pen.name}`);
                    }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg hover:bg-slate-800 dark:hover:bg-gray-100 transition-colors font-medium"
                  >
                    <ShoppingBag className="w-4 h-4" /> Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;