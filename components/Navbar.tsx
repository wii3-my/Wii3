import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-wii3-dark/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="w-8 h-8 bg-wii3-red rounded-br-lg rounded-tl-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">W</span>
            </div>
            <span className="font-display font-bold text-2xl tracking-tight text-white">Wii3</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#work" className="hover:text-wii3-red transition-colors px-3 py-2 rounded-md text-sm font-medium text-white">Our Work</a>
              <a href="#lets-talk" className="hover:text-wii3-red transition-colors px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1 text-white">
                <MessageCircle size={14} className="text-wii3-red" /> Let's Talk
              </a>
              <a href="#contact" className="hover:text-wii3-red transition-colors px-3 py-2 rounded-md text-sm font-medium text-white">Contact</a>
            </div>
          </div>

          <div className="hidden md:block">
            <button className="bg-white text-wii3-dark hover:bg-wii3-red hover:text-white transition-all duration-300 px-6 py-2 rounded-full font-bold text-sm">
              Launch Campaign
            </button>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-wii3-dark border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#work" 
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Work
            </a>
            <a 
              href="#lets-talk" 
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Let's Talk
            </a>
            <a 
              href="#contact" 
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};