import React from 'react';
import { Sun, Moon, ShoppingCart, PenTool } from 'lucide-react';
import { NAV_LINKS } from '../constants';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  cartCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme, cartCount }) => {
  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <PenTool className="h-8 w-8 text-gold-600" />
            <span className="font-serif text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Satyaraj <span className="text-gold-600">Classic</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-medium text-slate-600 hover:text-gold-600 dark:text-slate-300 dark:hover:text-gold-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-6">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-gold-400" />
              ) : (
                <Moon className="h-5 w-5 text-slate-600" />
              )}
            </button>

            <div className="relative cursor-pointer">
              <ShoppingCart className="h-6 w-6 text-slate-600 dark:text-slate-300 hover:text-gold-600 dark:hover:text-gold-400 transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;