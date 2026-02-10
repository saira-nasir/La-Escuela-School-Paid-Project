
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, GraduationCap } from 'lucide-react';

interface HeaderProps {
  onInquiryClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onInquiryClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#principal' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Admissions', href: '#admission-portal' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-2xl py-2' : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Simplified Logo Wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="flex flex-col">
            <h1 className={`text-2xl md:text-3xl font-serif font-black tracking-tighter leading-none ${isScrolled ? 'text-midnight' : 'text-white'}`}>
              LA ESCUELA
            </h1>
            <div className="flex items-center gap-2 mt-1">
              <div className="h-[1px] w-4 bg-prestige-gold"></div>
              <p className="text-[9px] md:text-[11px] uppercase font-black tracking-[0.4em] text-prestige-gold">
                Bypass Campus
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`font-bold text-xs lg:text-sm uppercase tracking-widest hover:text-prestige-gold transition-all relative group ${isScrolled ? 'text-midnight' : 'text-white'}`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-prestige-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <button 
            onClick={onInquiryClick}
            className="px-6 lg:px-8 py-2.5 gradient-gold text-midnight rounded-full font-black text-xs uppercase tracking-widest hover:brightness-110 transition-all transform hover:scale-105 shadow-xl shadow-prestige-gold/20"
          >
            INQUIRE NOW
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className={`md:hidden p-2 rounded-xl transition-colors ${isScrolled ? 'bg-slate-100' : 'bg-white/10 backdrop-blur-sm'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <X className={isScrolled ? 'text-midnight' : 'text-white'} size={24} />
          ) : (
            <Menu className={isScrolled ? 'text-midnight' : 'text-white'} size={24} />
          )}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`md:hidden fixed inset-0 bg-midnight/95 backdrop-blur-xl z-40 transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 p-6">
          <div className="w-20 h-20 gradient-gold rounded-[2rem] flex items-center justify-center mb-4 shadow-2xl">
             <GraduationCap className="text-midnight" size={48} />
          </div>
          <div className="text-center mb-4">
            <h2 className="text-white text-4xl font-serif font-black mb-1">LA ESCUELA</h2>
            <p className="text-prestige-gold tracking-[0.3em] font-black text-xs uppercase">Bypass Campus</p>
          </div>
          {navLinks.map((link, idx) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-white text-3xl font-serif hover:text-prestige-gold transition-all transform hover:scale-110"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => { setIsMenuOpen(false); onInquiryClick(); }}
            className="mt-4 px-12 py-5 gradient-gold text-midnight rounded-full text-lg font-black tracking-widest uppercase shadow-2xl"
          >
            APPLY NOW
          </button>
          <div className="mt-8 flex items-center gap-4 text-white/70 bg-white/5 px-6 py-3 rounded-2xl border border-white/10">
            <Phone size={20} className="text-prestige-gold" />
            <span className="text-lg font-bold tracking-tighter">056 3781234</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
