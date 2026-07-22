import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, X, Sparkles, Award } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  subtitle?: string;
  category: string;
  image: string;
  bio: string;
  responsibility: string;
  objectPosition?: string;
}

interface OrganisingTeamSliderProps {
  members: TeamMember[];
}

export function OrganisingTeamSlider({ members }: OrganisingTeamSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalMembers = members.length;

  // Auto-slide effect when not hovered
  useEffect(() => {
    if (isHovered || selectedMember) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalMembers);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered, selectedMember, totalMembers]);

  // We keep the slider stationary by default so that Chairperson Ms. Pooja Sedani is always prominently in focus first.
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalMembers) % totalMembers);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalMembers);
  };

  const getVisibleMembers = () => {
    const list = [];
    for (let i = 0; i < visibleCards; i++) {
      const index = (currentIndex + i) % totalMembers;
      list.push(members[index]);
    }
    return list;
  };

  return (
    <section 
      id="organising-team" 
      className="py-12 px-4 md:px-6 border-b border-white/5 bg-slate-950/40 relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background radial glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-brand/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Compact Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-3 tracking-tight text-white">
            Meet the <span className="text-brand font-black">Organizing Committee</span>
          </h2>
        </div>

        {/* Slider Frame */}
        <div className="relative px-4 sm:px-12">
          {/* Side navigation arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-[50%] -translate-y-1/2 z-20 hidden sm:flex w-10 h-10 rounded-full border border-brand/60 bg-slate-950/90 backdrop-blur-md items-center justify-center text-brand hover:text-slate-950 hover:bg-brand hover:border-transparent transition-all duration-300 shadow-lg cursor-pointer animate-pulse hover:animate-none"
            aria-label="Previous Team Member"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-[50%] -translate-y-1/2 z-20 hidden sm:flex w-10 h-10 rounded-full border border-brand/60 bg-slate-950/90 backdrop-blur-md items-center justify-center text-brand hover:text-slate-950 hover:bg-brand hover:border-transparent transition-all duration-300 shadow-lg cursor-pointer animate-pulse hover:animate-none"
            aria-label="Next Team Member"
          >
            <ChevronRight size={20} />
          </button>

          {/* Viewport */}
          <div className="overflow-hidden w-full">
            <div 
              className="grid gap-4 transition-all duration-500 ease-in-out"
              style={{
                gridTemplateColumns: `repeat(${visibleCards}, minmax(0, 1fr))`,
              }}
            >
              {getVisibleMembers().map((member, idx) => (
                <motion.div
                  key={`${member.id}-${currentIndex}-${idx}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="flex flex-col justify-between p-3.5 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-brand/25 hover:border-brand/55 transition-all duration-300 shadow-[0_0_20px_rgba(251,191,36,0.04)] hover:shadow-[0_0_30px_rgba(251,191,36,0.12)] group/card relative overflow-hidden"
                >
                  {/* Executive council tag token */}
                  <div className="absolute top-2.5 right-2.5 z-20 px-2 py-0.5 rounded bg-brand/10 border border-brand/35 text-[8px] font-mono font-black text-brand uppercase tracking-wider">
                    Executive Council
                  </div>

                  {/* Subtle hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="space-y-2.5">
                    {/* Compact Image */}
                    <div className="w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-slate-900 relative">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                        style={{ objectPosition: member.objectPosition || "50% 15%" }}
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Content */}
                    <div className="space-y-1 px-1 pb-1 relative z-10 text-center">
                      <span className="text-[17px] font-mono font-black text-brand uppercase tracking-wider block mb-0.5">
                        {member.category}
                      </span>
                      <h4 className="text-[19px] font-display font-bold text-white group-hover/card:text-brand transition-colors">
                        {member.name}
                      </h4>
                      <p className="text-[16px] text-slate-400 font-medium leading-relaxed">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Know More Button */}
                  <div className="pt-2.5 mt-3 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider">Committee</span>
                    <button
                      onClick={() => setSelectedMember(member)}
                      className="px-2.5 py-1 rounded bg-brand/10 hover:bg-brand text-brand hover:text-slate-950 border border-brand/30 hover:border-transparent font-mono text-[9px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-1"
                    >
                      <span>Know More</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Slide Navigation Dots / Mobile Navigation */}
        <div className="flex sm:hidden items-center justify-center gap-4 mt-5 relative z-10">
          <button
            onClick={handlePrev}
            className="w-9 h-9 rounded-full border border-brand/40 bg-slate-900 text-brand flex items-center justify-center transition-all duration-300 cursor-pointer"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={16} className="stroke-[2.5]" />
          </button>
          <div className="flex gap-1.5">
            {members.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx ? "w-6 bg-brand" : "w-1.5 bg-white/20"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          <button
            onClick={handleNext}
            className="w-9 h-9 rounded-full border border-brand/40 bg-slate-900 text-brand flex items-center justify-center transition-all duration-300 cursor-pointer"
            aria-label="Next Slide"
          >
            <ChevronRight size={16} className="stroke-[2.5]" />
          </button>
        </div>

        <div className="hidden sm:flex justify-center gap-1 mt-3">
          {members.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentIndex(idx);
              }}
              className="p-3.5 -m-2 transition-all duration-300 cursor-pointer group"
              title={`Slide ${idx + 1}`}
            >
              <div className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === idx 
                  ? 'w-6 bg-brand' 
                  : 'w-1.5 bg-white/30 group-hover:bg-white/50'
              }`} />
            </button>
          ))}
        </div>
      </div>

      {/* Full Profile Modal (Know More) - Designed to fit in ONE screen perfectly */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-2xl bg-slate-900 border border-white/10 rounded-[2rem] p-5 md:p-6 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col justify-between"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors cursor-pointer bg-slate-950/60 p-1.5 rounded-full z-20"
                aria-label="Close Modal"
              >
                <X size={16} />
              </button>

              <div className="space-y-4 overflow-y-auto pr-1 scrollbar-thin">
                {/* Header (Top Info) */}
                <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start border-b border-white/5 pb-3">
                  {/* Photo */}
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden border border-white/10 bg-slate-950 shrink-0">
                    <img 
                      src={selectedMember.image} 
                      alt={selectedMember.name} 
                      className="w-full h-full object-cover"
                      style={{ objectPosition: selectedMember.objectPosition || "50% 15%" }}
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Profile Name & Title */}
                  <div className="text-center sm:text-left space-y-1">
                    <span className="inline-block px-2.5 py-1 rounded bg-brand/10 border border-brand/25 text-[14px] font-mono font-black text-brand uppercase tracking-wider mb-1">
                      {selectedMember.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight">
                      {selectedMember.name}
                    </h3>
                    <p className="text-[17px] text-slate-400 font-medium leading-relaxed mt-0.5">
                      {selectedMember.role}
                    </p>
                    {selectedMember.subtitle && selectedMember.subtitle !== selectedMember.role && (
                      <p className="text-sm text-amber-200/80 font-medium font-sans mt-1.5 italic">
                        {selectedMember.subtitle}
                      </p>
                    )}
                  </div>
                </div>

                {/* Bio text (Clean, highly legible) */}
                <div className="space-y-2">
                  <h5 className="text-[10px] font-mono text-brand uppercase tracking-widest font-black">Biography</h5>
                  <p className="pillar-uniform-text text-slate-300 whitespace-pre-line block">
                    {selectedMember.bio}
                  </p>
                </div>

                {/* Strategic Mandate / Responsibility */}
                <div className="p-3 rounded-xl bg-slate-950/80 border border-white/5 space-y-1">
                  <div className="flex items-center gap-1.5">
                    <Award size={12} className="text-brand" />
                    <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest font-bold">Strategic Mandate</span>
                  </div>
                  <p className="pillar-uniform-text text-slate-300 block">
                    {selectedMember.responsibility}
                  </p>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between">
                <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider">WE-ERA Connect 2027</span>
                <button
                  onClick={() => setSelectedMember(null)}
                  className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-mono text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
