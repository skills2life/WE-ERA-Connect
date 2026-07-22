import React, { useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface Organiser {
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

interface OrganisingTeamPageProps {
  onBack: () => void;
  organisingTeamData: Organiser[];
}

export function OrganisingTeamPage({ onBack, organisingTeamData }: OrganisingTeamPageProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -480, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 480, behavior: "smooth" });
    }
  };

  return (
    <div id="organising-team-page-container" className="pt-16 pb-12 px-6 max-w-7xl mx-auto space-y-2">
      {/* Compact Elegant Title Header with Breadcrumbs & Top controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-2 border-b border-white/5 gap-4 mb-2">
        <div className="space-y-1">
          {/* Compact breadcrumb inline */}
          <div className="flex items-center gap-2 text-xs font-mono mb-1">
            <button 
              id="back-to-summit-btn"
              onClick={onBack}
              className="text-slate-400 hover:text-brand transition-colors font-bold cursor-pointer bg-transparent"
            >
              Summit
            </button>
            <span className="text-slate-600">/</span>
            <span className="text-brand font-semibold">Organizing Committee</span>
          </div>
          
          <h1 className="text-2xl md:text-4xl font-display font-bold text-white tracking-tight">
            Meet the Organizing Committee
          </h1>
        </div>
      </div>

      {/* Team Portfolio Slider Row with Flanking Legacy Navigation Controls */}
      <div className="relative w-full py-2">
        {/* Absolute Flanking Left navigation arrow (Pillars style) */}
        <div className="absolute -left-8 lg:-left-16 top-1/2 -translate-y-1/2 z-30 hidden md:block">
          <span className="absolute -inset-2.5 rounded-full border border-brand/30 animate-pulse pointer-events-none" />
          <button
            onClick={scrollLeft}
            className="relative w-16 h-16 lg:w-20 lg:h-20 rounded-full border-2 border-brand/80 bg-slate-950/90 backdrop-blur-md flex items-center justify-center text-brand hover:text-slate-950 hover:bg-brand hover:border-transparent shadow-[0_0_25px_rgba(251,191,36,0.35)] hover:shadow-[0_0_40px_rgba(251,191,36,0.6)] hover:scale-110 active:scale-95 transition-all duration-300 shrink-0 cursor-pointer"
            aria-label="Previous Profile"
          >
            <ChevronLeft size={34} />
          </button>
        </div>

        {/* Absolute Flanking Right navigation arrow (Pillars style) */}
        <div className="absolute -right-8 lg:-right-16 top-1/2 -translate-y-1/2 z-30 hidden md:block">
          <span className="absolute -inset-2.5 rounded-full border border-brand/30 animate-pulse pointer-events-none" />
          <button
            onClick={scrollRight}
            className="relative w-16 h-16 lg:w-20 lg:h-20 rounded-full border-2 border-brand/80 bg-slate-950/90 backdrop-blur-md flex items-center justify-center text-brand hover:text-slate-950 hover:bg-brand hover:border-transparent shadow-[0_0_25px_rgba(251,191,36,0.35)] hover:shadow-[0_0_40px_rgba(251,191,36,0.6)] hover:scale-110 active:scale-95 transition-all duration-300 shrink-0 cursor-pointer"
            aria-label="Next Profile"
          >
            <ChevronRight size={34} />
          </button>
        </div>

        {/* Dynamic ambient dark background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-brand/5 blur-[120px] rounded-full pointer-events-none" />

        {/* Scroll Container of Cards */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-none px-2 py-4 relative z-10"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {organisingTeamData.map((member) => (
            <div 
              key={member.id}
              className="w-[calc(100vw-2.5rem)] xs:w-[300px] sm:w-[460px] md:w-[560px] shrink-0 p-6 md:p-8 rounded-[2.25rem] bg-slate-900/50 border border-white/5 hover:border-brand/20 transition-all text-left shadow-2xl relative"
            >
              {/* Header inside the card */}
              <div className="mb-4">
                <span className="inline-block px-2.5 py-1 rounded bg-brand/10 border border-brand/25 text-[15px] sm:text-[17px] font-mono font-black text-brand uppercase tracking-wider mb-2">
                  {member.category}
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight">{member.name}</h3>
                <p className="text-base sm:text-lg md:text-xl text-slate-400 font-medium leading-relaxed mt-1">{member.role}</p>
                {member.subtitle && member.subtitle !== member.role && (
                  <p className="text-sm sm:text-base text-amber-200/80 font-medium font-sans mt-1.5 italic">{member.subtitle}</p>
                )}
              </div>

              {/* Float-wrapping bio layout */}
              <div className="flow-root">
                {/* Photo container floating left on sm+ screens, stacked on mobile */}
                <div className="w-full sm:w-[180px] md:w-[220px] aspect-[4/3] sm:aspect-[3/4] sm:float-left sm:mr-5 sm:mb-4 mb-4 sm:mb-0 rounded-2xl overflow-hidden border border-white/10 bg-slate-950 relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: member.objectPosition || "50% 15%" }}
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Bio flowing and wrapping around / under image */}
                <p className="pillar-uniform-text text-white whitespace-pre-line block">
                  {member.bio}
                </p>
              </div>

              {/* Deliverables/Strategic Mandate box placed securely below */}
              <div className="clear-both mt-6 p-4 rounded-xl bg-slate-950/80 border border-white/5 space-y-1">
                <span className="pillar-uniform-text text-slate-500 uppercase tracking-widest block font-semibold">Strategic Mandate:</span>
                <p className="pillar-uniform-text text-slate-300 block">{member.responsibility}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
