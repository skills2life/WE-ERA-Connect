import React from "react";
import { ArrowRight, Star, Shield, Landmark } from "lucide-react";

interface BoardMember {
  id: number | string;
  name: string;
  role: string;
  school: string;
  bio: string;
  image: string;
  objectPosition?: string;
  specialistTitle?: string;
}

interface AdvisoryBoardPageProps {
  onBack: () => void;
  advisoryBoardMembers: BoardMember[];
}

export function AdvisoryBoardPage({ onBack, advisoryBoardMembers }: AdvisoryBoardPageProps) {
  return (
    <div id="advisory-board-page-container" className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-16">
      {/* breadcrumb & back button */}
      <div className="flex flex-wrap items-center gap-2 md:gap-4">
        <button 
          id="back-to-summit-btn"
          onClick={onBack}
          className="px-5 py-2.5 rounded-full border border-white/10 hover:border-brand/45 hover:bg-slate-900 text-slate-350 hover:text-white transition-all text-sm font-bold flex items-center gap-2 cursor-pointer bg-transparent"
        >
          <ArrowRight className="rotate-180 text-brand" size={16} /> Back to Summit
        </button>
        <span className="text-slate-500">/</span>
        <span className="text-brand font-semibold text-sm font-mono">Advisory Board Committee</span>
      </div>

      {/* Hero Banner */}
      <div id="board-hero-banner" className="relative rounded-[2rem] sm:rounded-[3rem] overflow-hidden border border-white/5 bg-slate-900 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-12 p-5 sm:p-8 md:p-12 items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-brand/5 pointer-events-none" />
        <div className="lg:col-span-7 space-y-6 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand/20 bg-brand/5 text-xs font-semibold text-brand">
            <Star size={14} /> Global Advisory Council
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-light text-white leading-none tracking-tight">
            Summit <br />
            <span className="text-brand font-black">Advisory Board</span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed font-light">
            Our esteemed Advisory Board comprises global pioneers and sovereign leaders in educational policy, digital learning infrastructure, and sustainable development. Their collective wisdom drives strategic alignment and ensures high academic rigor.
          </p>
          <div className="flex flex-wrap gap-8 pt-4">
            <div>
              <p className="text-3xl font-display font-black text-brand">9</p>
              <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">Sovereign Advisors</p>
            </div>
            <div>
              <p className="text-3xl font-display font-black text-white">4+</p>
              <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">Represented Districts</p>
            </div>
            <div>
              <p className="text-3xl font-display font-black text-brand">100%</p>
              <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">Strategic Alignment</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="absolute inset-0 bg-amber-500/10 blur-2xl rounded-2xl pointer-events-none" />
          <div className="p-8 rounded-3xl bg-slate-950 border border-white/10 space-y-4">
            <div className="flex gap-4">
              <Shield className="text-brand shrink-0 mt-0.5" size={20} />
              <div>
                <h4 className="text-white font-bold text-sm font-sans">Strategic Alignment</h4>
                <p className="text-slate-400 text-xs font-light leading-relaxed font-sans">Steering high-impact educational parameters and national curriculum integration protocols.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Landmark className="text-brand shrink-0 mt-0.5" size={20} />
              <div>
                <h4 className="text-white font-bold text-sm font-sans">Institutional Governance</h4>
                <p className="text-slate-400 text-xs font-light leading-relaxed font-sans">Providing regulatory stewardship and deep compliance reviews across participating networks.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advisory Board Grid */}
      <div id="advisory-board-directory" className="space-y-8">
        <h2 className="text-3xl font-display font-bold text-white tracking-tight text-center">Board Portfolios</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advisoryBoardMembers.map((member) => (
            <div 
              key={member.id}
              className="p-4 rounded-3xl bg-slate-900/60 border border-white/5 hover:border-brand/25 transition-all duration-300 shadow-xl group/card relative overflow-hidden"
            >
              {/* Card Background glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Avatar Frame - Increased size, full-width aspect ratio */}
              <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-slate-950 relative mb-4">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                  style={{ objectPosition: member.objectPosition || "50% 15%" }}
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Text content - highlighting school, name, designation */}
              <div className="space-y-1.5 px-1 pb-2 relative z-10 text-center">
                <span className="text-[17px] font-mono font-black text-brand uppercase tracking-wider block">
                  {member.school}
                </span>
                <h3 className="text-[19px] font-display font-bold text-white group-hover/card:text-brand transition-colors">
                  {member.name}
                </h3>
                <p className="text-[16px] text-slate-400 font-medium leading-relaxed">
                  {member.specialistTitle || member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
