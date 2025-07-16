
import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Services', href: '#services' },
    { name: 'Technologies', href: '#tech' },
    { name: 'Case Studies', href: '#cases' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-deep-navy/95 backdrop-blur-xl shadow-xl' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <img 
                src="/logo.png" 
                alt="HITECGURUS Logo" 
                className="h-10 w-10 transition-all duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-warm-taupe/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
            </div>
            <div className="flex flex-col">
                             <span className={`text-xl font-clash font-bold transition-colors duration-300 ${
                 isScrolled ? 'text-white' : 'text-white'
               }`}>
                 HITECGURUS
               </span>
              <span className={`text-xs transition-colors duration-300 ${
                isScrolled ? 'text-warm-taupe/80' : 'text-white/70'
              } hidden sm:block`}>
                Your digital transformation partner
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative group transition-all duration-300 ${
                  isScrolled ? 'text-white hover:text-warm-taupe' : 'text-white/90 hover:text-white'
                }`}
              >
                {item.name}
                <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-warm-taupe group-hover:w-full transition-all duration-300"></div>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-warm-taupe rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="btn-premium group">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'text-white hover:bg-white/10' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-4 border-t border-white/20 mt-4">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white hover:text-warm-taupe transition-colors duration-300 py-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
              </a>
            ))}
            <Button className="w-full mt-4 btn-premium">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
