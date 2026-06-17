import React, { useState, useEffect } from 'react';
import { 
  ArrowUp, 
  HelpCircle, 
  ChevronRight,
  Video,
  RefreshCw,
  AlertOctagon,
  FolderOpen,
  Calendar,
  CreditCard,
  Layers,
  Settings,
  Slack,
  CheckCircle,
  Play,
  Pause,
  Clock,
  Check,
  FileText,
  Phone,
  Users,
  MessageSquare,
  Target
} from 'lucide-react';
import { faqItems } from './data';

const getCategoryStyle = (category: string) => {
  switch (category) {
    case 'delivery':
      return {
        badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
        dot: 'bg-cyan-400',
        border: 'hover:border-cyan-500/30 hover:bg-cyan-500/[0.03] border-white/5',
        text: 'text-zinc-300 group-hover:text-cyan-300',
        number: 'text-cyan-400',
        shadow: 'focus:ring-cyan-500/20 shadow-cyan-950/20',
        spotlight: 'border-cyan-500/40 bg-cyan-950/10 shadow-lg shadow-cyan-950/30 scale-[1.01]',
        icon: 'text-cyan-400'
      };
    case 'quality':
      return {
        badge: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
        dot: 'bg-rose-400',
        border: 'hover:border-rose-500/30 hover:bg-rose-500/[0.03] border-white/5',
        text: 'text-zinc-300 group-hover:text-rose-300',
        number: 'text-rose-400',
        shadow: 'focus:ring-rose-500/20 shadow-rose-950/20',
        spotlight: 'border-rose-500/40 bg-rose-950/10 shadow-lg shadow-rose-950/30 scale-[1.01]',
        icon: 'text-rose-400'
      };
    case 'limits':
      return {
        badge: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
        dot: 'bg-amber-400',
        border: 'hover:border-amber-500/30 hover:bg-amber-500/[0.03] border-white/5',
        text: 'text-zinc-300 group-hover:text-amber-300',
        number: 'text-amber-400',
        shadow: 'focus:ring-amber-500/20 shadow-amber-950/20',
        spotlight: 'border-amber-500/40 bg-amber-950/10 shadow-lg shadow-amber-950/30 scale-[1.01]',
        icon: 'text-amber-400'
      };
    case 'workflow':
    default:
      return {
        badge: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
        dot: 'bg-violet-400',
        border: 'hover:border-violet-500/30 hover:bg-violet-500/[0.03] border-white/5',
        text: 'text-zinc-300 group-hover:text-violet-300',
        number: 'text-violet-400',
        shadow: 'focus:ring-violet-500/20 shadow-violet-950/20',
        spotlight: 'border-violet-500/40 bg-violet-950/10 shadow-lg shadow-violet-950/30 scale-[1.01]',
        icon: 'text-violet-400'
      };
  }
};

