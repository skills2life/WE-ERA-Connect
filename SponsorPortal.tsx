import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Handshake, 
  Sparkles, 
  ArrowRight,
  Mail,
  Download,
  Trophy,
  Cpu,
  Blocks,
  Leaf,
  Lightbulb,
  Landmark,
  Tent,
  Globe,
  Gem,
  Flower,
  Shirt,
  Briefcase,
  Store,
  Music,
  CreditCard,
  ShoppingBag,
  Presentation,
  Search,
  CheckCircle2,
  Bot,
  GraduationCap,
  Radio,
  Gamepad2,
  Building2,
  Building,
  TrendingUp,
  Activity,
  Plane
} from 'lucide-react';

interface SponsorPortalProps {
  navigateAndScroll: (
    targetId: string, 
    preSelectCategory?: string, 
    preSelectSubject?: string, 
    preSelectMessage?: string
  ) => void;
}

const sponsorshipPackages = [
  { id: "1", category: "Title Partner", description: "Elite summit-wide anchor representation.", availability: 1, icon: Trophy, color: "text-amber-400 border-amber-500/30", status: "WIP" },
  { id: "2", category: "Pillar 1 - WE-Dubai Declaration (AI Commitment)", description: "Driving the core academic and technology track.", availability: 1, icon: Cpu, color: "text-emerald-400 border-emerald-500/30", status: "WIP" },
  { id: "3", category: "Technology Partner", description: "Enabling next-gen EdTech infrastructure.", availability: 1, icon: Blocks, color: "text-blue-400 border-blue-500/30", status: "WIP" },
  { id: "4", category: "Pillar 2 - Green Quotient (Sustainability Partner)", description: "Anchoring environmental legacy and eco-metrics.", availability: 1, icon: Leaf, color: "text-green-400 border-green-500/30", status: "WIP" },
  { id: "5", category: "Pillar 3 - WE-Shark (Innovation Partner)", description: "Incubating pitch winners and funding ideas.", availability: 1, icon: Lightbulb, color: "text-purple-400 border-purple-500/30", status: "WIP" },
  { id: "6", category: "Pillar 4 - WE-Grant (Finance / Banking Partner)", description: "Financial governance and school grant distribution.", availability: 1, icon: Landmark, color: "text-yellow-400 border-yellow-500/30", status: "WIP" },
  { id: "7", category: "Pavilion Partners", description: "Exclusive brand placement across summit arenas.", availability: 10, icon: Tent, color: "text-cyan-400 border-cyan-500/30", reserved: 4 },
  { id: "8", category: "India-UAE Cohort Partner", description: "Supporting cross-border educational exchange.", availability: 1, icon: Globe, color: "text-orange-400 border-orange-500/30", status: "WIP" },
  { id: "9", category: "WE-Ramp - Zone Partner", description: "Sponsoring the signature runway segment.", availability: 1, icon: Sparkles, color: "text-pink-400 border-pink-500/30" },
  { id: "9.1", category: "WE-Ramp - Jewelry Partner", sub: true, description: "Exclusive accessories on the runway.", availability: 1, icon: Gem, color: "text-pink-400/80 border-pink-500/20" },
  { id: "9.2", category: "WE-Ramp - Beauty & Wellness Partner", sub: true, description: "Styling and wellness representation.", availability: 1, icon: Flower, color: "text-pink-400/80 border-pink-500/20" },
  { id: "9.3", category: "WE-Ramp - Clothing Partner", sub: true, description: "High-fashion couture integration.", availability: 1, icon: Shirt, color: "text-pink-400/80 border-pink-500/20" },
  { id: "9.4", category: "WE-Ramp - Accessory Partner", sub: true, description: "Curated brand assets on stage.", availability: 1, icon: Briefcase, color: "text-pink-400/80 border-pink-500/20" },
  { id: "10", category: "WE-Ramp – Zone Brand Outlets", description: "Bespoke storefronts in the media-heavy zone.", availability: 10, icon: Store, color: "text-indigo-400 border-indigo-500/30", reserved: 4 },
  { id: "11", category: "The Gala Dinner and Musical Night", description: "Presenting sponsor of the grand evening social.", availability: 1, icon: Music, color: "text-rose-400 border-rose-500/30" },
  { id: "12", category: "Badges & Lanyard Partner", description: "Universal brand footprint on every attendee.", availability: 1, icon: CreditCard, color: "text-teal-400 border-teal-500/30" },
  { id: "13", category: "Conference Bag Partner", description: "High-utility premium summit accessories.", availability: 1, icon: ShoppingBag, color: "text-amber-500 border-amber-600/30", status: "WIP" },
  { id: "14", category: "Exhibition Stall", description: "Dedicated booths in the interactive expo hall.", availability: 50, icon: Presentation, color: "text-slate-400 border-slate-500/30", reserved: 11 },
  { id: "15", category: "Brand Kiosks", description: "High-traffic compact informational spaces.", availability: 75, icon: Presentation, color: "text-slate-400 border-slate-500/30", reserved: 7 }
];

