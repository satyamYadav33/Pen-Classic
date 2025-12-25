import React from 'react';
import { Award, PenTool, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 space-y-8">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white leading-tight">
              We Craft Stories, <br />
              <span className="text-gold-600">Not Just Pens.</span>
            </h2>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Welcome to <span className="font-bold text-slate-900 dark:text-white">Satyaraj Classic</span>. 
              Since our inception, we have dedicated ourselves to the art of fine writing. 
              We believe that a pen is an extension of one's mind, a tool that brings ideas to life.
            </p>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Our mission is simple: To provide high-quality writing instruments for everyone. 
              Whether you are a student taking your first exam with our ₹5 reliable gel pen, 
              or an executive signing a merger with our ₹200 luxury fountain pen, Satyaraj Classic 
              ensures flow, precision, and comfort.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              <div className="flex flex-col items-center text-center p-4 bg-white dark:bg-slate-900 rounded-xl shadow-sm">
                <Award className="w-8 h-8 text-gold-500 mb-2" />
                <h4 className="font-bold text-slate-900 dark:text-white">Quality</h4>
                <p className="text-xs text-slate-500">Premium Materials</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white dark:bg-slate-900 rounded-xl shadow-sm">
                <ShieldCheck className="w-8 h-8 text-gold-500 mb-2" />
                <h4 className="font-bold text-slate-900 dark:text-white">Durability</h4>
                <p className="text-xs text-slate-500">Long-lasting Ink</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white dark:bg-slate-900 rounded-xl shadow-sm">
                <PenTool className="w-8 h-8 text-gold-500 mb-2" />
                <h4 className="font-bold text-slate-900 dark:text-white">Comfort</h4>
                <p className="text-xs text-slate-500">Ergonomic Grip</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="absolute inset-0 bg-gold-500 rounded-2xl transform rotate-3 opacity-20"></div>
            <img 
              src="https://picsum.photos/seed/writing/800/600" 
              alt="Close up of writing" 
              className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;