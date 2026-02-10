
import React from 'react';

const PrincipalMessage: React.FC = () => {
  return (
    <section id="principal" className="py-32 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Image Frame */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] border-[12px] border-white">
              <img 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop" 
                alt="Principal" 
                className="w-full h-[650px] object-cover"
              />
            </div>
            {/* Decorative Gold Frame */}
            <div className="absolute -top-8 -left-8 w-full h-full border-4 border-prestige-gold/20 rounded-3xl z-0 hidden md:block"></div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-prestige-gold/5 rounded-full blur-3xl"></div>
          </div>

          {/* Message Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-prestige-gold font-bold uppercase tracking-[0.3em] text-xs mb-6">Foundational Vision</h2>
            <h3 className="text-5xl md:text-6xl font-serif text-midnight mb-10 leading-tight">Nurturing Leaders for a <span className="italic">Brighter</span> Tomorrow</h3>
            
            <div className="space-y-8 text-slate-600 text-xl leading-relaxed italic font-light">
              <p className="relative">
                <span className="text-6xl text-prestige-gold/20 absolute -top-4 -left-6 font-serif">"</span>
                At La Escuela, we believe that education is not just about academic performance, 
                but about the holistic growth of every child. We aim to create a space where 
                students feel empowered to explore, fail, and ultimately succeed.
              </p>
              <p>
                Our curriculum is designed to challenge students while providing them with the 
                tools they need to become compassionate leaders and critical thinkers. 
                We don't just teach subjects; we inspire dreams.
              </p>
            </div>

            <div className="mt-14 pt-10 border-t border-slate-100 flex flex-col md:flex-row md:items-center gap-8">
              <div>
                <h5 className="text-3xl font-serif font-bold text-midnight">Dr. Sarah Thompson</h5>
                <p className="text-prestige-gold font-bold uppercase tracking-widest text-xs mt-1">PhD in Educational Leadership</p>
              </div>
              <div className="hidden md:block w-px h-12 bg-slate-100"></div>
              <div>
                <p className="text-slate-400 font-serif text-lg italic">Principal, La Escuela School</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;
