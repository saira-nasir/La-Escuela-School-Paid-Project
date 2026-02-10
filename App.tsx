
import React, { useState } from 'react';
import { 
  ArrowRight,
  ShieldCheck,
  Globe,
  CheckCircle2
} from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Facilities from './components/Facilities';
import PrincipalMessage from './components/PrincipalMessage';
import Testimonials from './components/Testimonials';
import AdmissionPortal from './components/AdmissionPortal';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import InquiryModal from './components/InquiryModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="relative overflow-x-hidden selection:bg-prestige-gold selection:text-white">
      <Header onInquiryClick={toggleModal} />
      
      <main>
        <Hero onApplyClick={() => document.getElementById('admission-portal')?.scrollIntoView({ behavior: 'smooth' })} />
        
        <section className="py-24 bg-ivory relative">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C5A059' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif text-midnight mb-6">Our Legacy of Excellence</h2>
            <div className="w-24 h-1 bg-prestige-gold mx-auto mb-12"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
              <div className="group p-10 bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 transform hover:-translate-y-3 transition-all duration-500">
                <div className="w-16 h-16 gradient-gold rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg shadow-prestige-gold/30">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-midnight mb-4">Academic Integrity</h3>
                <p className="text-slate-600 leading-relaxed">Maintaining the highest standards of educational excellence and global honesty protocols.</p>
              </div>
              
              <div className="group p-10 bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 transform hover:-translate-y-3 transition-all duration-500">
                <div className="w-16 h-16 gradient-gold rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg shadow-prestige-gold/30">
                  <Globe className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-midnight mb-4">Global Perspective</h3>
                <p className="text-slate-600 leading-relaxed">Preparing students to lead in an increasingly interconnected and digital world.</p>
              </div>
              
              <div className="group p-10 bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 transform hover:-translate-y-3 transition-all duration-500">
                <div className="w-16 h-16 gradient-gold rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg shadow-prestige-gold/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-midnight mb-4">Character Building</h3>
                <p className="text-slate-600 leading-relaxed">Fostering empathy, resilience, and executive leadership skills in every child.</p>
              </div>
            </div>
          </div>
        </section>

        <Facilities />
        
        <PrincipalMessage />

        <Testimonials />

        <section id="admission-portal">
          <AdmissionPortal />
        </section>

        <section className="py-24 gradient-midnight text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-prestige-gold/10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -ml-48 -mb-48"></div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif mb-8 max-w-3xl mx-auto leading-tight">Ready to Secure Your Child's Brightest Future?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
              <button 
                onClick={() => document.getElementById('admission-portal')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-5 gradient-gold text-midnight font-bold rounded-full hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-2xl shadow-prestige-gold/20 transform hover:scale-105"
              >
                Start Admission Process <ArrowRight size={22} />
              </button>
              <button 
                onClick={toggleModal}
                className="px-10 py-5 border-2 border-prestige-gold text-prestige-gold font-bold rounded-full hover:bg-prestige-gold hover:text-white transition-all transform hover:scale-105"
              >
                Request Prospectus
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
      <InquiryModal isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  );
};

export default App;
