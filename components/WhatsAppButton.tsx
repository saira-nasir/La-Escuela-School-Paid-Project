
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const handleWhatsAppClick = () => {
    // Replace with actual school phone number
    window.open('https://wa.me/923001234567?text=Hello,%20I%20am%20interested%20in%20admissions%20at%20La%20Escuela%20School.', '_blank');
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] group">
      {/* Tooltip */}
      <div className="absolute right-full mr-6 top-1/2 -translate-y-1/2 px-5 py-3 bg-midnight text-white text-xs tracking-widest uppercase font-black rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap border-r-4 border-prestige-gold">
        Chat with Admissions
      </div>
      
      {/* Pulse Effect Background */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25"></div>
      
      <button 
        onClick={handleWhatsAppClick}
        className="relative bg-green-500 text-white p-5 rounded-full shadow-[0_20px_50px_rgba(34,197,94,0.4)] hover:bg-green-600 transition-all transform hover:scale-110 flex items-center justify-center border-2 border-white/20"
      >
        <MessageCircle size={32} />
      </button>
    </div>
  );
};

export default WhatsAppButton;
