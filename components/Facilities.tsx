
import React from 'react';
import { FlaskConical, BookOpen, Trophy, Computer, Music, Bike } from 'lucide-react';

const Facilities: React.FC = () => {
  const facilityList = [
    {
      title: 'Science Laboratories',
      description: 'Advanced experiential labs designed for research-grade discovery and practical experimentation.',
      icon: <FlaskConical className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Grand Library',
      description: 'A multi-story sanctuary housing 10,000+ volumes and high-speed global digital archives.',
      icon: <BookOpen className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Sports Arena',
      description: 'Professional grounds for multi-sport development with international-standard coaching.',
      icon: <Trophy className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090&auto=format&fit=crop'
    },
    {
      title: 'Innovation Lab',
      description: 'Future-ready tech hub with AI, coding workshops, and robotics specialized curriculum.',
      icon: <Computer className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop'
    },
    {
      title: 'Creative Arts Center',
      description: 'A vibrant space for music, performance, and fine arts to cultivate the expressive soul.',
      icon: <Music className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1514525253361-b83f859b73c0?q=80&w=1974&auto=format&fit=crop'
    },
    {
      title: 'Explorer Zone',
      description: 'Premium developmental play areas focused on cognitive and physical foundation building.',
      icon: <Bike className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1533221216134-c43c17577189?q=80&w=2112&auto=format&fit=crop'
    }
  ];

  return (
    <section id="facilities" className="py-32 bg-ivory">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-prestige-gold font-bold uppercase tracking-[0.4em] text-xs mb-4">World-Class Campus</h2>
          <h3 className="text-5xl md:text-6xl font-serif text-midnight mb-8">Facilities Built for Leaders</h3>
          <div className="w-20 h-1 bg-prestige-gold mx-auto mb-8"></div>
          <p className="text-slate-600 text-xl font-light">
            We provide an ultra-modern environment where curiosity meets premium infrastructure. 
            Every corner is a space for growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {facilityList.map((facility, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-50 transition-all duration-500 hover:-translate-y-4"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={facility.image} 
                  alt={facility.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
              </div>
              <div className="p-10 relative">
                <div className="absolute -top-12 right-10 w-20 h-20 gradient-midnight rounded-2xl flex items-center justify-center text-prestige-gold shadow-2xl shadow-midnight/30 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                  {facility.icon}
                </div>
                <h4 className="text-2xl font-bold text-midnight mb-4">{facility.title}</h4>
                <p className="text-slate-500 leading-relaxed font-medium">
                  {facility.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-prestige-gold font-bold text-sm tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  EXPLORE MORE <ArrowRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
import { ArrowRight } from 'lucide-react';

export default Facilities;
