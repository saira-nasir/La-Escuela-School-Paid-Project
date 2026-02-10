
import React, { useState } from 'react';
import { Send, User, Book, Phone, Mail, CheckCircle, ShieldCheck, Lock, Sparkles, Loader2, AlertCircle } from 'lucide-react';

const AdmissionPortal: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isFocused, setIsFocused] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    studentName: '',
    grade: '',
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    comments: ''
  });

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.studentName.trim()) newErrors.studentName = "Student name is required";
    if (!formData.grade) newErrors.grade = "Please select a grade";
    if (!formData.parentName.trim()) newErrors.parentName = "Guardian name is required";
    
    const phoneRegex = /^03\d{9}$/;
    if (!formData.parentPhone.match(phoneRegex)) {
      newErrors.parentPhone = "Enter valid 11-digit number (03XXXXXXXXX)";
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.parentEmail.match(emailRegex)) {
      newErrors.parentEmail = "Please enter a valid email address";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real-world enterprise processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Data would be sent to a CRM or Lead management system here
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  if (submitted) {
    return (
      <div className="py-32 bg-ivory flex flex-col items-center justify-center text-center px-4 animate-in fade-in zoom-in duration-700">
        <div className="w-32 h-32 bg-white rounded-[2.5rem] flex items-center justify-center text-green-500 mb-10 shadow-2xl border border-green-50">
          <CheckCircle size={64} className="animate-bounce" />
        </div>
        <h2 className="text-5xl md:text-6xl font-serif text-midnight mb-6">Legacy Initiated.</h2>
        <p className="text-slate-500 max-w-xl mx-auto mb-12 text-xl font-light leading-relaxed">
          Your credentials have been encrypted and queued for review by the 
          <span className="text-midnight font-bold"> Executive Admissions Board</span>. 
          A representative will contact you at <span className="text-prestige-gold font-bold underline decoration-prestige-gold/20">{formData.parentPhone}</span> within 24 hours.
        </p>
        <button 
          onClick={() => {
            setSubmitted(false);
            setFormData({ studentName: '', grade: '', parentName: '', parentEmail: '', parentPhone: '', comments: '' });
          }}
          className="px-12 py-5 gradient-midnight text-white rounded-full font-black tracking-widest uppercase text-xs hover:scale-105 transition-all shadow-2xl"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <section className="py-32 bg-ivory relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-prestige-gold/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] bg-midnight/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row shadow-[0_80px_150px_-30px_rgba(10,25,47,0.3)] rounded-[3.5rem] overflow-hidden border border-white bg-white group/portal">
          
          {/* Left Panel */}
          <div className="w-full lg:w-[40%] gradient-midnight p-12 lg:p-20 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.1] pointer-events-none">
              <div className="absolute inset-0 animate-pulse-slow" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%23C5A059' fill-rule='evenodd'/%3E%3C/svg%3E")` }}></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-12">
                <div className="px-5 py-2 bg-prestige-gold/10 border border-prestige-gold/30 rounded-full flex items-center gap-2 backdrop-blur-md">
                  <Lock size={14} className="text-prestige-gold" />
                  <span className="text-[10px] font-black tracking-[0.3em] uppercase text-prestige-gold">Institutional Security</span>
                </div>
              </div>

              <h2 className="text-5xl lg:text-7xl font-serif mb-10 leading-[1.1]">
                Entry <br />
                <span className="text-prestige-gold italic">Portal</span>
              </h2>
              
              <p className="text-slate-300 mb-16 text-xl font-light leading-relaxed max-w-sm">
                Reserve your legacy for the <span className="text-white font-bold">2025-2026</span> session. 
                Our executive board personally reviews every digital application.
              </p>
              
              <div className="space-y-12">
                <div className="flex items-start gap-8">
                  <div className="p-4 bg-white/5 rounded-3xl border border-white/10 text-prestige-gold shadow-2xl">
                    <ShieldCheck size={32} />
                  </div>
                  <div>
                    <h4 className="font-bold text-2xl mb-1">Board Review</h4>
                    <p className="text-slate-400 font-medium">Priority assessment by campus leadership.</p>
                  </div>
                </div>
                <div className="flex items-start gap-8">
                  <div className="p-4 bg-white/5 rounded-3xl border border-white/10 text-prestige-gold shadow-2xl">
                    <Sparkles size={32} />
                  </div>
                  <div>
                    <h4 className="font-bold text-2xl mb-1">Premier Access</h4>
                    <p className="text-slate-400 font-medium">Direct notification for entry tests and campus events.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative z-10 mt-20 p-8 bg-white/[0.04] rounded-[2.5rem] border border-white/10 backdrop-blur-xl">
              <div className="flex items-center gap-5 mb-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-prestige-gold/40">
                  <img src="https://i.pravatar.cc/150?u=b" alt="Parent" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-white font-bold">Dr. Arman Khan</p>
                  <p className="text-[10px] text-prestige-gold font-black uppercase tracking-widest">Alumni Parent</p>
                </div>
              </div>
              <p className="text-slate-300 italic font-light leading-relaxed">
                "The enrollment process was as sophisticated as the education itself. Truly world-class."
              </p>
            </div>
          </div>

          {/* Form Panel */}
          <div className="w-full lg:w-[60%] p-10 lg:p-20 bg-white relative">
            <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
              <div className="flex flex-col gap-3 mb-12">
                <h3 className="text-3xl font-serif text-midnight font-bold">Application Details</h3>
                <div className="w-16 h-1.5 gradient-gold rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Student Name */}
                <div className="space-y-3">
                  <label className={`text-xs font-black uppercase tracking-[0.3em] transition-colors ${isFocused === 'studentName' ? 'text-prestige-gold' : 'text-slate-400'}`}>
                    Student Name
                  </label>
                  <div className="relative">
                    <User className={`absolute left-5 top-1/2 -translate-y-1/2 transition-colors ${isFocused === 'studentName' ? 'text-prestige-gold' : 'text-slate-300'}`} size={18} />
                    <input 
                      name="studentName"
                      required
                      onFocus={() => setIsFocused('studentName')}
                      onBlur={() => setIsFocused(null)}
                      onChange={handleChange}
                      value={formData.studentName}
                      className={`w-full pl-14 pr-6 py-5 bg-slate-50/50 border rounded-2xl focus:bg-white focus:ring-4 focus:ring-prestige-gold/5 transition-all font-semibold outline-none ${errors.studentName ? 'border-red-300 bg-red-50/20' : 'border-slate-100 focus:border-prestige-gold/40'}`}
                      placeholder="Enter Full Name"
                    />
                    {errors.studentName && <span className="text-[10px] text-red-500 font-bold mt-1 flex items-center gap-1"><AlertCircle size={10} /> {errors.studentName}</span>}
                  </div>
                </div>

                {/* Grade Selection */}
                <div className="space-y-3">
                  <label className={`text-xs font-black uppercase tracking-[0.3em] transition-colors ${isFocused === 'grade' ? 'text-prestige-gold' : 'text-slate-400'}`}>
                    Target Grade
                  </label>
                  <div className="relative">
                    <Book className={`absolute left-5 top-1/2 -translate-y-1/2 transition-colors ${isFocused === 'grade' ? 'text-prestige-gold' : 'text-slate-300'}`} size={18} />
                    <select 
                      name="grade"
                      required
                      onFocus={() => setIsFocused('grade')}
                      onBlur={() => setIsFocused(null)}
                      onChange={handleChange}
                      value={formData.grade}
                      className={`w-full pl-14 pr-6 py-5 bg-slate-50/50 border rounded-2xl focus:bg-white transition-all font-semibold outline-none appearance-none cursor-pointer ${errors.grade ? 'border-red-300' : 'border-slate-100 focus:border-prestige-gold/40'}`}
                    >
                      <option value="">Select Level</option>
                      <option value="EY">Early Years</option>
                      <option value="P1-5">Primary (1-5)</option>
                      <option value="M6-8">Middle (6-8)</option>
                      <option value="OL">Cambridge O-Levels</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">Guardian Name</label>
                  <input 
                    name="parentName"
                    required
                    onChange={handleChange}
                    value={formData.parentName}
                    className={`w-full px-6 py-5 bg-slate-50/50 border rounded-2xl focus:bg-white outline-none font-semibold ${errors.parentName ? 'border-red-300' : 'border-slate-100 focus:border-prestige-gold/40'}`}
                    placeholder="Full Name"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">Primary Contact</label>
                  <input 
                    name="parentPhone"
                    type="tel"
                    required
                    onChange={handleChange}
                    value={formData.parentPhone}
                    className={`w-full px-6 py-5 bg-slate-50/50 border rounded-2xl focus:bg-white outline-none font-semibold ${errors.parentPhone ? 'border-red-300' : 'border-slate-100 focus:border-prestige-gold/40'}`}
                    placeholder="03XXXXXXXXX"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">Email Correspondence</label>
                <div className="relative">
                  <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                  <input 
                    name="parentEmail"
                    type="email"
                    required
                    onChange={handleChange}
                    value={formData.parentEmail}
                    className={`w-full pl-14 pr-6 py-5 bg-slate-50/50 border rounded-2xl focus:bg-white outline-none font-semibold ${errors.parentEmail ? 'border-red-300' : 'border-slate-100 focus:border-prestige-gold/40'}`}
                    placeholder="example@mail.com"
                  />
                </div>
              </div>

              <div className="p-6 bg-slate-50/50 border border-slate-100 rounded-3xl flex items-center gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 shrink-0">
                   <ShieldCheck size={20} />
                </div>
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed">
                  Encryption Active: <span className="text-midnight">Your data is transmitted over a secure, private network protocol.</span>
                </p>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-7 gradient-gold text-midnight font-black rounded-3xl text-xl tracking-[0.2em] uppercase transition-all transform active:scale-95 shadow-[0_20px_60px_-15px_rgba(197,160,89,0.5)] flex items-center justify-center gap-4 ${isSubmitting ? 'opacity-80 cursor-wait' : 'hover:brightness-105 hover:-translate-y-1'}`}
              >
                {isSubmitting ? (
                  <>Initializing Encryption <Loader2 className="animate-spin" size={24} /></>
                ) : (
                  <>Dispatch Application <Send size={24} /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default AdmissionPortal;
