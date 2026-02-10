
import React from 'react';
import { X, FileText, Download, PhoneCall, HelpCircle, ShieldCheck } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InquiryModal: React.FC<InquiryModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-midnight/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-2xl rounded-[2.5rem] overflow-hidden relative shadow-[0_50px_100px_rgba(0,0,0,0.5)] animate-in zoom-in duration-500">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-slate-50 hover:bg-slate-100 rounded-full transition-colors z-10"
        >
          <X size={24} className="text-midnight" />
        </button>

        <div className="p-10 md:p-16">
          <div className="text-center mb-12">
            <div className="w-16 h-16 gradient-gold rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg shadow-prestige-gold/20">
              <ShieldCheck size={32} />
            </div>
            <h2 className="text-4xl font-serif text-midnight mb-3">Institutional Inquiry</h2>
            <p className="text-slate-500 font-medium">Access detailed prospectus and financial structures.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-prestige-gold transition-all cursor-pointer group hover:shadow-xl hover:shadow-slate-200/50">
              <FileText className="text-prestige-gold mb-6 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-2xl font-bold text-midnight mb-3">Fee Structure 2025</h3>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed">Comprehensive breakdown of all academic and facility fees for the 2025-26 session.</p>
              <button className="flex items-center gap-2 text-prestige-gold font-black text-xs uppercase tracking-widest">
                <Download size={18} /> View Document
              </button>
            </div>

            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-prestige-gold transition-all cursor-pointer group hover:shadow-xl hover:shadow-slate-200/50">
              <HelpCircle className="text-prestige-gold mb-6 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-2xl font-bold text-midnight mb-3">Admissions Q&A</h3>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed">Common questions regarding the entry test and scholarship protocols.</p>
              <button className="flex items-center gap-2 text-prestige-gold font-black text-xs uppercase tracking-widest">
                Explore Portal <Download className="rotate-270" size={18} />
              </button>
            </div>
          </div>

          <div className="mt-12 p-8 gradient-midnight rounded-[2rem] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="flex items-center gap-5 text-center md:text-left">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20">
                <PhoneCall size={24} className="text-prestige-gold" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-prestige-gold font-black">Executive Helpline</p>
                <p className="text-2xl font-bold tracking-tight">056 3781234</p>
              </div>
            </div>
            <button className="w-full md:w-auto px-10 py-4 gradient-gold text-midnight font-black rounded-full text-sm hover:brightness-110 transition-all uppercase tracking-widest">
              Direct Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquiryModal;
