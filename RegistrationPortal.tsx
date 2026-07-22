import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  Mail, 
  Phone, 
  Building, 
  User, 
  Sparkles, 
  Calendar, 
  MapPin, 
  Clock, 
  QrCode, 
  Printer, 
  Download, 
  Share2, 
  CheckCircle2, 
  BellRing
} from "lucide-react";
import { saveRegistration } from "../lib/firebase";

interface RegistrationPortalProps {
  onBack: () => void;
  preSelectedPass?: string;
}

export default function RegistrationPortal({ onBack }: RegistrationPortalProps) {
  React.useEffect(() => {
    // Force scroll to top on mount so the portal is visible in one glance
    window.scrollTo({ top: 0, behavior: "instant" as any });
    // Fallback scroll to ensure it works across all browsers/layouts
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    affiliation: "",
    country: ""
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [queueNumber, setQueueNumber] = useState(0);
  const [referenceId, setReferenceId] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = "Full Name is required.";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "A valid professional email ID is required.";
    }
    if (!formData.phone.trim()) errors.phone = "Contact mobile number is required.";
    if (!formData.affiliation.trim()) errors.affiliation = "School, university, or institution is required.";
    if (!formData.country.trim()) errors.country = "Country is required.";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    
    // Generate priority details
    const ref = "WE-PRE-" + Math.floor(100000 + Math.random() * 900000);
    const queue = Math.floor(1400 + Math.random() * 250);

    setTimeout(async () => {
      try {
        await saveRegistration({
          name: formData.name,
          email: formData.email,
          category: "Pre-Registration Interest",
          passType: "queue",
          paymentStatus: "pending",
          paymentMethod: "pre_register",
          amount: 0,
          transactionId: ref,
          cardholderName: `${formData.affiliation} - ${formData.phone} - ${formData.country}`
        });

        setQueueNumber(queue);
        setReferenceId(ref);
        setSubmitted(true);
      } catch (err) {
        console.error("Firestore save pre-registration error:", err);
        setQueueNumber(queue);
        setReferenceId(ref);
        setSubmitted(true);
      } finally {
        setSubmitting(false);
      }
    }, 1500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-[90vh] bg-slate-950 text-white relative overflow-hidden py-3 px-4 md:px-8 font-sans">
      {/* Absolute Ambient Background Lights */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand/10 blur-[150px] rounded-full opacity-40 pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-amber-500/5 blur-[120px] rounded-full opacity-35 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Navigation & Secure Status Row */}
        <div className="flex items-center justify-between mb-2 border-b border-white/5 pb-1.5">
          <button 
            id="back-home-register-btn"
            onClick={onBack}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-brand transition-colors cursor-pointer group"
          >
            <ChevronLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" /> Back to Hub
          </button>
        </div>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="pre-register-form"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-4 text-left"
            >
              {/* Header Box */}
              <div className="text-center max-w-4xl mx-auto mb-1">
                <h1 className="text-[14px] xs:text-[17px] sm:text-2xl md:text-3xl font-display font-black tracking-tight leading-tight whitespace-nowrap overflow-hidden text-ellipsis px-1">
                  Official Registration <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-amber-200 to-amber-400">Opening Soon</span>
                </h1>
              </div>

              {/* Form Card */}
              <div className="max-w-2xl mx-auto">
                {/* Main Form Fields */}
                <form onSubmit={handleSubmit} className="w-full bg-slate-900/35 border border-white/5 p-3 md:p-6 rounded-2xl backdrop-blur-md space-y-3">
                  <div className="border-b border-white/5 pb-2">
                    <h3 className="font-bold text-white text-sm sm:text-lg" style={{ fontFamily: 'Inter' }}>Priority Registration Form</h3>
                    <p className="block text-[10px] sm:text-xs text-slate-400 mt-0.5" style={{ fontFamily: 'Inter' }}>All fields marked with an asterisk (*) are required to pre-register your interest.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2.5">
                    {/* Name */}
                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1" style={{ fontFamily: 'Inter' }}>
                        Full Name <span className="text-brand">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g. Dr. Aisha Al Suwaidi"
                          className={`w-full pl-9 pr-4 py-1.5 sm:py-2.5 rounded-xl bg-slate-950 border text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all ${
                            formErrors.name ? "border-red-500/50" : "border-white/10"
                          }`}
                          style={{ fontFamily: 'Inter' }}
                        />
                        <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                      </div>
                      {formErrors.name && <span className="text-[10px] text-red-400 mt-0.5 block">{formErrors.name}</span>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1" style={{ fontFamily: 'Inter' }}>
                        Professional Email ID <span className="text-brand">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="aisha.suwaidi@zu.ac.ae"
                          className={`w-full pl-9 pr-4 py-1.5 sm:py-2.5 rounded-xl bg-slate-950 border text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all ${
                            formErrors.email ? "border-red-500/50" : "border-white/10"
                          }`}
                          style={{ fontFamily: 'Inter' }}
                        />
                        <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                      </div>
                      {formErrors.email && <span className="text-[10px] text-red-400 mt-0.5 block">{formErrors.email}</span>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1" style={{ fontFamily: 'Inter' }}>
                        Mobile Number <span className="text-brand">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+971 50 123 4567"
                          className={`w-full pl-9 pr-4 py-1.5 sm:py-2.5 rounded-xl bg-slate-950 border text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all ${
                            formErrors.phone ? "border-red-500/50" : "border-white/10"
                          }`}
                          style={{ fontFamily: 'Inter' }}
                        />
                        <Phone size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                      </div>
                      {formErrors.phone && <span className="text-[10px] text-red-400 mt-0.5 block">{formErrors.phone}</span>}
                    </div>

                    {/* School/Affiliation */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1" style={{ fontFamily: 'Inter' }}>
                        School, University, or Institution <span className="text-brand">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="affiliation"
                          required
                          value={formData.affiliation}
                          onChange={handleInputChange}
                          placeholder="Zayed University, Dubai"
                          className={`w-full pl-9 pr-4 py-1.5 sm:py-2.5 rounded-xl bg-slate-950 border text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all ${
                            formErrors.affiliation ? "border-red-500/50" : "border-white/10"
                          }`}
                          style={{ fontFamily: 'Inter' }}
                        />
                        <Building size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                      </div>
                      {formErrors.affiliation && <span className="text-[10px] text-red-400 mt-0.5 block">{formErrors.affiliation}</span>}
                    </div>

                    {/* Country */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1" style={{ fontFamily: 'Inter' }}>
                        Country <span className="text-brand">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="country"
                          required
                          value={formData.country}
                          onChange={handleInputChange}
                          placeholder="e.g. United Arab Emirates"
                          className={`w-full pl-9 pr-4 py-1.5 sm:py-2.5 rounded-xl bg-slate-950 border text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all ${
                            formErrors.country ? "border-red-500/50" : "border-white/10"
                          }`}
                          style={{ fontFamily: 'Inter' }}
                        />
                        <MapPin size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                      </div>
                      {formErrors.country && <span className="text-[10px] text-red-400 mt-0.5 block">{formErrors.country}</span>}
                    </div>
                  </div>

                  {/* Submission and info security footer */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3 border-t border-white/5 mt-3">
                    
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full sm:w-auto px-6 py-2.5 bg-brand hover:bg-amber-400 text-slate-950 font-black rounded-full flex items-center justify-center gap-2 hover:scale-[1.03] transition-all duration-300 shadow-[0_0_20px_rgba(251,191,36,0.3)] cursor-pointer disabled:opacity-50 text-[11px] uppercase tracking-wider font-sans shrink-0"
                    >
                      {submitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-3 w-3 text-slate-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Securing Spot...
                        </>
                      ) : (
                        <>
                          PRE-REGISTER NOW <ChevronRight size={13} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="pre-register-success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="max-w-xl mx-auto space-y-8"
            >
              {/* Confetti Animation & Success Graphics */}
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-2">
                  <Check size={40} className="stroke-[3.5] animate-bounce" />
                </div>
                <h2 className="text-2xl md:text-4xl font-display font-black tracking-tight text-white leading-tight">
                  Priority Spot Secured!
                </h2>
                <p className="pillar-uniform-text text-slate-400 max-w-md mx-auto block">
                  Thank you for pre-registering. You are now placed on our exclusive early-access queue list. <br />
                  A dedicated event advisor will reach out to you as soon as official bookings go live.
                </p>
              </div>

              {/* Digital Priority Badge/Pass */}
              <div id="priority-pass-print" className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-2xl overflow-hidden text-left select-none max-w-sm mx-auto">
                {/* Decorative glows */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl" />
                
                <div className="relative h-full flex flex-col justify-between space-y-6">
                  {/* Top segment */}
                  <div className="flex justify-between items-start border-b border-white/5 pb-4">
                    <div>
                      <span className="text-[7px] font-mono tracking-widest text-slate-500 uppercase block">WE-ERA Connect 2027</span>
                      <span className="text-xs font-black text-brand uppercase tracking-wider">DUBAI SYMPOSIUM</span>
                    </div>
                    <span className="text-[10px] font-mono font-black italic bg-white/5 border border-white/10 px-2.5 py-1 rounded text-white">
                      VIP QUEUE
                    </span>
                  </div>

                  {/* Body Info segment */}
                  <div className="space-y-4">
                    <div>
                      <span className="text-[7px] font-bold text-slate-500 uppercase tracking-widest block mb-0.5">PRIORITY MEMBER</span>
                      <p className="text-base font-bold text-white leading-tight">{formData.name}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <span className="text-[7px] font-bold text-slate-500 uppercase tracking-widest block mb-0.5">INSTITUTION</span>
                        <p className="text-xs font-semibold text-slate-200 truncate">{formData.affiliation}</p>
                      </div>
                      <div>
                        <span className="text-[7px] font-bold text-slate-500 uppercase tracking-widest block mb-0.5">COUNTRY</span>
                        <p className="text-xs font-semibold text-slate-200 truncate">{formData.country}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-1">
                      <div>
                        <span className="text-[7px] font-bold text-slate-500 uppercase tracking-widest block mb-0.5">QUEUE NUMBER</span>
                        <p className="text-xs font-mono font-bold text-emerald-400">#{queueNumber}</p>
                      </div>
                      <div>
                        <span className="text-[7px] font-bold text-slate-500 uppercase tracking-widest block mb-0.5">REFERENCE ID</span>
                        <p className="text-xs font-mono font-bold text-brand">{referenceId}</p>
                      </div>
                    </div>
                  </div>

                  {/* QR code and scan bottom segment */}
                  <div className="border-t border-white/5 pt-4 flex items-center justify-between">
                    <div className="space-y-0.5">
                      <span className="text-[7px] font-bold text-slate-500 uppercase tracking-widest block">PASS SECURITY</span>
                      <p className="text-[9px] text-slate-350 font-medium">Valid for Dubai Pre-Release</p>
                    </div>
                    <div className="w-12 h-12 bg-white rounded-lg p-1 flex items-center justify-center">
                      <QrCode size={40} className="text-slate-950" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Success Action buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="w-full py-3 px-5 border border-white/10 hover:border-brand/30 hover:bg-brand/5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-1.5 text-slate-300"
                >
                  <Printer size={14} /> Print Confirmation
                </button>
                
                <button
                  type="button"
                  onClick={onBack}
                  className="w-full py-3 px-6 bg-brand text-slate-950 font-black rounded-xl text-xs font-sans uppercase tracking-widest hover:bg-amber-400 transition-colors cursor-pointer flex items-center justify-center gap-1"
                >
                  Return to Main Hub <ChevronRight size={14} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