export default function SponsorPortal({ navigateAndScroll }: SponsorPortalProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeIndustryTab, setActiveIndustryTab] = useState(0);

  const filteredPackages = sponsorshipPackages.filter(pkg => 
    pkg.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pkg.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDownloadOverview = () => {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>WE-ERA Connect 2027 — Sponsorship Opportunities</title>
  <style>
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      background-color: #030712;
      color: #f3f4f6;
      margin: 0;
      padding: 40px 20px;
      display: flex;
      justify-content: center;
    }
    .container {
      max-width: 900px;
      width: 100%;
      background: linear-gradient(145deg, #0b1120 0%, #030712 100%);
      border: 1px solid rgba(251, 191, 36, 0.25);
      border-radius: 32px;
      padding: 48px;
      box-shadow: 0 25px 70px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.05);
    }
    .header {
      text-align: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      padding-bottom: 36px;
      margin-bottom: 36px;
    }
    .logo {
      font-size: 32px;
      font-weight: 900;
      letter-spacing: 2px;
      color: #ffffff;
      margin: 0 0 8px 0;
      text-transform: uppercase;
    }
    .logo span {
      color: #fbbf24;
    }
    .tagline {
      color: #fbbf24;
      font-size: 20px;
      font-weight: 700;
      letter-spacing: 0.5px;
      margin: 12px 0 0 0;
    }
    .intro {
      font-size: 15px;
      line-height: 1.65;
      color: #9ca3af;
      margin-bottom: 24px;
    }
    h2 {
      color: #ffffff;
      font-size: 24px;
      border-left: 4px solid #fbbf24;
      padding-left: 14px;
      margin-top: 40px;
      margin-bottom: 24px;
      font-weight: 800;
    }
    table {
      width: 100%;
      border-collapse: separate;
      border-spacing: 0;
      margin-top: 24px;
      font-size: 14px;
      border-radius: 16px;
      overflow: hidden;
      border: 1px solid rgba(255, 255, 255, 0.08);
    }
    th {
      background-color: #111827;
      color: #fbbf24;
      font-weight: 700;
      text-align: left;
      padding: 16px 20px;
      text-transform: uppercase;
      font-size: 11px;
      letter-spacing: 1.5px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }
    td {
      padding: 16px 20px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      color: #e5e7eb;
    }
    tr:last-child td {
      border-bottom: none;
    }
    tr:hover {
      background-color: rgba(251, 191, 36, 0.03);
    }
    .sub-row {
      background-color: rgba(251, 191, 36, 0.01);
    }
    .sub-row td {
      padding-left: 40px;
      color: #9ca3af;
    }
    .center-text {
      text-align: center;
    }
    .badge {
      background: rgba(251, 191, 36, 0.08);
      color: #fbbf24;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 700;
      border: 1px solid rgba(251, 191, 36, 0.2);
    }
    .badge-reserved {
      background: rgba(239, 68, 68, 0.08);
      color: #f87171;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 700;
      border: 1px solid rgba(239, 68, 68, 0.2);
    }
    .footer {
      margin-top: 48px;
      text-align: center;
      font-size: 13px;
      color: #6b7280;
      border-top: 1px solid rgba(255,255,255,0.08);
      padding-top: 24px;
    }
    .contact-btn {
      display: inline-block;
      background-color: #fbbf24;
      color: #030712;
      text-decoration: none;
      padding: 14px 32px;
      border-radius: 14px;
      font-weight: bold;
      font-size: 14px;
      margin-top: 16px;
      transition: all 0.3s ease;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .contact-btn:hover {
      background-color: #ffffff;
      box-shadow: 0 0 25px rgba(251, 191, 36, 0.4);
      transform: translateY(-1px);
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">WE-ERA <span>Connect</span> 2027</div>
      <div class="tagline">Sponsorship Opportunities Overview</div>
    </div>
    
    <p class="intro">
      At WE-ERA Connect 2027, we don't just host events; we build ecosystems. As a corporate partner, your organization steps into a high-visibility arena alongside top-tier women educational leaders, ministry specialists, and global innovators who are actively executing the UAE’s national vision for AI, sustainability, and educational advancement.
    </p>

    <h2>Tailored Corporate Partnerships</h2>
    <p class="intro">
      We offer bespoke sponsorship architectures designed to align flawlessly with your organization’s Goals, Vision, Corporate Social Responsibility (CSR), and corporate narrative.
    </p>

    <table>
      <thead>
        <tr>
          <th style="width: 80px;">#</th>
          <th>Sponsorship Category</th>
          <th style="width: 150px; text-align: center;">Reserved</th>
          <th style="width: 150px; text-align: center;">Availability</th>
        </tr>
      </thead>
      <tbody>
        <tr class="main-row">
          <td>1</td>
          <td><strong>Title Partner</strong></td>
          <td class="center-text">-</td>
          <td class="center-text"><span class="badge">1 Only</span></td>
        </tr>
        <tr class="main-row">
          <td>2</td>
          <td>Pillar 1 - WE-Dubai Declaration (AI Commitment)</td>
          <td class="center-text">-</td>
          <td class="center-text"><span class="badge">1 Only</span></td>
        </tr>
        <tr class="main-row">
          <td>3</td>
          <td>Technology Partner</td>
          <td class="center-text">-</td>
          <td class="center-text"><span class="badge">1 Only</span></td>
        </tr>
        <tr class="main-row">
          <td>4</td>
          <td>Pillar 2 - Green Quotient (Sustainability Partner)</td>
          <td class="center-text">-</td>
          <td class="center-text"><span class="badge">1 Only</span></td>
        </tr>
        <tr class="main-row">
          <td>5</td>
          <td>Pillar 3 - WE-Shark (Innovation Partner)</td>
          <td class="center-text">-</td>
          <td class="center-text"><span class="badge">1 Only</span></td>
        </tr>
        <tr class="main-row">
          <td>6</td>
          <td>Pillar 4 - WE-Grant (Finance / Banking Partner)</td>
          <td class="center-text">-</td>
          <td class="center-text"><span class="badge">1 Only</span></td>
        </tr>
        <tr class="main-row">
          <td>7</td>
          <td>Pavilion Partners</td>
          <td class="center-text"><span class="badge-reserved">4 Reserved</span></td>
          <td class="center-text"><span class="badge">10 Available</span></td>
        </tr>
        <tr class="main-row">
          <td>8</td>
          <td>India-UAE Cohort Partner</td>
          <td class="center-text">-</td>
          <td class="center-text"><span class="badge">1 Only</span></td>
        </tr>
        <tr class="main-row">
          <td>9</td>
          <td><strong>WE-Ramp - Zone Partner</strong></td>
          <td class="center-text">-</td>
          <td class="center-text"><span class="badge">1 Only</span></td>
        </tr>
        <tr class="sub-row">
          <td>9.1</td>
          <td>↳ WE-Ramp - Jewelry Partner</td>
          <td class="center-text">-</td>
          <td class="center-text"><span class="badge">1 Only</span></td>
        </tr>
        <tr class="sub-row">
          <td>9.2</td>
          <td>↳ WE-Ramp - Beauty & Wellness Partner</td>
          <td class="center-text">-</td>
          <td class="center-text"><span class="badge">1 Only</span></td>
        </tr>
        <tr class="sub-row">
          <td>9.3</td>
          <td>↳ WE-Ramp - Clothing Partner</td>
          <td class="center-text">-</td>
          <td class="center-text"><span class="badge">1 Only</span></td>
        </tr>
        <tr class="sub-row">
          <td>9.4</td>
          <td>↳ WE-Ramp - Accessory Partner</td>
          <td class="center-text">-</td>
          <td class="center-text"><span class="badge">1 Only</span></td>
        </tr>
        <tr class="main-row">
          <td>10</td>
          <td>WE-Ramp – Zone Brand Outlets</td>
          <td class="center-text"><span class="badge-reserved">4 Reserved</span></td>
          <td class="center-text"><span class="badge">10 Available</span></td>
        </tr>
        <tr class="main-row">
          <td>11</td>
          <td>The Gala Dinner and Musical Night</td>
          <td class="center-text">-</td>
          <td class="center-text"><span class="badge">1 Only</span></td>
        </tr>
        <tr class="main-row">
          <td>12</td>
          <td>Badges & Lanyard Partner</td>
          <td class="center-text">-</td>
          <td class="center-text"><span class="badge">1 Only</span></td>
        </tr>
        <tr class="main-row">
          <td>13</td>
          <td>Conference Bag Partner</td>
          <td class="center-text">-</td>
          <td class="center-text"><span class="badge">1 Only</span></td>
        </tr>
        <tr class="main-row">
          <td>14</td>
          <td>Exhibition Stall</td>
          <td class="center-text"><span class="badge-reserved">11 Reserved</span></td>
          <td class="center-text"><span class="badge">50 Available</span></td>
        </tr>
        <tr class="main-row">
          <td>15</td>
          <td>Brand Kiosks</td>
          <td class="center-text"><span class="badge-reserved">7 Reserved</span></td>
          <td class="center-text"><span class="badge">75 Available</span></td>
        </tr>
      </tbody>
    </table>

    <div class="footer">
      <p>Connect with our Brand Alliance team to request a partnership brochure at <strong>corporate@we-eraconnect.com</strong></p>
      <a href="mailto:corporate@we-eraconnect.com" class="contact-btn">Email Brand Alliance</a>
    </div>
  </div>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'WE-ERA_Connect_2027_Sponsorship_Opportunities.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleInquire = (packageName: string) => {
    const subject = `Partnership Inquiry: ${packageName}`;
    const message = `Dear WE-ERA Connect Committee,

We are highly interested in exploring the "${packageName}" corporate sponsorship opportunity for WE-ERA Connect 2027.

Please send us the detailed partnership specifications and scheduling slots for our executive briefing.

Brand/Organization Name: 
Contact Person: 
Designation: 
Corporate Website: 

Sincerely,
[Your Team Name]`;

    navigateAndScroll('contact', 'Sponsorship Interest', subject, message);
  };

  return (
    <section id="sponsors-portal" className="py-5 px-4 border-b border-white/5 bg-slate-950/40 relative overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-amber-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-6">
          
          {/* Header & Vision Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-3 text-left">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-brand/5">
                  <span className="text-sm sm:text-base lg:text-[19px] leading-relaxed font-normal text-slate-300">Inquire About Sponsorship</span>
                </div>
                <h2 className="text-[31px] font-display font-bold text-white tracking-tight leading-tight">
                  Partner with <span className="text-brand font-black text-[31px]">WE-ERA CONNECT 2027</span>
                </h2>
                <p className="text-sm sm:text-base lg:text-[19px] leading-relaxed text-[#e7f5f9] font-normal pt-0.5 block">
                  Whether your organization is driving the frontier of Artificial Intelligence, scaling Net Zero 2050 climate tech, or piloting venture philanthropy, this is your high-visibility arena.
                </p>
              </div>
            </div>

            {/* Right Action Column */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative p-4 rounded-[1.5rem] border border-brand/20 bg-slate-900/60 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col gap-3"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand to-transparent" />
                
                <div className="text-left relative z-10 flex flex-col gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-brand shrink-0">
                      <Handshake size={16} />
                    </div>
                    <h4 className="text-sm sm:text-base lg:text-[18px] font-bold" style={{ color: '#edd242' }}>
                      Sponsorship Inquiry:
                    </h4>
                  </div>
                  
                  <p className="text-xs sm:text-sm lg:text-[16px] leading-relaxed text-[#e7f5f9] font-normal">
                    Connect with our Brand Alliance team at<br className="hidden sm:block" />
                    <a href="mailto:corporate@we-eraconnect.com" className="text-brand hover:underline font-medium">corporate@we-eraconnect.com</a> to schedule an executive briefing call.
                  </p>
                </div>

                {/* Integrated Download Partnership Deck Link */}
                <div className="border-t border-white/10 pt-3 relative z-10">
                  <button
                    onClick={handleDownloadOverview}
                    className="group flex items-center justify-between p-2.5 px-3.5 rounded-[1rem] border border-white/5 bg-slate-950/40 hover:bg-slate-950/70 hover:border-brand/40 transition-all duration-300 cursor-pointer text-left w-full gap-3"
                  >
                    <div>
                      <p className="text-xs sm:text-sm lg:text-[16px] leading-relaxed text-[#e7f5f9] font-medium group-hover:text-brand transition-colors">
                        Download Sponsorship Deck
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-brand/15 text-brand flex items-center justify-center group-hover:bg-brand group-hover:text-slate-950 transition-all duration-300 shrink-0">
                      <Download size={14} className="group-hover:scale-110 transition-transform" />
                    </div>
                  </button>
                </div>

                <div className="absolute -bottom-20 -right-20 w-48 h-48 rounded-full border border-brand/5 pointer-events-none" />
              </motion.div>
            </div>

          </div>

          {/* Creative Categorized Sectors & Ecosystem Partners Grid - Now Full Width spanned in one line */}
          <div className="space-y-4 pt-4 border-t border-white/5 text-left">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
              <h4 className="text-[17px] font-mono font-black text-brand uppercase tracking-wider">
                Target Sectors & Ecosystem Partners
              </h4>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  category: "Deep Tech & Media",
                  icon: Cpu,
                  items: [
                    "Artificial Intelligence (AI)",
                    "Technology & Hardware",
                    "Telecommunications",
                    "Gaming & Interactive",
                    "Media & Entertainment",
                    "Publishing"
                  ]
                },
                {
                  category: "Finance & Capital",
                  icon: Landmark,
                  items: [
                    "Venture Capital & PE",
                    "Sovereign Wealth Funds",
                    "Banking & Insurance",
                    "Corporate Conglomerates",
                    "Real Estate & Assets"
                  ]
                },
                {
                  category: "Green Tech & Health",
                  icon: Leaf,
                  items: [
                    "Green Tech & Energy",
                    "ESG & CSR",
                    "Pharma & Healthcare"
                  ]
                },
                {
                  category: "Lifestyle & Education",
                  icon: Gem,
                  items: [
                    "Luxury & Lifestyle",
                    "Beauty & Wellness",
                    "Designer Clothing",
                    "Footwear & Accessories",
                    "Hospitality & Aviation",
                    "EdTech & Curriculum",
                    "Higher Education"
                  ]
                }
              ].map((cat, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-2xl border border-white/5 bg-slate-900/30 backdrop-blur-md hover:border-brand/40 hover:bg-slate-900/50 transition-all duration-300 group flex flex-col"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 rounded-lg bg-brand/10 border border-brand/20 text-brand flex items-center justify-center shrink-0 group-hover:bg-brand group-hover:text-slate-950 transition-all duration-300">
                      <cat.icon size={13} />
                    </div>
                    <h5 className="font-mono text-sm font-black text-brand tracking-wider uppercase group-hover:text-white transition-colors">
                      {cat.category}
                    </h5>
                  </div>
                  <div className="flex flex-col gap-2 pl-0.5">
                    {cat.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-center gap-2 group/item">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover/item:bg-brand transition-colors shrink-0" />
                        <span className="text-sm sm:text-base lg:text-[17px] leading-relaxed text-slate-300 group-hover/item:text-white transition-colors">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Opportunities Interactive Table */}
          <div className="space-y-6">
            <div className="flex flex-col items-center justify-center text-center gap-4 border-b border-white/5 pb-6">
              <h3 className="text-2xl md:text-3xl font-display font-bold tracking-tight text-white">Sponsorship Overview</h3>
            </div>

            {/* Table Container - Desktop view hidden on mobile */}
            <div className="hidden sm:block overflow-y-auto max-h-[460px] rounded-3xl border border-white/5 bg-slate-900/40 backdrop-blur-md scrollbar-thin scrollbar-thumb-brand/20 scrollbar-track-transparent">
              <table className="w-full border-collapse text-left table-fixed">
                <thead className="sticky top-0 z-10">
                  <tr className="border-b border-white/10 bg-slate-950/90 backdrop-blur-md text-brand font-mono text-[11px] sm:text-xs tracking-wider uppercase">
                    <th className="py-3.5 px-4 w-10 font-semibold text-slate-500">#</th>
                    <th className="py-3.5 px-2 w-10"></th>
                    <th className="py-3.5 px-4 w-1/3 font-semibold">Sponsorship Category</th>
                    <th className="py-3.5 px-4 w-1/3 font-semibold">Design Scope / Impact</th>
                    <th className="py-3.5 px-4 w-32 text-center font-semibold">Availability</th>
                    <th className="py-3.5 px-4 w-32 text-center font-semibold">Status</th>
                    <th className="py-3.5 px-4 w-28 text-right font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {filteredPackages.map((pkg) => {
                    const Icon = pkg.icon;
                    return (
                      <tr 
                        key={pkg.id} 
                        className={`transition-colors duration-200 hover:bg-white/[0.02] ${
                          pkg.sub ? "bg-slate-950/20" : ""
                        }`}
                      >
                        <td className="py-3.5 px-4 font-mono text-xs text-slate-500 font-semibold">
                          {pkg.id}
                        </td>
                        <td className="py-3.5 px-2">
                          <div className={`w-7 h-7 rounded-lg border flex items-center justify-center bg-slate-950/60 ${pkg.color}`}>
                            <Icon size={12} />
                          </div>
                        </td>
                        <td className="py-3.5 px-4">
                          <div className={`text-xs sm:text-sm font-medium text-white break-words ${pkg.sub ? "pl-3" : ""}`}>
                            {pkg.sub && <span className="text-pink-500/50 mr-1.5">↳</span>}
                            {pkg.category}
                          </div>
                        </td>
                        <td className="py-3.5 px-4">
                          <div className="text-xs sm:text-sm font-normal text-slate-300 break-words">
                            {pkg.description}
                          </div>
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          <span className={`text-[11px] font-semibold inline-block px-2 py-0.5 rounded-full border text-center ${
                            pkg.availability === 1 
                              ? "bg-amber-500/10 border-amber-500/30 text-amber-400" 
                              : pkg.availability <= 10 
                                ? "bg-teal-500/10 border-teal-500/30 text-teal-400"
                                : "bg-slate-800 border-white/10 text-slate-300"
                          }`}>
                            {pkg.availability === 1 ? "1 Only" : `${pkg.availability} Available`}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          {pkg.status === "WIP" ? (
                            <span className="text-[11px] font-semibold inline-block px-2 py-0.5 rounded-full border bg-purple-950/40 border-purple-500/30 text-purple-300 text-center">
                              WIP
                            </span>
                          ) : pkg.reserved ? (
                            <span className="text-[11px] font-semibold inline-block px-2 py-0.5 rounded-full border bg-rose-500/10 border-rose-500/25 text-rose-300 text-center">
                              {pkg.reserved} Reserved
                            </span>
                          ) : (
                            <span className="text-xs text-slate-500 font-mono block text-center">-</span>
                          )}
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <button
                            onClick={() => handleInquire(pkg.category)}
                            className="text-[10px] sm:text-xs uppercase tracking-wider px-2.5 py-1 rounded border border-brand/30 hover:border-transparent bg-brand/5 hover:bg-brand text-brand hover:text-slate-950 transition-all duration-200 cursor-pointer text-center font-semibold"
                          >
                            Inquire
                          </button>
                        </td>
                      </tr>
                    );
                  })}

                  {filteredPackages.length === 0 && (
                    <tr>
                      <td colSpan={7} className="py-6 text-center text-slate-500 font-light text-xs">
                        No sponsorship categories matched your search filters.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards View - Shown only on mobile screens */}
            <div className="flex flex-col gap-4 sm:hidden max-h-[500px] overflow-y-auto pr-1">
              {filteredPackages.map((pkg) => {
                const Icon = pkg.icon;
                return (
                  <div 
                    key={pkg.id} 
                    className={`p-4 rounded-2xl border bg-slate-900/60 transition-colors duration-200 ${
                      pkg.sub ? "border-white/5 bg-slate-950/20 pl-6" : "border-white/10"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-lg border flex items-center justify-center bg-slate-950/60 ${pkg.color} shrink-0`}>
                           <Icon size={14} />
                        </div>
                        <div>
                          <span className="font-mono text-xs text-slate-500 font-semibold block">#{pkg.id}</span>
                          <h4 className="text-sm font-semibold text-white block">
                            {pkg.sub && <span className="text-pink-500/50 mr-1">↳</span>}
                            {pkg.category}
                          </h4>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-xs text-slate-300 leading-relaxed font-normal mb-3 pl-1 block">
                      {pkg.description}
                    </p>
                    
                    <div className="flex items-center justify-between gap-2 border-t border-white/5 pt-3">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className={`text-[11px] font-semibold inline-block px-2.5 py-0.5 rounded-full border ${
                          pkg.availability === 1 
                            ? "bg-amber-500/10 border-amber-500/30 text-amber-400" 
                            : pkg.availability <= 10 
                              ? "bg-teal-500/10 border-teal-500/30 text-teal-400"
                              : "bg-slate-800 border-white/10 text-slate-300"
                        }`}>
                          {pkg.availability === 1 ? "1 Only" : `${pkg.availability} Avail`}
                        </span>
                        {pkg.status === "WIP" ? (
                          <span className="text-[11px] font-semibold inline-block px-2.5 py-0.5 rounded-full border bg-purple-950/40 border-purple-500/30 text-purple-300">
                            WIP
                          </span>
                        ) : pkg.reserved ? (
                          <span className="text-[11px] font-semibold inline-block px-2.5 py-0.5 rounded-full border bg-rose-500/10 border-rose-500/25 text-rose-300">
                            {pkg.reserved} Res
                          </span>
                        ) : null}
                      </div>
                      
                      <button
                        onClick={() => handleInquire(pkg.category)}
                        className="text-[10px] sm:text-xs uppercase tracking-wider px-3 py-1.5 rounded border border-brand/30 bg-brand/5 hover:bg-brand text-brand hover:text-slate-950 transition-all duration-200 cursor-pointer font-semibold"
                      >
                        Inquire
                      </button>
                    </div>
                  </div>
                );
              })}
              
              {filteredPackages.length === 0 && (
                <div className="py-8 text-center text-slate-500 font-light text-xs">
                  No sponsorship categories matched your search filters.
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
