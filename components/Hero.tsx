import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20 pointer-events-none">
        {/* Abstract Pattern */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-gold-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h2 className="text-gold-600 dark:text-gold-400 font-bold uppercase tracking-widest mb-4">
          Established 2014
        </h2>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 dark:text-white mb-8 leading-tight">
          The Signature of <br />
          <span className="italic text-slate-600 dark:text-slate-400">Excellence.</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
          From the first stroke to the final signature, Satyaraj Classic pens define elegance, 
          affordability, and precision. Writing instruments ranging from ₹5 to ₹200.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#products"
            className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            Shop Collection
          </a>
          <a 
            href="#about"
            className="px-8 py-4 border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white rounded-full font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-300"
          >
            Our Story
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;