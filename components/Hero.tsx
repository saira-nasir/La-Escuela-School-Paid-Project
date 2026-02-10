
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onApplyClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onApplyClick }) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-40 pb-20 md:pt-48 lg:pt-56">
      {/* Background Image with Layered Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105 animate-slow-zoom"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1523050335392-93851179ae22?q=80&w=2067&auto=format&fit=crop")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F] via-[#0A192F]/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent opacity-80"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl">
          {/* Badge Container with clear separation */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-prestige-gold/20 border border-prestige-gold/30 rounded-full mb-12 backdrop-blur-xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-prestige-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-prestige-gold"></span>
            </span>
            <span className="text-prestige-gold font-black text-[10px] md:text-xs tracking-[0.3em] uppercase">Academic Excellence</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-serif text-white leading-[1.1] mb-10 text-shadow-premium animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
            Unlock Your Child's <br />
            <span className="text-prestige-gold italic">Potential</span>
            <span className="block mt-8 text-xl md:text-4xl font-sans font-black tracking-[0.15em] text-white/90 uppercase border-l-4 border-prestige-gold pl-6 py-2">
              Admissions Open 25/26
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-300 mb-14 leading-relaxed max-w-2xl font-light animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
            Step into an elite educational haven where academic rigor meets global character development in the heart of Sheikhupura.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-300">
            <button 
              onClick={onApplyClick}
              className="px-12 py-6 gradient-gold text-midnight font-black rounded-full hover:brightness-110 transition-all flex items-center justify-center gap-4 transform hover:scale-105 shadow-[0_25px_50px_-12px_rgba(197,160,89,0.5)] text-lg tracking-[0.1em] uppercase group"
            >
              Secure Admission <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          <div className="mt-24 flex flex-wrap items-center gap-12 border-t border-white/10 pt-12 opacity-80 animate-in fade-in duration-1000 delay-500">
            <div className="text-white">
              <span className="block text-4xl md:text-5xl font-serif font-bold text-prestige-gold">15+</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-black">Years of Excellence</span>
            </div>
            <div className="w-px h-14 bg-white/10 hidden sm:block"></div>
            <div className="text-white">
              <span className="block text-4xl md:text-5xl font-serif font-bold text-prestige-gold">1000+</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-black">Future Leaders</span>
            </div>
            <div className="w-px h-14 bg-white/10 hidden sm:block"></div>
            <div className="text-white">
              <span className="block text-4xl md:text-5xl font-serif font-bold text-prestige-gold">A+</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-black">Academic Standard</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s infinite alternate ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;
