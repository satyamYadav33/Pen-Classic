import React, { useEffect, useState, useRef } from 'react';
import { SectionType } from '../types';

interface CustomCursorProps {
  activeSection: SectionType;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ activeSection }) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      if (cursorDotRef.current) {
         cursorDotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const onMouseDown = () => setIsHovering(true);
    const onMouseUp = () => setIsHovering(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  // Determine cursor styles based on section
  const getCursorStyles = () => {
    switch (activeSection) {
      case 'home':
        return 'border-gold-500 border-2 w-12 h-12 rounded-full';
      case 'products':
        return 'border-blue-500 border-2 w-8 h-8 rounded-none rotate-45'; // Diamond shape
      case 'about':
        return 'border-emerald-500 border-2 w-10 h-10 rounded-full';
      case 'contact':
        return 'border-purple-500 border-2 w-12 h-12 rounded-lg';
      default:
        return 'border-gray-500 border-2 w-8 h-8 rounded-full';
    }
  };

  return (
    <>
      {/* Main outer cursor */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] -ml-4 -mt-4 transition-all duration-300 ease-out mix-blend-difference flex items-center justify-center ${getCursorStyles()} ${isHovering ? 'scale-75 bg-white/20' : 'scale-100'}`}
      />
      {/* Inner dot */}
      <div 
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] -ml-1 -mt-1 mix-blend-difference"
      />
    </>
  );
};

export default CustomCursor;