export default function App() {
  const [activeQuestionId, setActiveQuestionId] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Smooth scroll to card
  const scrollToQuestion = (id: string) => {
    setActiveQuestionId(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // Active spotlight effect
    setTimeout(() => {
      setActiveQuestionId(null);
    }, 2500);
  };

  // Monitor scroll height
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#070709] text-zinc-300 font-sans selection:bg-white/20 selection:text-white pb-32 relative overflow-hidden">
      
      {/* Decorative backdrop background ambient radial glows */}
      <div className="absolute top-[-10%] left-[-15%] w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[130px] pointer-events-none z-0" />
      <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] rounded-full bg-pink-500/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[110px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] right-[-15%] w-[600px] h-[600px] rounded-full bg-amber-500/5 blur-[140px] pointer-events-none z-0" />

      {/* HEADER BAR AND BRANDING */}
      <header className="border-b border-white/5 bg-[#070709]/90 sticky top-0 z-40 backdrop-blur-md relative">
        <div className="max-w-4xl mx-auto px-4 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Wave stacked logo from the branding */}
            <svg viewBox="0 0 160 32" className="h-8 text-white shrink-0" fill="currentColor">
              <g transform="translate(0, -2)">
                <path d="M4 22C10 21 17 14 23 17C28 19 32 22 41 15C36 21 28 22 22 20C17 18 10 22 4 22Z" fill="url(#wave-gradient)" />
                <path d="M3 14C9 13 16 6 22 9C27 11 31 14 40 7C35 13 27 14 21 12C16 10 9 14 3 14Z" fill="url(#wave-gradient-mid)" />
                <path d="M5 6C11 5 18 -2 24 1C29 3 33 6 42 -1C37 5 29 6 23 4C18 2 11 6 5 6Z" fill="url(#wave-gradient-top)" />
                
                <defs>
                  <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#818CF8" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                  <linearGradient id="wave-gradient-mid" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38BDF8" />
                    <stop offset="100%" stopColor="#818CF8" />
                  </linearGradient>
                  <linearGradient id="wave-gradient-top" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#34D399" />
                    <stop offset="100%" stopColor="#38BDF8" />
                  </linearGradient>
                </defs>
              </g>
              <text x="47" y="20" className="font-sans font-bold text-white text-[16px] tracking-tight">Editoz Club</text>
            </svg>
          </div>

        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="max-w-4xl mx-auto px-4 mt-12 space-y-12 relative z-10">

        {/* HERO HEADER */}
        <section className="text-center space-y-4 py-8 border-b border-white/10">
          <h1 className="text-3xl sm:text-4xl font-light text-white tracking-tight font-display">
            FAQ for <span className="font-extrabold bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-sm">Akash and Kethaka</span>
          </h1>
          <p className="text-sm text-zinc-400 font-light max-w-xl mx-auto font-sans leading-relaxed">
            Everything you need to know about the video editing offer.
          </p>
        </section>

        {/* CORE OFFER HIGHLIGHTS */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-[#091510] via-[#070B09] to-[#08080A] border border-emerald-500/20 hover:border-emerald-500/40 rounded-xl p-6 space-y-3 flex flex-col justify-between transition-all duration-300 shadow-lg shadow-emerald-950/10 hover:shadow-emerald-950/30 hover:-translate-y-0.5">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <h2 className="text-xs font-bold text-emerald-400 uppercase tracking-widest font-mono">
                  Short Form
                </h2>
              </div>
              <div className="text-3xl font-bold font-display text-white tracking-tight">
                $100 <span className="text-xs font-normal text-zinc-400 font-mono">/ video</span>
              </div>
            </div>
            <p className="text-xs text-zinc-400 font-sans mt-3 leading-relaxed">
              Minimum booking is <span className="text-emerald-300 font-semibold font-mono">10 videos</span>. Quick 60–90 second high-impact formats.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#1C1408] via-[#0D0B0A] to-[#08080A] border border-amber-500/20 hover:border-amber-500/40 rounded-xl p-6 space-y-3 flex flex-col justify-between transition-all duration-300 shadow-lg shadow-amber-950/10 hover:shadow-amber-950/30 hover:-translate-y-0.5">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse"></span>
                <h2 className="text-xs font-bold text-amber-400 uppercase tracking-widest font-mono">
                  Medium Length
                </h2>
              </div>
              <div className="text-3xl font-bold font-display text-white tracking-tight">
                $150 <span className="text-xs font-normal text-zinc-400 font-mono">/ video</span>
              </div>
            </div>
            <p className="text-xs text-zinc-400 font-sans mt-3 leading-relaxed">
              Standard rate for videos ranging from <span className="text-amber-300 font-semibold font-mono">90s to 10 mins</span> length.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#09121C] via-[#07090C] to-[#08080A] border border-blue-500/20 hover:border-blue-500/40 rounded-xl p-6 space-y-3 flex flex-col justify-between transition-all duration-300 shadow-lg shadow-blue-950/10 hover:shadow-blue-950/30 hover:-translate-y-0.5">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse"></span>
                <h2 className="text-xs font-bold text-blue-400 uppercase tracking-widest font-mono">
                  Long Form
                </h2>
              </div>
              <div className="text-3xl font-bold font-display text-white tracking-tight">
                $780<span className="text-xs font-normal text-zinc-500"> – </span>$1,160 <span className="text-xs font-normal text-zinc-400 font-mono">/ video</span>
              </div>
            </div>
            <p className="text-xs text-zinc-400 font-sans mt-3 leading-relaxed">
              Videos over <span className="text-blue-300 font-semibold font-mono">10 mins</span>.<br />
              Simple edits: $780<br />
              Advanced edits: $1,160
            </p>
          </div>
        </section>

        {/* CENTRAL DIRECTORY MENU */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono uppercase tracking-widest">
            <HelpCircle className="h-4 w-4 text-zinc-500" />
            Questions Menu
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {faqItems.map((item) => {
              const style = getCategoryStyle(item.category);
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToQuestion(item.id)}
                  className={`text-left text-xs p-4 rounded-lg bg-[#0C0C0E]/50 border transition-all duration-300 group hover:cursor-pointer flex items-center justify-between shadow-sm ${style.border}`}
                >
                  <span className={`font-sans font-medium pr-2 transition-colors ${style.text}`}>
                    {item.label}
                  </span>
                  <ChevronRight className={`h-3 w-3 group-hover:translate-x-1 transition-all duration-300 ${style.icon}`} />
                </button>
              );
            })}
          </div>
        </section>

        {/* QUESTION AND ANSWER PLATES */}
        <section className="space-y-6 pt-4">
          {faqItems.map((item, idx) => {
            const isSpotlight = activeQuestionId === item.id;
            const style = getCategoryStyle(item.category);

            return (
              <div
                key={item.id}
                id={item.id}
                className={`bg-[#0C0C0E]/80 border rounded-xl p-6 sm:p-8 space-y-6 transition-all duration-400 scroll-mt-28 backdrop-blur-sm ${
                  isSpotlight 
                    ? style.spotlight
                    : 'border-white/5 hover:border-white/10'
                }`}
              >
                
                {/* Visual identification tag */}
                <span className={`inline-block text-[10px] font-mono font-bold px-3 py-1 rounded-full border uppercase tracking-wider ${style.badge}`}>
                  {item.label}
                </span>

                {/* Primary Q&A Section */}
                <div className="space-y-4">
                  {/* Question */}
                  <div className="flex gap-3 items-start">
                    <span className={`h-6 w-6 text-[10px] font-mono font-bold rounded-md flex items-center justify-center shrink-0 border border-white/10 bg-white/5 ${style.number}`}>
                      Q
                    </span>
                    <h3 className="font-sans text-base sm:text-lg font-medium tracking-tight text-white mt-0.5 leading-snug">
                      {item.question}
                    </h3>
                  </div>

                  {/* Minimal Spacer Line */}
                  <div className="h-[1px] bg-white/5" />

                  {/* Answer */}
                  <div className="flex gap-3 items-start">
                    <span className="h-6 w-6 text-[10px] font-mono font-bold bg-white/5 border border-white/5 text-zinc-500 rounded-md flex items-center justify-center shrink-0">
                      A
                    </span>
                    <p className="text-zinc-350 text-sm leading-relaxed mt-0.5 whitespace-pre-line font-sans font-normal">
                      {item.answer}
                    </p>
                  </div>
                </div>

                {/* VISUAL DIAGRAMS AND VISUAL AID HELPERS */}
                
                {/* 01. Video Length Guidelines Visualization */}
                {item.id === "turnaround-times" && (
                  <div className="bg-black/30 border border-white/5 p-4 rounded-sm space-y-3 font-mono text-[10px]">
                    <div className="flex items-center gap-1.5 text-zinc-500 uppercase tracking-widest text-[9px]">
                      <Clock className="h-3.5 w-3.5" />
                      Delivery Speed Gauge
                    </div>
                    <div className="grid grid-cols-4 gap-2 text-center">
                      <div className="bg-white/5 p-2 rounded border border-white/5">
                        <span className="text-zinc-500 block text-[8px] uppercase">FASTEST</span>
                        <strong className="text-white block mt-0.5">&lt; 5 Hours</strong>
                      </div>
                      <div className="bg-white/10 p-2 rounded border border-white/10">
                        <span className="text-zinc-400 block text-[8px] uppercase">REVISIONS</span>
                        <strong className="text-white block mt-0.5">16 - 24h</strong>
                      </div>
                      <div className="bg-white/5 p-2 rounded border border-white/5">
                        <span className="text-zinc-500 block text-[8px] uppercase">AVERAGE</span>
                        <strong className="text-white block mt-0.5">24 Hours</strong>
                      </div>
                      <div className="bg-white/5 p-2 rounded border border-white/5">
                        <span className="text-zinc-500 block text-[8px] uppercase">FIRST DRAFT</span>
                        <strong className="text-white block mt-0.5">&lt; 48 Hours</strong>
                      </div>
                    </div>
                  </div>
                )}

                {/* 02. Faulty Footage SLA sequence diagram */}
                {item.id === "faulty-footage" && (
                  <div className="bg-red-950/10 border border-red-500/10 p-4 rounded-sm space-y-2 font-mono text-[10px]">
                    <div className="flex items-center gap-1.5 text-red-400 uppercase tracking-widest text-[9px]">
                      <AlertOctagon className="h-3.5 w-3.5" />
                      Faulty Asset Flow Standard Sequence
                    </div>
                    <div className="flex justify-between items-center bg-black/40 p-2.5 rounded border border-red-500/5 text-zinc-400 text-xs font-sans">
                      <span>Faulty Material Discovered</span>
                      <span className="text-red-400 font-bold">➜ Stop Work ➜ Slack Alert ➜ Client Resubmits</span>
                    </div>
                  </div>
                )}

                {/* 03. Revision counts flow */}
                {item.id === "revision-counts" && (
                  <div className="bg-black/30 border border-white/5 p-4 rounded-sm space-y-3 font-mono text-[10px]">
                    <div className="flex items-center gap-1.5 text-zinc-500 uppercase tracking-widest text-[9px]">
                      <RefreshCw className="h-3.5 w-3.5" />
                      Feedback Loop Visual Cycle
                    </div>
                    <div className="text-center py-2 flex items-center justify-center gap-2 text-zinc-400">
                      <span>Draft Delivered</span>
                      <span>➜</span>
                      <span className="bg-white/5 text-white px-2 py-1 rounded border border-white/5">Client Requests Change Via Slack</span>
                      <span>➜</span>
                      <span className="font-bold text-emerald-400">Tracked as Revision (16-24h Delivery)</span>
                    </div>
                  </div>
                )}

                {/* 05. Scope Rates visualization */}
                {item.id === "rates-and-scope" && (
                  <div className="bg-black/30 border border-white/5 p-4 rounded-sm space-y-4">
                    <div className="flex items-center gap-1.5 font-mono text-zinc-500 uppercase tracking-widest text-[9px] mb-2">
                      <Layers className="h-3.5 w-3.5" />
                      All Video Types & Rates
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center font-mono text-[10px]">
                      <div className="bg-white/5 p-2 rounded border border-white/5">
                        <span className="text-zinc-500 block uppercase text-[8px]">Short Form (Lofi)</span>
                        <strong className="text-white block mt-1">$100/vid</strong>
                        <span className="text-zinc-550 block text-[8px] mt-0.5">Min 10 videos</span>
                      </div>
                      <div className="bg-white/5 p-2 rounded border border-white/5">
                        <span className="text-zinc-500 block uppercase text-[8px]">Short Form (HiFi)</span>
                        <strong className="text-white block mt-1">$100/vid</strong>
                        <span className="text-zinc-550 block text-[8px] mt-0.5">Min 10 videos</span>
                      </div>
                      <div className="bg-white/10 p-2 rounded border border-white/10">
                        <span className="text-zinc-300 block uppercase text-[8px]">Long Form (Simple)</span>
                        <strong className="text-emerald-400 block mt-1">$780/vid</strong>
                        <span className="text-zinc-400 block text-[8px] mt-0.5">Minimum 1 video</span>
                      </div>
                      <div className="bg-white/10 p-2 rounded border border-white/10">
                        <span className="text-zinc-300 block uppercase text-[8px]">Long Form (Complex)</span>
                        <strong className="text-emerald-400 block mt-1">$1,160/vid</strong>
                        <span className="text-zinc-400 block text-[8px] mt-0.5">Minimum 1 video</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 06. Content requirements checklist */}
                {item.id === "content-requirements" && (
                  <div className="bg-black/30 border border-white/5 p-4 rounded-sm space-y-3">
                    <div className="flex items-center gap-1.5 font-mono text-zinc-500 uppercase tracking-widest text-[9px]">
                      <FolderOpen className="h-3.5 w-3.5" />
                      What We Need From The Client
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 font-mono text-[10px]">
                      <div className="p-2 border border-white/5 rounded bg-white/[0.02] flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                        <span>Raw/B-Roll footage</span>
                      </div>
                      <div className="p-2 border border-white/10 rounded bg-white/[0.03] flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                        <span className="font-bold text-white">Inspiration Link (Mandatory)</span>
                      </div>
                      <div className="p-2 border border-white/5 rounded bg-white/[0.02] flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-zinc-500 shrink-0" />
                        <span className="text-zinc-400">Style guide (if available)</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 07. Video length visual */}
                {item.id === "video-length-def" && (
                  <div className="bg-black/30 border border-white/5 p-4 rounded-sm space-y-3 font-mono text-[10px]">
                    <div className="flex items-center gap-1.5 text-zinc-500 uppercase tracking-widest text-[9px]">
                      <Video className="h-3.5 w-3.5" />
                      Video Length Metrics
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 text-center gap-2">
                      <div className="bg-white/5 p-3 rounded border border-white/5">
                        <span className="text-zinc-400 block uppercase text-[8px]">Short-Form range</span>
                        <strong className="text-white text-sm block mt-1">60s – 90s</strong>
                      </div>
                      <div className="bg-white/10 p-3 rounded border border-white/10">
                        <span className="text-zinc-300 block uppercase text-[8px]">Medium-length range</span>
                        <strong className="text-white text-sm block mt-1">90s to 10 mins</strong>
                        <span className="text-zinc-400 block text-[9px] mt-0.5">$150 / video</span>
                      </div>
                      <div className="bg-white/5 p-3 rounded border border-white/5">
                        <span className="text-zinc-400 block uppercase text-[8px]">Long-Form range</span>
                        <strong className="text-white text-sm block mt-1">10 mins to 1 hour +</strong>
                      </div>
                    </div>
                  </div>
                )}

                {/* 08. submission limits (50 clips list) */}
                {item.id === "asset-submission" && (
                  <div className="bg-black/30 border border-white/5 p-4 rounded-sm text-center font-mono text-[10px]">
                    <div className="flex justify-center items-center gap-6">
                      <span className="bg-white/5 px-3 py-1.5 text-zinc-400 rounded-sm border border-white/5">Submit 50 Raw Clips</span>
                      <span className="text-zinc-500 font-sans">➜</span>
                      <span className="bg-white text-black font-bold px-3 py-1.5 rounded-sm">Deliver 10 Custom Edited Videos</span>
                    </div>
                  </div>
                )}

                {/* 10. Sequential workflow charts */}
                {item.id === "project-work-flow" && (
                  <div className="bg-black/30 border border-white/5 p-4 rounded-sm space-y-3 font-mono text-[9px]">
                    <div className="flex items-center gap-1.5 text-zinc-500 uppercase tracking-widest text-[9px]">
                      <Settings className="h-3.5 w-3.5" />
                      5 step video editing workflow
                    </div>
                    <div className="grid grid-cols-5 gap-2 text-center text-white">
                      <div className="bg-white/5 p-2 rounded-sm border border-white/5">
                        <span className="text-zinc-500 block">1</span>
                        <strong>Upload Assets</strong>
                      </div>
                      <div className="bg-white/5 p-2 rounded-sm border border-white/5">
                        <span className="text-zinc-500 block">2</span>
                        <strong>Confirm ETA</strong>
                      </div>
                      <div className="bg-[#0A0A0C] p-2 rounded-sm border border-white/5">
                        <span className="text-zinc-500 block">3</span>
                        <strong>Draft Delivery</strong>
                      </div>
                      <div className="bg-[#0A0A0C] p-2 rounded-sm border border-white/5">
                        <span className="text-zinc-500 block">4</span>
                        <strong>Client Review</strong>
                      </div>
                      <div className="bg-white text-black p-2 rounded-sm font-bold">
                        <span className="text-zinc-700 block text-[8px]">5</span>
                        <strong>Completion</strong>
                      </div>
                    </div>
                  </div>
                )}

                {/* 11. Upfront investment money back check */}
                {item.id === "upfront-invest-rule" && (
                  <div className="bg-black/30 border border-white/5 p-4 rounded-xl flex items-center justify-center gap-4">
                    <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-2.5 rounded-lg font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-400 animate-pulse" />
                      100% 1-Week Trial Money-Back Guarantee
                    </div>
                  </div>
                )}

                {/* 13. slack updates */}
                {item.id === "track-progress-info" && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-1.5 font-mono text-zinc-500 uppercase tracking-widest text-[9px]">
                      <Slack className="h-3.5 w-3.5 text-white" />
                      What the Slack convo would look like
                    </div>
                    
                    {/* Simulated Slack Interface */}
                    <div className="bg-[#121016] border border-[#2A2633] rounded-md overflow-hidden text-[11px] font-sans">
                      {/* Slack top channel identity bar */}
                      <div className="bg-[#1A1823] border-b border-[#2A2633] px-3 py-2 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white text-xs"># editoz-feedback-desk</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                          <span className="text-[10px] text-zinc-500">Active Campaign Thread</span>
                        </div>
                        <div className="flex gap-2">
                          <span className="bg-white/5 text-zinc-400 px-1.5 py-0.5 rounded text-[9px] font-mono">Members: 3</span>
                        </div>
                      </div>

                      {/* Chat Messages Frame */}
                      <div className="p-4 space-y-4 max-h-[300px] overflow-y-auto bg-[#121016]">
                        {/* Day Divider */}
                        <div className="relative flex items-center justify-center my-2">
                          <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-[#2A2633]" />
                          </div>
                          <span className="relative bg-[#121016] px-3 text-[9px] text-zinc-500 font-mono uppercase tracking-wider">
                            Today
                          </span>
                                           {/* Msg 1 - Editor */}
                        <div className="flex gap-2.5 items-start">
                          <div className="h-7 w-7 rounded bg-blue-600 text-white font-mono font-bold text-[10px] flex items-center justify-center shrink-0 shadow-sm shadow-blue-900/30">
                            ED
                          </div>
                          <div className="space-y-1">
                            <div className="flex items-center gap-1.5">
                              <span className="font-bold text-zinc-200">Thilina (Editoz Lead Editor)</span>
                              <span className="text-[9px] text-zinc-500">10:42 AM</span>
                              <span className="text-[8px] bg-blue-500/10 text-blue-400 border border-blue-500/20 px-1 rounded">Editor</span>
                            </div>
                            <p className="text-zinc-300 leading-relaxed font-light text-xs">
                              Hey team! 🎬 Draft v1 of the <span className="text-white font-medium">Weekly Outreach Reel (Project #04)</span> is finished and ready for review.
                            </p>
                            
                            {/* File attachments block */}
                            <div className="bg-[#1B1824] border border-[#2F2A3D] rounded p-2 mt-2 max-w-sm flex items-center justify-between gap-3">
                              <div className="flex items-center gap-2">
                                <div className="p-1.5 bg-red-500/10 text-red-400 rounded">
                                  <Video className="h-4 w-4" />
                                </div>
                                <div className="text-[10px] space-y-0.5">
                                  <span className="text-zinc-200 block truncate max-w-[170px] font-medium">Outreach_Reel_Draft_v1.mp4</span>
                                  <span className="text-zinc-500 block text-[9px]">Short Form (HiFi) • 1080x1920 • 90 seconds</span>
                                </div>
                              </div>
                              <a href="#drive-preview" className="bg-white/5 hover:bg-white/10 text-zinc-200 px-2.5 py-1 rounded border border-white/10 transition text-[9px] font-mono font-medium">
                                DRIVE LINK
                              </a>
                            </div>
                          </div>
                        </div>

                        {/* Msg 2 - Client */}
                        <div className="flex gap-2.5 items-start">
                          <div className="h-7 w-7 rounded bg-[#D39E2F] text-black font-semibold text-[10px] flex items-center justify-center shrink-0 shadow-sm">
                            CL
                          </div>
                          <div className="space-y-1">
                            <div className="flex items-center gap-1.5">
                              <span className="font-bold text-zinc-200">Marcus (Partner Client)</span>
                              <span className="text-[9px] text-zinc-500">10:48 AM</span>
                              <span className="text-[8px] bg-amber-500/10 text-[#D39E2F] border border-amber-500/20 px-1 rounded">Client</span>
                            </div>
                            <p className="text-zinc-300 leading-relaxed font-light text-xs">
                              This looks incredibly good, Thilina! The custom captions and dynamic zoom cuts are on point. 🔥
                              <br />
                              <span className="text-zinc-400">Feedback: Can we scale down the font size of the subtitle overlay around 0:15 so it doesn't overlap the speaker's tie? Other than that, we are good to go!</span>
                            </p>
                          </div>
                        </div>

                        {/* Msg 3 - Editor Replying */}
                        <div className="flex gap-2.5 items-start bg-blue-500/[0.02] border-l-2 border-blue-500/50 pl-2 py-1.5">
                          <div className="h-7 w-7 rounded bg-blue-600 text-white font-mono font-bold text-[10px] flex items-center justify-center shrink-0 shadow-sm">
                            ED
                          </div>
                          <div className="space-y-1">
                            <div className="flex items-center gap-1.5">
                              <span className="font-bold text-zinc-200">Thilina (Editoz Lead Editor)</span>
                              <span className="text-[9px] text-zinc-500">11:02 AM</span>
                            </div>
                            <p className="text-zinc-300 leading-relaxed font-light text-xs">
                              On it, Marcus! Adjusting the tie overlap immediately. 
                              <br />
                              Since this is a standard revision loop, the revised final draft of the video will be dropped here on Slack within our <span className="text-emerald-400 font-semibold font-mono">16 - 24 hour SLA window</span>. Stay tuned!
                            </p>
                          </div>
                        </div>                  </div>
                      </div>

                      {/* Slack Message Box placeholder */}
                      <div className="bg-[#1A1823] p-2.5 border-t border-[#2A2633] flex items-center justify-between gap-2 text-zinc-500">
                        <span>Send feedback message to #editoz-feedback-desk...</span>
                        <div className="flex gap-1.5">
                          <span className="bg-[#2A2633] p-1 rounded hover:text-white cursor-not-allowed">🎙️</span>
                          <span className="bg-[#2A2633] p-1 rounded hover:text-white cursor-not-allowed">📁</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 12. sales process */}
                {item.id === "sales-process" && (
                  <div className="space-y-6 mt-4">
                    {/* Step 1: Overall Flow */}
                    <div className="bg-black/30 border border-white/5 p-4 rounded-lg space-y-3 font-mono text-[10px]">
                      <div className="flex items-center gap-1.5 text-zinc-500 uppercase tracking-widest text-[9px]">
                        <Target className="h-3.5 w-3.5 text-emerald-400" />
                        Sales Pipeline Progress Flowchart
                      </div>
                      
                      {/* Responsive pipeline view */}
                      <div className="grid grid-cols-2 md:grid-cols-7 gap-2 text-center text-white">
                        <div className="bg-white/5 p-2.5 rounded-sm border border-white/5 flex flex-col justify-between items-center">
                          <span className="text-zinc-500 text-[8px] uppercase block mb-1">Stage 1</span>
                          <strong className="text-xs">Ad</strong>
                        </div>
                        <div className="bg-white/5 p-2.5 rounded-sm border border-white/5 flex flex-col justify-between items-center">
                          <span className="text-zinc-500 text-[8px] uppercase block mb-1">Stage 2</span>
                          <strong className="text-xs">WhatsApp</strong>
                        </div>
                        <div className="bg-white/5 p-2.5 rounded-sm border border-white/5 flex flex-col justify-between items-center">
                          <span className="text-zinc-500 text-[8px] uppercase block mb-1">Stage 3</span>
                          <strong className="text-xs">Qualification</strong>
                        </div>
                        <div className="bg-amber-500/10 p-2.5 rounded-sm border border-amber-500/20 flex flex-col justify-between items-center">
                          <span className="text-amber-500 text-[8px] uppercase block mb-1">Stage 4</span>
                          <strong className="text-xs text-amber-300 font-bold">15-Min Strategy Call</strong>
                        </div>
                        <div className="bg-white/5 p-2.5 rounded-sm border border-white/5 flex flex-col justify-between items-center">
                          <span className="text-zinc-500 text-[8px] uppercase block mb-1">Stage 5</span>
                          <strong className="text-xs">Close</strong>
                        </div>
                        <div className="bg-emerald-500/10 p-2.5 rounded-sm border border-emerald-500/20 flex flex-col justify-between items-center">
                          <span className="text-emerald-500 text-[8px] uppercase block mb-1">Stage 6</span>
                          <strong className="text-xs text-emerald-300 font-bold">Payment</strong>
                        </div>
                        <div className="bg-blue-500/10 p-2.5 rounded-sm border border-blue-500/20 flex flex-col justify-between items-center">
                          <span className="text-blue-500 text-[8px] uppercase block mb-1">Stage 7</span>
                          <strong className="text-xs text-blue-300 font-bold">Onboarding Form</strong>
                        </div>
                      </div>
                    </div>

                    {/* Step 2: Meta Ad & Initial Questions */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Qualification card */}
                      <div className="bg-black/20 border border-white/5 rounded-lg p-5 space-y-4">
                        <div className="flex items-center gap-2 pb-2 border-b border-white/5">
                          <MessageSquare className="h-4 w-4 text-emerald-400" />
                          <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                            1. Meta Ad → WhatsApp (Qualify)
                          </h4>
                        </div>
                        <div className="space-y-3">
                          <span className="text-[10px] uppercase font-mono text-zinc-500 tracking-wider block">
                            Initial Questions (Qualify):
                          </span>
                          <ul className="space-y-2.5">
                            <li className="flex items-start gap-2.5 text-xs">
                              <span className="bg-white/5 border border-white/10 text-zinc-300 font-mono text-[9px] w-5 h-5 rounded-sm flex items-center justify-center shrink-0">1</span>
                              <span className="text-zinc-300 mt-0.5">What type of business do you run?</span>
                            </li>
                            <li className="flex items-start gap-2.5 text-xs">
                              <span className="bg-white/5 border border-white/10 text-zinc-300 font-mono text-[9px] w-5 h-5 rounded-sm flex items-center justify-center shrink-0">2</span>
                              <span className="text-zinc-300 mt-0.5">Are you currently posting short-form content?</span>
                            </li>
                            <li className="flex items-start gap-2.5 text-xs">
                              <span className="bg-white/5 border border-white/10 text-zinc-300 font-mono text-[9px] w-5 h-5 rounded-sm flex items-center justify-center shrink-0">3</span>
                              <span className="text-zinc-300 mt-0.5">How many videos are you posting per week?</span>
                            </li>
                            <li className="flex items-start gap-2.5 text-xs">
                              <span className="bg-white/5 border border-white/10 text-zinc-300 font-mono text-[9px] w-5 h-5 rounded-sm flex items-center justify-center shrink-0">4</span>
                              <span className="text-zinc-300 mt-0.5">Who is currently editing your content?</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* Decision Rule */}
                      <div className="bg-black/20 border border-white/5 rounded-lg p-5 space-y-4 flex flex-col justify-between">
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 pb-2 border-b border-white/5">
                            <Users className="h-4 w-4 text-amber-500" />
                            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                              Step 2: Decide Call vs No Call
                            </h4>
                          </div>
                          
                          <div>
                            <span className="text-[10px] uppercase font-mono text-zinc-500 tracking-wider block mb-1.5">
                              Call Booking Examples (Ideal Profiles):
                            </span>
                            <div className="grid grid-cols-2 gap-1 px-1">
                              {["Coaches", "Consultants", "Agency owners", "Founders", "Personal brands, etc…"].map((ex) => (
                                <div key={ex} className="text-[10px] text-zinc-300 font-sans flex items-center gap-1.5 py-0.5">
                                  <span className="w-1 h-1 rounded-full bg-amber-400"></span>
                                  <span>{ex}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Script container */}
                        <div className="bg-amber-500/5 border border-amber-500/20 p-3 rounded-md space-y-2.5 mt-3">
                          <div className="flex justify-between items-center">
                            <span className="text-[#D39E2F] font-mono text-[9px] uppercase tracking-widest font-bold">
                              Closer Invite Script
                            </span>
                            <span className="bg-amber-500/10 text-amber-400 text-[8px] font-mono px-1.5 py-0.5 rounded uppercase font-bold">WhatsApp Pitch</span>
                          </div>
                          <p className="text-zinc-200 text-[11px] italic font-serif leading-relaxed">
                            "Looks like we can help. Let me show you exactly how we'd handle your content. Are you free for a quick 15-minute strategy call?"
                          </p>
                          <div className="text-[9px] font-mono text-zinc-400 text-right uppercase tracking-wider pt-1.5 border-t border-white/5">
                            ➜ Book Google Meet.
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Step 3: Call Structure */}
                    <div className="bg-black/20 border border-white/5 rounded-lg p-5 space-y-4">
                      <div className="flex items-center gap-2 pb-2 border-b border-white/5">
                        <Phone className="h-4 w-4 text-blue-400" />
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                          2. The Call Structure
                        </h4>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-1">
                        {/* Situation Card */}
                        <div className="bg-white/[0.02] border border-white/5 rounded-md p-3.5 space-y-2 text-[10px]">
                          <span className="text-[9px] font-bold text-blue-400 font-mono uppercase bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20 inline-block">
                            1. Current Situation
                          </span>
                          <ul className="space-y-1.5 text-zinc-400">
                            <li className="flex items-start gap-1">
                              <span className="text-blue-500 font-bold shrink-0">•</span>
                              <span>What content are you creating now?</span>
                            </li>
                            <li className="flex items-start gap-1">
                              <span className="text-blue-500 font-bold shrink-0">•</span>
                              <span>How often?</span>
                            </li>
                            <li className="flex items-start gap-1">
                              <span className="text-blue-500 font-bold shrink-0">•</span>
                              <span>Who edits?</span>
                            </li>
                            <li className="flex items-start gap-1">
                              <span className="text-blue-500 font-bold shrink-0">•</span>
                              <span>What's working?</span>
                            </li>
                          </ul>
                        </div>

                        {/* Problems Card */}
                        <div className="bg-white/[0.02] border border-white/5 rounded-md p-3.5 space-y-2 text-[10px]">
                          <span className="text-[9px] font-bold text-orange-400 font-mono uppercase bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20 inline-block">
                            2. Problems
                          </span>
                          <ul className="space-y-1.5 text-zinc-400">
                            <li className="flex items-start gap-1">
                              <span className="text-orange-500 font-bold shrink-0">•</span>
                              <span>Time?</span>
                            </li>
                            <li className="flex items-start gap-1">
                              <span className="text-orange-500 font-bold shrink-0">•</span>
                              <span>Consistency?</span>
                            </li>
                            <li className="flex items-start gap-1">
                              <span className="text-orange-500 font-bold shrink-0">•</span>
                              <span>Quality?</span>
                            </li>
                            <li className="flex items-start gap-1">
                              <span className="text-orange-500 font-bold shrink-0">•</span>
                              <span>Volume?</span>
                            </li>
                          </ul>
                        </div>

                        {/* Offer Card */}
                        <div className="bg-amber-500/[0.02] border border-amber-500/10 rounded-md p-3.5 space-y-2 flex flex-col justify-between text-[10px]">
                          <div>
                            <span className="text-[9px] font-bold text-[#D39E2F] font-mono uppercase bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 inline-block mb-1">
                              4. Offer
                            </span>
                            <p className="text-zinc-400 leading-relaxed font-sans">
                              Present our tailored lofi/hifi short form edits ($100), medium formats ($150) or simple/complex long formats ($780-$1,160) depending on need.
                            </p>
                          </div>
                        </div>

                        {/* Close Card */}
                        <div className="bg-emerald-500/[0.02] border border-emerald-500/10 rounded-md p-3.5 space-y-2 flex flex-col justify-between text-[10px]">
                          <div>
                            <span className="text-[9px] font-bold text-emerald-400 font-mono uppercase bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 inline-block mb-1">
                              5. Close
                            </span>
                            <p className="text-zinc-400 leading-relaxed font-sans">
                              Obtain positive confirmation. Walk the client straight through upfront billing payment & onboarding form initialization.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </section>

      </main>

      {/* MINIMAL FOOTER */}
      <footer className="border-t border-white/5 bg-[#0A0A0C] py-10 mt-24">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 160 32" className="h-5 text-zinc-400 shrink-0" fill="currentColor">
              <g transform="scale(0.8) translate(0, 4)">
                <path d="M4 22C10 21 17 14 23 17C28 19 32 22 41 15C36 21 28 22 22 20C17 18 10 22 4 22Z" />
                <path d="M3 14C9 13 16 6 22 9C27 11 31 14 40 7C35 13 27 14 21 12C16 10 9 14 3 14Z" />
                <path d="M5 6C11 5 18 -2 24 1C29 3 33 6 42 -1C37 5 29 6 23 4C18 2 11 6 5 6Z" />
              </g>
              <text x="47" y="20" className="font-sans font-semibold text-zinc-400 text-[16px] tracking-tight">Editoz Club</text>
            </svg>
            <span className="mx-2 text-zinc-700">|</span>
            <span>Closer Help Document</span>
          </div>
          <div>
            <span>© 2026 Editoz Club. All questions answered.</span>
          </div>
        </div>
      </footer>

      {/* FLOAT SCROLL TO THE TOP */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 p-2.5 bg-white hover:bg-zinc-200 text-black rounded-sm shadow-xl transition duration-250 z-50 hover:cursor-pointer"
          aria-label="Scroll back to top menu"
        >
          <ArrowUp className="h-4 w-4 stroke-[2.5]" />
        </button>
      )}

    </div>
  );
}
