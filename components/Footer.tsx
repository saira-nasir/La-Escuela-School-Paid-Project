
import React from 'react';
import { Phone, MapPin, Mail, Facebook, Twitter, Instagram, Linkedin, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050C16] text-white pt-32 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center shadow-lg shadow-prestige-gold/20">
                <span className="text-midnight font-serif text-2xl font-bold">L</span>
              </div>
              <h2 className="text-3xl font-serif font-bold tracking-tight">LA ESCUELA</h2>
            </div>
            <p className="text-slate-400 leading-relaxed text-lg font-light">
              Redefining elite education in Pakistan. We nurture the next generation of global pioneers through innovation and prestige.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-prestige-gold hover:text-midnight transition-all group">
                  <Icon size={20} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-8 text-prestige-gold uppercase tracking-widest text-sm">Navigation</h3>
            <ul className="space-y-5 text-slate-400 text-lg">
              {['Home', 'Academic Life', 'Facilities', 'Admissions', 'Contact'].map((link) => (
                <li key={link}><a href="#" className="hover:text-prestige-gold transition-colors flex items-center gap-2 group"><div className="w-0 group-hover:w-2 h-[2px] bg-prestige-gold transition-all"></div> {link}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-8 text-prestige-gold uppercase tracking-widest text-sm">Concierge</h3>
            <ul className="space-y-8">
              <li className="flex gap-5 text-slate-300">
                <MapPin className="text-prestige-gold shrink-0 mt-1" size={22} />
                <span className="leading-relaxed font-light">Bypass Road, near Allied Campus, Sheikhupura, Punjab</span>
              </li>
              <li className="flex gap-5 text-slate-300">
                <Phone className="text-prestige-gold shrink-0 mt-1" size={22} />
                <span className="font-bold text-xl">056 3781234</span>
              </li>
              <li className="flex gap-5 text-slate-300">
                <Mail className="text-prestige-gold shrink-0 mt-1" size={22} />
                <span className="font-light">admissions@laescuela.pk</span>
              </li>
            </ul>
          </div>

          {/* Location / Map Placeholder */}
          <div>
            <h3 className="text-xl font-bold mb-8 text-prestige-gold uppercase tracking-widest text-sm">Campus Map</h3>
            <div className="rounded-[2rem] overflow-hidden bg-white/5 h-56 border border-white/10 relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108522.61864147748!2d73.91619869680327!3d31.714481745269783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191d92d473456f%3A0xc6a8f103d3c7c25c!2sSheikhupura%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1709565000000!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(1) invert(1) contrast(1.2)' }} 
                allowFullScreen={true} 
                loading="lazy" 
                title="Campus Location"
              ></iframe>
              <a href="https://maps.google.com" target="_blank" className="absolute inset-0 bg-midnight/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity backdrop-blur-[2px]">
                <button className="px-5 py-2 bg-white text-midnight font-bold rounded-full text-sm flex items-center gap-2">
                  Open in Maps <ExternalLink size={14} />
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 text-center">
          <p className="text-slate-500 font-medium tracking-widest text-xs uppercase">
            © {new Date().getFullYear()} LA ESCUELA PRESTIGE BYPASS CAMPUS. PRIVACY SECURED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
