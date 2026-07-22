import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import SponsorPortal from "./components/SponsorPortal";
import { VideoModal } from "./components/VideoModal";
import { OrganisingTeamSlider } from "./components/OrganisingTeamSlider";
import { OrganisingTeamPage } from "./components/OrganisingTeamPage";
import { AdvisoryBoardPage } from "./components/AdvisoryBoardPage";
import { AdvisoryBoardSlider } from "./components/AdvisoryBoardSlider";
import RegistrationPortal from "./components/RegistrationPortal";
// @ts-ignore
import dubaiDeclarationImg from "./assets/images/regenerated_image_1782991083968.png";
// @ts-ignore
import greenIntelligenceImg from "./assets/images/regenerated_image_1779254893103.png";
// @ts-ignore
import emiratizationScholarshipImg from "./assets/images/regenerated_image_1783343578498.jpg";
// @ts-ignore
import emiratizationScholarshipFlagshipImg from "./assets/images/regenerated_image_1779262047050.png";
// @ts-ignore
import weSharkTankImg from "./assets/images/regenerated_image_1779256167502.png";
// @ts-ignore
import weSharkTankFlagshipImg from "./assets/images/regenerated_image_1779256167502.png";
// @ts-ignore
import poojaSedaniImg from "./assets/images/regenerated_image_1780378885360.jpg";
// @ts-ignore
import nishaVImg from "./assets/images/regenerated_image_1780380263656.jpg";
// @ts-ignore
import vikramAroraImg from "./assets/images/regenerated_image_1780379720324.jpg";
// @ts-ignore
import ganeshVarmaImg from "./assets/images/regenerated_image_1780380066616.jpg";
// @ts-ignore
import highlightKeynoteImg from "./assets/images/regenerated_image_1780386117350.png";
// @ts-ignore
import highlightAccordImg from "./assets/images/regenerated_image_1783324208767.jpg";
// @ts-ignore
import highlightDirectorsImg from "./assets/images/regenerated_image_1783324476031.jpg";
// @ts-ignore
import highlightCpdImg from "./assets/images/regenerated_image_1783325050471.jpg";
// @ts-ignore
import highlightRampImg from "./assets/images/regenerated_image_1782994214992.png";
// @ts-ignore
import highlightPavilionImg from "./assets/images/regenerated_image_1780388386790.png";
// @ts-ignore
import highlightMusicImg from "./assets/images/regenerated_image_1780388616260.png";
// @ts-ignore
import memberFatimaImg from "./assets/images/regenerated_image_1780390178002.png";
// @ts-ignore
import memberAishaImg from "./assets/images/regenerated_image_1780467077126.jpg";
// @ts-ignore
import memberSarahImg from "./assets/images/regenerated_image_1780471069691.png";
// @ts-ignore
import memberSarahNewImg from "./assets/images/regenerated_image_1783417069817.jpg";
// @ts-ignore
import memberAishaNewImg from "./assets/images/regenerated_image_1783417749864.jpg";
// @ts-ignore
import memberGhassanImg from "./assets/images/regenerated_image_1783419359156.jpg";
// @ts-ignore
import memberKennethImg from "./assets/images/regenerated_image_1780467507024.jpg";
// @ts-ignore
import memberElenaImg from "./assets/images/regenerated_image_1780468634894.png";
// @ts-ignore
import memberElenaNewImg from "./assets/images/regenerated_image_1783174019471.jpg";
// @ts-ignore
import memberAshaNewImg2 from "./assets/images/regenerated_image_1783174022761.png";
// @ts-ignore
import memberMariamImg from "./assets/images/regenerated_image_1780553054575.jpg";
// @ts-ignore
import memberLaylaImg from "./assets/images/regenerated_image_1780469250523.jpg";
// @ts-ignore
import memberLaylaNewImg from "./assets/images/regenerated_image_1783174174021.png";
// @ts-ignore
import memberHananNewImg from "./assets/images/regenerated_image_1783174508123.jpg";
// @ts-ignore
import teamHiteshImg from "./assets/images/regenerated_image_1780554381622.jpg";
// @ts-ignore
import heroGalaToastImg from "./assets/images/regenerated_image_1779267365527.png";
// @ts-ignore
import heroConventionClappingImg from "./assets/images/regenerated_image_1779267256464.png";
// @ts-ignore
import heroWeRampCatwalkImg from "./assets/images/we_shark_tank_flagship.png";
// @ts-ignore
import heroEmiratizationFlagshipImg from "./assets/images/emiratization_flagship.png";
// @ts-ignore
import experienceRampImg from "./assets/images/regenerated_image_1779270060642.jpg";
// @ts-ignore
import experienceShowcaseImg from "./assets/images/regenerated_image_1780389512404.png";
// @ts-ignore
import logoImg from "./assets/images/logo.png";
import { 
  saveInquiry,
  saveRegistration,
  saveFellowship,
  savePitch,
  saveEducatorRegistration
} from "./lib/firebase";

import { 
  Calendar, 
  MapPin, 
  Users, 
  Cpu, 
  Leaf, 
  GraduationCap, 
  Rocket, 
  Mic2, 
  Handshake, 
  ShieldCheck, 
  Award, 
  Flame, 
  Music,
  Youtube,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  ChevronLeft,
  Play,
  Pause,
  Globe,
  X,
  Clock,
  Sparkles,
  Mail,
  Phone,
  Send,
  CheckCircle,
  MessageSquare,
  ArrowUp,
  ArrowUpRight,
  CreditCard,
  Lock,
  School,
  Target,
  Network,
  Building
} from "lucide-react";

const heroSlides = [
  {
    image: heroGalaToastImg,
    fallback: heroGalaToastImg,
    alt: "Elegantly dressed female UAE educators and leaders toasting at a grand, gold-themed gala dinner with a panoramic night view of the majestic Burj Khalifa in the background.",
    badge: "Gala Dinner",
    title: "",
    description: "Celebrating the pinnacle of leadership and educational distinction with prominent female delegates sharing the stage in Dubai on a night of unmatched grandeur.",
    objectPosition: "center 15%"
  },
  {
    image: heroConventionClappingImg,
    fallback: heroConventionClappingImg,
    alt: "A massive convention hall filled with thousands of inspiring women leaders and educators clapping and celebrating at the Global Education Convention in Dubai.",
    badge: "5-Star Grand Stage Panel",
    title: "Main Stage Sessions",
    description: "Inspiring 2500+ female leaders, speakers, and school representatives to unite, elevate, and transform educational standards across the region.",
    objectPosition: "center 15%"
  },
  {
    image: dubaiDeclarationImg,
    fallback: dubaiDeclarationImg,
    alt: "WE-Dubai Declaration: The AI Capability Bridge for UAE Women Educators",
    badge: "WE-Dubai Declaration",
    title: "WE-Dubai Declaration",
    description: "Empowering 2,500 UAE Women Educators with complimentary world-class AI training to automate administrative workflows and remote-mentor educators globally.",
    objectPosition: "center 15%"
  },
  {
    image: greenIntelligenceImg,
    fallback: greenIntelligenceImg,
    alt: "WE-Green Quotient: Award AED 1 Million in eco-friendly campus infrastructure to an educator-student duo for the most impactful sustainability initiatives, showing a teacher and student in an eco-greenhouse with solar panels.",
    badge: "WE-Green Quotient",
    title: "WE-Green Quotient",
    description: "Awarding AED 1 Million in eco-friendly campus infrastructure to an educator-student duo for the most impactful sustainability initiatives.",
    objectPosition: "center 15%"
  },
  {
    image: weSharkTankFlagshipImg,
    fallback: weSharkTankImg,
    alt: "WE-Shark: The Ultimate EdTech Pitch Arena",
    badge: "WE-Shark",
    title: "WE-Shark",
    description: "Spotlighting innovative ideas and high-impact educational solutions presented by educators to a panel of expert investors and leaders.",
    objectPosition: "20% 15%"
  },
  {
    image: emiratizationScholarshipImg,
    fallback: emiratizationScholarshipImg,
    alt: "WE-Grant: Emiratization Scholarship Grant",
    badge: "WE-Grant",
    title: "WE-Grant",
    description: "A prestigious funding program to support and empower UAE national educators in pursuing advanced academic and digital excellence.",
    objectPosition: "75% 15%"
  },
  {
    image: heroWeRampCatwalkImg,
    fallback: highlightRampImg,
    alt: "Elite female leaders and academic delegates showcasing elegance and confidence on a grand runway during the high-concept WE-Ramp role model showcase.",
    badge: "WE-Ramp",
    title: "WE-Ramp",
    description: "An exquisite high-concept evening of celebration and inspiration, putting the spotlight on standard-bearers of national educational excellence in an outstanding hotel ballroom.",
    objectPosition: "center 15%"
  }
];

const faqItems = [
  // General Event Details
  {
    category: "General Event Details",
    question: "What is WE-ERA Connect 2027?",
    answer: "It is an action-driven summit bringing together over 2,500 extraordinary women educational leaders to actively shape the future of K-12 education through technology, sustainability, and research."
  },
  {
    category: "General Event Details",
    question: "When and where will the event take place?",
    answer: "The landmark summit will take place in January 2027 in Dubai, UAE."
  },
  {
    category: "General Event Details",
    question: "Who can register for this event?",
    answer: "Registration is open to women in education across all categories: K12 School Owners, Principals, Directors, Teachers, ICT leads, inclusion specialists, early-years/nursery educators, University Representatives and government ministry specialists."
  },
  {
    category: "General Event Details",
    question: "Is WE-ERA Connect 2027 open to international educators?",
    answer: "Yes. The event is a cross-border knowledge exchange. While specific localized prize funds (like the WE-Green Quotient or the WE-Grant) are bound to UAE-accredited institutions or nationals, international delegates are highly welcome to participate in all main-stage sessions, interactive workshops, and the evening runway showcase."
  },
  {
    category: "General Event Details",
    question: "Does the summit assist international attendees with visas and accommodation?",
    answer: "Yes. Once your registration is approved by the committee, you will receive an official Invitation Letter to support your UAE entry visa process."
  },

  // Pillar 01: The WE-Dubai Declaration (AI Training)
  {
    category: "Pillar 01: The WE-Dubai Declaration (AI Training)",
    question: "Can I apply individually for the complimentary AI training?",
    answer: "No, individual teacher applications are not accepted. WE-ERA Connect partners exclusively with visionary institutional school networks and campus leadership across the UAE to nominate their standout faculty members."
  },
  {
    category: "Pillar 01: The WE-Dubai Declaration (AI Training)",
    question: "What is expected of me if I am nominated and accepted?",
    answer: "You will receive fully-funded, world-class AI capability training to safely and ethically automate administrative workflows (lesson planning, grading rubrics, data tracking) and reclaim roughly 30% of your weekly time. To earn your final certification, you will \"pay it forward\" by remote-mentoring a woman educator in an under-resourced global community."
  },
  {
    category: "Pillar 01: The WE-Dubai Declaration (AI Training)",
    question: "What are the selection pathways for this track?",
    answer: "School networks can place nominated educators into one of two tracks based on tech proficiency: Pathway One (The Upskillers) for building foundational AI literacy, or Pathway Two (The Masters) for tech-forward educators ready for advanced digital tools."
  },

  // Pillar 02: WE-Green Quotient (Sustainability)
  {
    category: "Pillar 02: WE-Green Quotient (Sustainability)",
    question: "Who is eligible to participate in the WE-Green Quotient competition?",
    answer: "The competition is open to all accredited K-12 schools in the UAE. It requires an entry from an outstanding Teacher-Student Duo pioneering live, measurable eco-innovations on campus."
  },
  {
    category: "Pillar 02: WE-Green Quotient (Sustainability)",
    question: "What are the submission requirements?",
    answer: "Your duo must submit a Project Summary Document (PDF, max 10MB) outlining the environmental problem and solution with campus photos, a 1-page Data Log tracking real operational metrics (e.g., water saved, waste diverted), and a 1-minute demo video. Entries can be emailed directly to pillars@we-eraconnect.com."
  },
  {
    category: "Pillar 02: WE-Green Quotient (Sustainability)",
    question: "What is the grand prize?",
    answer: "The winning school secures a massive AED 1 Million dedicated capital investment to physically transform its campus into a state-of-the-art, sustainable, carbon-neutral environment."
  },

  // Pillar 03: WE-Shark (Classroom Venture Incubator)
  {
    category: "Pillar 03: WE-Shark (Classroom Venture Incubator)",
    question: "What kind of innovations can be entered into the WE-Shark?",
    answer: "We invite Teacher-Student Duos who have built and actively tested a functional classroom prototype—such as an app, a physical device, or an instructional framework—in a real classroom setting."
  },
  {
    category: "Pillar 03: WE-Shark (Classroom Venture Incubator)",
    question: "How does the selection process work?",
    answer: "Following initial screening, the Top 5 duos enter an intensive 2-week virtual business bootcamp. Finalists then pitch live behind closed doors to an elite panel of corporate CEOs and education leaders, with the 1 winner announced live at the Grand Finale."
  },
  {
    category: "Pillar 03: WE-Shark (Classroom Venture Incubator)",
    question: "If our duo wins, how is the AED 1 Million impact investment distributed?",
    answer: "The capital is strictly managed via a 3-Way Impact Fund Matrix:\n\n40% (AED 400,000): Direct seed capital deployed to refine, manufacture, and commercialize the duo's winning prototype.\n\n30% (AED 300,000): Awarded to the home campus to construct a physical, state-of-the-art WE-Shark Innovation Hub.\n\n30% (AED 300,000): Dedicated funds to manufacture and deploy the winning innovation completely free of cost to under-resourced schools."
  },

  // Pillar 04: WE-Grant (Research Fellowship Pool)
  {
    category: "Pillar 04: WE-Grant (Research Fellowship Pool)",
    question: "What are the eligibility criteria for the PhD Scholarships?",
    answer: "Applicants must possess a minimum of 5 years of K-12 experience, and hold a Master's degree in Education (or a related field) with a minimum cumulative GPA of 3.5."
  },
  {
    category: "Pillar 04: WE-Grant (Research Fellowship Pool)",
    question: "What are the core research areas supported by the grant?",
    answer: "The 5 fully funded PhD scholarships support Emiratisation and are aligned across five strategic tracks:\n\nTrack A: Visionary Governance (Educational Leadership & Policy)\n\nTrack B: Frontier Tech & AI (Educational Technology / STEM)\n\nTrack C: Human-Centric Equity (Special & Inclusive Education)\n\nTrack D: Future-Pedagogy Lab (Curriculum & Instruction)\n\nTrack E: Linguistic Sovereignty (Applied Linguistics / TESOL)"
  },

  // Experiential Feature: WE-Ramp
  {
    category: "Experiential Feature: WE-Ramp",
    question: "Do I have to pitch an academic project to participate in WE-Ramp?",
    answer: "No. WE-Ramp is not a podium presentation; it is a signature experiential runway showcase. For one high-energy evening, the runway belongs exclusively to school principals, leaders, and change-makers to celebrate identity, presence, and executive purpose."
  },

  // Prospective Corporate Sponsors & Government Partners Strategic Alignment & Governance
  {
    category: "Prospective Corporate Sponsors & Government Partners Strategic Alignment & Governance",
    question: "Why should our organization partner with WE-ERA Connect 2027?",
    answer: "Partnering gives your organization direct, premium visibility among 2,500+ top-tier women educational leaders, ministry specialists, and global innovators."
  },
  {
    category: "Prospective Corporate Sponsors & Government Partners Strategic Alignment & Governance",
    question: "Who is managing the execution of this summit and the prize funds?",
    answer: "The summit is steered by a committee of seasoned industry veterans bringing over a century of collective experience."
  },

  // Capital Allocation & Pillar Sponsorship
  {
    category: "Capital Allocation & Pillar Sponsorship",
    question: "How can our brand engage with the AI Commitment (WE-Dubai Declaration)?",
    answer: "Corporate technology partners can fund the digital capability bridge. It serves as a highly visible, metric-driven CSR milestone, as your support directly upskills 2,500 UAE educators and fuels a global pipeline to remote-mentor 2,500 teachers in developing nations."
  },
  {
    category: "Capital Allocation & Pillar Sponsorship",
    question: "What does sponsoring the WE-Green Quotient offer our brand?",
    answer: "Sponsors anchor their brand to a monumental, physical green legacy project that makes national headlines."
  },
  {
    category: "Capital Allocation & Pillar Sponsorship",
    question: "Can corporate executives participate directly in the WE-Shark track?",
    answer: "Yes. Corporate investors who back the WE-Shark incubator gain exclusive invitations to join the Elite Executive Judging Panel."
  },
  {
    category: "Capital Allocation & Pillar Sponsorship",
    question: "What value does the WE-Grant track hold for corporate patron?",
    answer: "By funding one of the 5 doctoral fellowships, corporate patrons directly power regional knowledge-creation, influence national socio-economic policy, and visibly drive the UAE's Emiratization goals."
  },
  {
    category: "Capital Allocation & Pillar Sponsorship",
    question: "Are there non-technical, high-visibility sponsorship option?",
    answer: "Yes, WE-Ramp is the summit's most media-heavy, high-visibility evening segment. Premium headline sponsorships are available for lifestyle, clothing, beauty, and accessory brands seeking exclusive sector styling rights to captivate regional K-12 decision-makers under the media spotlight."
  }
];

const advisoryBoardMembers = [
  {
    id: 6,
    name: "Ms. Nargish Khambatta",
    role: "Director, Sustainable Development",
    school: "GEMS Education",
    bio: "Architecting net-zero sustainable educational facilities and energy-conscious digital workflows.",
    image: memberAshaNewImg2,
    objectPosition: "50% 20%",
    specialistTitle: "Vice President"
  },
  {
    id: 5,
    name: "Dr. Vandana Lulla",
    role: "Chair of Arabic Curricula",
    school: "Podar International School",
    bio: "Advocating for cultural heritage conservation within fast-evolving modern tech-focused schools.",
    image: memberMariamImg,
    objectPosition: "50% 25%",
    specialistTitle: "School Director | Principal"
  },
  {
    id: 7,
    name: "Ms. Asha Alexander",
    role: "Board Member, UAE Educational Trust",
    school: "GEMS Legacy School",
    bio: "Championing equal opportunity access to high-tier science and engineering paths for youth.",
    image: memberLaylaNewImg,
    objectPosition: "50% 20%",
    specialistTitle: "School Principal"
  },
  {
    id: 8,
    name: "Ms. Sonal Pinto",
    role: "Professor of Innovation & Technology",
    school: "Ryan Group of Institutions",
    bio: "Pioneering educational research on human-AI collaboration frameworks and cognitive adaptation interfaces in tertiary pathways.",
    image: memberHananNewImg,
    objectPosition: "50% 20%",
    specialistTitle: "Director of Education"
  },
  {
    id: 9,
    name: "Ms. Joanna Povall",
    role: "Chief Academic Officer",
    school: "Wales International School",
    bio: "Designing sovereign educational standards and high-performing school framework audits across private and public sectors.",
    image: memberKennethImg,
    objectPosition: "50% 20%",
    specialistTitle: "School Principal"
  }
];

const advocacyBoardMembers = [
  {
    id: 102,
    name: "Prof. Ghassan Aouad",
    role: "Chancellor",
    school: "Abu Dhabi University",
    bio: "Pioneering interactive hybrid curriculum delivery models and immersive classroom systems globally.",
    image: memberGhassanImg,
    objectPosition: "50% 15%",
    specialistTitle: "Chancellor"
  },
  {
    id: 101,
    name: "Dr. Omar Al Faqir",
    role: "Educational Development Senior Specialist",
    school: "Ministry of Education - UAE",
    bio: "Shaping federal framework standards and national school leadership progression protocols across the Middle East.",
    image: memberAishaImg,
    objectPosition: "50% 20%",
    specialistTitle: "Educational Development Senior Specialist"
  }
];

