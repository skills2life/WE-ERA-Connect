import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface BoardMember {
  id: number;
  name: string;
  role: string;
  school: string;
  bio: string;
  image: string;
  objectPosition?: string;
  specialistTitle?: string;
}

interface AdvisoryBoardSliderProps {
  members: BoardMember[];
  title?: React.ReactNode;
  subtitle?: string;
  subtitleClassName?: string;
}

export function AdvisoryBoardSlider({ members, title, subtitle, subtitleClassName }: AdvisoryBoardSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  // We want to determine the number of visible cards to prevent empty space at the end
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
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalMembers);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered, totalMembers]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalMembers) % totalMembers);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalMembers);
  };

  // Get the visible slice of members, repeating items at the end to create a seamless loop
  const getVisibleMembers = () => {
    const list = [];
    for (let i = 0; i < visibleCards; i++) {
      const index = (currentIndex + i) % totalMembers;
      list.push(members[index]);
    }
    return list;
  };

  return (
    <div 
      className="relative mt-6 p-6 px-4 md:px-12 rounded-[2.5rem] border border-white/10 bg-slate-900/20 backdrop-blur-xl overflow-hidden group shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="flex flex-col items-center text-center mb-4 gap-1.5 relative z-10">
        <h2 className="text-xl xs:text-2xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight sm:whitespace-nowrap whitespace-normal">
          {title || (
            <>
              Esteemed <span className="text-brand font-black">Advisory Board</span>
            </>
          )}
        </h2>
        {subtitle && (
          <p className={`text-slate-400 font-light max-w-full sm:whitespace-nowrap whitespace-normal pb-1 ${subtitleClassName || "text-xs sm:text-sm md:text-base"}`}>
            {subtitle}
          </p>
        )}
      </div>

      {/* Prominent Visible Side Arrow - Left */}
      <div className="absolute left-3 lg:left-6 top-[55%] -translate-y-1/2 z-20 hidden sm:block">
        <span className="absolute -inset-1.5 rounded-full border border-brand/30 animate-pulse pointer-events-none" />
        <button
          onClick={handlePrev}
          className="relative w-12 h-12 rounded-full border-2 border-brand/80 bg-slate-950/90 backdrop-blur-md flex items-center justify-center text-brand hover:text-slate-950 hover:bg-brand hover:border-transparent shadow-[0_0_15px_rgba(251,191,36,0.3)] hover:scale-110 active:scale-95 transition-all duration-300 shrink-0 cursor-pointer"
          aria-label="Previous board member"
        >
          <ChevronLeft size={24} />
        </button>
      </div>

      {/* Prominent Visible Side Arrow - Right */}
      <div className="absolute right-3 lg:right-6 top-[55%] -translate-y-1/2 z-20 hidden sm:block">
        <span className="absolute -inset-1.5 rounded-full border border-brand/30 animate-pulse pointer-events-none" />
        <button
          onClick={handleNext}
          className="relative w-12 h-12 rounded-full border-2 border-brand/80 bg-slate-950/90 backdrop-blur-md flex items-center justify-center text-brand hover:text-slate-950 hover:bg-brand hover:border-transparent shadow-[0_0_15px_rgba(251,191,36,0.3)] hover:scale-110 active:scale-95 transition-all duration-300 shrink-0 cursor-pointer"
          aria-label="Next board member"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Slider Viewport */}
      <div 
        className="relative overflow-hidden w-full z-10"
      >
        <div 
          className="grid gap-4 transition-all duration-500 ease-in-out"
          style={{
            gridTemplateColumns: `repeat(${visibleCards}, minmax(0, 1fr))`,
          }}
        >
          {getVisibleMembers().map((member, idx) => (
            <motion.div
              key={`${member.id}-${currentIndex}-${idx}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="flex flex-col p-3 rounded-2xl bg-slate-950/60 border border-white/5 hover:border-brand/25 transition-all duration-300 shadow-xl group/card relative overflow-hidden"
            >
              {/* Card Background glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Avatar Frame - Compact, full-width aspect ratio */}
              <div className="w-full aspect-square sm:aspect-[4/3.8] rounded-xl overflow-hidden border border-white/10 bg-slate-900 relative mb-3">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                  style={{ objectPosition: member.objectPosition || "50% 15%" }}
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Text content - highlighting school, name, designation (Centrally Aligned!) */}
              <div className="space-y-1 px-1 pb-1 relative z-10 text-center">
                <span className="text-[17px] font-mono font-black text-brand uppercase tracking-wider block mb-0.5">
                  {member.school}
                </span>
                <h4 className="text-[19px] font-display font-bold text-white group-hover/card:text-brand transition-colors">
                  {member.name}
                </h4>
                <p className="text-[16px] text-slate-400 font-medium leading-relaxed">
                  {member.specialistTitle || member.role}
                </p>
              </div>
            </motion.div>
          ))}
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

      <div className="hidden sm:flex justify-center gap-1 mt-4 relative z-10">
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
  );
}

