import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import About from './components/About';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import { Pen, SectionType } from './types';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [activeSection, setActiveSection] = useState<SectionType>('home');

  // Theme Toggle Logic
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  // Cart Logic
  const addToCart = (pen: Pen) => {
    setCartCount(prev => prev + 1);
    // In a real app, we would add the item to a cart array here
    console.log(`Added ${pen.name} to cart`);
  };

  // Intersection Observer to detect active section for Cursor
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id as SectionType);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.4, // Trigger when 40% of the section is visible
    });

    const sections = ['home', 'products', 'about', 'contact'];
    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`min-h-screen flex flex-col relative`}>
      <CustomCursor activeSection={activeSection} />
      
      <Navbar 
        isDarkMode={isDarkMode} 
        toggleTheme={toggleTheme} 
        cartCount={cartCount} 
      />

      <main className="flex-grow">
        <Hero />
        <ProductList addToCart={addToCart} />
        <About />
        <Contact />
      </main>

      <footer className="bg-white dark:bg-slate-950 py-8 border-t border-slate-100 dark:border-slate-800 text-center text-slate-500 dark:text-slate-400">
        <p>© {new Date().getFullYear()} Satyaraj Classic Pens. All rights reserved.</p>
        <p className="text-xs mt-2">Designed for the love of writing.</p>
      </footer>
    </div>
  );
}

export default App;