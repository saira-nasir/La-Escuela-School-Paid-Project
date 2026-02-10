
import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Mian Khurram",
    role: "Philanthropist & Parent",
    content: "La Escuela isn't just a school; it's an investment in character. The digital transition was as prestigious as the physical campus. My children have shown remarkable growth in their leadership skills.",
    image: "https://i.pravatar.cc/150?u=a"
  },
  {
    id: 2,
    name: "Dr. Arman Khan",
    role: "Senior Consultant & Parent",
    content: "The academic rigor paired with the technological advancement at La Escuela is unmatched in Sheikhupura. It provides the global exposure our children need for the future.",
    image: "https://i.pravatar.cc/150?u=b"
  },
  {
    id: 3,
    name: "Mrs. Saima Ali",
    role: "Educationist & Parent",
    content: "As an educator myself, I am highly impressed by the personalized attention each student receives. The 'Invisible to Visible' excellence is truly felt in the classroom environment.",
    image: "https://i.pravatar.cc/150?u=c"
  },
  {
    id: 4,
    name: "Zainab Fatima",
    role: "High Honors Student",
    content: "Being at La Escuela has changed my perspective on learning. It's not about memorizing; it's about exploring. The Innovation Lab is my favorite place to spend time.",
    image: "https://i.pravatar.cc/150?u=d"
  }
];

const Testimonials: React.FC = () => {
  const [active, setActive] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const handlePrev = () => {
    setIsAutoPlay(false);
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlay(false);
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-32 bg-ivory relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-prestige-gold/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-midnight/5 rounded-full blur-3xl -ml-32 -mb-32"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-prestige-gold font-bold uppercase tracking-[0.4em] text-xs mb-4">Voices of Excellence</h2>
          <h3 className="text-5xl md:text-6xl font-serif text-midnight mb-8">What Our Community Says</h3>
          <div className="w-20 h-1.5 gradient-gold mx-auto rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <div className="relative overflow-hidden min-h-[450px] md:min-h-[350px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute inset-0 flex flex-col items-center transition-all duration-1000 ease-in-out ${
                  index === active ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-full scale-95'
                }`}
              >
                <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-[0_40px_80px_-20px_rgba(10,25,47,0.1)] border border-white/50 relative">
                  <Quote className="text-prestige-gold/20 absolute top-10 left-10 w-24 h-24" />
                  
                  <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                    <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-[2rem] overflow-hidden border-4 border-prestige-gold/20 shadow-2xl">
                      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                    
                    <div className="text-center md:text-left">
                      <div className="flex gap-1 mb-4 justify-center md:justify-start">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} className="fill-prestige-gold text-prestige-gold" />
                        ))}
                      </div>
                      <p className="text-xl md:text-2xl font-serif text-slate-600 italic leading-relaxed mb-8">
                        "{testimonial.content}"
                      </p>
                      <div>
                        <h4 className="text-2xl font-bold text-midnight">{testimonial.name}</h4>
                        <p className="text-prestige-gold font-bold uppercase tracking-[0.2em] text-xs mt-1">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button 
              onClick={handlePrev}
              className="w-14 h-14 rounded-full border border-prestige-gold/30 text-prestige-gold flex items-center justify-center hover:bg-prestige-gold hover:text-midnight transition-all group"
            >
              <ChevronLeft size={28} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            
            <div className="flex gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setIsAutoPlay(false); setActive(i); }}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    i === active ? 'w-10 bg-prestige-gold' : 'w-2 bg-slate-200'
                  }`}
                />
              ))}
            </div>

            <button 
              onClick={handleNext}
              className="w-14 h-14 rounded-full border border-prestige-gold/30 text-prestige-gold flex items-center justify-center hover:bg-prestige-gold hover:text-midnight transition-all group"
            >
              <ChevronRight size={28} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