const organisingTeamData = [
  {
    id: "team-1",
    name: "Ms. Pooja Sedani",
    role: "Founder & Chairperson",
    subtitle: "Founder & Chairperson",
    category: "CHAIRPERSON",
    image: poojaSedaniImg,
    bio: "Pooja is an accomplished marketing advisor in the education ecosystem with 15+ years of expertise.\n\nPooja is also a prominent figure in thought leadership within the education sector. She meticulously organizes and conducts impactful educational conferences in India and the UAE. Furthermore, she produces insightful video podcasts that feature distinguished school leaders as expert guests.\n\nPooja's distinguished career also includes significant leadership roles in Marketing & Communications. In the past, she successfully headed these functions for a prominent group of schools in India and for leading EdTech firms.\n\nHer strategic acumen and marketing prowess have served a diverse clientele, encompassing organizations from India, the USA, the UAE, and New Zealand, underscoring her global perspective and adaptability.\n\nAs the architect of the WE-ERA Connect platform, she drives national initiatives to empower women educational leaders.",
    responsibility: "Visionary leadership, ecosystem building, high-level steering, and chairing the grand committee across all Emirates.",
    objectPosition: "50% 10%"
  },
  {
    id: "team-2",
    name: "Ms. Nisha V",
    role: "Head of Programme & Speaker Relations",
    subtitle: "Architect of the Intellectual Core & Global VIP Pipelines",
    category: "PROGRAMME & SPEAKERS",
    image: nishaVImg,
    bio: "Nisha contributes over 15 years of specialized content strategy and high-stakes speaker management to the core leadership team. A premier educational content architect, she has a proven track record of curating complex agendas and managing VIP relations for major regional summits.\n\nThroughout her career, she has successfully curated academic programs for over a dozen international education symposiums and has been the driving force behind securing top-tier global thinkers, ministry officials, and thought leaders.\n\nFor WE-ERA Connect 2027, Nisha steers the summit's intellectual architecture—vetting rigorous workshop abstracts, securing globally renowned VIP speakers, and structuring the landmark global Train-the-Trainer framework for the WE-Dubai Declaration.",
    responsibility: "Vetting workshop abstracts, securing globally renowned VIP speakers, structuring the landmark Train-the-Trainer framework, and managing VIP pipelines.",
    objectPosition: "50% 15%"
  },
  {
    id: "team-3",
    name: "Mr. Ganesh S Varma",
    role: "Head of Events & Operations",
    subtitle: "The Operational Backbone of Mega-Scale Regional Conventions",
    category: "EVENTS & OPERATIONS",
    image: ganeshVarmaImg,
    bio: "Ganesh serves as the operational backbone of the summit, infusing the committee with over 30 years of elite, large-scale event production and mega-summit expertise. A veteran project director who has conceptualized and executed some of the region's most complex public and corporate events, he is an expert in high-stakes crowd dynamics and massive venue operations.\n\nHaving successfully overseen production for international government summits, stadium-scale corporate conventions, and multi-day exhibitions, Ganesh directly orchestres the technical execution, venue logistics, and multi-vendor ecosystems required to deliver a world-class, seamless experience for over 2,500 delegates in Dubai.",
    responsibility: "Summit logistics, venue coordination, staging production, technical execution, and multi-vendor operations.",
    objectPosition: "50% 15%"
  },
  {
    id: "team-4",
    name: "CA VVS Thakkar",
    role: "Head of Legal & Financial Governance",
    subtitle: "Guardian of Fiscal Integrity & Multi-Million AED Impact Funds",
    category: "GOVERNANCE & FINANCE",
    image: vikramAroraImg,
    bio: "Strengthening the summit’s commercial framework, VVS Thakkar contributes more than 30 years of robust corporate governance, legal compliance, and multi-million-dollar financial risk management to the team.\n\nA highly respected corporate strategist, he has navigated complex international regulatory frameworks, joint ventures, and municipal legalities for major enterprise initiatives and government-aligned events across the region.\n\nVVS Thakkar is responsible for the summit’s total fiscal architecture, ensuring ironclad regulatory compliance, municipal approvals, and absolute transparency in sponsorship allocations. He serves as the chief custodian and fiduciary officer of the prestigious AED 2 Million collective innovation prize funds, ecosystem grants, and PhD scholarship pools.",
    responsibility: "Commercial framework alignment, municipal approvals, fiscal architecture, and innovation prize fund custody.",
    objectPosition: "50% 15%"
  },
  {
    id: "team-5",
    name: "Mr. Hitesh Sikarwar",
    role: "Director of Marketing & Strategic Partnerships",
    subtitle: "Commander of National Media Narratives & Corporate ROI Delivery",
    category: "MARKETING & PARTNERSHIPS",
    image: teamHiteshImg,
    bio: "Hitesh infuses the leadership group with over 25 years of exceptional growth marketing, national brand strategy, and high-impact partnership acquisition.\n\nHaving led transformative marketing campaigns for top-tier national brands, regional educational networks, and large-scale conventions, he commands the summit's public presence.\n\nHitesh drives the overarching brand narrative, managing national PR pipelines, extensive school network outreach, and high-impact media campaigns—including prominent Out-of-Home (OOH) billboard rollouts across elite corridors in the UAE.\n\nHe spearheads continuous corporate sponsor stewardship to seamlessly integrate global partners into the WE-ERA ecosystem, ensuring unshared brand positioning and premium visibility.",
    responsibility: "Brand engagement strategies, Out-Of-Home (OOH) billboard campaigns, PR outreach pipelines, and continuous corporate sponsor stewardship.",
    objectPosition: "50% 15%"
  }
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const gallerySlides = [
  {
    src: heroConventionClappingImg,
    alt: "Summit Gathering",
    tag: "Grand Summit",
    title: "A Gathering of 2500 Leaders",
    desc: "Bringing together trailblazing educators, sovereign sponsors, and visionaries co-signing the next generation of UAE educational leadership."
  },
  {
    src: experienceRampImg,
    alt: "WE-Ramp Walk",
    tag: "WE-Ramp",
    title: "Role Models on Stage",
    desc: "Women Educators pacing the platform as true role models, demonstrating confidence, prestige, and active project representation."
  },
  {
    src: heroGalaToastImg,
    alt: "Musical Gala",
    tag: "Musical Gala",
    title: "An Evening of Spirit",
    desc: "Artistic expressions, musical performances, and sovereign fellowships celebrating cultural identity and collaborative transformation."
  },
  {
    src: experienceShowcaseImg,
    alt: "Women Leaders Showcase",
    tag: "Empowerment",
    title: "Voices of Modern K-12",
    desc: "Dynamic dialogue and workshops bridging national governance priorities with core human equity and classroom inclusivity."
  }
];

function ExperienceSlidingGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % gallerySlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + gallerySlides.length) % gallerySlides.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % gallerySlides.length);
  };

  return (
    <section id="gallery" className="py-4 px-6 bg-slate-950/20 relative overflow-hidden border-t border-b border-white/5">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-10 h-[1.5px] bg-brand block"></span>
              <span className="text-brand font-bold uppercase tracking-[0.2em] text-xs md:text-sm">Capturing The Moment</span>
            </div>
            <h2 className="text-xl xs:text-2xl sm:text-4xl md:text-5xl font-display font-bold mb-1.5 tracking-tight text-white sm:whitespace-nowrap whitespace-normal">
              The <span className="text-brand font-black">WE-ERA Experience</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-[19px] leading-relaxed text-[#e7f5f9] font-normal max-w-4xl mt-0.5 block">
              Capturing the glamour, spirit, and impact of our gathering.
            </p>
          </div>
          <div className="flex items-center gap-3 self-end md:self-auto">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-3 rounded-full bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:border-brand/30 transition-all cursor-pointer flex items-center justify-center"
              title={isPlaying ? "Pause autoplay" : "Start autoplay"}
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            </button>
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:border-brand/30 transition-all cursor-pointer flex items-center justify-center"
              title="Previous slide"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:border-brand/30 transition-all cursor-pointer flex items-center justify-center"
              title="Next slide"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Big Sliding Showcase Frame */}
        <div className="relative aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden rounded-[2.5rem] border border-white/15 bg-slate-900/40 shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              {/* Backing Image */}
              <img
                src={gallerySlides[currentIndex].src}
                alt={gallerySlides[currentIndex].alt}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />

              {/* High End Gradient Shading (Vignette layout) */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-85 z-10 pointer-events-none" />

              {/* Animated Text Content Overlay */}
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 right-6 md:right-10 z-20 max-w-2xl space-y-2 md:space-y-3 pointer-events-none">
                <span className="inline-block px-3 py-1 text-[10px] md:text-xs font-mono font-black text-slate-950 bg-brand uppercase tracking-widest rounded-lg">
                  {gallerySlides[currentIndex].tag}
                </span>
                <h3 className="text-2xl md:text-4xl font-display font-black tracking-tight text-white leading-tight">
                  {gallerySlides[currentIndex].title}
                </h3>
                <p className="text-slate-300 text-xs md:text-sm font-light leading-relaxed">
                  {gallerySlides[currentIndex].desc}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Progress Indicators overlay */}
          <div className="absolute top-3 right-3 z-20 flex gap-0.5">
            {gallerySlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className="p-3 -m-1.5 transition-all cursor-pointer group"
                title={`Go to slide ${idx + 1}`}
              >
                <div className={`h-1.5 rounded-full transition-all ${
                  currentIndex === idx 
                    ? 'w-8 bg-brand' 
                    : 'w-2 bg-white/40 group-hover:bg-white/60'
                }`} />
              </button>
            ))}
          </div>
        </div>

        {/* Thumbnail Selector Row underneath */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {gallerySlides.map((slide, idx) => (
            <div
              key={idx}
              onClick={() => {
                setCurrentIndex(idx);
                setIsPlaying(false); // pause play when clicked
              }}
              className={`group relative p-4 rounded-2xl border transition-all cursor-pointer overflow-hidden flex items-center gap-4 ${
                currentIndex === idx 
                  ? 'border-brand bg-slate-900/60' 
                  : 'border-white/5 bg-slate-900/10 hover:border-white/10 hover:bg-slate-900/30'
              }`}
            >
              {/* Mini Preview Imagette */}
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-950 flex-shrink-0 border border-white/10 relative">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute inset-0 transition-opacity bg-brand/10 ${currentIndex === idx ? 'opacity-100' : 'opacity-0'}`} />
              </div>
              
              <div className="min-w-0">
                <span className={`text-[9px] font-mono font-bold uppercase tracking-wider block ${currentIndex === idx ? 'text-brand' : 'text-slate-505'}`}>
                  {slide.tag}
                </span>
                <span className={`text-xs block font-bold truncate leading-tight mt-0.5 ${currentIndex === idx ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`}>
                  {slide.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function CountdownTimer() {
  const calculateTimeLeft = (): TimeLeft => {
    // Target date: WE-ERA Connect begins mid-January 2027 (Jan 15, 2027 GMT+4 Dubai time)
    const difference = +new Date("2027-01-15T09:00:00+04:00") - +new Date();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => {
    return num < 10 ? `0${num}` : num.toString();
  };

  const timeItems = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.9 }}
      className="flex justify-center items-center gap-2 sm:gap-4 md:gap-7 my-10 max-w-lg mx-auto px-4"
      id="hero-countdown"
    >
      {timeItems.map((item, idx) => (
        <React.Fragment key={item.label}>
          <div className="flex flex-col items-center group">
            <div className="relative">
              {/* Outer Golden Glow hover effect */}
              <div className="absolute inset-0 bg-brand/5 rounded-2xl blur-lg pointer-events-none group-hover:bg-brand/10 transition-colors duration-300" />
              <div className="absolute inset-x-0 -bottom-1 h-full bg-gradient-to-t from-brand/20 to-transparent rounded-2xl blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Real Glass Box */}
              <div className="relative flex items-center justify-center w-14 h-14 sm:w-18 sm:h-18 md:w-24 md:h-24 rounded-2xl border border-white/15 bg-slate-950/75 backdrop-blur-xl shadow-2xl transition-all duration-300 group-hover:border-brand/40 group-hover:bg-slate-950/90">
                <span className="text-xl sm:text-2xl md:text-5xl font-mono font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-brand via-amber-200 to-amber-400">
                  {formatNumber(item.value)}
                </span>
                
                {/* Subtle top light effect */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </div>
            </div>
            
            <span className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-slate-400 mt-3 group-hover:text-brand transition-colors duration-300">
              {item.label}
            </span>
          </div>

          {/* Colon divider between boxes */}
          {idx < timeItems.length - 1 && (
            <div className="text-brand/40 font-mono text-xl sm:text-2xl md:text-4xl font-extrabold pb-6 select-none animate-pulse">
              :
            </div>
          )}
        </React.Fragment>
      ))}
    </motion.div>
  );
}

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedTeamMember, setSelectedTeamMember] = useState<any | null>(null);
  const organisingTeamScrollRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    if (activePage !== 'home') {
      setActivePage('home');
    }
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }, 50);
  };

  const [activePage, setActivePage] = useState<'home' | 'organising-team-page' | 'registration' | 'emiratization' | 'shark-tank' | 'advisory-board'>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePillarIndex, setActivePillarIndex] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Page tracking scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
    window.scrollTo({
      top: 0,
      behavior: "instant" as any
    });
  }, [activePage]);

  // Navigation anchor and state routing helper
  const navigateAndScroll = (
    targetId: string, 
    preSelectCategory?: string, 
    preSelectSubject?: string, 
    preSelectMessage?: string
  ) => {
    setActivePage('home');
    setFormData(prev => {
      const next = { ...prev };
      if (preSelectCategory) next.category = preSelectCategory;
      if (preSelectSubject) next.subject = preSelectSubject;
      if (preSelectMessage) next.message = preSelectMessage;
      return next;
    });
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 150);
  };

  const navigatePageAndScroll = (pageName: any, targetId: string) => {
    setActivePage(pageName);
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 250);
  };

  // Emiratization Interactive States
  const [emiExp, setEmiExp] = useState(5);
  const [emiDegree, setEmiDegree] = useState("bachelors");
  const [emiSchoolType, setEmiSchoolType] = useState("charter");
  const [emiForm, setEmiForm] = useState({
    nameAr: "",
    nameEn: "",
    email: "",
    phone: "",
    school: "",
    abstract: ""
  });
  const [emiFormStatus, setEmiFormStatus] = useState({
    submitting: false,
    success: false,
    error: null as string | null,
    refId: ""
  });

  const handleEmiFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emiForm.nameEn || !emiForm.email || !emiForm.abstract) {
      setEmiFormStatus({ submitting: false, success: false, error: "Please fill out all required fields.", refId: "" });
      return;
    }
    setEmiFormStatus({ submitting: true, success: false, error: null, refId: "" });
    setTimeout(() => {
      setEmiFormStatus({
        submitting: false,
        success: true,
        error: null,
        refId: "EMI-FEL-" + Math.floor(10000 + Math.random() * 90000)
      });
    }, 1200);
  };

  // State for Dubai Declaration Expanded Content
  const [dubaiDeclarationExpanded, setDubaiDeclarationExpanded] = useState(false);
  // State for Green Quotient Expanded Content
  const [greenQuotientExpanded, setGreenQuotientExpanded] = useState(false);
  // State for Green Quotient Submission Process Expanded Content
  const [greenSubmissionExpanded, setGreenSubmissionExpanded] = useState(false);
  // State for WE-Shark Expanded Content
  const [weSharkExpanded, setWeSharkExpanded] = useState(false);
  // State for WE-Shark Submission Process Expanded Content
  const [weSharkSubmissionExpanded, setWeSharkSubmissionExpanded] = useState(false);
  // State for WE-Grant Expanded Content
  const [weGrantExpanded, setWeGrantExpanded] = useState(false);

  // State for FAQs accordion
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [openFaqCategories, setOpenFaqCategories] = useState<Record<string, boolean>>({});

  // State for About Us dropdown sub-tabs
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  // State for WE-ERA dropdown sub-tabs
  const [weEraDropdownOpen, setWeEraDropdownOpen] = useState(false);

  // State for active legacy pillar carousel
  const [activePillarIdx, setActivePillarIdx] = useState(0);

  // State for active key attractions carousel
  const [activeAttractionIdx, setActiveAttractionIdx] = useState(0);

  // State for active key event highlights carousel
  const [activeHighlightIdx, setActiveHighlightIdx] = useState(0);

  // States to track hover for automated loop slides
  const [isPillarHovered, setIsPillarHovered] = useState(false);
  const [isHighlightHovered, setIsHighlightHovered] = useState(false);
  const [isAttractionHovered, setIsAttractionHovered] = useState(false);

  // Auto-slide for Four Foundational Pillars
  useEffect(() => {
    if (isPillarHovered) return;
    const interval = setInterval(() => {
      setActivePillarIdx((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPillarHovered]);

  // Auto-slide for Key Event Highlights
  useEffect(() => {
    if (isHighlightHovered) return;
    const interval = setInterval(() => {
      setActiveHighlightIdx((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHighlightHovered]);

  // Auto-slide for Key Attractions
  useEffect(() => {
    if (isAttractionHovered) return;
    const interval = setInterval(() => {
      setActiveAttractionIdx((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAttractionHovered]);

  // WE-Shark Tank Interactive States
  const [stBudget, setStBudget] = useState(250000);
  const [stCategory, setStCategory] = useState("ai");
  const [stScale, setStScale] = useState("grade");
  const [stForm, setStForm] = useState({
    leadName: "",
    teamName: "",
    email: "",
    pitchTitle: "",
    elevatorPitch: "",
    proposalDoc: "draft_manifesto.pdf"
  });
  const [stFormStatus, setStFormStatus] = useState({
    submitting: false,
    success: false,
    error: null as string | null,
    refId: ""
  });

  const handleStFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!stForm.leadName || !stForm.email || !stForm.pitchTitle || !stForm.elevatorPitch) {
      setStFormStatus({ submitting: false, success: false, error: "Please fill out all required fields.", refId: "" });
      return;
    }
    setStFormStatus({ submitting: true, success: false, error: null, refId: "" });
    setTimeout(() => {
      setStFormStatus({
        submitting: false,
        success: true,
        error: null,
        refId: "SHARK-2027-" + Math.floor(10000 + Math.random() * 90000)
      });
    }, 1200);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "General Inquiry",
    subject: "",
    message: "",
    passType: "regular",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
    cardName: "",
    schoolName: "",
    educatorRole: "Teacher",
    subjectTaught: "",
    yearsExperience: 5,
    emirate: "Dubai",
    registrationCode: ""
  });
  const [formStatus, setFormStatus] = useState<{
    submitting: boolean;
    success: boolean;
    error: string | null;
    refId?: string;
    step: 'details' | 'payment';
  }>({
    submitting: false,
    success: false,
    error: null,
    step: 'details'
  });

  const [cardFlipped, setCardFlipped] = useState(false);
  const [downloadingPass, setDownloadingPass] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    let val = value;
    if (name === "cardNumber") {
      const v = value.replace(/\D/g, "");
      const matches = v.match(/\d{1,4}/g);
      val = matches ? matches.join(" ").slice(0, 19) : "";
    } else if (name === "cardExpiry") {
      const v = value.replace(/\D/g, "");
      if (v.length >= 2) {
        val = `${v.slice(0, 2)}/${v.slice(2, 4)}`;
      } else {
        val = v;
      }
    } else if (name === "cardCvc") {
      val = value.replace(/\D/g, "").slice(0, 4);
    }
    setFormData((prev) => ({ ...prev, [name]: val }));
  };  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setFormStatus(prev => ({ ...prev, submitting: false, success: false, error: "Please fill out all required fields." }));
      return;
    }

    if (formData.category === "Educator Registration") {
      if (!formData.schoolName || !formData.subjectTaught || !formData.educatorRole || !formData.emirate) {
        setFormStatus(prev => ({ ...prev, submitting: false, success: false, error: "Please fill out all teaching profile fields." }));
        return;
      }
    } else {
      if (!formData.message) {
        setFormStatus(prev => ({ ...prev, submitting: false, success: false, error: "Please fill out the message field." }));
        return;
      }
    }
    
    // Check if Attendance Registry (requires payment) and currently on 'details' step
    if (formData.category === "Attendance Registry" && formStatus.step === "details") {
      setFormStatus(prev => ({
        ...prev,
        error: null,
        step: "payment"
      }));
      return;
    }

    // Process final submission
    setFormStatus(prev => ({ ...prev, submitting: true, error: null }));
    
    try {
      let generatedRefId = "";
      if (formData.category === "Educator Registration") {
        generatedRefId = "WE-EDU-" + Math.floor(100000 + Math.random() * 900000);
        await saveEducatorRegistration({
          name: formData.name,
          email: formData.email,
          schoolName: formData.schoolName,
          educatorRole: formData.educatorRole,
          subjectTaught: formData.subjectTaught,
          yearsExperience: Number(formData.yearsExperience) || 0,
          emirate: formData.emirate,
          registrationCode: generatedRefId
        });
      } else {
        generatedRefId = "WE-" + Math.floor(100000 + Math.random() * 900000);
        await saveInquiry({
          name: formData.name,
          email: formData.email,
          category: formData.category,
          subject: formData.subject || "General Inquiry",
          message: formData.message
        });
      }

      setFormStatus({
        submitting: false,
        success: true,
        error: null,
        refId: generatedRefId,
        step: "details"
      });
    } catch (err: any) {
      console.warn("Firestore save fallback handled gracefully:", err);
      const fallbackRefId = formData.category === "Educator Registration"
        ? "WE-EDU-" + Math.floor(100000 + Math.random() * 900000)
        : "WE-" + Math.floor(100000 + Math.random() * 900000);

      setFormStatus({
        submitting: false,
        success: true,
        error: null,
        refId: fallbackRefId,
        step: "details"
      });
    }
  };

  const handlePaymentSubmitCustom = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.cardName) {
      setFormStatus(prev => ({ ...prev, error: "Please enter the Cardholder Name." }));
      return;
    }
    if (!formData.cardNumber || formData.cardNumber.replace(/\s/g, "").length < 16) {
      setFormStatus(prev => ({ ...prev, error: "Please enter a valid 16-digit card number." }));
      return;
    }
    if (!formData.cardExpiry || formData.cardExpiry.length < 5) {
      setFormStatus(prev => ({ ...prev, error: "Please enter a valid MM/YY expiry date." }));
      return;
    }
    if (!formData.cardCvc || formData.cardCvc.length < 3) {
      setFormStatus(prev => ({ ...prev, error: "Please enter a valid CVV security code." }));
      return;
    }

    setFormStatus(prev => ({ ...prev, submitting: true, error: null }));
    
    try {
      const generatedRefId = "REG-" + Math.floor(100000 + Math.random() * 900000);
      const paidAmount = formData.passType === 'elite' ? 1200 : formData.passType === 'group' ? 750 : 950;
      
      await saveRegistration({
        name: formData.name,
        email: formData.email,
        category: formData.category,
        passType: formData.passType,
        paymentStatus: "paid",
        paymentMethod: "card",
        amount: paidAmount,
        transactionId: generatedRefId,
        cardholderName: formData.cardName
      });

      setFormStatus({
        submitting: false,
        success: true,
        error: null,
        refId: generatedRefId,
        step: "details"
      });
    } catch (err) {
      console.warn("Payment submit fallback gracefully captured:", err);
      const fallbackRefId = "REG-" + Math.floor(100000 + Math.random() * 900000);
      setFormStatus({
        submitting: false,
        success: true,
        error: null,
        refId: fallbackRefId,
        step: "details"
      });
    }
  };

  const handleResetForm = () => {
    setFormData({
      name: "",
      email: "",
      category: "General Inquiry",
      subject: "",
      message: "",
      passType: "regular",
      cardNumber: "",
      cardExpiry: "",
      cardCvc: "",
      cardName: "",
      schoolName: "",
      educatorRole: "Teacher",
      subjectTaught: "",
      yearsExperience: 5,
      emirate: "Dubai",
      registrationCode: ""
    });
    setFormStatus({
      submitting: false,
      success: false,
      error: null,
      step: 'details'
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Keyboard escape listener (moved to top level to follow Rules of Hooks)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedTeamMember(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-brand selection:text-slate-950">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/20 backdrop-blur-xl nav-shining-border">
        <div className="w-full pl-[20px] pr-[20px] h-20 flex items-center justify-between">
          <div className="flex items-center gap-2.5 cursor-pointer group relative logo-container-3d py-1 px-3 rounded-2xl" onClick={() => setActivePage('home')}>
            {/* 3D Logo Wrapper */}
            <div className="flex items-center gap-2.5 logo-wrapper-3d px-1.5 py-1 rounded-xl overflow-visible">
              <div className="relative shrink-0 flex items-center justify-center">
                {/* Shining Background Glows */}
                <div className="shining-bg-halo" />
                <div className="shining-bg-flare" />

                <img 
                  src={logoImg} 
                  alt="WE-ERA Connect Logo" 
                  referrerPolicy="no-referrer"
                  className="h-10 w-auto max-w-[120px] object-contain select-none filter drop-shadow-[0_2px_4px_rgba(251,191,36,0.4)]"
                />
              </div>
              <span className="font-sans font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-brand via-amber-200 to-brand drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)]">WE-ERA</span>
              <span className="font-sans font-bold tracking-tighter text-slate-300 drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)]">Connect</span>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-5 text-[15px]">
            {/* About Us Tab with Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button 
                onClick={() => {
                  navigateAndScroll('about');
                  setAboutDropdownOpen(false);
                }}
                className={`text-[14px] font-bold hover:text-brand transition-colors font-sans flex items-center gap-1 cursor-pointer py-3 ${
                  activePage === 'organising-team-page' || activePage === 'advisory-board' ? 'text-brand' : 'text-slate-300'
                }`}
              >
                <span>About Us</span>
                <ChevronDown size={14} className={`transform transition-transform duration-200 ${aboutDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {aboutDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 mt-1 w-52 rounded-2xl border border-white/10 bg-slate-950 shadow-2xl overflow-hidden py-1.5 z-50 text-left"
                  >
                    <button
                      onClick={() => {
                        navigateAndScroll('about-founder');
                        setAboutDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2.5 text-xs font-semibold tracking-wider transition-colors hover:bg-white/5 hover:text-brand flex items-center gap-2 text-slate-200"
                    >
                      <span className="w-1.5 h-1.5 bg-brand rounded-full" />
                      Founder's Message
                    </button>
                    <button
                      onClick={() => {
                        navigateAndScroll('advisory-board-slider-container');
                        setAboutDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2.5 text-xs font-semibold tracking-wider transition-colors hover:bg-white/5 hover:text-brand flex items-center gap-2 text-slate-200"
                    >
                      <span className="w-1.5 h-1.5 bg-brand rounded-full" />
                      Advisory Board
                    </button>
                    <button
                      onClick={() => {
                        navigateAndScroll('advocacy-board-slider-container');
                        setAboutDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2.5 text-xs font-semibold tracking-wider transition-colors hover:bg-white/5 hover:text-brand flex items-center gap-2 text-slate-200"
                    >
                      <span className="w-1.5 h-1.5 bg-brand rounded-full" />
                      Advocacy Board
                    </button>
                    <button
                      onClick={() => {
                        navigateAndScroll('organising-team');
                        setAboutDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2.5 text-xs font-semibold tracking-wider transition-colors hover:bg-white/5 hover:text-brand flex items-center gap-2 text-slate-200"
                    >
                      <span className="w-1.5 h-1.5 bg-brand rounded-full" />
                      Organising Team
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* WE-ERA 2027 Tab with Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setWeEraDropdownOpen(true)}
              onMouseLeave={() => setWeEraDropdownOpen(false)}
            >
              <button 
                onClick={() => {
                  navigateAndScroll('about');
                  setWeEraDropdownOpen(false);
                }}
                className="text-[14px] font-bold hover:text-brand transition-colors font-sans flex items-center gap-1 cursor-pointer py-3 text-slate-300"
              >
                <span>WE-ERA 2027</span>
                <ChevronDown size={14} className={`transform transition-transform duration-200 ${weEraDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {weEraDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 mt-1 w-56 rounded-2xl border border-white/10 bg-slate-950 shadow-2xl overflow-hidden py-1.5 z-50 text-left"
                  >
                    <button
                      onClick={() => {
                        navigateAndScroll('pillars');
                        setWeEraDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2.5 text-xs font-semibold tracking-wider transition-colors hover:bg-white/5 hover:text-brand flex items-center gap-2 text-slate-200"
                    >
                      <span className="w-1.5 h-1.5 bg-brand rounded-full" />
                      Four Foundational Pillars
                    </button>
                    <button
                      onClick={() => {
                        navigateAndScroll('program');
                        setWeEraDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2.5 text-xs font-semibold tracking-wider transition-colors hover:bg-white/5 hover:text-brand flex items-center gap-2 text-slate-200"
                    >
                      <span className="w-1.5 h-1.5 bg-brand rounded-full" />
                      Key Event Highlights
                    </button>
                    <button
                      onClick={() => {
                        navigateAndScroll('we-ramp');
                        setWeEraDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2.5 text-xs font-semibold tracking-wider transition-colors hover:bg-white/5 hover:text-brand flex items-center gap-2 text-slate-200"
                    >
                      <span className="w-1.5 h-1.5 bg-brand rounded-full" />
                      Key Attractions
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button onClick={() => navigateAndScroll('sponsors-portal')} className="text-[14px] font-bold text-slate-300 hover:text-brand transition-colors font-sans">Sponsors</button>
            <button 
              onClick={() => { setActivePage('registration'); }} 
              className="bg-brand hover:bg-amber-400 text-slate-950 font-black px-4.5 py-2 rounded-xl shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_35px_rgba(251,191,36,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer text-xs uppercase tracking-wider font-sans shrink-0"
            >
              Pre-Register
            </button>
            <button onClick={() => navigateAndScroll('gallery')} className="text-[14px] font-bold text-slate-300 hover:text-brand transition-colors font-sans">Gallery</button>
            <button onClick={() => navigateAndScroll('faqs')} className="text-[14px] font-bold text-slate-300 hover:text-brand transition-colors font-sans">FAQs</button>
            <button onClick={() => navigateAndScroll('contact', 'General Inquiry')} className="text-[14px] font-bold text-slate-300 hover:text-brand transition-colors font-sans">Contact Us</button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="flex lg:hidden text-slate-300 hover:text-brand transition-colors p-2 z-50 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X size={24} />
            ) : (
              <div className="space-y-1.5 w-6">
                <span className="block h-0.5 w-6 bg-slate-300 rounded transition-all"></span>
                <span className="block h-0.5 w-6 bg-slate-300 rounded transition-all"></span>
                <span className="block h-0.5 w-6 bg-slate-300 rounded transition-all"></span>
              </div>
            )}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-white/5 bg-slate-950/95 backdrop-blur-xl px-6 py-5 flex flex-col gap-4 overflow-hidden z-40 max-h-[80vh] overflow-y-auto"
            >
              {/* About Us Mobile Links */}
              <div className="flex flex-col gap-1.5 border-b border-white/5 pb-3">
                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest px-3 mb-1">
                  About Us
                </span>
                <button 
                  onClick={() => { setMobileMenuOpen(false); navigateAndScroll('about'); }} 
                  className={`text-left text-sm font-semibold px-6 py-2 rounded-lg transition-all font-sans ${activePage === 'home' ? 'text-brand bg-white/5' : 'text-slate-300 hover:text-brand hover:bg-white/5'}`}
                >
                  Overview & Vision
                </button>
                <button 
                  onClick={() => { setMobileMenuOpen(false); navigateAndScroll('about-founder'); }} 
                  className="text-left text-sm font-semibold text-slate-300 hover:text-brand px-6 py-2 rounded-lg hover:bg-white/5 transition-all font-sans"
                >
                  Founder's Message
                </button>
                <button 
                  onClick={() => { setMobileMenuOpen(false); navigateAndScroll('advisory-board-slider-container'); }} 
                  className="text-left text-sm font-semibold text-slate-300 hover:text-brand px-6 py-2 rounded-lg hover:bg-white/5 transition-all font-sans"
                >
                  Advisory Board
                </button>
                <button 
                  onClick={() => { setMobileMenuOpen(false); navigateAndScroll('advocacy-board-slider-container'); }} 
                  className="text-left text-sm font-semibold text-slate-300 hover:text-brand px-6 py-2 rounded-lg hover:bg-white/5 transition-all font-sans"
                >
                  Advocacy Board
                </button>
                <button 
                  onClick={() => { setMobileMenuOpen(false); navigateAndScroll('organising-team'); }} 
                  className="text-left text-sm font-semibold text-slate-300 hover:text-brand px-6 py-2 rounded-lg hover:bg-white/5 transition-all font-sans"
                >
                  Organising Team
                </button>
              </div>

              {/* WE-ERA 2027 Mobile Links */}
              <div className="flex flex-col gap-1.5 border-b border-white/5 pb-3">
                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest px-3 mb-1">
                  WE-ERA 2027
                </span>
                <button 
                  onClick={() => { setMobileMenuOpen(false); navigateAndScroll('pillars'); }} 
                  className="text-left text-sm font-semibold text-slate-300 hover:text-brand px-6 py-2 rounded-lg hover:bg-white/5 transition-all font-sans"
                >
                  Four Foundational Pillars
                </button>
                <button 
                  onClick={() => { setMobileMenuOpen(false); navigateAndScroll('program'); }} 
                  className="text-left text-sm font-semibold text-slate-300 hover:text-brand px-6 py-2 rounded-lg hover:bg-white/5 transition-all font-sans"
                >
                  Key Event Highlights
                </button>
                <button 
                  onClick={() => { setMobileMenuOpen(false); navigateAndScroll('we-ramp'); }} 
                  className="text-left text-sm font-semibold text-slate-300 hover:text-brand px-6 py-2 rounded-lg hover:bg-white/5 transition-all font-sans"
                >
                  Key Attractions
                </button>
              </div>

              <div className="flex flex-col gap-2 pt-3">
                <button 
                  onClick={() => { setMobileMenuOpen(false); navigateAndScroll('sponsors-portal'); }} 
                  className="text-left text-sm font-semibold text-slate-300 hover:text-brand px-3 py-2 rounded-lg hover:bg-white/5 transition-all font-sans"
                >
                  Sponsors
                </button>
                <button 
                  onClick={() => { setMobileMenuOpen(false); setActivePage('registration'); }} 
                  className="bg-brand hover:bg-amber-400 text-slate-950 font-black px-4 py-3 rounded-xl shadow-[0_0_25px_rgba(251,191,36,0.35)] hover:shadow-[0_0_40px_rgba(251,191,36,0.55)] transition-all duration-300 text-center uppercase tracking-wider font-sans text-xs my-2 cursor-pointer"
                >
                  Pre-Register
                </button>
                <button 
                  onClick={() => { setMobileMenuOpen(false); navigateAndScroll('gallery'); }} 
                  className="text-left text-sm font-semibold text-slate-300 hover:text-brand px-3 py-2 rounded-lg hover:bg-white/5 transition-all font-sans"
                >
                  Gallery
                </button>
                <button 
                  onClick={() => { setMobileMenuOpen(false); navigateAndScroll('faqs'); }} 
                  className="text-left text-sm font-semibold text-slate-300 hover:text-brand px-3 py-2 rounded-lg hover:bg-white/5 transition-all font-sans"
                >
                  FAQs
                </button>
                <button 
                  onClick={() => { setMobileMenuOpen(false); navigateAndScroll('contact', 'General Inquiry'); }} 
                  className="text-left text-sm font-semibold text-slate-300 hover:text-brand px-3 py-2 rounded-lg hover:bg-white/5 transition-all font-sans"
                >
                  Contact Us
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <AnimatePresence mode="wait">
        {activePage === 'home' ? (
          <motion.div
            key="home-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Hero Section */}
            <section id="hero-section" className="relative min-h-screen flex flex-col justify-end overflow-hidden px-6 pb-1 sm:pb-1.5 md:pb-2 lg:pb-2.5">
        {/* Main Panel Discussion Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <AnimatePresence mode="popLayout">
            <motion.img 
              key={currentSlide}
              initial={{ scale: 1.05, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
              src={heroSlides[currentSlide].image} 
              alt={heroSlides[currentSlide].alt} 
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: heroSlides[currentSlide].objectPosition || "center" }}
              referrerPolicy="no-referrer"
              onError={(e) => {
                const fallback = heroSlides[currentSlide].fallback;
                if (fallback) {
                  (e.currentTarget as HTMLImageElement).src = fallback;
                }
              }}
            />
          </AnimatePresence>
          {/* Slide Indicators */}
          {heroSlides.length > 1 && (
            <div className="absolute bottom-10 right-10 flex gap-2.5 z-[15]">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentSlide === index ? "bg-brand w-8" : "bg-white/30 hover:bg-white/60"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
          {/* Enhanced Overlays for depth and readability */}
          <div className="absolute inset-0 bg-slate-950/40 z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-slate-950/50 z-10 pointer-events-none" />
        </div>

        {/* Global Glitter Overlay */}
        <div className="absolute inset-0 z-[11] pointer-events-none overflow-hidden">
           {/* Static Glitter Particles */}
           {[...Array(50)].map((_, i) => (
             <div 
               key={i}
               className="glitter-particle"
               style={{
                 top: `${Math.random() * 100}%`,
                 left: `${Math.random() * 100}%`,
                 animationDelay: `${Math.random() * 5}s`,
                 opacity: Math.random() * 0.5 + 0.2,
                 width: `${Math.random() * 3 + 1}px`,
                 height: `${Math.random() * 3 + 1}px`,
               }}
             />
           ))}
          {/* Top-Left Summit Branding Block - Elite Event Identity (Clean Floating Layout with Blue-Golden Glow) */}
        <div className="absolute top-22 sm:top-24 md:top-24 lg:top-24 left-3 sm:left-6 md:left-8 lg:left-12 xl:left-16 z-30 pointer-events-none text-center max-w-[calc(100vw-24px)] sm:max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative py-3.5 px-5 sm:py-4.5 sm:px-8 rounded-2xl overflow-hidden"
          >
            {/* Elegant blue-goldenish light patch */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-cyan-500/20 via-blue-600/10 to-brand/20 blur-2xl opacity-90 mix-blend-screen pointer-events-none" />
            <div className="absolute inset-0 -z-20 bg-slate-950/30 backdrop-blur-md rounded-2xl border border-white/5 pointer-events-none" />

            <div className="space-y-1.5 flex flex-col items-center">
              {/* Event Typography Unit */}
              <div className="space-y-0.5 text-center">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[38px] font-sans font-black tracking-tight text-white uppercase leading-[1.05] drop-shadow-[0_4px_16px_rgba(0,0,0,0.98)] whitespace-nowrap">
                  WE-<span className="text-yellow-400">ERA</span> <span className="text-brand drop-shadow-[0_0_20px_rgba(251,191,36,0.4)]">CONNECT 2027</span>
                </h1>
                
                <p className="text-[10px] sm:text-xs md:text-sm lg:text-base font-sans italic tracking-wide text-slate-100 font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] text-center">
                  An <span className="text-yellow-400 font-bold uppercase">ERA</span> of <span className="text-brand font-bold">W</span>omen in <span className="text-brand font-bold">E</span>ducation
                </p>
              </div>

              {/* Date & Location capsule */}
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 pt-0.5">
                <div className="flex items-center gap-1.5 text-slate-200 drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)]">
                  <Calendar size={12} className="text-brand shrink-0" />
                  <span className="text-[10px] sm:text-xs font-sans tracking-wider uppercase font-bold">
                    January <span className="text-yellow-400">2027</span>
                  </span>
                </div>
                
                <div className="w-1 h-1 rounded-full bg-white/40 shadow-[0_1px_2px_rgba(0,0,0,0.8)] hidden sm:block" />
                
                <div className="flex items-center gap-1.5 text-slate-200 drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)]">
                  <MapPin size={12} className="text-brand shrink-0" />
                  <span className="text-[10px] sm:text-xs font-sans tracking-wider uppercase font-bold">
                    Dubai, <span className="text-yellow-400">UAE</span>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Slide Info Panel - Absolute positioned at the right of the Hero section, upper right corner */}
        <div className="absolute top-24 sm:top-28 md:top-30 lg:top-32 right-4 sm:right-6 md:right-8 lg:right-12 xl:right-16 z-30 pointer-events-none text-right hidden sm:block">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 15 }}
              transition={{ duration: 1.0, ease: "easeInOut" }}
              className="inline-flex items-center gap-3 px-1 text-right justify-end"
            >
              <h2 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-black tracking-[0.2em] text-white uppercase font-sans drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)]">
                {heroSlides[currentSlide].title || heroSlides[currentSlide].badge}
              </h2>

              {/* One vertical line after it */}
              <div className="w-1.5 h-5 sm:h-6 md:h-7 lg:h-8 xl:h-9 2xl:h-10 bg-brand shadow-[0_0_10px_rgba(251,191,36,0.95)] rounded-full shrink-0" />
            </motion.div>
          </AnimatePresence>
        </div>        </div>

        <div className="max-w-7xl mx-auto text-center relative z-20 w-full flex flex-col items-center px-4 sm:px-8 pt-0 pb-0">
          {/* Bottom Block: Paragraph + Buttons + Scroll Explore */}
          <div className="w-full flex flex-col items-center mt-auto">
            {/* Balanced-size YouTube Video Play Button with Prominent Slow Glow Animation and Title */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-5 flex flex-col items-center justify-center gap-3 z-30 relative group/video cursor-pointer"
              onClick={() => setIsVideoModalOpen(true)}
            >
              <div className="relative flex items-center justify-center">
                {/* Outer Slow Ripple / Ring 1 */}
                <motion.div
                  initial={{ scale: 1, opacity: 0 }}
                  animate={{
                    scale: [1, 2.2],
                    opacity: [0, 0.7, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                  className="absolute w-16 h-16 rounded-full border-2 border-brand/50 pointer-events-none"
                />

                {/* Outer Slow Ripple / Ring 2 (Staggered) */}
                <motion.div
                  initial={{ scale: 1, opacity: 0 }}
                  animate={{
                    scale: [1, 2.2],
                    opacity: [0, 0.5, 0]
                  }}
                  transition={{
                    duration: 3,
                    delay: 1.5,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                  className="absolute w-16 h-16 rounded-full border-2 border-brand/30 pointer-events-none"
                />

                {/* Core Pulse Glow */}
                <motion.div
                  animate={{
                    scale: [0.95, 1.15, 0.95],
                    opacity: [0.4, 0.85, 0.4]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 rounded-full bg-brand/25 blur-md pointer-events-none"
                />

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative flex items-center justify-center w-16 h-16 rounded-full bg-slate-950/90 border-2 border-brand text-brand shadow-[0_0_30px_rgba(251,191,36,0.5)] hover:shadow-[0_0_50px_rgba(251,191,36,0.8)] hover:border-amber-400 transition-all duration-300 pointer-events-none"
                  aria-label="Play Summit Presentation Video"
                >
                  <Youtube size={28} className="text-brand group-hover:text-amber-400 group-hover:scale-110 transition-all duration-300 relative z-10 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
                </motion.button>
              </div>

              {/* Title Text Below Video Icon */}
              <div className="flex flex-col items-center text-center">
                <span className="text-brand/90 font-mono text-[10px] uppercase tracking-[0.2em] font-bold">
                  Summit Preview
                </span>
                <span className="text-white/95 group-hover/video:text-brand font-sans text-xs sm:text-sm font-bold tracking-wide uppercase transition-colors duration-300">
                  Watch Summit Video
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative w-full text-[17px] pt-1"
            >
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-[13px] xs:text-[15px] sm:text-[23px] md:text-[25px] font-sans font-light text-slate-100 max-w-6xl mb-4 text-center mx-auto leading-snug drop-shadow-[0_4px_25px_rgba(0,0,0,1)]"
              >
                Uniting <span className="text-brand font-black drop-shadow-[0_0_15px_rgba(251,191,36,0.6)]">2,500+ Women Educators</span> for a Landmark Summit in <span className="text-brand font-black drop-shadow-[0_0_15px_rgba(251,191,36,0.6)]">Dubai</span>.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-yellow-400 font-black text-sm md:text-base uppercase tracking-[0.25em] mb-4 text-center select-none font-sans"
            >
              Empowering Women. Advancing Education. Shaping Tomorrow.
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-1 w-full"
            >
              <button 
                id="hero-cta-primary" 
                onClick={() => { setActivePage('registration'); }} 
                className="group relative px-8 py-4 bg-brand hover:bg-amber-400 text-slate-950 font-black rounded-full overflow-hidden hover:scale-105 transition-all shadow-[0_0_40px_rgba(251,191,36,0.45)] cursor-pointer text-sm tracking-wider font-sans"
              >
                <span className="relative z-10">RESERVE YOUR POSITION</span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </button>
              <button 
                id="hero-cta-secondary" 
                onClick={() => navigateAndScroll('sponsors-portal')}
                className="px-8 py-4 border border-white/25 bg-white/5 backdrop-blur-xl text-white font-black rounded-full hover:bg-white/10 transition-all flex items-center gap-3 cursor-pointer text-sm tracking-wider font-sans hover:scale-105 active:scale-95"
              >
                PARTNER <ArrowRight size={18} className="text-brand" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="mt-3 flex flex-col items-center gap-1 w-full"
            >
              <div className="w-px h-3 bg-gradient-to-b from-brand to-transparent" />
              <span className="text-[9px] uppercase tracking-[0.5em] text-slate-400">Scroll to explore</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-4 px-6 border-b border-white/5 relative overflow-hidden bg-gradient-to-b from-slate-950 via-amber-950/20 to-slate-950">
        {/* Subtle decorative background glow */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[450px] h-[450px] bg-brand/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-10 right-10 w-[450px] h-[450px] bg-brand/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Vision & Narrative */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 lg:col-span-5"
              id="about-narrative"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-[1.5px] bg-brand block"></span>
                  <span className="text-brand font-bold uppercase tracking-[0.2em] text-xs md:text-sm">ABOUT THE SUMMIT</span>
                </div>
                <h2 className="text-xl xs:text-2xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-display font-bold tracking-tight text-white leading-tight whitespace-normal sm:whitespace-nowrap lg:whitespace-normal xl:whitespace-nowrap">
                  WE-ERA <span className="text-brand font-black">CONNECT 2027</span>
                </h2>
                <h3 className="text-sm sm:text-base lg:text-[19px] leading-relaxed font-normal block font-sans text-white/95" style={{ fontFamily: 'Inter' }}>
                  An action-driven movement to redesign the educational landscape.
                </h3>
              </div>

              <p className="text-sm sm:text-base lg:text-[19px] leading-relaxed text-[#e7f5f9] font-normal block font-sans" style={{ fontFamily: 'Inter' }}>
                In an era defined by rapid technological leaps and environmental needs, our mission is to ensure Women Educators aren't just adapting to the future—they are the ones writing it.
              </p>
            </motion.div>

            {/* Right Column: Stats Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6 rounded-[2.5rem] border border-brand/20 bg-slate-950/70 backdrop-blur-md shadow-[0_0_50px_rgba(245,158,11,0.05)] lg:col-span-7"
              id="about-stats"
            >
              <div id="stat-1" className="space-y-2 flex flex-col items-center justify-center text-center p-3 sm:p-4 md:p-5 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-brand/30 hover:bg-slate-900/60 transition-all duration-300 min-h-[120px]">
                <p className="text-xl xs:text-2xl sm:text-3xl lg:text-2xl xl:text-3xl font-display font-black text-brand tracking-tight whitespace-nowrap">2,500+</p>
                <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-widest font-bold leading-relaxed font-['Georgia']">Women Educators</p>
              </div>
              <div id="stat-2" className="space-y-2 flex flex-col items-center justify-center text-center p-3 sm:p-4 md:p-5 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-brand/30 hover:bg-slate-900/60 transition-all duration-300 min-h-[120px]">
                <p className="text-xl xs:text-2xl sm:text-3xl lg:text-2xl xl:text-3xl font-display font-black text-white tracking-tight whitespace-nowrap">7</p>
                <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-widest font-bold leading-relaxed font-['Georgia']">Emirates United</p>
              </div>
              <div id="stat-3" className="space-y-2 flex flex-col items-center justify-center text-center p-3 sm:p-4 md:p-5 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-brand/30 hover:bg-slate-900/60 transition-all duration-300 min-h-[120px]">
                <p className="text-base sm:text-xl md:text-2xl lg:text-xl xl:text-2xl font-display font-black text-brand tracking-tighter whitespace-nowrap">AED 5M+</p>
                <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-widest font-bold leading-relaxed font-['Georgia']">Funding & Awards</p>
              </div>
              <div id="stat-4" className="space-y-2 flex flex-col items-center justify-center text-center p-3 sm:p-4 md:p-5 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-brand/30 hover:bg-slate-900/60 transition-all duration-300 min-h-[120px]">
                <p className="text-xl xs:text-2xl sm:text-3xl lg:text-2xl xl:text-3xl font-display font-black text-white tracking-tight whitespace-nowrap">10+</p>
                <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-widest font-bold leading-relaxed font-['Georgia']">Masterclass Sessions</p>
              </div>
              <div id="stat-5" className="space-y-2 flex flex-col items-center justify-center text-center p-3 sm:p-4 md:p-5 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-brand/30 hover:bg-slate-900/60 transition-all duration-300 min-h-[120px]">
                <p className="text-xl xs:text-2xl sm:text-3xl lg:text-2xl xl:text-3xl font-display font-black text-brand tracking-tight whitespace-nowrap">5</p>
                <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-widest font-bold leading-relaxed font-['Georgia']">PhD Scholarships</p>
              </div>
              <div id="stat-6" className="space-y-2 flex flex-col items-center justify-center text-center p-3 sm:p-4 md:p-5 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-brand/30 hover:bg-slate-900/60 transition-all duration-300 min-h-[120px]">
                <p className="text-xl xs:text-2xl sm:text-3xl lg:text-2xl xl:text-3xl font-display font-black text-white tracking-tight whitespace-nowrap">12+</p>
                <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-widest font-bold leading-relaxed font-['Georgia']">Main Stage <br /> Sessions</p>
              </div>
              <div id="stat-7" className="space-y-2 flex flex-col items-center justify-center text-center p-3 sm:p-4 md:p-5 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-brand/30 hover:bg-slate-900/60 transition-all duration-300 min-h-[120px]">
                <p className="text-xl xs:text-2xl sm:text-3xl lg:text-2xl xl:text-3xl font-display font-black text-brand tracking-tight whitespace-nowrap">100+</p>
                <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-widest font-bold leading-relaxed font-['Georgia']">Sponsors</p>
              </div>
              <div id="stat-8" className="space-y-2 flex flex-col items-center justify-center text-center p-3 sm:p-4 md:p-5 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-brand/30 hover:bg-slate-900/60 transition-all duration-300 min-h-[120px]">
                <p className="text-xl xs:text-2xl sm:text-3xl lg:text-2xl xl:text-3xl font-display font-black text-white tracking-tight whitespace-nowrap">2</p>
                <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-widest font-bold leading-relaxed font-['Georgia']">Days</p>
              </div>
            </motion.div>
          </div>

          {/* Bottom Row: Founder Spotlight (Brought Down) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-4 lg:mt-6 relative"
            id="about-founder"
          >
            <div className="relative rounded-[1.5rem] sm:rounded-[3rem] overflow-hidden border border-white/10 bg-slate-900/40 backdrop-blur-xl group shadow-2xl p-5 sm:p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
                {/* Image of Founder Frame */}
                <div className="col-span-12 lg:col-span-4 relative aspect-[4/5] sm:aspect-[4/5] lg:aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group-hover:border-brand/40 transition-all duration-500 shadow-lg max-w-[280px] sm:max-w-sm mx-auto lg:max-w-none bg-slate-950/80">
                  <img 
                    src={poojaSedaniImg} 
                    alt="Founder of WE-ERA Connect"
                    className="w-full h-full object-contain transition-all duration-700 filter brightness-[1.12] saturate-[1.10] contrast-[1.02] group-hover:scale-102" 
                    referrerPolicy="no-referrer"
                  />
                  {/* Subdued vignette mask to let the bright portrait shine through, while maintaining subtle depth */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,#020617_95%)] pointer-events-none mix-blend-multiply opacity-30" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-30 pointer-events-none" />
                </div>

                {/* Founder details */}
                <div className="col-span-12 lg:col-span-8 space-y-4 sm:space-y-6">
                  <div>
                    <span className="text-[11px] sm:text-[14px] font-bold text-brand uppercase tracking-[0.15em] font-mono">VISIONARY CHAIRPERSON</span>
                    <h3 className="text-2xl sm:text-3xl font-display font-light text-white tracking-wide mt-1">
                      <span className="font-semibold text-brand text-2xl sm:text-3xl">Ms. Pooja Sedani</span>
                    </h3>
                    <p className="italic font-medium text-sm sm:text-base md:text-lg text-slate-300">Founder & Chairperson of WE-ERA Connect</p>
                  </div>
 
                  <div className="space-y-4 border-l-2 border-brand/50 pl-3 sm:pl-4 py-1.5 bg-white/[0.01] rounded-r-xl">
                    <p className="text-sm sm:text-base lg:text-[18px] leading-relaxed text-[#e7f5f9] font-normal">
                      Every day, in classrooms across the world, a quiet revolution unfolds—led by women who do far more than teach. They ignite curiosity, champion innovation, nurture leadership, and shape the future, one learner at a time.
                    </p>
                    <p className="text-sm sm:text-base lg:text-[18px] leading-relaxed text-[#e7f5f9] font-normal">
                      I founded WE-ERA Connect on a powerful conviction: empowering a single educator can transform countless lives, but uniting thousands of women educators can redefine the future of global education.
                    </p>
                    <p className="text-sm sm:text-base lg:text-[18px] leading-relaxed text-[#e7f5f9] font-normal">
                      This January 2027, WE-ERA Connect will make history in Dubai. We are bringing together more than 2,500 exceptional women educators, visionary leaders, and changemakers from across the globe under one shared mission:
                    </p>
                    
                    <div className="flex flex-row justify-between items-center w-full gap-2 py-3 text-brand font-black text-[11px] xs:text-xs sm:text-sm md:text-base lg:text-[18px] tracking-wider border-y border-white/10 my-3 italic">
                      <span>Empowering Women.</span>
                      <span className="text-yellow-400 font-light">•</span>
                      <span>Advancing Education.</span>
                      <span className="text-yellow-400 font-light">•</span>
                      <span>Shaping Tomorrow.</span>
                    </div>

                    <p className="text-sm sm:text-base lg:text-[18px] leading-relaxed text-[#e7f5f9] font-normal">
                      Whether you are a classroom teacher, school leader, policymaker, education entrepreneur, or an industry partner, your voice and your leadership are vital to this movement.
                    </p>
                    <p className="text-sm sm:text-base lg:text-[18px] leading-relaxed text-[#e7f5f9] font-normal">
                      Together, let us build a future where women lead with purpose, education drives progress, and global collaboration sparks lasting impact.
                    </p>
                    <p className="text-sm sm:text-base lg:text-[18px] leading-relaxed text-white font-medium">
                      The era of women leading education is no longer on the horizon—it is here.
                    </p>
                    <p className="text-sm sm:text-base lg:text-[19px] leading-relaxed text-brand font-bold italic">
                      Welcome to WE-ERA Connect 2027
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Advisory Board Slider on the main homepage below Chairperson message */}
          <div id="advisory-board-slider-container" className="mt-8 p-6 rounded-[2rem] border border-white/5 bg-slate-950/20 shadow-xl">
            <AdvisoryBoardSlider 
              members={advisoryBoardMembers} 
              subtitleClassName="text-slate-300"
              title={
                <>
                  Esteemed <span className="text-brand font-black">Advisory Board</span>
                </>
              }
            />
          </div>

          {/* Clean Horizontal Divider to demarcate distinct leadership boards */}
          <div className="my-8 flex items-center justify-center">
            <div className="w-1/3 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          </div>

          {/* Advocacy Board section - Stable, 2 people on screen, non-moving */}
          <div id="advocacy-board-slider-container" className="mt-4 p-6 px-4 md:px-12 rounded-[2.5rem] border border-white/10 bg-slate-900/20 backdrop-blur-xl overflow-hidden group shadow-2xl relative">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="flex flex-col items-center text-center mb-6 gap-1.5 relative z-10">
              <h2 className="text-xl xs:text-2xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight sm:whitespace-nowrap whitespace-normal">
                Esteemed <span className="text-brand font-black">Advocacy Board</span>
              </h2>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
                {advocacyBoardMembers.map((member, idx) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="flex flex-col p-4 rounded-2xl bg-slate-950/60 border border-white/5 hover:border-brand/25 transition-all duration-300 shadow-xl group/card relative overflow-hidden"
                  >
                    {/* Card Background glow */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Avatar Frame - Compact, full-width aspect ratio */}
                    <div className="w-full aspect-square sm:aspect-[4/3.8] rounded-xl overflow-hidden border border-white/10 bg-slate-900 relative mb-4">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                        style={{ objectPosition: member.objectPosition || "50% 15%" }}
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Text content - highlighting school, name, designation (Centrally Aligned!) */}
                    <div className="space-y-1 px-1 pb-1 relative z-10 text-center flex-grow flex flex-col justify-end">
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
          </div>

        </div>
      </section>

      <section id="pillars" className="py-6 md:py-8 px-6 sm:px-8 border-b border-white/5 relative overflow-hidden bg-slate-950/40">
        {/* Dynamic golden theme portal background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-brand/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-6">
            <h2 className="text-xl xs:text-2xl sm:text-4xl md:text-5xl font-display font-bold mb-2 tracking-tight text-white sm:whitespace-nowrap whitespace-normal">
              <span className="text-white font-black">Four</span> <span className="text-brand font-black">Foundational Pillars</span>
            </h2>
            <div className="text-base md:text-lg font-light leading-relaxed max-w-4xl mx-auto mt-1.5 space-y-1">
              <p className="text-[10px] xs:text-[12px] sm:text-base lg:text-[19px] leading-relaxed text-[#e7f5f9] font-normal whitespace-nowrap overflow-hidden text-ellipsis sm:whitespace-normal">Laying base of the UAE Strategy for Artificial Intelligence 2031.</p>
              <p className="text-[10px] xs:text-[12px] sm:text-base lg:text-[19px] leading-relaxed text-[#e7f5f9] font-normal whitespace-nowrap overflow-hidden text-ellipsis sm:whitespace-normal">From the UAE to the World - AI | Innovation | Sustainability | Research</p>
            </div>
          </div>
 
          {/* Grand Sliding Pillars Component */}
          <div 
            className="relative max-w-7xl mx-auto px-4 sm:px-12 md:px-16 mt-4"
            onMouseEnter={() => setIsPillarHovered(true)}
            onMouseLeave={() => setIsPillarHovered(false)}
          >
            
            {/* Highly Visible Navigation Arrows */}
            <button
              onClick={() => setActivePillarIndex((prev) => (prev - 1 + 4) % 4)}
              className="hidden sm:flex absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-brand/60 bg-slate-900/95 hover:bg-brand hover:text-slate-950 text-brand items-center justify-center transition-all duration-300 cursor-pointer shadow-lg shadow-brand/20 hover:scale-110"
              aria-label="Previous Pillar"
              id="pillar-prev-btn"
            >
              <ChevronLeft size={24} className="stroke-[2.5]" />
            </button>

            <button
              onClick={() => setActivePillarIndex((prev) => (prev + 1) % 4)}
              className="hidden sm:flex absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-brand/60 bg-slate-900/95 hover:bg-brand hover:text-slate-950 text-brand items-center justify-center transition-all duration-300 cursor-pointer shadow-lg shadow-brand/20 hover:scale-110"
              aria-label="Next Pillar"
              id="pillar-next-btn"
            >
              <ChevronRight size={24} className="stroke-[2.5]" />
            </button>

            {/* Active Card display with smooth fade */}
            <div className="w-full">
               <AnimatePresence mode="wait">
                 {[
                   {
                     id: 'pillar-dubai',
                     number: '1',
                     icon: Cpu,
                     title: "WE-Dubai Declaration",
                     subtitle: "The AI Commitment",
                     badge: "AI Training & Global Mentorship",
                     desc: "Training 2,500 Women Educators to reclaim 30% efficiency through everyday AI, enabling them to train additional 2,500 Women Educators in AI from developing nations.",
                     image: dubaiDeclarationImg,
                     fallbackImage: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200&h=800",
                     stats: [
                       { label: "Target Cohort", value: "2,500 Educators" },
                       { label: "Time Reclaimed", value: "30% Saved" },
                       { label: "Global Reach", value: "5,000 Women Educators" }
                     ]
                   },
                   {
                     id: 'pillar-green',
                     number: '2',
                     icon: Leaf,
                     title: "WE-Green Quotient",
                     subtitle: "Sustainability Champion",
                     badge: "AED 1,000,000 Eco-Grant",
                     desc: "Inspiring grass-roots innovation with AED 1,000,000 in eco-friendly campus infrastructure, awarded to Women Educator-Student duo with the most impactful and sustainable initiative.",
                     image: greenIntelligenceImg,
                     fallbackImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200&h=800",
                     stats: [
                       { label: "Total Reward", value: "AED 1,000,000" },
                       { label: "Eligible Teams", value: "Women Educator-Student" },
                       { label: "Focus Initiative", value: "Sustainability" }
                     ]
                   },
                   {
                     id: 'pillar-shark',
                     number: '3',
                     icon: Rocket,
                     title: "WE-Shark",
                     subtitle: "Innovation Hub",
                     badge: "AED 100,000 Venture Prize",
                     desc: "Anchoring the region’s most disruptive educational venture arena by empowering visionary Women Educator-Student duo with a historic AED 100,000 cash prize to scale high-impact classroom innovation.",
                     image: weSharkTankImg,
                     fallbackImage: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=1200&h=800",
                     stats: [
                       { label: "Venture Prize", value: "AED 100,000" },
                       { label: "Eligible Team", value: "Women Educator-Student" },
                       { label: "Focus Initiative", value: "Classroom Innovation" }
                     ]
                   },
                   {
                     id: 'pillar-grant',
                     number: '4',
                     icon: GraduationCap,
                     title: "WE-Grant",
                     subtitle: "Research Pioneer",
                     badge: "Fully-Funded PhD Scholarships",
                     desc: "Funding PhD scholarships for five visionary Emirati women educators, dedicating research grants that drive advanced research and localized knowledge creation in the UAE.",
                     image: emiratizationScholarshipImg,
                     fallbackImage: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&q=80&w=1200&h=800",
                     stats: [
                       { label: "Research Seats", value: "5 Scholars" },
                       { label: "Emiratization", value: "Dedicated" },
                       { label: "Coverage", value: "Fully-Funded" }
                     ]
                   }
                 ].map((pillar, idx) => {
                   if (idx !== activePillarIndex) return null;
                   return (
                     <motion.div
                       key={pillar.id}
                       initial={{ opacity: 0, scale: 0.98 }}
                       animate={{ opacity: 1, scale: 1 }}
                       exit={{ opacity: 0, scale: 0.98 }}
                       transition={{ duration: 0.25 }}
                       className="w-full flex flex-col md:flex-row gap-8 p-6 md:p-10 rounded-3xl bg-slate-900/70 border border-white/10 shadow-2xl items-center md:items-stretch relative overflow-hidden"
                     >
                       {/* Subtle golden background glow behind card */}
                       <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 blur-[80px] rounded-full pointer-events-none" />

                       {/* Grand Pillar Image */}
                       <div className="w-full md:w-[420px] aspect-[16/10] md:aspect-[4/3] shrink-0 rounded-2xl overflow-hidden border border-white/10 bg-slate-950 relative">
                         <img 
                           src={pillar.image} 
                           alt={pillar.title} 
                           style={pillar.id === 'pillar-grant' ? { objectPosition: '50% 20%' } : undefined}
                           className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-all duration-300"
                           referrerPolicy="no-referrer"
                           onError={(e) => {
                             if (pillar.fallbackImage) {
                               (e.currentTarget as HTMLImageElement).src = pillar.fallbackImage;
                             }
                           }}
                         />
                        </div>

                        {/* Pillar Content Details */}
                        <div className="flex flex-col justify-between flex-1 min-w-0 w-full text-left relative z-10 py-1">
                          <div className="space-y-4">
                            <div className="flex flex-col items-start gap-2">
                              <span className="text-sm sm:text-base lg:text-[19px] leading-relaxed text-[#e7f5f9] font-normal block">
                                Pillar 0{pillar.number} • {pillar.subtitle}
                              </span>
                              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-slate-950/80 border border-white/10 w-fit">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse shrink-0" />
                                <span className="text-sm sm:text-base lg:text-[19px] leading-relaxed text-[#e7f5f9] font-normal">{pillar.badge}</span>
                              </div>
                            </div>

                            <h4 className="text-sm sm:text-base lg:text-[19px] leading-relaxed text-[#e7f5f9] font-normal font-sans">
                              {pillar.title}
                            </h4>

                            <p className="pillar-desc">
                              {pillar.desc}
                            </p>

                            {/* Stats Grid to fit content beautifully so card never looks empty */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4 pt-2">
                              {pillar.stats.map((stat, sIdx) => (
                                <div key={sIdx} className="bg-slate-950/40 border border-white/5 p-3 rounded-2xl flex flex-col justify-center text-left overflow-hidden">
                                  <span className="text-sm sm:text-base lg:text-[19px] leading-relaxed text-[#e7f5f9] font-normal mb-1 block whitespace-nowrap overflow-hidden text-ellipsis">
                                    {stat.label}
                                  </span>
                                  <span className="text-sm sm:text-base lg:text-[19px] leading-relaxed text-[#e7f5f9] font-normal block whitespace-nowrap overflow-hidden text-ellipsis">
                                    {stat.value}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Action Bar */}
                          <div className="pt-3 border-t border-white/5 flex items-center justify-between mt-4">
                            <span className="text-sm sm:text-base lg:text-[19px] leading-relaxed text-[#e7f5f9] font-normal block">Active Track</span>
                            <button
                              onClick={() => {
                                if (pillar.id === 'pillar-dubai') setDubaiDeclarationExpanded(true);
                                else if (pillar.id === 'pillar-green') setGreenQuotientExpanded(true);
                                else if (pillar.id === 'pillar-shark') setWeSharkExpanded(true);
                                else if (pillar.id === 'pillar-grant') setWeGrantExpanded(true);
                              }}
                              className="px-4 py-2 rounded-xl bg-brand/10 hover:bg-brand text-[#e7f5f9] hover:text-slate-950 border border-brand/30 hover:border-transparent transition-all duration-300 cursor-pointer flex items-center gap-1.5 hover:scale-105"
                            >
                              <span className="text-sm sm:text-base lg:text-[19px] leading-relaxed text-[#e7f5f9] font-normal text-inherit">Know More</span>
                              <ArrowRight size={14} className="shrink-0" />
                            </button>
                          </div>
                        </div>
                     </motion.div>
                   );
                 })}
               </AnimatePresence>
             </div>

            {/* Progress Dots / Mobile Navigation below */}
            <div className="flex sm:hidden items-center justify-center gap-4 mt-5">
              <button
                onClick={() => setActivePillarIndex((prev) => (prev - 1 + 4) % 4)}
                className="w-9 h-9 rounded-full border border-brand/40 bg-slate-900 text-brand flex items-center justify-center transition-all duration-300 cursor-pointer"
                aria-label="Previous"
              >
                <ChevronLeft size={16} className="stroke-[2.5]" />
              </button>
              <div className="flex gap-1.5">
                {[0, 1, 2, 3].map((idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePillarIndex(idx)}
                    className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                      activePillarIndex === idx ? "w-6 bg-brand" : "w-2 bg-white/20"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => setActivePillarIndex((prev) => (prev + 1) % 4)}
                className="w-9 h-9 rounded-full border border-brand/40 bg-slate-900 text-brand flex items-center justify-center transition-all duration-300 cursor-pointer"
                aria-label="Next"
              >
                <ChevronRight size={16} className="stroke-[2.5]" />
              </button>
            </div>

            <div className="hidden sm:flex justify-center gap-1.5 mt-5">
              {[0, 1, 2, 3].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePillarIndex(idx)}
                  className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                    activePillarIndex === idx ? "w-6 bg-brand" : "w-2 bg-white/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* WE-Dubai Declaration In-Depth Modal */}
      <AnimatePresence>
        {dubaiDeclarationExpanded && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDubaiDeclarationExpanded(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* Modal Card - Dark Slate Theme matching the website */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
              className="relative bg-slate-900/95 backdrop-blur-xl text-slate-100 rounded-[2.5rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] border border-white/10 max-w-2xl w-full p-6 md:p-8 overflow-y-auto max-h-[85vh] z-10"
            >
              {/* Close Button X */}
              <button
                onClick={() => setDubaiDeclarationExpanded(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all cursor-pointer duration-200"
                aria-label="Close dialog"
                title="Close"
              >
                <X size={18} />
              </button>

              {/* Header block with brand colors */}
              <div className="border-b border-white/5 pb-4 mb-6 space-y-1">
                <span className="pillar-uniform-text text-brand uppercase tracking-[0.25em] block">
                  PILLAR 01 • IN-DEPTH
                </span>
                <h3 className="text-2xl font-display font-bold text-white tracking-tight leading-snug">
                  WE-Dubai Declaration
                </h3>
                <p className="pillar-uniform-text text-slate-400 tracking-wide block">
                  From the UAE to the World: Building the Global Train-the-Trainer Pipeline
                </p>
              </div>

              {/* Body Content with the requested content & styles */}
              <div className="space-y-6 text-slate-300">
                <p className="pillar-uniform-text text-slate-300 leading-relaxed block">
                  The <strong className="font-semibold text-white">WE-Dubai Declaration</strong> is a groundbreaking cross-border mandate engineered to address the global digital divide. In direct alignment with the UAE’s sovereign vision for AI leadership, we are building an elite digital capability bridge. Through strategic global corporate alliances, we are providing fully-funded, world-class AI literacy training to 2,500 UAE Women Educators—equipping them to automate administrative workflows and reclaim 30% of their time.
                </p>

                <p className="pillar-uniform-text text-slate-300 leading-relaxed block">
                  <strong className="font-semibold text-white">The Global Ripple Effect:</strong> To honor the UAE’s deep-rooted culture of giving back, 30% saving will step under our Train-the-Trainer framework, remote-mentoring 2,500 women educators in developing nations. One trained leader in the UAE directly empowers a classroom thousands of miles away.
                </p>

                <div className="space-y-4 pt-4 border-t border-white/5">
                  <ul className="space-y-3.5">
                    <li className="pillar-uniform-text flex items-start gap-2 text-slate-300">
                      <span className="text-brand shrink-0 font-bold">•</span>
                      <span>
                        <strong className="font-semibold text-white">For School Groups Only:</strong> Command the future of the classroom. Reclaim your time.{" "}
                        <button 
                          onClick={() => { 
                            setDubaiDeclarationExpanded(false); 
                            setActivePage('registration'); 
                          }}
                          className="pillar-uniform-text text-brand hover:text-brand/80 hover:underline font-semibold inline cursor-pointer bg-transparent border-none p-0 text-left transition-all"
                          style={{ fontSize: 'inherit', fontWeight: 'inherit' }}
                        >
                          [Secure Your Funded AI Seat]
                        </button>
                        <span> (No Individual Educator Registrations will be made)</span>
                      </span>
                    </li>
                    <li className="pillar-uniform-text flex items-start gap-2 text-slate-300">
                      <span className="text-brand shrink-0 font-bold">•</span>
                      <span>
                        <strong className="font-semibold text-white">For Corporate Sponsors:</strong> Champion a metric-driven, global CSR milestone that exports UAE innovation to the world.{" "}
                        <button 
                          onClick={() => { 
                            setDubaiDeclarationExpanded(false); 
                            setActivePage('registration'); 
                          }}
                          className="pillar-uniform-text text-brand hover:text-brand/80 hover:underline font-semibold inline cursor-pointer bg-transparent border-none p-0 text-left transition-all"
                          style={{ fontSize: 'inherit', fontWeight: 'inherit' }}
                        >
                          [Invest in the Global AI Pipeline]
                        </button>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* WE-Shark Tank In-Depth Modal */}
      <AnimatePresence>
        {weSharkExpanded && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setWeSharkExpanded(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* Modal Card - Dark Slate Theme matching the website */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
              className="relative bg-slate-900/95 backdrop-blur-xl text-slate-100 rounded-[2.5rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] border border-white/10 max-w-2xl w-full p-6 md:p-8 overflow-y-auto max-h-[85vh] z-10"
            >
              {/* Close Button X */}
              <button
                onClick={() => setWeSharkExpanded(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all cursor-pointer duration-200"
                aria-label="Close dialog"
                title="Close"
              >
                <X size={18} />
              </button>

              {/* Header block with brand colors */}
              <div className="border-b border-white/5 pb-4 mb-6 space-y-1">
                <span className="pillar-uniform-text text-brand uppercase tracking-[0.25em] block">
                  PILLAR 03 • IN-DEPTH
                </span>
                <h3 className="text-2xl font-display font-bold text-white tracking-tight leading-snug">
                  WE-Shark
                </h3>
              </div>

              {/* Body Content with the requested content & styles */}
              <div className="space-y-6 text-slate-300">
                <p className="pillar-uniform-text font-semibold text-white tracking-wide block">
                  Venture Philanthropy Redefining the Classroom.
                </p>

                <p className="pillar-uniform-text text-slate-300 leading-relaxed block">
                  WE-Shark is a high-stakes classroom incubator applying authentic venture-capital rigor to discover, fund, and scale grassroots educational IP. We invite visionary Teacher-Student Duos with a tested classroom prototype to step into the tank. Most impactful few entries will pitch live to an elite panel of women education leaders supported by corporate CEOs, for a chance to secure a monumental AED 1 Million Impact Investment designed to scale your idea nationwide.
                </p>

                <div className="space-y-4 pt-4 border-t border-white/5">
                  <ul className="space-y-3.5">
                    <li className="pillar-uniform-text flex items-start gap-2 text-slate-300">
                      <span className="text-brand shrink-0 font-bold">•</span>
                      <span>
                        <strong className="font-semibold text-white">For Disruptors:</strong> Bring your prototype to the ultimate stage and secure the ultimate funding.{" "}
                        <button 
                          onClick={() => { 
                            setWeSharkExpanded(false); 
                            setActivePage('shark-tank'); 
                          }}
                          className="pillar-uniform-text text-brand hover:text-brand/80 hover:underline font-semibold inline cursor-pointer bg-transparent border-none p-0 text-left transition-all"
                          style={{ fontSize: 'inherit', fontWeight: 'inherit' }}
                        >
                          [Enter the WE-Shark Tank]
                        </button>
                      </span>
                    </li>
                    <li className="pillar-uniform-text flex items-start gap-2 text-slate-300">
                      <span className="text-brand shrink-0 font-bold">•</span>
                      <span>
                        <strong className="font-semibold text-white">For Corporate Investors:</strong> Gain first-look access to groundbreaking educational technology, proprietary IP, and exceptional young talent.{" "}
                        <button 
                          onClick={() => { 
                            setWeSharkExpanded(false); 
                            setActivePage('registration'); 
                          }}
                          className="pillar-uniform-text text-brand hover:text-brand/80 hover:underline font-semibold inline cursor-pointer bg-transparent border-none p-0 text-left transition-all"
                          style={{ fontSize: 'inherit', fontWeight: 'inherit' }}
                        >
                          [Join the Elite Executive Judging Panel]
                        </button>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* WE-Shark Submission Process Modal */}
      <AnimatePresence>
        {weSharkSubmissionExpanded && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setWeSharkSubmissionExpanded(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* Modal Card - White Base with Blue & Yellow Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
              className="relative bg-white text-slate-900 rounded-[2.5rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] border border-slate-200/60 max-w-3xl w-full p-6 md:p-8 overflow-y-auto max-h-[85vh] z-10"
            >
              {/* Close Button X */}
              <button
                onClick={() => setWeSharkSubmissionExpanded(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-all cursor-pointer duration-200"
                aria-label="Close dialog"
                title="Close"
              >
                <X size={18} />
              </button>

              {/* Header block with yellow and blue color content */}
              <div className="border-b border-slate-100 pb-4 mb-6 space-y-2">
                <span className="font-mono font-black text-blue-600 uppercase tracking-[0.25em] block text-xs sm:text-sm">
                  WE-SHARK TANK • REGISTRATION
                </span>
                <h3 className="text-2xl font-display font-bold text-blue-900 tracking-tight leading-snug">
                  Step-by-Step Submission Process
                </h3>
                <p className="text-slate-650 font-light leading-relaxed text-sm sm:text-base">
                  If you are a teacher or a student, here is exactly how to take your classroom idea and submit it to the WE-Shark fund:
                </p>
              </div>

              {/* Body Content with steps */}
              <div className="space-y-6">
                <div className="relative pl-6 border-l-2 border-blue-100 space-y-8 ml-3 py-2">
                  {/* Step 1 */}
                  <div className="relative">
                    {/* Dot on timeline */}
                    <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-4 border-white bg-blue-600 shadow-sm" />
                    <div className="space-y-1">
                      <span className="text-xs font-mono font-bold text-blue-600 tracking-wider uppercase block">
                        Step 1
                      </span>
                      <h4 className="font-bold text-blue-950 font-display text-sm sm:text-base">
                        1. Validate Your Prototype
                      </h4>
                      <p className="font-light text-slate-650 leading-relaxed text-xs sm:text-sm">
                        Ensure your teacher-student duo has a working prototype (an app, a device, or a framework) that you have actually tested and used with real students in a classroom setting.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative">
                    {/* Dot on timeline */}
                    <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-4 border-white bg-blue-600 shadow-sm" />
                    <div className="space-y-1">
                      <span className="text-xs font-mono font-bold text-blue-600 tracking-wider uppercase block">
                        Step 2
                      </span>
                      <h4 className="font-bold text-blue-950 font-display text-sm sm:text-base">
                        2. Create Your Innovation Brief
                      </h4>
                      <p className="font-light text-slate-650 leading-relaxed text-xs sm:text-sm">
                        Write a short document explaining what educational problem your innovation solves, how it works, and the positive impact or engagement you saw during your classroom pilot.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative">
                    {/* Dot on timeline */}
                    <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-4 border-white bg-blue-600 shadow-sm" />
                    <div className="space-y-1">
                      <span className="text-xs font-mono font-bold text-blue-600 tracking-wider uppercase block">
                        Step 3
                      </span>
                      <h4 className="font-bold text-blue-950 font-display text-sm sm:text-base">
                        3. Film Your Pitch & Demo Video
                      </h4>
                      <p className="font-light text-slate-650 leading-relaxed text-xs sm:text-sm">
                        Record a concise video introducing your duo, explaining your idea, and showing a live demonstration of your prototype in action. Keep it engaging and focused on why this idea deserves to scale.
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="relative">
                    {/* Dot on timeline */}
                    <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-4 border-white bg-amber-500 shadow-sm" />
                    <div className="space-y-1">
                      <span className="text-xs font-mono font-bold text-amber-600 tracking-wider uppercase block">
                        Step 4
                      </span>
                      <h4 className="font-bold text-blue-950 font-display text-sm sm:text-base">
                        4. Submit Online
                      </h4>
                      <p className="font-light text-slate-650 leading-relaxed text-xs sm:text-sm">
                        Upload your Innovation Brief and your Demo Video (1-minute) to the official WE-Shark application portal before the closing deadline. <span className="font-semibold text-amber-600">(November 10, 2026)</span>
                      </p>
                    </div>
                  </div>

                  {/* Step 5 */}
                  <div className="relative">
                    {/* Dot on timeline */}
                    <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-4 border-white bg-purple-600 shadow-sm" />
                    <div className="space-y-1">
                      <span className="text-xs font-mono font-bold text-purple-600 tracking-wider uppercase block">
                        Step 5
                      </span>
                      <h4 className="font-bold text-blue-950 font-display text-sm sm:text-base">
                        5. Stand By for Boot Camp
                      </h4>
                      <p className="font-light text-slate-650 leading-relaxed text-xs sm:text-sm">
                        Our screening committee will review all submissions. If you make the Top 5, your duo will be invited to clear your schedule for the mandatory 2-week virtual incubator bootcamp!
                      </p>
                    </div>
                  </div>
                </div>

                {/* Navigation / Actions inside the modal */}
                <div className="mt-8 pt-4 border-t border-slate-100 flex justify-between items-center">
                  <button
                    onClick={() => {
                      setWeSharkSubmissionExpanded(false);
                      setWeSharkExpanded(true);
                    }}
                    className="text-xs font-mono font-bold text-blue-600 hover:text-blue-800 transition-colors uppercase tracking-wider flex items-center gap-1 cursor-pointer"
                  >
                    <ChevronLeft size={14} /> Back to Details
                  </button>

                  <button
                    onClick={() => setWeSharkSubmissionExpanded(false)}
                    className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-mono font-bold text-xs tracking-wide uppercase transition-all cursor-pointer duration-200"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* WE-Green Quotient In-Depth Modal */}
      <AnimatePresence>
        {greenQuotientExpanded && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setGreenQuotientExpanded(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* Modal Card - Dark Slate Theme matching the website */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
              className="relative bg-slate-900/95 backdrop-blur-xl text-slate-100 rounded-[2.5rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] border border-white/10 max-w-2xl w-full p-6 md:p-8 overflow-y-auto max-h-[85vh] z-10"
            >
              {/* Close Button X */}
              <button
                onClick={() => setGreenQuotientExpanded(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all cursor-pointer duration-200"
                aria-label="Close dialog"
                title="Close"
              >
                <X size={18} />
              </button>

              {/* Header block with brand colors */}
              <div className="border-b border-white/5 pb-4 mb-6 space-y-1">
                <span className="pillar-uniform-text text-brand uppercase tracking-[0.25em] block">
                  PILLAR 02 • IN-DEPTH
                </span>
                <h3 className="text-2xl font-display font-bold text-white tracking-tight leading-snug">
                  The WE-Green Quotient
                </h3>
              </div>

              {/* Body Content with the requested content & styles */}
              <div className="space-y-6 text-slate-300">
                <p className="pillar-uniform-text font-semibold text-white tracking-wide block">
                  Empowering Next-Gen Climate Architects.
                </p>

                <p className="pillar-uniform-text text-slate-300 leading-relaxed block">
                  In harmony with the UAE’s Net Zero 2050 framework and sustainability mandates, this premier campus initiative searches for outstanding Teacher-Student Duos who are pioneering active, measurable eco-innovations. The ultimate prize? A massive AED 1 Million dedicated capital investment to physically transform the winning school’s campus into a state-of-the-art, sustainable, carbon-neutral ecosystem.
                </p>

                <div className="space-y-4 pt-4 border-t border-white/5">
                  <ul className="space-y-3.5">
                    <li className="pillar-uniform-text flex items-start gap-2 text-slate-300">
                      <span className="text-brand shrink-0 font-bold">•</span>
                      <span>
                        <strong className="font-semibold text-white">For Educators & Innovators:</strong> Lead your school’s green evolution.{" "}
                        <button 
                          onClick={() => { 
                            setGreenQuotientExpanded(false); 
                            setActivePage('registration'); 
                          }}
                          className="pillar-uniform-text text-brand hover:text-brand/80 hover:underline font-semibold inline cursor-pointer bg-transparent border-none p-0 text-left transition-all"
                          style={{ fontSize: 'inherit', fontWeight: 'inherit' }}
                        >
                          [Submit Your Sustainable Innovation]
                        </button>
                      </span>
                    </li>
                    <li className="pillar-uniform-text flex items-start gap-2 text-slate-300">
                      <span className="text-brand shrink-0 font-bold">•</span>
                      <span>
                        <strong className="font-semibold text-white">For Visionary Sponsors:</strong> Anchor your brand to a monumental, physical green legacy project that makes national headlines.{" "}
                        <button 
                          onClick={() => { 
                            setGreenQuotientExpanded(false); 
                            setActivePage('registration'); 
                          }}
                          className="pillar-uniform-text text-brand hover:text-brand/80 hover:underline font-semibold inline cursor-pointer bg-transparent border-none p-0 text-left transition-all"
                          style={{ fontSize: 'inherit', fontWeight: 'inherit' }}
                        >
                          [Sponsor the AED 1M Green Infrastructure]
                        </button>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* WE-Grant In-Depth Modal */}
      <AnimatePresence>
        {weGrantExpanded && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setWeGrantExpanded(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* Modal Card - Dark Slate Theme matching the website */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
              className="relative bg-slate-900/95 backdrop-blur-xl text-slate-100 rounded-[2.5rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] border border-white/10 max-w-2xl w-full p-6 md:p-8 overflow-y-auto max-h-[85vh] z-10"
            >
              {/* Close Button X */}
              <button
                onClick={() => setWeGrantExpanded(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all cursor-pointer duration-200"
                aria-label="Close dialog"
                title="Close"
              >
                <X size={18} />
              </button>

              {/* Header block with brand colors */}
              <div className="border-b border-white/5 pb-4 mb-6 space-y-1">
                <span className="pillar-uniform-text text-brand uppercase tracking-[0.25em] block">
                  PILLAR 04 • IN-DEPTH
                </span>
                <h3 className="text-2xl font-display font-bold text-white tracking-tight leading-snug">
                  WE-Grant
                </h3>
              </div>

              {/* Body Content with the requested content & styles */}
              <div className="space-y-6 text-slate-300">
                <p className="pillar-uniform-text font-semibold text-white tracking-wide block">
                  Driving Knowledge-Economy Leadership.
                </p>

                <p className="pillar-uniform-text text-slate-300 leading-relaxed block">
                  The WE-Grant applies elite academic and strategic rigor to discover, fund, and scale educational research led by exceptional women. Intentionally mapped to support the UAE’s Emiratisation goals, this initiative invites visionary women educators to pitch their research visions live for a chance to secure one of 5 fully funded PhD scholarships.
                </p>

                <div className="space-y-4 pt-4 border-t border-white/5">
                  <ul className="space-y-3.5">
                    <li className="pillar-uniform-text flex items-start gap-2 text-slate-300">
                      <span className="text-brand shrink-0 font-bold">•</span>
                      <span>
                        <strong className="font-semibold text-white">For Researchers:</strong> Step onto the national stage and accelerate your doctoral trajectory.{" "}
                        <button 
                          onClick={() => { 
                            setWeGrantExpanded(false); 
                            setActivePage('emiratization'); 
                          }}
                          className="pillar-uniform-text text-brand hover:text-brand/80 hover:underline font-semibold inline cursor-pointer bg-transparent border-none p-0 text-left transition-all"
                          style={{ fontSize: 'inherit', fontWeight: 'inherit' }}
                        >
                          [Apply for a Fully Funded PhD Grant]
                        </button>
                      </span>
                    </li>
                    <li className="pillar-uniform-text flex items-start gap-2 text-slate-300">
                      <span className="text-brand shrink-0 font-bold">•</span>
                      <span>
                        <strong className="font-semibold text-white">For Corporate Patrons:</strong> Directly power national socio-economic policy, drive Emiratization, and fund the future of educational research.{" "}
                        <button 
                          onClick={() => { 
                            setWeGrantExpanded(false); 
                            setActivePage('registration'); 
                          }}
                          className="pillar-uniform-text text-brand hover:text-brand/80 hover:underline font-semibold inline cursor-pointer bg-transparent border-none p-0 text-left transition-all"
                          style={{ fontSize: 'inherit', fontWeight: 'inherit' }}
                        >
                          [Fund a Doctoral Fellowship]
                        </button>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* WE-Green Quotient Submission Process Modal */}
      <AnimatePresence>
        {greenSubmissionExpanded && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setGreenSubmissionExpanded(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* Modal Card - White Base with Blue & Yellow Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
              className="relative bg-white text-slate-900 rounded-[2.5rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] border border-slate-200/60 max-w-2xl w-full p-6 md:p-8 overflow-y-auto max-h-[85vh] z-10"
            >
              {/* Back to Green Quotient Link */}
              <div className="mb-4">
                <button
                  onClick={() => {
                    setGreenSubmissionExpanded(false);
                    setGreenQuotientExpanded(true);
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer bg-transparent border-none p-0"
                >
                  <span>← Back to Green Quotient Details</span>
                </button>
              </div>

              {/* Close Button X */}
              <button
                onClick={() => setGreenSubmissionExpanded(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-all cursor-pointer duration-200"
                aria-label="Close dialog"
                title="Close"
              >
                <X size={18} />
              </button>

              {/* Header block with yellow and blue color content */}
              <div className="border-b border-slate-100 pb-4 mb-6 space-y-1">
                <span className="font-mono font-black text-blue-600 uppercase tracking-[0.25em] block text-xs sm:text-sm">
                  PILLAR 02 • SUBMISSION ROADMAP
                </span>
                <h3 className="text-2xl font-display font-bold text-blue-900 tracking-tight leading-snug">
                  Step-by-Step Submission Process
                </h3>
              </div>

              {/* Intro Statement */}
              <p className="font-light text-slate-700 leading-relaxed mb-6 text-sm sm:text-base">
                To make things easy, here is the exact roadmap for you and your teammate to get your submission ready.
              </p>

              {/* Steps Layout */}
              <div className="space-y-6">
                {/* Step 1 */}
                <div className="p-4.5 rounded-2xl bg-amber-50/70 border border-amber-200/80">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="px-2 py-0.5 rounded bg-amber-100 text-[10px] font-mono font-bold text-amber-700 uppercase">Step 1</span>
                    <h4 className="font-semibold text-blue-900 text-sm sm:text-base">
                      1. Form Your Duo & Pick Your Project
                    </h4>
                  </div>
                  <p className="font-light text-slate-700 leading-relaxed text-sm sm:text-base">
                    Make sure you have one teacher and at least one student teamed up. Pick a live, active eco-friendly project you have already started or run on or off your school campus.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="p-4.5 rounded-2xl bg-yellow-50/50 border border-yellow-200">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="px-2 py-0.5 rounded bg-yellow-100 text-[10px] font-mono font-bold text-yellow-700 uppercase">Step 2</span>
                    <h4 className="font-semibold text-blue-900 text-sm sm:text-base">
                      2. Gather Your Data
                    </h4>
                  </div>
                  <p className="font-light text-slate-700 leading-relaxed text-sm sm:text-base">
                    Spend a couple of weeks measuring your results. For example - Count the plastic bottles recycled, weigh the food waste saved, or track the water conserved. Put these exact numbers onto a single, easy-to-read page (your 1-Page Data Log).
                  </p>
                </div>

                {/* Step 3 */}
                <div className="p-4.5 rounded-2xl bg-amber-50/70 border border-amber-200/80">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="px-2 py-0.5 rounded bg-amber-100 text-[10px] font-mono font-bold text-amber-700 uppercase">Step 3</span>
                    <h4 className="font-semibold text-blue-900 text-sm sm:text-base">
                      3. Write Your Project Summary
                    </h4>
                  </div>
                  <p className="font-light text-slate-700 leading-relaxed text-sm sm:text-base">
                    Create a short presentation explaining how you did it, who helped, and how it benefits the school. Save this final document as a PDF file.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="p-4.5 rounded-2xl bg-yellow-50/50 border border-yellow-200">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="px-2 py-0.5 rounded bg-yellow-100 text-[10px] font-mono font-bold text-yellow-700 uppercase">Step 4</span>
                    <h4 className="font-semibold text-blue-900 text-sm sm:text-base">
                      4. Record Your 3-Minute Video
                    </h4>
                  </div>
                  <p className="font-light text-slate-700 leading-relaxed text-sm sm:text-base">
                    Grab a smartphone and film a quick, energetic 3-minute video. Introduce your duo, show your project working live on campus, and proudly share your best numbers from your data log.
                  </p>
                </div>

                {/* Step 5 */}
                <div className="p-4.5 rounded-2xl bg-amber-50/70 border border-amber-200/80">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="px-2 py-0.5 rounded bg-amber-100 text-[10px] font-mono font-bold text-amber-700 uppercase">Step 5</span>
                    <h4 className="font-semibold text-blue-900 text-sm sm:text-base">
                      5. Upload and Submit
                    </h4>
                  </div>
                  <p className="font-light text-slate-700 leading-relaxed mb-1 text-sm sm:text-base">
                    Go to the official submission link, upload your PDF Project Summary, your 1-Page Data Log, and your 3-Minute Video, then hit submit before the deadline!
                  </p>
                  <p className="font-mono text-xs font-bold text-red-600 mt-1">
                    (Deadline: November 15th, 2026)
                  </p>
                </div>

                {/* Keep it Simple Tip Section */}
                <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200/80">
                  <h4 className="font-mono font-bold text-blue-700 uppercase tracking-[0.15em] mb-2 flex items-center gap-1.5 text-xs sm:text-sm">
                    💡 Keep it Simple:
                  </h4>
                  <p className="font-light text-slate-700 leading-relaxed text-sm sm:text-base">
                    The judges aren't looking for complex corporate reports. They want to see real passion from you and your teacher, creative thinking, and honest numbers showing that you are making your school greener!
                  </p>
                </div>
              </div>

              {/* Close Button at bottom */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setGreenSubmissionExpanded(false)}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-mono font-bold text-xs tracking-wide uppercase transition-all cursor-pointer duration-200"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Highlights Section */}
      <section id="program" className="py-6 md:py-8 px-6 sm:px-8 border-b border-white/5 relative overflow-hidden bg-slate-950/40">
        {/* Dynamic golden theme portal background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-brand/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-3">
            <h2 className="text-xl xs:text-2xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-white sm:whitespace-nowrap whitespace-normal">
              Key <span className="text-brand font-black">Event Highlights</span>
            </h2>
          </div>

          {/* Grand Sliding Highlights Component */}
          <div 
            className="relative max-w-7xl mx-auto px-4 sm:px-12 md:px-16 mt-4"
            onMouseEnter={() => setIsHighlightHovered(true)}
            onMouseLeave={() => setIsHighlightHovered(false)}
          >
            
            {/* Highly Visible Navigation Arrows */}
            <button
              onClick={() => setActiveHighlightIdx((prev) => (prev - 1 + 4) % 4)}
              className="hidden sm:flex absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-brand/60 bg-slate-900/95 hover:bg-brand hover:text-slate-950 text-brand items-center justify-center transition-all duration-300 cursor-pointer shadow-lg shadow-brand/20 hover:scale-110"
              aria-label="Previous Highlight"
              id="highlight-prev-btn"
            >
              <ChevronLeft size={24} className="stroke-[2.5]" />
            </button>

            <button
              onClick={() => setActiveHighlightIdx((prev) => (prev + 1) % 4)}
              className="hidden sm:flex absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-brand/60 bg-slate-900/95 hover:bg-brand hover:text-slate-950 text-brand items-center justify-center transition-all duration-300 cursor-pointer shadow-lg shadow-brand/20 hover:scale-110"
              aria-label="Next Highlight"
              id="highlight-next-btn"
            >
              <ChevronRight size={24} className="stroke-[2.5]" />
            </button>

            {/* Active Card display with smooth fade */}
            <div className="w-full">
              <AnimatePresence mode="wait">
                {[
                  {
                    id: 'highlight-keynote',
                    icon: Mic2,
                    title: "VIP Keynote",
                    subtitle: "Sovereign Insights",
                    badge: "Invited Presentation",
                    desc: "UAE Leadership Keynotes: Gain exclusive perspectives from the policy makers and visionaries shaping the nation’s educational framework in perfect alignment with strategic digital goals.",
                    image: highlightKeynoteImg,
                    fallbackImage: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=1200&h=800",
                    stats: [
                      { label: "Representing", value: "UAE Leadership" },
                      { label: "Strategic Focus", value: "Digital Policy" },
                      { label: "Inspiration", value: "Sovereign Future" }
                    ]
                  },
                  {
                    id: 'highlight-accord',
                    icon: Handshake,
                    title: "Vision 2030",
                    subtitle: "Inter-Emirates Dialogue",
                    badge: "Collaborative Leadership",
                    desc: "A collaborative dialogue bringing together education stakeholders from all 7 Emirates. Strategize on national standardization, shared growth, and community integration to secure a cohesive national vision for regional education.",
                    image: highlightAccordImg,
                    fallbackImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200&h=800",
                    stats: [
                      { label: "Ecosystem Reach", value: "7 Emirates" },
                      { label: "Goal Alignment", value: "Cohesive Vision" },
                      { label: "Collaboration", value: "Shared Growth" }
                    ]
                  },
                  {
                    id: 'highlight-directors',
                    icon: Users,
                    title: "Directors' Special",
                    subtitle: "Global Ecosystems",
                    badge: "Curriculum Strategy",
                    desc: "Foster global standards locally. Engage in strategic dialogue with international curriculum leaders to unpack global benchmarks and implement high-impact methodologies.",
                    image: highlightDirectorsImg,
                    fallbackImage: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1200&h=800",
                    stats: [
                      { label: "Ecosystems", value: "International" },
                      { label: "High-Impact", value: "Localized Methods" },
                      { label: "Benchmark", value: "Global Standard" }
                    ]
                  },
                  {
                    id: 'highlight-cpd',
                    icon: Award,
                    title: "Masterclass Sessions",
                    subtitle: "Professional Growth",
                    badge: "AI Literacy & Well-being",
                    desc: "High-impact Masterclass Sessions for educators and leaders. Dive deep into artificial intelligence integration, operational efficiencies, digital well-being, and curriculum enrichment practices designed for real-world impact.",
                    image: highlightCpdImg,
                    fallbackImage: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=1200&h=800",
                    stats: [
                      { label: "Engagement", value: "Interactive" },
                      { label: "Application", value: "Real-World AI" },
                      { label: "Impact Areas", value: "Enrichment" }
                    ]
                  }
                ].map((item, idx) => {
                  if (idx !== activeHighlightIdx) return null;
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.25 }}
                      className="w-full flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6 md:p-10 rounded-3xl bg-slate-900/70 border border-white/10 shadow-2xl items-center md:items-stretch relative overflow-hidden"
                    >
                      {/* Subtle golden background glow behind card */}
                      <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 blur-[80px] rounded-full pointer-events-none" />

                      {/* Grand Highlight Image */}
                      <div className="w-full md:w-[420px] aspect-[16/10] md:aspect-[4/3] shrink-0 rounded-2xl overflow-hidden border border-white/10 bg-slate-950 relative">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-all duration-300"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            if (item.fallbackImage) {
                              (e.currentTarget as HTMLImageElement).src = item.fallbackImage;
                            }
                          }}
                        />
                      </div>

                      {/* Highlight Content Details */}
                      <div className="flex flex-col justify-between flex-1 min-w-0 w-full text-left relative z-10 py-1">
                        <div className="space-y-4">
                          <div className="flex flex-col items-start gap-2">
                            <span className="text-sm sm:text-base lg:text-[19px] leading-relaxed font-normal block" style={{ color: '#edd242' }}>
                              HIGHLIGHT 0{idx + 1} • {item.subtitle}
                            </span>
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-slate-950/80 border border-white/10 w-fit">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse shrink-0" />
                              <span className="text-sm sm:text-base lg:text-[19px] leading-relaxed text-[#e7f5f9] font-normal">{item.badge}</span>
                            </div>
                          </div>

                          <h4 className="text-2xl sm:text-3xl font-display font-bold tracking-tight" style={{ color: '#edd242' }}>
                            {item.title}
                          </h4>

                          <p className="text-sm sm:text-base lg:text-[19px] leading-relaxed text-[#e7f5f9] font-normal">
                            {item.desc}
                          </p>

                          {/* Stats Grid to fit content beautifully so card never looks empty */}
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4 pt-2">
                            {item.stats.map((stat, sIdx) => (
                              <div key={sIdx} className="bg-slate-950/40 border border-white/5 p-3 rounded-2xl flex flex-col justify-center text-left overflow-hidden">
                                <span className="text-[11px] xs:text-xs sm:text-[13px] md:text-sm xl:text-base leading-relaxed text-[#e7f5f9] font-normal mb-1 block whitespace-nowrap overflow-hidden text-ellipsis">
                                  {stat.label}
                                </span>
                                <span className="text-[11px] xs:text-xs sm:text-[13px] md:text-sm xl:text-base leading-relaxed text-[#e7f5f9] font-normal block whitespace-nowrap overflow-hidden text-ellipsis">
                                  {stat.value}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Progress Dots / Mobile Navigation below */}
            <div className="flex sm:hidden items-center justify-center gap-4 mt-5">
              <button
                onClick={() => setActiveHighlightIdx((prev) => (prev - 1 + 4) % 4)}
                className="w-9 h-9 rounded-full border border-brand/40 bg-slate-900 text-brand flex items-center justify-center transition-all duration-300 cursor-pointer"
                aria-label="Previous"
              >
                <ChevronLeft size={16} className="stroke-[2.5]" />
              </button>
              <div className="flex gap-1.5">
                {[0, 1, 2, 3].map((idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveHighlightIdx(idx)}
                    className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                      activeHighlightIdx === idx ? "w-6 bg-brand" : "w-2 bg-white/20"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => setActiveHighlightIdx((prev) => (prev + 1) % 4)}
                className="w-9 h-9 rounded-full border border-brand/40 bg-slate-900 text-brand flex items-center justify-center transition-all duration-300 cursor-pointer"
                aria-label="Next"
              >
                <ChevronRight size={16} className="stroke-[2.5]" />
              </button>
            </div>

            <div className="hidden sm:flex justify-center gap-1.5 mt-5">
              {[0, 1, 2, 3].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveHighlightIdx(idx)}
                  className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                    activeHighlightIdx === idx ? "w-6 bg-brand" : "w-2 bg-white/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Attractions Section (formerly we-ramp, positioned after Key Event Highlights) */}
      <section id="we-ramp" className="py-4 md:py-5 px-6 sm:px-8 border-b border-white/5 relative overflow-hidden bg-slate-950/20">
        {/* Ambient background portal glow */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[200px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-3">
            <h2 className="text-xl xs:text-2xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-white sm:whitespace-nowrap whitespace-normal">
              <span className="text-white font-black">Key</span> <span className="text-brand font-black">Attractions</span>
            </h2>
          </div>

          {/* Key Attractions Sliding Slider Component */}
          <div 
            className="relative max-w-7xl mx-auto px-4 sm:px-12 md:px-16 mt-2"
            onMouseEnter={() => setIsAttractionHovered(true)}
            onMouseLeave={() => setIsAttractionHovered(false)}
          >
            
            {/* Highly Visible Navigation Arrows */}
            <button
              onClick={() => setActiveAttractionIdx((prev) => (prev - 1 + 3) % 3)}
              className="hidden sm:flex absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-brand/60 bg-slate-900/95 hover:bg-brand hover:text-slate-950 text-brand items-center justify-center transition-all duration-300 cursor-pointer shadow-lg shadow-brand/20 hover:scale-110"
              aria-label="Previous Attraction"
              id="attraction-prev-btn"
            >
              <ChevronLeft size={24} className="stroke-[2.5]" />
            </button>

            <button
              onClick={() => setActiveAttractionIdx((prev) => (prev + 1) % 3)}
              className="hidden sm:flex absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-brand/60 bg-slate-900/95 hover:bg-brand hover:text-slate-950 text-brand items-center justify-center transition-all duration-300 cursor-pointer shadow-lg shadow-brand/20 hover:scale-110"
              aria-label="Next Attraction"
              id="attraction-next-btn"
            >
              <ChevronRight size={24} className="stroke-[2.5]" />
            </button>

            {/* Active Card display with smooth fade */}
            <div className="w-full">
              <AnimatePresence mode="wait">
                {[
                  {
                    id: 'attraction-ramp',
                    number: '1',
                    icon: Sparkles,
                    title: "WE-Ramp",
                    subtitle: "Leadership Runway",
                    badge: "Presence • Power • Purpose",
                    desc: "WE-ERA Connect’s signature experiential runway showcase, reimagined. A high-energy evening celebrating the real stars of the sector—our educational leaders, principals, and change-makers.",
                    image: highlightRampImg,
                    fallbackImage: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=1200&h=1600",
                    action: () => navigateAndScroll('contact', 'Sponsor Opportunities', 'WE-Ramp Sponsorship', 'I am writing to inquire about the Premium Evening Sponsorship for the WE-Ramp segment.'),
                    buttonLabel: "Inquire About Sponsorship",
                    stats: [
                      { label: "Runway Focus", value: "School Leaders" },
                      { label: "Format", value: "Live Experiential" },
                      { label: "Presentation", value: "Power & Purpose" }
                    ]
                  },
                  {
                    id: 'attraction-gala',
                    number: '2',
                    icon: Music,
                    title: "Gala Dinner",
                    subtitle: "Elite Networking",
                    badge: "Imperial Culinary Celebration",
                    desc: "Join us for an exquisite gala dinner celebrating excellence in education. Network with sovereign regulators, high-profile dignitaries, and fellow change-makers in an atmosphere of refined elegance, cultural appreciation, and bespoke musical performances.",
                    image: highlightMusicImg,
                    fallbackImage: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=1200&h=800",
                    action: null,
                    buttonLabel: null,
                    stats: [
                      { label: "Celebration", value: "Elite Dining" },
                      { label: "Networking", value: "Regulators & VIPs" },
                      { label: "Ambience", value: "Live Orchestra" }
                    ]
                  },
                  {
                    id: 'attraction-pavilion',
                    number: '3',
                    icon: Award,
                    title: "Grand Pavilion Chase",
                    subtitle: "Interactive Exhibition",
                    badge: "AED 100,000 Teacher Prize",
                    desc: "Participate in the Grand Pavilion Chase, an app-based live quiz that guides you through interactive exhibits. Scan QR codes to unlock clues, watch the leaderboards update in real time, and take home direct cash rewards of up to AED 100,000.",
                    image: highlightPavilionImg,
                    fallbackImage: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=1200&h=800",
                    action: () => navigateAndScroll('contact', 'Pavilion Exploration', 'Pavilion Inquiry', 'I am interested in learning more about participating in the Grand Pavilion Chase and exploring EdTech innovations.'),
                    buttonLabel: "Inquire About Pavilion",
                    stats: [
                      { label: "Exhibition", value: "Future Classroom" },
                      { label: "Prize Pool", value: "AED 100,000" },
                      { label: "Interactive", value: "Grand Chase Quiz" }
                    ]
                  }
                ].map((attr, idx) => {
                  if (idx !== activeAttractionIdx) return null;
                  return (
                    <motion.div
                      key={attr.id}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.25 }}
                      className="w-full flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6 md:p-10 rounded-3xl bg-slate-900/70 border border-white/10 shadow-2xl items-center md:items-stretch relative overflow-hidden"
                    >
                      {/* Subtle golden background glow behind card */}
                      <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 blur-[80px] rounded-full pointer-events-none" />

                      {/* Grand Attraction Image */}
                      <div className="w-full md:w-[420px] aspect-[16/10] md:aspect-[4/3] shrink-0 rounded-2xl overflow-hidden border border-white/10 bg-slate-950 relative">
                        <img 
                          src={attr.image} 
                          alt={attr.title} 
                          className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-all duration-300"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            if (attr.fallbackImage) {
                              (e.currentTarget as HTMLImageElement).src = attr.fallbackImage;
                            }
                          }}
                        />
                      </div>

                      {/* Attraction Content Details */}
                      <div className="flex flex-col justify-between flex-1 min-w-0 w-full text-left relative z-10 py-1">
                        <div className="space-y-4">
                          <div className="flex flex-col items-start gap-2">
                            <span className="text-sm sm:text-base lg:text-[19px] leading-relaxed font-normal block" style={{ color: '#edd242' }}>
                              Attraction 0{attr.number} • {attr.subtitle}
                            </span>
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-slate-950/80 border border-white/10 w-fit">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse shrink-0" />
                              <span className="text-sm sm:text-base lg:text-[19px] leading-relaxed text-[#e7f5f9] font-normal">{attr.badge}</span>
                            </div>
                          </div>

                          <h4 className="text-2xl sm:text-3xl font-display font-bold tracking-tight" style={{ color: '#edd242' }}>
                            {attr.title}
                          </h4>

                          <p className="text-sm sm:text-base lg:text-[19px] leading-relaxed text-[#e7f5f9] font-normal">
                            {attr.desc}
                          </p>

                          {/* Stats Grid to fit content beautifully so card never looks empty */}
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4 pt-2">
                            {attr.stats.map((stat, sIdx) => (
                              <div key={sIdx} className="bg-slate-950/40 border border-white/5 p-3 rounded-2xl flex flex-col justify-center text-left">
                                <span className="text-sm sm:text-base lg:text-[19px] leading-relaxed text-[#e7f5f9] font-normal mb-1 block">
                                  {stat.label}
                                </span>
                                <span className="text-sm sm:text-base lg:text-[19px] leading-relaxed text-[#e7f5f9] font-normal block">
                                  {stat.value}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Action Bar */}
                        <div className="pt-3 border-t border-white/5 flex items-center justify-end mt-4">
                          {attr.action && attr.buttonLabel ? (
                            <button
                              onClick={attr.action}
                              className="px-4 py-2 rounded-xl bg-brand/10 hover:bg-brand text-[#e7f5f9] hover:text-slate-950 border border-brand/30 hover:border-transparent transition-all duration-300 cursor-pointer flex items-center gap-1.5 hover:scale-105"
                            >
                              <span className="text-sm sm:text-base lg:text-[19px] leading-relaxed font-normal text-inherit" style={{ color: '#edd242' }}>{attr.buttonLabel}</span>
                              <ArrowRight size={14} className="shrink-0" />
                            </button>
                          ) : (
                            <div className="h-7" />
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Progress Dots / Mobile Navigation below */}
            <div className="flex sm:hidden items-center justify-center gap-4 mt-5">
              <button
                onClick={() => setActiveAttractionIdx((prev) => (prev - 1 + 3) % 3)}
                className="w-9 h-9 rounded-full border border-brand/40 bg-slate-900 text-brand flex items-center justify-center transition-all duration-300 cursor-pointer"
                aria-label="Previous"
              >
                <ChevronLeft size={16} className="stroke-[2.5]" />
              </button>
              <div className="flex gap-1.5">
                {[0, 1, 2].map((idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveAttractionIdx(idx)}
                    className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                      activeAttractionIdx === idx ? "w-6 bg-brand" : "w-2 bg-white/20"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => setActiveAttractionIdx((prev) => (prev + 1) % 3)}
                className="w-9 h-9 rounded-full border border-brand/40 bg-slate-900 text-brand flex items-center justify-center transition-all duration-300 cursor-pointer"
                aria-label="Next"
              >
                <ChevronRight size={16} className="stroke-[2.5]" />
              </button>
            </div>

            <div className="hidden sm:flex justify-center gap-1.5 mt-5">
              {[0, 1, 2].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveAttractionIdx(idx)}
                  className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                    activeAttractionIdx === idx ? "w-6 bg-brand" : "w-2 bg-white/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* Potential Sponsors Section (positioned before Gallery) */}
      <SponsorPortal navigateAndScroll={navigateAndScroll} />

      {/* Gallery Section */}
      <ExperienceSlidingGallery />

      {/* Organizing Team Slider Section */}
      <section id="organising-team" className="py-6 bg-slate-950/40 relative overflow-hidden border-b border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-brand/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <OrganisingTeamSlider members={organisingTeamData} />
        </div>
      </section>




      {/* Organizing Team overlay modal */}
      <AnimatePresence>

          {selectedTeamMember && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto bg-slate-950/95 backdrop-blur-xl"
              onClick={() => setSelectedTeamMember(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="relative w-full max-w-4xl overflow-hidden rounded-[2.5rem] bg-slate-900 border border-white/10 shadow-[0_0_80px_rgba(251,191,36,0.15)] flex flex-col md:flex-row cursor-default"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedTeamMember(null)}
                  className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-slate-950/60 border border-white/10 hover:border-brand hover:text-slate-950 text-white transition-all active:scale-95 shadow-md scale-95 hover:scale-105"
                  aria-label="Close details"
                >
                  <X size={20} />
                </button>

                {/* Portrait Image column */}
                <div className="md:w-2/5 relative h-80 md:h-auto overflow-hidden">
                  <img
                    src={selectedTeamMember.image}
                    alt={selectedTeamMember.name}
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-900/90 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Team Info Details column */}
                <div className="md:w-3/5 p-8 md:p-12 overflow-y-auto max-h-[85vh] md:max-h-[640px] flex flex-col justify-between">
                  <div>
                    {/* Role & Name */}
                    <span className="text-[10px] font-black uppercase tracking-[0.25em] text-brand mb-2 block">
                      {selectedTeamMember.role}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-display font-medium text-white mb-6">
                      {selectedTeamMember.name}
                    </h3>

                    {/* Extended Biography */}
                    <div className="mb-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">Detailed Profile</h4>
                      <p className="text-slate-300 text-sm md:text-base leading-relaxed font-light font-sans">
                        {selectedTeamMember.bio}
                      </p>
                    </div>

                    {/* Key Strategic Responsibility */}
                    <div className="mb-6 p-5 rounded-2xl bg-white/5 border border-white/5">
                      <div className="flex items-center gap-2 mb-3">
                        <Sparkles size={14} className="text-brand animate-pulse" />
                        <h4 className="text-xs font-black uppercase tracking-wider text-white">Strategic Responsibility</h4>
                      </div>
                      <p className="text-slate-300 text-xs leading-relaxed font-light font-sans">
                        {selectedTeamMember.responsibility}
                      </p>
                    </div>
                  </div>

                  {/* Return button */}
                  <div className="pt-6 border-t border-white/5 flex justify-end">
                    <button 
                      onClick={() => setSelectedTeamMember(null)}
                      className="px-6 py-2.5 rounded-full bg-brand text-slate-950 hover:bg-white hover:text-slate-950 font-black text-xs tracking-wider transition-all uppercase text-center"
                    >
                      Return to Committee
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>



      {/* Frequently Asked Questions Section */}
      <section id="faqs" className="py-6 px-6 bg-slate-950/60 relative overflow-hidden border-t border-white/5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-3">
            <h2 className="text-xl xs:text-2xl sm:text-4xl md:text-5xl font-display font-bold mb-1.5 tracking-tight text-white sm:whitespace-nowrap whitespace-normal">
              Frequently <span className="text-yellow-400">Asked Questions</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-[19px] leading-relaxed text-[#e7f5f9] font-normal max-w-4xl mx-auto mt-0.5 block">
              Find detailed information on the summit, registrations, and application guidelines for our foundational pillars and other activities.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "General Event Details",
              "Pillar 01: The WE-Dubai Declaration (AI Training)",
              "Pillar 02: WE-Green Quotient (Sustainability)",
              "Pillar 03: WE-Shark (Classroom Venture Incubator)",
              "Pillar 04: WE-Grant (Research Fellowship Pool)",
              "Experiential Feature: WE-Ramp",
              "Prospective Corporate Sponsors & Government Partners Strategic Alignment & Governance",
              "Capital Allocation & Pillar Sponsorship"
            ].map((category, catIdx) => {
              const items = faqItems.filter(item => item.category === category);
              if (items.length === 0) return null;
              const isCatOpen = !!openFaqCategories[category];
              return (
                <div key={catIdx} className="space-y-2 border-b border-white/5 pb-3 last:border-0 last:pb-0">
                  {/* Category Section Header Toggle */}
                  <button
                    onClick={() => setOpenFaqCategories(prev => ({ ...prev, [category]: !prev[category] }))}
                    className="w-full flex items-center justify-between text-left py-2 border-b border-white/10 hover:border-brand/40 transition-colors duration-300 group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-1.5 h-5 rounded-full inline-block transition-colors duration-300 ${isCatOpen ? 'bg-brand' : 'bg-slate-700 group-hover:bg-brand/60'}`} />
                      <h3 
                        className="text-sm sm:text-base lg:text-[19px] font-semibold leading-relaxed text-[#e7f5f9] group-hover:text-brand transition-colors block"
                        style={(catIdx === 0 || catIdx === 2 || catIdx === 4 || catIdx === 6) ? { color: '#edd242' } : undefined}
                      >
                        {category}
                      </h3>
                    </div>
                    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border transition-all duration-300 font-mono text-[10px] uppercase font-bold shrink-0 ${
                      isCatOpen 
                        ? 'border-brand/30 bg-brand/10 text-brand' 
                        : 'border-white/5 bg-white/5 text-slate-400 group-hover:border-brand/20 group-hover:text-brand'
                    }`}>
                      <span>{isCatOpen ? 'Hide Section' : 'Show Section'}</span>
                      <ChevronDown size={14} className={`transform transition-transform duration-300 ${isCatOpen ? 'rotate-180' : ''}`} />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isCatOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-2 pt-2 pl-1">
                          {items.map((item) => {
                            const isOpen = openFaq === item.question;
                            return (
                              <div 
                                key={item.question} 
                                className="rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-brand/30 hover:bg-slate-900/60"
                              >
                                <button
                                  onClick={() => setOpenFaq(isOpen ? null : item.question)}
                                  className="w-full flex items-center justify-between py-3.5 px-4 text-left cursor-pointer select-none"
                                  aria-expanded={isOpen}
                                >
                                  <span className="text-sm sm:text-base lg:text-[19px] font-normal leading-relaxed text-slate-100 pr-4 block">
                                    {item.question}
                                  </span>
                                  <span className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-brand transition-colors duration-300 transform shrink-0 ${isOpen ? "rotate-180 bg-brand/10 text-brand" : ""}`}>
                                    <ChevronDown size={18} />
                                  </span>
                                </button>

                                <AnimatePresence initial={false}>
                                  {isOpen && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: "auto", opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.3, ease: "easeInOut" }}
                                      className="overflow-hidden"
                                    >
                                      <div className="px-4 pb-4 pt-1.5 text-[#e7f5f9] text-sm sm:text-base lg:text-[18px] leading-relaxed font-normal border-t border-white/5 whitespace-pre-line block">
                                        {item.answer}
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>



      {/* Contact Us Section */}
      <section id="contact" className="py-6 px-6 bg-slate-900/40 relative overflow-hidden border-t border-white/5">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand/20 bg-brand/5 text-[10px] font-black text-brand uppercase tracking-[0.3em] mx-auto">
              ✉️ GET IN TOUCH
            </div>
            
            <h2 className="text-xl xs:text-2xl sm:text-4xl md:text-5xl font-display font-bold mb-1.5 tracking-tight text-white sm:whitespace-nowrap whitespace-normal">
              Connect <span className="text-yellow-400">With WE-ERA</span>
            </h2>
            
            <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed max-w-4xl mx-auto mt-0.5">
              For more Information
            </p>

            <div className="mt-4 p-8 rounded-[2.5rem] bg-slate-950 border border-white/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col items-center gap-4">
                <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest">
                  Official Communications Portal
                </span>
                
                <a 
                  href="mailto:communications@we-eraconnect.com" 
                  className="text-xl md:text-2xl font-mono font-bold text-brand hover:text-white transition-colors duration-300 break-all select-all"
                >
                  communications@we-eraconnect.com
                </a>

                <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
                  <a
                    href="mailto:communications@we-eraconnect.com"
                    className="py-3 px-6 bg-brand text-slate-950 font-black rounded-full hover:scale-105 active:scale-95 transition-all text-xs uppercase flex items-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(251,191,36,0.15)]"
                  >
                    <Mail size={14} />
                    <span>Send Email</span>
                  </a>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText("communications@we-eraconnect.com");
                      setCopied(true);
                      setTimeout(() => setCopied(false), 2000);
                    }}
                    className="py-3 px-6 bg-slate-900 border border-white/10 hover:border-white/20 text-white font-bold rounded-full hover:scale-105 active:scale-95 transition-all text-xs uppercase flex items-center gap-2 cursor-pointer"
                  >
                    <span>{copied ? "Copied!" : "Copy Address"}</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats & Call to Action */}
      <section className="py-12 px-6 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-video bg-brand/20 blur-[160px] rounded-full opacity-50 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-black mb-8 tracking-tighter"
          >
            January 2027. <br />
            <span className="text-yellow-400">Dubai Awaits You.</span>
          </motion.h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              id="final-register-btn" 
              onClick={() => {
                setActivePage('registration');
              }}
              className="w-full sm:w-auto px-10 py-5 bg-brand text-slate-950 rounded-full text-base font-black hover:scale-105 transition-transform shadow-[0_0_40px_rgba(251,191,36,0.3)] cursor-pointer"
            >
              PRE-REGISTER
            </button>
          </div>
        </div>
      </section>
          </motion.div>
        ) : activePage === 'organising-team-page' ? (
          <motion.div
            key="organising-team-portal"
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -25 }}
            transition={{ duration: 0.4 }}
          >
            <OrganisingTeamPage 
              onBack={() => {
                setActivePage('home');
              }} 
              organisingTeamData={organisingTeamData}
            />
          </motion.div>
        ) : activePage === 'advisory-board' ? (
          <motion.div
            key="advisory-board-portal"
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -25 }}
            transition={{ duration: 0.4 }}
          >
            <AdvisoryBoardPage 
              onBack={() => {
                setActivePage('home');
              }} 
              advisoryBoardMembers={advisoryBoardMembers}
            />
          </motion.div>
        ) : activePage === 'registration' ? (
          <motion.div
            key="registration-portal"
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -25 }}
            transition={{ duration: 0.4 }}
          >
            <RegistrationPortal 
              onBack={() => {
                setActivePage('home');
              }} 
            />
          </motion.div>
        ) : activePage === 'emiratization' ? (
          <motion.div
            key="emiratization-portal"
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -25 }}
            transition={{ duration: 0.4 }}
          >
            <EmiratizationPage 
              onBack={() => {
                setActivePage('home');
              }}
              emiratizationScholarshipImg={emiratizationScholarshipFlagshipImg || emiratizationScholarshipImg}
            />
          </motion.div>
        ) : activePage === 'shark-tank' ? (
          <motion.div
            key="shark-tank-portal"
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -25 }}
            transition={{ duration: 0.4 }}
          >
            <SharkTankPage 
              onBack={() => {
                setActivePage('home');
              }}
              weSharkTankImg={weSharkTankFlagshipImg || weSharkTankImg}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>

      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 opacity-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="font-display font-black">WE-ERA Connect</span>
            <span className="text-slate-500">Â© 2027. All Rights Reserved.</span>
          </div>
          <div className="flex items-center gap-8 text-slate-400">
            <a href="#" className="hover:text-brand transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand transition-colors">Terms of Service</a>
            <a href="#contact" className="hover:text-brand transition-colors">Contact Us</a>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            key="back-to-top"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-[90] p-4 rounded-full bg-brand text-slate-950 shadow-[0_4px_20px_rgba(251,191,36,0.4)] border border-brand hover:bg-slate-950 hover:text-brand transition-all duration-300 md:bottom-10 md:right-10 flex items-center justify-center cursor-pointer group"
            aria-label="Back to top"
          >
            <ArrowUp size={20} className="transform group-hover:-translate-y-1 transition-transform duration-300" />
          </motion.button>
        )}
      </AnimatePresence>


    </div>
  );
}

function EmiratizationPage({ onBack, emiratizationScholarshipImg }: { onBack: () => void, emiratizationScholarshipImg: string }) {
  const [activeTab, setActiveTab] = useState<'tracks' | 'criteria' | 'calculator'>('tracks');
  const [yearsExp, setYearsExp] = useState(5);
  const [degree, setDegree] = useState("bachelors");
  const [boardType, setBoardType] = useState("national");
  
  // Form state
  const [nameAr, setNameAr] = useState("");
  const [nameEn, setNameEn] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [school, setSchool] = useState("");
  const [abstract, setAbstract] = useState("");
  const [formStatus, setFormStatus] = useState({ submitting: false, success: false, error: null as string | null, refId: "" });

  // Calculation logic
  const baseStipend = degree === "masters" ? 22000 : 18000;
  const expBonus = Math.min(yearsExp * 800, 8000);
  const schoolBonus = boardType === "charter" ? 2500 : boardType === "international" ? 1500 : 0;
  const totalMonthly = baseStipend + expBonus + schoolBonus;
  
  const materialGrant = 15000 + (yearsExp > 8 ? 5000 : 0);
  const housingAllowance = 4500;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameEn || !email || !abstract) {
      setFormStatus({ submitting: false, success: false, error: "Please fill out all required fields.", refId: "" });
      return;
    }
    setFormStatus({ submitting: true, success: false, error: null, refId: "" });
    setTimeout(() => {
      setFormStatus({
        submitting: false,
        success: true,
        error: null,
        refId: "EMI-FEL-" + Math.floor(10000 + Math.random() * 90000)
      });
    }, 1200);
  };

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-16">
      {/* breadcrumb & back button */}
      <div className="flex flex-wrap items-center gap-2 md:gap-4">
        <button 
          onClick={onBack}
          className="px-5 py-2.5 rounded-full border border-white/10 hover:border-brand/45 hover:bg-slate-900 text-slate-350 hover:text-white transition-all text-sm font-bold flex items-center gap-2 cursor-pointer"
        >
          <ArrowRight className="rotate-180 text-brand" size={16} /> Back to Summit
        </button>
        <span className="text-slate-500 hidden sm:inline">/</span>
        <span className="text-brand font-semibold text-xs sm:text-sm font-mono w-full sm:w-auto">Emiratization PhD Scholarship Program</span>
      </div>

      {/* Hero Banner */}
      <div className="relative rounded-[2rem] sm:rounded-[3rem] overflow-hidden border border-white/5 bg-slate-900 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-12 p-5 sm:p-8 md:p-12 items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-brand/5 pointer-events-none" />
        <div className="lg:col-span-7 space-y-6 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-xs font-semibold text-blue-400">
            <GraduationCap size={14} /> Sovereign Academic Track • Class of 2027
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-light text-white leading-none tracking-tight">
            Emiratization <br />
            <span className="text-brand font-black">PhD Scholarships</span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed font-light">
            Through our premier Research Fellowship Grant, we are funding fully backed PhD scholarships for 5 visionary Emirati Women Educators. If you are ready to drive a national strategy, shape sustainable school transformation, and step into senior leadership, see if you meet the requirements. <span className="text-white font-bold block mt-3">Empowering Emirati Women Educators to lead the future of national education.</span>
          </p>
          <div className="flex flex-wrap gap-8 pt-4">
            <div>
              <p className="text-3xl font-display font-black text-brand">5</p>
              <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">Full Fellowships</p>
            </div>
            <div>
              <p className="text-3xl font-display font-black text-white">3-4 Years</p>
              <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">Sovereign Funding</p>
            </div>
            <div>
              <p className="text-3xl font-display font-black text-brand">AED 300K+</p>
              <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">Annual Value / Fellow</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="absolute inset-0 bg-blue-500/10 blur-2xl rounded-2xl pointer-events-none" />
          <img 
            src={emiratizationScholarshipImg} 
            alt="Emiratization Group" 
            className="rounded-[2.5rem] border border-white/10 w-full object-cover aspect-[4/3] shadow-2xl relative"
            style={{ objectPosition: '50% 20%' }}
            referrerPolicy="no-referrer"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&q=80&w=1200&h=800";
            }}
          />
        </div>
      </div>

      {/* Main Core Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Details & Calculator with Interactive Tabs */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Custom Tabs Navigation */}
          <div className="flex border-b border-white/10 mb-6 overflow-x-auto scroller-none gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('tracks')}
              className={`pb-4 px-4 font-display font-bold text-sm tracking-tight border-b-2 transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap ${
                activeTab === 'tracks' 
                  ? 'border-brand text-brand font-black' 
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <GraduationCap size={16} /> Research Tracks
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('criteria')}
              className={`pb-4 px-4 font-display font-bold text-sm tracking-tight border-b-2 transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap ${
                activeTab === 'criteria' 
                  ? 'border-brand text-brand font-black' 
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Award size={16} /> Eligibility & Timeline
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('calculator')}
              className={`pb-4 px-4 font-display font-bold text-sm tracking-tight border-b-2 transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap ${
                activeTab === 'calculator' 
                  ? 'border-brand text-brand font-black' 
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Clock size={16} /> Grant Estimator
            </button>
          </div>

          {activeTab === 'tracks' && (
            <div className="space-y-8">
              {/* Intro Summary Banner */}
              <div className="p-6 rounded-2xl bg-blue-950/20 border border-blue-500/15 space-y-3">
                <h3 className="text-xl font-display font-medium text-white flex items-center gap-2">
                  <Sparkles className="text-blue-400 animate-pulse" size={18} /> Official Scholarship Criteria & Research Tracks
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  The Research Fellowship Grant is an elite initiative providing 5 fully funded PhD scholarships to exceptional Emirati Women Educators in the UAE. These fellowships are designed to bridge the gap between classroom innovation and national policy.
                </p>
              </div>
 
              {/* Section 1: The Academic Pathway */}
              <div className="space-y-4">
                <h3 className="text-lg font-display font-bold text-white uppercase tracking-wider text-slate-200">
                  1. The Academic Pathway
                </h3>
                <div className="p-6 rounded-2xl bg-slate-900 border border-white/5 space-y-4">
                  <p className="text-slate-300 text-sm leading-relaxed pb-2">
                    Selected five fellows will be enrolled at partner UAE-accredited institutions. While the research themes are visionary, they align directly with accredited Doctoral programs (PhD in Education or Doctor of Education - DEd).
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                    <div className="p-4 bg-slate-950 rounded-xl border border-white/5 space-y-1">
                      <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest block">Location</span>
                      <span className="text-slate-200 text-xs font-semibold flex items-center gap-1.5">
                        <MapPin size={12} className="text-brand" /> UAE campuses with flexible research modules.
                      </span>
                    </div>
                    <div className="p-4 bg-slate-950 rounded-xl border border-white/5 space-y-1">
                      <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest block">Duration</span>
                      <span className="text-slate-200 text-xs font-semibold flex items-center gap-1.5">
                        <Clock size={12} className="text-brand" /> 3–4 years (Part-time or Full-time tracks available).
                      </span>
                    </div>
                    <div className="p-4 bg-slate-950 rounded-xl border border-white/5 space-y-1">
                      <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest block">Support</span>
                      <span className="text-slate-200 text-xs font-semibold flex items-center gap-1.5">
                        <Award size={12} className="text-brand" /> Includes full tuition coverage, a research grant, and mentorship from the industry partners.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
 
              {/* Section 2: The Five Strategic Research Tracks */}
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <h3 className="text-lg font-display font-bold text-white uppercase tracking-wider text-slate-200">
                    2. The Five Strategic Research Tracks [5 PhD Scholarships]
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {[
                    {
                      track: "Track A",
                      title: "The Visionary Governance Fellowship",
                      tag: "Academic Equivalent: PhD in Educational Leadership & Policy",
                      theme: "Moving beyond school management into high-level strategy. This track explores how institutional leadership must evolve to manage the \"Human Spine\" of education alongside rapid AI integration.",
                      candidate: "Aspiring Principals, Vice Principals, Directors or Coordinators",
                      icon: ShieldCheck,
                      color: "text-amber-400",
                      bg: "border-amber-500/10 hover:border-amber-500/20 bg-amber-500/5"
                    },
                    {
                      track: "Track B",
                      title: "The Frontier Tech & AI Mandate",
                      tag: "Academic Equivalent: PhD in Educational Technology / STEM Education",
                      theme: "This track focuses on the practical implementation of AI and sustainable digital literacy in K-12 classrooms.",
                      candidate: "ICT Leads, Science Heads, or Innovation Coordinators",
                      icon: Cpu,
                      color: "text-blue-400",
                      bg: "border-blue-500/10 hover:border-blue-500/20 bg-blue-500/5"
                    },
                    {
                      track: "Track C",
                      title: "The Human-Centric Equity Award",
                      tag: "Academic Equivalent: PhD in Special & Inclusive Education",
                      theme: "Ensuring no student is left behind in the digital age. This research focuses on how AI and assistive technologies can be \"humanized\" to support Students of Determination and diverse learning styles.",
                      candidate: "Inclusion Leads (SENDCOs) and Wellbeing Counselors",
                      icon: Users,
                      color: "text-emerald-400",
                      bg: "border-emerald-500/10 hover:border-emerald-500/20 bg-emerald-500/5"
                    },
                    {
                      track: "Track D",
                      title: "The Future-Pedagogy Lab",
                      tag: "Academic Equivalent: PhD in Curriculum & Instruction",
                      theme: "This track focuses on redesigning curriculum mapping to balance traditional human values with automated learning tools.",
                      candidate: "Heads of Department or Curriculum Developers",
                      icon: Sparkles,
                      color: "text-purple-400",
                      bg: "border-purple-500/10 hover:border-purple-500/20 bg-purple-500/5"
                    },
                    {
                      track: "Track E",
                      title: "The Linguistic Sovereignty Project",
                      tag: "Academic Equivalent: PhD in Applied Linguistics / TESOL",
                      theme: "Protecting the \"Arabic Heritage\" and cultural identity. Research focuses on how local dialects and cultural nuances can be preserved within global Large Language Models (LLMs).",
                      candidate: "Arabic Language Heads or EAL (English as an Additional Language) Specialists",
                      icon: Globe,
                      color: "text-rose-400",
                      bg: "border-rose-500/10 hover:border-rose-500/20 bg-rose-500/5"
                    }
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className={`p-6 rounded-2xl border transition-all space-y-4 ${item.bg}`}>
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-white/5 pb-3">
                          <div className="flex items-center gap-3">
                            <span className={`px-2.5 py-1 text-[10px] font-mono font-black uppercase tracking-wider rounded-lg bg-slate-950 ${item.color}`}>
                              {item.track}
                            </span>
                            <h4 className="font-display font-bold text-white text-base md:text-lg">{item.title}</h4>
                          </div>
                          <span className="text-slate-400 text-xs font-mono">{item.tag}</span>
                        </div>
                        <div className="space-y-3 text-sm">
                          <div>
                            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-0.5">Theme / Focus</span>
                            <p className="text-slate-300 leading-relaxed font-light">{item.theme}</p>
                          </div>
                          <div className="pt-1">
                            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-0.5">Ideal Candidate</span>
                            <p className="text-slate-200 font-semibold flex items-center gap-1.5">
                              <Icon size={14} className={item.color} /> {item.candidate}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'criteria' && (
            <div className="space-y-8">
              {/* Section 3: Eligibility & Selection Criteria */}
              <div className="space-y-4">
                <h3 className="text-lg font-display font-bold text-white uppercase tracking-wider text-slate-200">
                  3. Eligibility & Selection Criteria
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  To ensure these scholarships result in a "Mega" impact, candidates will be evaluated on the following:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Professional Standing",
                      desc: "Minimum of 5 years of teaching or leadership experience within the UAE education sector.",
                      metric: "5+ Years UAE Sector Experience"
                    },
                    {
                      title: "Academic Excellence",
                      desc: "A Master’s degree in Education or a related field from an accredited institution (GPA 3.5 or equivalent).",
                      metric: "Master's Degree with 3.5 GPA"
                    },
                    {
                      title: "The \"Impact Proposal\"",
                      desc: "A 1,000-word research statement explaining how their chosen track will solve a specific challenge currently facing UAE schools.",
                      metric: "1,000-Word Project Statement"
                    },
                    {
                      title: "Leadership Potential",
                      desc: "Evidence of previous contributions to the educational community (e.g., workshops, publications, or podcast appearances).",
                      metric: "Community Leadership Record"
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="p-6 rounded-2xl bg-slate-900 border border-white/5 space-y-3 flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2.5 text-brand">
                          <CheckCircle size={16} />
                          <h4 className="font-bold text-white text-sm md:text-base">{item.title}</h4>
                        </div>
                        <p className="text-slate-400 text-xs leading-relaxed font-light">{item.desc}</p>
                      </div>
                      <div className="pt-3 border-t border-white/5 mt-2">
                        <span className="text-[10px] font-mono text-brand bg-slate-950 px-2.5 py-1 rounded-md">
                          {item.metric}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 4: The Selection Process */}
              <div className="space-y-4">
                <h3 className="text-lg font-display font-bold text-white uppercase tracking-wider text-slate-200">
                  4. The Selection Process
                </h3>

                <div className="relative border-l border-white/10 ml-4 pl-8 space-y-8 py-3">
                  {[
                    {
                      stage: "Stage 1",
                      title: "Open Call (Launch July 2026)",
                      desc: "Submission of the initial Research Statement and CV.",
                      active: true
                    },
                    {
                      stage: "Stage 2",
                      title: "The Shortlist",
                      desc: "Top 10 candidates are invited for an interview with the University Deans/Professors.",
                      active: false
                    },
                    {
                      stage: "Stage 3",
                      title: "The \"Idea Slam\" (Summit Day 1)",
                      desc: "All the winners present their vision to the summit delegates.",
                      active: false
                    },
                    {
                      stage: "Stage 4",
                      title: "The Award (Summit Day 1)",
                      desc: "Official handover of the scholarship by the Patron and Ministerial guests.",
                      active: false
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="relative">
                      {/* Timeline node */}
                      <div className={`absolute -left-[41px] top-1 w-6 h-6 rounded-full border-4 border-slate-950 flex items-center justify-center font-mono text-[9px] font-black ${
                        item.active 
                          ? 'bg-brand text-slate-950 shadow-[0_0_12px_rgba(251,191,36,0.4)]' 
                          : 'bg-slate-900 text-slate-450 border-slate-900'
                      }`}>
                        {idx + 1}
                      </div>
                      
                      <div className="space-y-1">
                        <div className="flex items-center gap-3">
                          <span className={`text-[10px] font-mono font-bold uppercase tracking-widest ${item.active ? 'text-brand' : 'text-slate-505'}`}>
                            {item.stage}
                          </span>
                          {item.active && (
                            <span className="bg-emerald-500/10 text-emerald-400 px-2 py-0.5 text-[9px] rounded font-bold uppercase tracking-wider">
                              Launch Phase
                            </span>
                          )}
                        </div>
                        <h4 className="font-display font-extrabold text-white text-base">{item.title}</h4>
                        <p className="text-slate-400 text-xs leading-relaxed font-light">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'calculator' && (
            <div className="space-y-6 animate-fadeIn">
              {/* Interactive Calculator widget */}
              <div className="p-8 rounded-[2rem] bg-slate-900 border border-white/5 bg-slate-900/40 relative">
                <div className="absolute top-4 right-4 text-xs font-mono text-brand font-bold uppercase">Estimator Tool</div>
                <h2 className="text-2xl font-display font-bold text-white mb-6 tracking-tight">Grant & Stipend Calculator</h2>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  Calculate the direct financial backing, monthly stipend, and materials allowances you are eligible to receive as an active Research Fellow.
                </p>
                
                <div className="space-y-6">
                  {/* years experience slider */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Years of Educational Experience</label>
                      <span className="text-brand font-black text-sm">{yearsExp} Years</span>
                    </div>
                    <input 
                      type="range" 
                      min="2" 
                      max="20" 
                      value={yearsExp} 
                      onChange={(e) => setYearsExp(parseInt(e.target.value))}
                      className="w-full accent-brand h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>

                  {/* degree tier */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Current Degree Level</label>
                      <select 
                        value={degree} 
                        onChange={(e) => setDegree(e.target.value)}
                        className="w-full p-3.5 bg-slate-950 border border-white/10 rounded-xl text-slate-200 text-sm focus:border-brand outline-none"
                      >
                        <option value="bachelors">Bachelor's Degree</option>
                        <option value="masters">Master's Degree</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">School Affiliation</label>
                      <select 
                        value={boardType} 
                        onChange={(e) => setBoardType(e.target.value)}
                        className="w-full p-3.5 bg-slate-950 border border-white/10 rounded-xl text-slate-200 text-sm focus:border-brand outline-none"
                      >
                        <option value="national">National Curriculum</option>
                        <option value="charter">Charter / Sovereign Schools</option>
                        <option value="international">IB, Cambridge, or CBSE Board</option>
                      </select>
                    </div>
                  </div>

                  {/* results layout */}
                  <div className="p-6 rounded-2xl bg-slate-950 border border-white/5 grid grid-cols-1 md:grid-cols-3 gap-6 text-center mt-6">
                    <div>
                      <p className="text-slate-500 uppercase tracking-widest text-[9px] font-bold">Est. Monthly Stipend</p>
                      <p className="text-2xl font-display font-black text-brand mt-1 font-mono">AED {totalMonthly.toLocaleString()}</p>
                      <p className="text-[10px] text-slate-450 mt-0.5">Salary & Sabbatical allowance</p>
                    </div>
                    <div className="border-t md:border-t-0 md:border-x border-white/5 pt-4 md:pt-0">
                      <p className="text-slate-500 uppercase tracking-widest text-[9px] font-bold">Research Material Grant</p>
                      <p className="text-2xl font-display font-black text-white mt-1 font-mono">AED {materialGrant.toLocaleString()}</p>
                      <p className="text-[10px] text-slate-450 mt-0.5">One-time initial grant</p>
                    </div>
                    <div className="border-t md:border-t-0 pt-4 md:pt-0">
                      <p className="text-slate-500 uppercase tracking-widest text-[9px] font-bold">Housing Allowance</p>
                      <p className="text-2xl font-display font-black text-brand mt-1 font-mono">AED {housingAllowance.toLocaleString()}</p>
                      <p className="text-[10px] text-slate-450 mt-0.5">Per-annum accommodation subsidy</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Value Props */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "100% Covered tuition & fees",
                    desc: "Sovereign sponsorship covers full tuition fees at premium local and international partner universities."
                  },
                  {
                    title: "Regulator mentoring loops",
                    desc: "Weekly brainstorming and research review meetings with leading education authorities and policy developers."
                  }
                ].map((item, i) => (
                  <div key={i} className="p-5 rounded-xl bg-slate-900 border border-white/5 space-y-1">
                    <h4 className="font-bold text-white text-xs flex items-center gap-2">
                      <CheckCircle size={14} className="text-brand" /> {item.title}
                    </h4>
                    <p className="text-slate-400 text-[11px] leading-relaxed font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Application Form */}
        <div className="lg:col-span-5">
          <div className="p-8 rounded-[2.5rem] bg-slate-900 border border-white/5 sticky top-28 space-y-6">
            <div>
              <h3 className="text-2xl font-display font-bold text-white tracking-tight">Fellowship Application</h3>
              <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                Begin your educational sovereignty track today. All submitted research abstracts are routed automatically to Ms. Arwa Bachoo's Fellowship Selection board.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {!formStatus.success ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {formStatus.error && (
                    <div className="p-4 bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl text-xs font-semibold">
                      {formStatus.error}
                    </div>
                  )}

                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Applicant Full Name (English)</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Fatima Al Maktoum"
                      value={nameEn}
                      onChange={(e) => setNameEn(e.target.value)}
                      className="w-full p-4 bg-slate-950 border border-white/10 rounded-xl text-slate-200 placeholder-slate-700 focus:border-brand text-sm outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Applicant Full Name (Arabic Script)</label>
                    <input 
                      type="text" 
                      placeholder="فاطمة المكتوم"
                      value={nameAr}
                      onChange={(e) => setNameAr(e.target.value)}
                      className="w-full p-4 bg-slate-950 border border-white/10 rounded-xl text-slate-200 placeholder-slate-700 focus:border-brand text-sm outline-none text-right"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Email Address</label>
                      <input 
                        type="email" 
                        required
                        placeholder="you@domain.ae"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-4 bg-slate-950 border border-white/10 rounded-xl text-slate-200 placeholder-slate-700 focus:border-brand text-sm outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Contact Phone</label>
                      <input 
                        type="tel" 
                        placeholder="+971 50..."
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full p-4 bg-slate-950 border border-white/10 rounded-xl text-slate-200 placeholder-slate-700 focus:border-brand text-sm outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Current Educational Institution</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Dubai Charter Academy"
                      value={school}
                      onChange={(e) => setSchool(e.target.value)}
                      className="w-full p-4 bg-slate-950 border border-white/10 rounded-xl text-slate-200 placeholder-slate-700 focus:border-brand text-sm outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Proposed Research Abstract / Problem Statement</label>
                    <textarea 
                      rows={4}
                      required
                      placeholder="Detail your research focus regarding AI frameworks, carbon-neutral classrooms, or regional cognitive policy development..."
                      value={abstract}
                      onChange={(e) => setAbstract(e.target.value)}
                      className="w-full p-4 bg-slate-950 border border-white/10 rounded-xl text-slate-200 placeholder-slate-700 focus:border-brand text-sm outline-none resize-none leading-relaxed"
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={formStatus.submitting}
                    className="w-full py-4 bg-brand hover:scale-[1.02] active:scale-[0.98] transition-all text-slate-950 font-black rounded-xl text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(251,191,36,0.15)] cursor-pointer"
                  >
                    {formStatus.submitting ? "Processing..." : "Submit Research Application"}
                  </button>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6 text-center py-8"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto text-2xl font-black">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-white">Application Recorded</h3>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      Sovereign registration completed. Ms. Arwa Bachoo's Fellowship Selection board will vet your research proposal.
                    </p>
                  </div>

                  {/* Receipt block */}
                  <div className="p-5 rounded-2xl bg-slate-950 border border-white/5 text-left text-xs space-y-2.5">
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-slate-500 uppercase tracking-wider font-bold">Research Reg ID</span>
                      <span className="text-brand font-mono font-black">{formStatus.refId}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-slate-500 uppercase tracking-wider font-bold">Research Stream</span>
                      <span className="text-white font-semibold">PhD Fellowship Track</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 uppercase tracking-wider font-bold">Vetting Status</span>
                      <span className="text-emerald-400 font-bold uppercase text-[9px] tracking-widest">● Queue Vetting</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => setFormStatus({ submitting: false, success: false, error: null, refId: "" })}
                    className="mx-auto text-xs font-bold text-brand hover:underline block uppercase tracking-wider cursor-pointer"
                  >
                    Submit another application
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

function SharkTankPage({ onBack, weSharkTankImg }: { onBack: () => void, weSharkTankImg: string }) {
  const [pledgeCapital, setPledgeCapital] = useState(250000);
  const [techTrack, setTechTrack] = useState("ai");
  const [deploymentScale, setDeploymentScale] = useState("grade");
  
  // Submission form state
  const [leadName, setLeadName] = useState("");
  const [teamName, setTeamName] = useState("");
  const [email, setEmail] = useState("");
  const [pitchTitle, setPitchTitle] = useState("");
  const [elevatorPitch, setElevatorPitch] = useState("");
  const [formStatus, setFormStatus] = useState({ submitting: false, success: false, error: null as string | null, refId: "" });

  // Matching logic
  const estimationPartner = pledgeCapital < 150000 
    ? "Al Ghurair Foundation & Hub71" 
    : pledgeCapital < 350000 
      ? "Dubai Future District Fund & MoE Strategic Grant" 
      : "Sovereign Innovation Fund of the Emirates (SIFE)";
      
  const requiredMilestones = deploymentScale === "single" 
    ? "6 Months Pilot implementation" 
    : deploymentScale === "grade" 
      ? "9 Months multi-classroom rollout, 3 Mentor reviews" 
      : "12 Months system-wide deployment, board review";
      
  const mentors = techTrack === "ai" 
    ? "Ms. Sarah James (Venture Strategist) & MoE Board" 
    : techTrack === "ar" 
      ? "Ms. Sarah James & EdTech Innovation Lead" 
      : "Ms. Sarah James & Climate Curriculum Specialist";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadName || !email || !pitchTitle || !elevatorPitch) {
      setFormStatus({ submitting: false, success: false, error: "Please fill out all required fields.", refId: "" });
      return;
    }
    setFormStatus({ submitting: true, success: false, error: null, refId: "" });
    setTimeout(() => {
      setFormStatus({
        submitting: false,
        success: true,
        error: null,
        refId: "SHARK-2027-" + Math.floor(10000 + Math.random() * 90000)
      });
    }, 1200);
  };

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-16">
      {/* breadcrumb & back button */}
      <div className="flex flex-wrap items-center gap-2 md:gap-4">
        <button 
          onClick={onBack}
          className="px-5 py-2.5 rounded-full border border-white/10 hover:border-brand/45 hover:bg-slate-900 text-slate-350 hover:text-white transition-all text-sm font-bold flex items-center gap-2 cursor-pointer"
        >
          <ArrowRight className="rotate-180 text-brand" size={16} /> Back to Summit
        </button>
        <span className="text-slate-500 hidden sm:inline">/</span>
        <span className="text-brand font-semibold text-xs sm:text-sm font-mono w-full sm:w-auto">WE-Shark Tank Classroom Innovation Tracker</span>
      </div>

      {/* Hero Banner */}
      <div className="relative rounded-[2rem] sm:rounded-[3rem] overflow-hidden border border-white/5 bg-slate-900 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-12 p-5 sm:p-8 md:p-12 items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-brand/5 pointer-events-none" />
        <div className="lg:col-span-7 space-y-6 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/10 text-xs font-semibold text-purple-400">
            <Rocket size={14} /> Global Pitch Stage • WE-Shark Tank 2027
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-light text-white leading-none tracking-tight">
            WE-Shark <br />
            <span className="text-brand font-black">Tank Stage</span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed font-light font-sans">
            <span className="text-white font-bold block mb-3">AED 1,000,000 in strategic funding to turn one revolutionary idea into reality.</span> Witness the region's ultimate pitch stage. Visionary female educators will step onto the global stage to pitch groundbreaking, tech-driven classroom ideas directly to top corporate sponsors.
          </p>
          <div className="flex flex-wrap gap-8 pt-4">
            <div>
              <p className="text-3xl font-display font-black text-brand">AED 1M</p>
              <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">Strategic Seed Pool</p>
            </div>
            <div>
              <p className="text-3xl font-display font-black text-white">5 Finalists</p>
              <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">Live Catwalk Pitch</p>
            </div>
            <div>
              <p className="text-3xl font-display font-black text-brand">IP Advisory</p>
              <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">Patent Filing Support</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="absolute inset-0 bg-purple-500/10 blur-2xl rounded-2xl pointer-events-none" />
          <img 
            src={weSharkTankImg} 
            alt="WE-Shark Tank Pitch Hall" 
            className="rounded-[2.5rem] border border-white/10 w-full object-cover aspect-[4/3] shadow-2xl relative animate-pulse-subtle"
            referrerPolicy="no-referrer"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=1200&h=800";
            }}
          />
        </div>
      </div>

      {/* Main Core Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Details & Calculator */}
        <div className="lg:col-span-7 space-y-12">
          {/* Incubation Value propositions */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight">Venture Incubation Rules</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Seed Capital Investment",
                  desc: "Recipients tap directly into AED 1,000,000 in collaborative non-equity-diluting grants, supporting infrastructure development."
                },
                {
                  title: "Mentoring & Acceleration",
                  desc: "Direct pairing with silicon-valley scale incubators, curriculum designers, and patent counselors to protect your intellectual properties."
                },
                {
                  title: "Classroom Deployment Network",
                  desc: "Your product will be directly tested, integrated, and deployed within top-tier sovereign charter school loops to drive early adoption."
                },
                {
                  title: "Live Global TV and Stage Coverage",
                  desc: "Finalists pitch live during the gala, generating regional brand recognition and secondary VC connections."
                }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-slate-900 border border-white/5 space-y-2">
                  <div className="flex items-center gap-3 text-brand">
                    <CheckCircle size={18} />
                    <h3 className="font-bold text-white text-base">{item.title}</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Matcher Widget */}
          <div className="p-8 rounded-[2rem] bg-slate-900 border border-white/5 bg-slate-900/40 relative">
            <div className="absolute top-4 right-4 text-xs font-mono text-brand font-bold uppercase">Funding Estimator</div>
            <h2 className="text-2xl font-display font-bold text-white mb-6 tracking-tight">Venture Matching Estimator</h2>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Define your technology track and required pilot project capital to find aligned sponsors, advisors, and incubation timelines.
            </p>
            
            <div className="space-y-6">
              {/* slider for requested seed capital */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Requested Pilot Seed Capital</label>
                  <span className="text-brand font-black text-sm">AED {pledgeCapital.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="50000" 
                  max="500000" 
                  step="25000"
                  value={pledgeCapital} 
                  onChange={(e) => setPledgeCapital(parseInt(e.target.value))}
                  className="w-full accent-brand h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* technology and scaling selectors */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Technology Innovation Focus</label>
                  <select 
                    value={techTrack} 
                    onChange={(e) => setTechTrack(e.target.value)}
                    className="w-full p-3.5 bg-slate-950 border border-white/10 rounded-xl text-slate-200 text-sm focus:border-brand outline-none"
                  >
                    <option value="ai">AI Cognitive Tutoring Systems & Chatbots</option>
                    <option value="ar">AR Classroom Mechanics & Holographic Labs</option>
                    <option value="eco">Bio-feedback & Sustainable Eco-tech Kits</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Target Pilot Scaling Scope</label>
                  <select 
                    value={deploymentScale} 
                    onChange={(e) => setDeploymentScale(e.target.value)}
                    className="w-full p-3.5 bg-slate-950 border border-white/10 rounded-xl text-slate-200 text-sm focus:border-brand outline-none"
                  >
                    <option value="single">Single Classroom Pilot Segment</option>
                    <option value="grade">Entire Grade Level Group (300+ Students)</option>
                    <option value="multi">All School Levels Co-op (1500+ Students)</option>
                  </select>
                </div>
              </div>

              {/* dynamic result block */}
              <div className="p-6 rounded-2xl bg-slate-950 border border-white/5 grid grid-cols-1 md:grid-cols-3 gap-6 text-center mt-6">
                <div>
                  <p className="text-slate-500 uppercase tracking-widest text-[9px] font-bold">Matching Venture Sponsors</p>
                  <p className="text-base font-display font-black text-brand mt-1 leading-snug">{estimationPartner}</p>
                </div>
                <div className="border-t md:border-t-0 md:border-x border-white/5 pt-4 md:pt-0">
                  <p className="text-slate-500 uppercase tracking-widest text-[9px] font-bold">Target Milestones & Reviews</p>
                  <p className="text-xs font-semibold text-white mt-2 leading-snug">{requiredMilestones}</p>
                </div>
                <div className="border-t md:border-t-0 pt-4 md:pt-0">
                  <p className="text-slate-500 uppercase tracking-widest text-[9px] font-bold">Vetted Lead Mentors</p>
                  <p className="text-xs font-semibold text-brand mt-2 leading-snug font-mono">{mentors}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Submission Form */}
        <div className="lg:col-span-5">
          <div className="p-8 rounded-[2.5rem] bg-slate-900 border border-white/5 sticky top-28 space-y-6">
            <div>
              <h3 className="text-2xl font-display font-bold text-white tracking-tight">Venture Pitch Entry</h3>
              <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                Pitch your Classroom or EdTech Idea. Submissions are reviewed immediately by Ms. Sarah James on the Venture Selection Board.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {!formStatus.success ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {formStatus.error && (
                    <div className="p-4 bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl text-xs font-semibold">
                      {formStatus.error}
                    </div>
                  )}

                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Principal Submitter Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Sarah Salem"
                      value={leadName}
                      onChange={(e) => setLeadName(e.target.value)}
                      className="w-full p-4 bg-slate-950 border border-white/10 rounded-xl text-slate-200 placeholder-slate-700 focus:border-brand text-sm outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Innovation Team / School Partner Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Al-Ain STEM Educators Collective"
                      value={teamName}
                      onChange={(e) => setTeamName(e.target.value)}
                      className="w-full p-4 bg-slate-950 border border-white/10 rounded-xl text-slate-200 placeholder-slate-700 focus:border-brand text-sm outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Primary Contact Email</label>
                    <input 
                      type="email" 
                      required
                      placeholder="you@school.ae"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-4 bg-slate-950 border border-white/10 rounded-xl text-slate-200 placeholder-slate-700 focus:border-brand text-sm outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Pitch Innovation Title / Product Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Cognitive-AR Science Lab Space"
                      value={pitchTitle}
                      onChange={(e) => setPitchTitle(e.target.value)}
                      className="w-full p-4 bg-slate-950 border border-white/10 rounded-xl text-slate-200 placeholder-slate-700 focus:border-brand text-sm outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Elevator Pitch & Proposal Narrative</label>
                    <textarea 
                      rows={4}
                      required
                      placeholder="Explain what academic friction your classroom tool resolves, how the funding pool will be spent, and why your school is the perfect launch partner..."
                      value={elevatorPitch}
                      onChange={(e) => setElevatorPitch(e.target.value)}
                      className="w-full p-4 bg-slate-950 border border-white/10 rounded-xl text-slate-200 placeholder-slate-700 focus:border-brand text-sm outline-none resize-none leading-relaxed"
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={formStatus.submitting}
                    className="w-full py-4 bg-brand hover:scale-[1.02] active:scale-[0.98] transition-all text-slate-950 font-black rounded-xl text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(251,191,36,0.15)] cursor-pointer"
                  >
                    {formStatus.submitting ? "Processing..." : "Submit Pitch Entry"}
                  </button>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6 text-center py-8"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto text-2xl font-black">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-white">Innovation Pitch Filed</h3>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      Sovereign patent advisory & seed pitch logged. The innovation selection committee headed by Ms. Sarah James will review your core pitch deck details.
                    </p>
                  </div>

                  {/* Receipt details */}
                  <div className="p-5 rounded-2xl bg-slate-950 border border-white/5 text-left text-xs space-y-2.5">
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-slate-500 uppercase tracking-wider font-bold">Secure Ref ID</span>
                      <span className="text-brand font-mono font-black">{formStatus.refId}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-slate-500 uppercase tracking-wider font-bold">Proposal Title</span>
                      <span className="text-white font-semibold">{pitchTitle}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 uppercase tracking-wider font-bold">Incubation Review</span>
                      <span className="text-brand font-bold uppercase text-[9px] tracking-widest">● Selected for Screening</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => setFormStatus({ submitting: false, success: false, error: null, refId: "" })}
                    className="mx-auto text-xs font-bold text-brand hover:underline block uppercase tracking-wider cursor-pointer"
                  >
                    Submit another innovation proposal
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}