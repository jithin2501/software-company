import React, { useEffect } from "react";

const MARKETING_SERVICES = [
  {
    num: "01",
    title: "Keyword Research & Strategy",
    desc: "We identify high-impact keywords, including \"SEO services in Bangalore,\" to ensure your website targets the right audience.",
    color: "purple",
    themeColor: "#8b5cf6",
    bgFill: "#f5f3ff",
    theme: {
      accent: "bg-purple-600",
      text: "text-purple-600",
      lightBg: "bg-purple-50",
    },
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 20l-3-3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 11h4M11 9v4" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "On-Page SEO Optimization",
    desc: "Our on-page SEO services focus on optimizing your website's structure and content, including meta tags, header structuring, internal linking, and image SEO.",
    color: "green",
    themeColor: "#10b981",
    bgFill: "#f0fdf4",
    theme: {
      accent: "bg-emerald-600",
      text: "text-emerald-600",
      lightBg: "bg-emerald-50",
    },
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="15" rx="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9h18M6 6.5h.01M8.5 6.5h.01" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11v1m0 3v1m-2.5-2.5h1m3 0h1" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Technical SEO",
    desc: "We enhance your website's backend performance to improve search engine crawling and indexing, focusing on speed, mobile responsiveness, and XML sitemaps.",
    color: "orange",
    themeColor: "#f59e0b",
    bgFill: "#fffbeb",
    theme: {
      accent: "bg-orange-600",
      text: "text-orange-600",
      lightBg: "bg-orange-50",
    },
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="12" rx="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v4M8 19h8" />
        <circle cx="12" cy="9" r="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.5v1m0 3v1m-2.5-2.5h1m3 0h1" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Content Marketing",
    desc: "Content is a key driver of SEO success. Our team creates engaging, keyword-rich content that attracts and retains users while improving rankings.",
    color: "blue",
    themeColor: "#3b82f6",
    bgFill: "#eff6ff",
    theme: {
      accent: "bg-blue-600",
      text: "text-blue-600",
      lightBg: "bg-blue-50",
    },
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Link Building",
    desc: "We build high-quality backlinks from authoritative websites to boost your domain authority and search engine rankings.",
    color: "pink",
    themeColor: "#ec4899",
    bgFill: "#fdf2f8",
    theme: {
      accent: "bg-pink-600",
      text: "text-pink-600",
      lightBg: "bg-pink-50",
    },
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Local SEO",
    desc: "As a business targeting Bangalore customers, local SEO is crucial. We optimize your Google Business Profile and location-based keywords to increase local visibility.",
    color: "violet",
    themeColor: "#6366f1",
    bgFill: "#e0e7ff",
    theme: {
      accent: "bg-indigo-600",
      text: "text-indigo-600",
      lightBg: "bg-indigo-50",
    },
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export default function DigitalMarketingPage({ setView }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="w-full bg-[#fcfcff] min-h-[calc(100vh-72px)] py-6 font-sans relative overflow-hidden">
      {/* Dynamic Keyframe Animations for Card Load and Floating Effects */}
      <style>{`
        @keyframes lift-in {
          0% {
            transform: translateY(12px);
            opacity: 0;
          }
          100% {
            transform: translateY(-8px);
            opacity: 1;
          }
        }
        @keyframes draw-border {
          from {
            stroke-dashoffset: 250;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        @keyframes spin-in {
          from {
            transform: translateY(-50%) rotate(-60deg);
            opacity: 0;
          }
          to {
            transform: translateY(-50%) rotate(0deg);
            opacity: 0.85;
          }
        }
        @keyframes pop-in {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0;
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
        }
        @keyframes scale-bounce {
          0% {
            transform: translateY(-50%) scale(0);
            opacity: 0;
          }
          70% {
            transform: translateY(-50%) scale(1.08);
            opacity: 1;
          }
          100% {
            transform: translateY(-50%) scale(1);
            opacity: 1;
          }
        }
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        @keyframes float-medium {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(6px);
          }
        }
        .animate-lift-in {
          opacity: 0;
          animation: lift-in 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-border-draw {
          stroke-dasharray: 250;
          stroke-dashoffset: 250;
          animation: draw-border 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-spin-in {
          opacity: 0;
          animation: spin-in 1.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-pop-in {
          opacity: 0;
          animation: pop-in 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .animate-scale-bounce {
          opacity: 0;
          animation: scale-bounce 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .animate-float-1 {
          animation: float-slow 4s ease-in-out infinite;
        }
        .animate-float-2 {
          animation: float-medium 3.5s ease-in-out infinite;
        }
      `}</style>

      {/* Background Soft Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-200/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-blue-200/20 blur-[100px] pointer-events-none" />

      {/* 🚀 LANDING HERO SECTION */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 pt-6 pb-12 grid grid-cols-1 lg:grid-cols-[4.2fr_5.8fr] gap-12 items-center relative z-10">

        {/* Left Column Content */}
        <div className="flex flex-col items-start text-left lg:h-[460px] justify-between py-1">
          {/* Badge */}
          <div className="flex items-center gap-2 bg-[#f3e8ff] px-4 py-1.5 rounded-full">
            <span className="text-[#6b21a8] text-xs font-black tracking-wider uppercase flex items-center gap-1.5">
              <span>✦</span> DIGITAL MARKETING THAT DRIVES GROWTH
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#091133] leading-[1.1] tracking-tight">
            <span className="whitespace-nowrap">We Build Strategies</span> <br />
            That Drive <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Real Results.
            </span>
          </h1>

          {/* Paragraph */}
          <p className="text-gray-500 font-medium text-sm md:text-base leading-relaxed max-w-lg">
            Data-driven digital marketing solutions to help your brand attract the right audience, boost engagement, and maximize conversions.
          </p>

          {/* Feature Highlights (Fills the vertical space beautifully) */}
          <ul className="flex flex-col gap-3 my-1 text-[#091133] font-semibold text-xs md:text-sm">
            <li className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </span>
              <span className="text-slate-600">Custom-built campaigns tailored to your specific audience.</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </span>
              <span className="text-slate-600">Advanced attribution models for transparent, real-time ROI tracking.</span>
            </li>
          </ul>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => setView("contact")}
              className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs md:text-sm font-extrabold px-6 py-3.5 rounded-full shadow-md shadow-indigo-100 transition-all duration-200 hover:scale-[1.03] flex items-center gap-2 cursor-pointer"
            >
              Get Started
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <a
              href="#core-services"
              className="border border-slate-200 hover:border-indigo-600 text-[#091133] hover:text-indigo-600 text-xs md:text-sm font-extrabold px-6 py-3.5 rounded-full transition-all duration-200 hover:scale-[1.03] flex items-center gap-2"
            >
              Explore Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Column Graphic Circle */}
        <div className="flex items-center justify-center relative min-h-[480px] lg:min-h-[500px] overflow-hidden lg:overflow-visible w-full">

          {/* Main graphic absolute wrapper (Increased width & responsive scale) */}
          <div className="relative w-[600px] h-[460px] flex items-center justify-center scale-[0.6] min-[400px]:scale-[0.7] sm:scale-[0.85] lg:scale-100 lg:translate-x-4 origin-center transition-transform duration-300">

            {/* Symmetrical Outer Dashed Dotted Circle Ring */}
            <div className="absolute w-[463px] h-[463px] rounded-full border border-indigo-100 border-dashed animate-spin-[200s_linear_infinite]" />

            {/* Main central circle containing digital.png (Borderless with smooth crop) */}
            <div className="absolute w-[330px] h-[330px] rounded-full bg-gradient-to-tr from-purple-100/40 to-blue-50/40 overflow-hidden z-10">
              <img
                src="/images/digitalmarketing/digital.png"
                alt="Digital Marketing Team"
                className="w-full h-full object-cover"
              />
            </div>

            {/* --- FLOATING ORBIT CARDS --- */}

            {/* 1. Traffic Growth Card (Top Center) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
              <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-slate-100/50 p-3.5 flex flex-col gap-1.5 w-[170px]">
                <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Traffic Growth</span>
                <div className="flex items-end justify-between gap-1">
                  <div className="flex flex-col">
                    <span className="text-sm font-black text-[#091133]">124,800</span>
                    <span className="text-[9px] font-bold text-emerald-500 flex items-center gap-0.5 mt-0.5">
                      <span className="text-emerald-500 text-xs">▲</span> 32.4%
                    </span>
                  </div>
                  <svg className="w-14 h-7 text-indigo-500 overflow-visible self-end mb-0.5" viewBox="0 0 60 20">
                    <defs>
                      <linearGradient id="sparkline-grad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#6366f1" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0,16 Q 10,5 20,12 T 40,4 T 60,2 L 60,20 L 0,20 Z"
                      fill="url(#sparkline-grad)"
                    />
                    <path
                      d="M 0,16 Q 10,5 20,12 T 40,4 T 60,2"
                      fill="none"
                      stroke="#6366f1"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="60" cy="2" r="2.5" fill="#6366f1" />
                  </svg>
                </div>
              </div>
            </div>

            {/* 2. Engagement Card (Left Center) */}
            <div className="absolute left-0 top-[230px] -translate-y-1/2 z-20">
              <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-slate-100/50 p-3.5 flex items-center gap-3 w-[165px]">
                <div className="w-9 h-9 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12h3.086c.9 0 1.706.514 2.07 1.329l1.895 4.167a.75.75 0 001.373-.038l3.46-10.38a.75.75 0 011.43-.004l1.523 4.14a.75.75 0 00.708.49H21.75" />
                  </svg>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[9px] font-extrabold text-slate-400 uppercase leading-none">Engagement</span>
                  <span className="text-sm font-black text-[#091133] mt-0.5">48,200</span>
                  <span className="text-[9px] font-bold text-emerald-500 mt-0.5">▲ 24.8%</span>
                </div>
              </div>
            </div>

            {/* 3. Conversions Card (Right Center) */}
            <div className="absolute right-0 top-[230px] -translate-y-1/2 z-20">
              <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-slate-100/50 p-3.5 flex items-center gap-3 w-[165px]">
                <div className="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 flex-shrink-0">
                  <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 7.5L12 12" />
                  </svg>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[9px] font-extrabold text-slate-400 uppercase leading-none">Conversions</span>
                  <span className="text-sm font-black text-[#091133] mt-0.5">1,840</span>
                  <span className="text-[9px] font-bold text-emerald-500 mt-0.5">▲ 28.1%</span>
                </div>
              </div>
            </div>

            {/* 4. ROI Increase Card (Bottom Center) */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20">
              <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-slate-100/50 p-3.5 flex items-center gap-3 w-[165px]">
                <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[9px] font-extrabold text-slate-400 uppercase leading-none">ROI Generated</span>
                  <span className="text-sm font-black text-[#091133] mt-0.5">$45,200</span>
                  <span className="text-[9px] font-bold text-emerald-500 mt-0.5">▲ 30.6%</span>
                </div>
              </div>
            </div>

            {/* --- SOCIAL FLOATING NODES --- */}
            {/* Google Logo (Top-Left diagonal) */}
            <div className="absolute top-[60px] left-[100px] w-11 h-11 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center z-20">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.136 4.114-3.535 0-6.4-2.865-6.4-6.4s2.865-6.4 6.4-6.4c1.782 0 3.32.738 4.41 1.91l3.223-3.223C19.53 2.372 16.14 1 12.24 1 6.033 1 1 6.033 1 12.24s5.033 11.24 11.24 11.24c5.897 0 10.867-4.24 10.867-11.24 0-.768-.068-1.513-.197-2.228H12.24z" />
              </svg>
            </div>

            {/* Facebook Logo (Top-Right diagonal) */}
            <div className="absolute top-[60px] right-[100px] w-11 h-11 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center z-20">
              <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </div>

            {/* Instagram Logo (Bottom-Left diagonal) */}
            <div className="absolute bottom-[60px] left-[100px] w-11 h-11 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center z-20">
              <svg className="w-5 h-5 text-pink-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </div>

            {/* Chart Arrow Logo (Bottom-Right diagonal) */}
            <div className="absolute bottom-[60px] right-[100px] w-11 h-11 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center z-20">
              <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
              </svg>
            </div>

          </div>
        </div>
      </div>



      {/* 🛠️ CORE SERVICES SECTION */}
      <div id="core-services" className="relative scroll-mt-20 pt-16 md:pt-24 lg:pt-28">
        {/* Page Header */}
        <div className="max-w-6xl mx-auto px-6 text-center flex flex-col items-center mb-10">


          {/* Heading Title (Matches Website Brand) */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0A1128] tracking-tight leading-tight mb-4">
            Professional <span className="text-[#0084FF]">Digital Marketing</span> Services
          </h2>

          {/* Subtext */}
          <p className="text-gray-500 font-medium max-w-xl text-sm md:text-base leading-relaxed mt-2">
            Comprehensive solutions tailored to meet the diverse needs of businesses across industries.
          </p>
        </div>

        {/* Services Grid */}
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12 mt-16 pb-16">
          {MARKETING_SERVICES.map((service, index) => {
            const delay = index * 0.15; // Beautifully staggered delays per card

            return (
              <div
                key={service.title}
                className="relative group animate-lift-in"
                style={{ animationDelay: `${delay}s` }}
              >
                {/* Outer Shadow Glow (Matching Theme Color - permanently visible) */}
                <div
                  className="absolute inset-0 rounded-[24px] opacity-[0.08] transition-all duration-300 blur-xl"
                  style={{ backgroundColor: service.themeColor }}
                />

                {/* Card Container (Strictly relative for absolute child layering) */}
                <div className="w-full h-full min-h-[160px] pl-20 pr-8 pt-6 pb-5 flex flex-col justify-between relative">

                  {/* SVG Background representing the slanted corners & colored right border */}
                  <svg
                    className="absolute inset-0 w-full h-full -z-10 filter drop-shadow-[0_4px_25px_rgba(0,0,0,0.02)]"
                    viewBox="0 0 350 160"
                    preserveAspectRatio="none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Main white body path with custom left and right slants (symmetrical left slants) */}
                    <path
                      d="M 40,0 L 310,0 Q 320,0 321,10 L 348,150 Q 350,160 335,160 L 40,160 L 0,120 L 0,40 L 40,0 Z"
                      fill={service.bgFill}
                      stroke="#eaecef"
                      strokeWidth="1.2"
                    />
                  </svg>

                  {/* Content Block */}
                  <div className="flex flex-col gap-1.5 relative z-10">
                    {/* Service Title */}
                    <h3 className="text-[16px] font-extrabold text-[#0a1128] leading-snug pr-8">
                      {service.title}
                    </h3>

                    {/* Small Colored Underline Accent */}
                    <div className={`w-8 h-[2.5px] rounded-full my-1.5 ${service.theme.accent}`} />

                    {/* Description Paragraph */}
                    <p className="text-[12.5px] text-gray-500 font-medium leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                </div>

                {/* Absolute Overlapping Icon Circle - vertically centered on left-most edge */}
                <div
                  className="absolute left-[-36px] top-1/2 w-[72px] h-[72px] rounded-full bg-white flex items-center justify-center border border-slate-100/80 shadow-md z-20 animate-scale-bounce"
                  style={{ transform: "translateY(-50%)", animationDelay: `${delay + 0.1}s` }}
                >
                  {/* Colored background ring inside */}
                  <div className={`w-[58px] h-[58px] rounded-full flex items-center justify-center ${service.theme.lightBg} ${service.theme.text}`}>
                    {React.cloneElement(service.icon, { className: "w-10 h-10" })}
                  </div>
                </div>

                {/* Orbiting ring behind card - vertically centered on left-most edge */}
                <div
                  style={{ borderColor: service.themeColor, transform: "translateY(-50%)", animationDelay: `${delay + 0.15}s` }}
                  className="absolute left-[-48px] top-1/2 w-[96px] h-[96px] rounded-full border border-dashed -z-20 animate-spin-in"
                >
                  {/* Orbit Dot on the far left */}
                  <div
                    style={{ backgroundColor: service.themeColor, animationDelay: `${delay + 0.25}s` }}
                    className="absolute left-0 top-1/2 w-2 h-2 rounded-full animate-pop-in"
                  />
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* 🤝 WHY CHOOSE US SECTION */}
      <div className="relative bg-[#fafbfe] py-24 overflow-hidden border-t border-slate-100/60">

        {/* Soft Background Accents */}
        <div className="absolute left-0 top-1/4 w-40 h-80 bg-gradient-to-r from-purple-100/20 to-transparent rounded-r-full blur-3xl pointer-events-none" />
        <div className="absolute right-0 bottom-1/4 w-40 h-80 bg-gradient-to-l from-blue-100/20 to-transparent rounded-l-full blur-3xl pointer-events-none" />

        <div className="max-w-[1240px] mx-auto px-6 relative z-10">

          {/* Header */}
          <div className="text-center flex flex-col items-center mb-8">

            {/* Main Title */}
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0A1128] tracking-tight leading-tight mb-4">
              Why Businesses Choose <span className="text-[#0084FF]">Digital Elite Services?</span>
            </h2>

            {/* Subtext */}
            <p className="text-slate-500 font-medium max-w-xl text-sm md:text-base leading-relaxed">
              We help brands grow online with strategy, creativity, and performance that delivers real results.
            </p>
          </div>

          {/* Three-Column Section Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr_1fr] gap-8 items-center max-w-6xl mx-auto">

            {/* Left Column (01 & 03 Features) */}
            <div className="flex flex-col gap-12 justify-center lg:h-[340px] order-2 lg:order-1">

              {/* Item 01 */}
              <div className="flex flex-col items-start lg:items-end text-left lg:text-right relative bg-white lg:bg-transparent p-6 lg:py-0 lg:pl-8 lg:pr-0 rounded-[20px] shadow-sm lg:shadow-none border border-slate-50 lg:border-none">
                <div className="flex flex-col items-start lg:items-end mb-2.5">
                  <span className="text-2xl font-black text-[#7c3aed]">01</span>
                  <div className="w-8 h-[3px] bg-[#7c3aed] rounded-full mt-1 lg:ml-auto" />
                </div>
                <h3 className="text-lg font-bold text-[#0A1128] mb-2">Increase Visibility</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs font-medium">
                  Ensure your website ranks higher on search engines like Google, making it
                </p>
              </div>

              {/* Item 03 */}
              <div className="flex flex-col items-start lg:items-end text-left lg:text-right relative bg-white lg:bg-transparent p-6 lg:py-0 lg:pl-8 lg:pr-0 rounded-[20px] shadow-sm lg:shadow-none border border-slate-50 lg:border-none">
                <div className="flex flex-col items-start lg:items-end mb-2.5">
                  <span className="text-2xl font-black text-[#10b981]">03</span>
                  <div className="w-8 h-[3px] bg-[#10b981] rounded-full mt-1 lg:ml-auto" />
                </div>
                <h3 className="text-lg font-bold text-[#0A1128] mb-2">Brand Credibility</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs font-medium">
                  Improve brand credibility and trust by appearing at the top of search results.
                </p>
              </div>

            </div>

            {/* Middle Column (Central Symmetrical Orbital Graphic) */}
            <div className="flex justify-center items-center relative h-[420px] scale-[0.85] sm:scale-100 origin-center order-1 lg:order-2">
              <div className="relative w-[500px] h-[400px] flex items-center justify-center">

                {/* Background Connecting Lines & Dotted Circle SVG */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 400" fill="none">
                  <g>
                    {/* Solid Circle Ring divided into colored quadrants */}
                    {/* Top-Left (Purple) */}
                    <path d="M 125 200 A 125 125 0 0 1 250 75" stroke="#7c3aed" strokeWidth="1.5" opacity="0.7" />

                    {/* Top-Right (Blue) */}
                    <path d="M 250 75 A 125 125 0 0 1 375 200" stroke="#0084FF" strokeWidth="1.5" opacity="0.7" />

                    {/* Bottom-Right (Orange) */}
                    <path d="M 375 200 A 125 125 0 0 1 250 325" stroke="#f97316" strokeWidth="1.5" opacity="0.7" />

                    {/* Bottom-Left (Green) */}
                    <path d="M 250 325 A 125 125 0 0 1 125 200" stroke="#10b981" strokeWidth="1.5" opacity="0.7" />

                    {/* Connecting S-Curve Lines (joining the outer circles to the central concentric circle card edge) */}
                    {/* Purple line (Top-Left) */}
                    <path d="M 81 31 A 45 45 0 0 1 126 76 C 126 98, 142 120, 162 112" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />

                    {/* Blue line (Top-Right) */}
                    <path d="M 419 31 A 45 45 0 0 0 374 76 C 374 98, 358 120, 338 112" stroke="#0084FF" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />

                    {/* Green line (Bottom-Left) */}
                    <path d="M 81 279 A 45 45 0 0 1 126 324 C 126 346, 142 280, 162 288" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />

                    {/* Orange line (Bottom-Right) */}
                    <path d="M 419 279 A 45 45 0 0 0 374 324 C 374 346, 358 280, 338 288" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />

                    {/* Mini Ring Dots */}
                    <circle cx="250" cy="75" r="4.5" fill="#7c3aed" />
                    <circle cx="250" cy="325" r="4.5" fill="#4f46e5" />
                    <circle cx="125" cy="200" r="4.5" fill="#10b981" />
                    <circle cx="375" cy="200" r="4.5" fill="#0084FF" />

                    {/* Chevron Decals (>>>) */}
                    {/* Top-Left Arrow */}
                    <g transform="translate(181, 96) rotate(-45)">
                      <path d="M-5 -3 L0 0 L-5 3 M0 -3 L5 0 L0 3" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    {/* Bottom-Left Arrow */}
                    <g transform="translate(181, 304) rotate(45)">
                      <path d="M-5 -3 L0 0 L-5 3 M0 -3 L5 0 L0 3" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    {/* Bottom-Right Arrow */}
                    <g transform="translate(355, 268) rotate(-45)">
                      <path d="M-5 -3 L0 0 L-5 3 M0 -3 L5 0 L0 3" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </g>


                  </g>

                </svg>

                {/* Concentric Layers (Concentric rings around center logo) */}
                {/* Concentric Layer 3 (Outer Glassmorphic Circle) */}
                <div className="absolute w-[190px] h-[190px] rounded-full bg-white/70 border border-indigo-50/50 shadow-md flex items-center justify-center z-10 top-[105px] left-[155px]">

                  {/* Concentric Layer 2 (Middle Indigo Glow Ring) */}
                  <div className="w-[145px] h-[145px] rounded-full bg-indigo-50/50 flex items-center justify-center">

                    {/* Concentric Layer 1 (Inner White Circle containing logo) */}
                    <div className="w-[100px] h-[100px] rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center overflow-hidden p-3.5">
                      <img
                        src="/images/navbar/logo.png"
                        alt="Zentrivo Technologies Logo"
                        className="w-full h-full object-contain"
                      />
                    </div>

                  </div>

                </div>

                {/* Outer Circle Icons */}
                {/* 01 Increase Visibility (Top-Left) */}
                <div className="absolute top-[40px] left-[45px] w-[72px] h-[72px] rounded-full bg-white shadow-[0_8px_30px_rgb(124,58,237,0.12)] border border-violet-100 flex items-center justify-center z-20">
                  <div className="w-[58px] h-[58px] rounded-full bg-violet-50/50 flex items-center justify-center text-[#7c3aed]">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 20V10M12 20V4M6 20v-6" />
                      <circle cx="18" cy="6" r="3" />
                    </svg>
                  </div>
                </div>

                {/* 02 High-Quality Traffic (Top-Right) */}
                <div className="absolute top-[40px] right-[45px] w-[72px] h-[72px] rounded-full bg-white shadow-[0_8px_30px_rgb(0,132,255,0.12)] border border-blue-100 flex items-center justify-center z-20">
                  <div className="w-[58px] h-[58px] rounded-full bg-blue-50/50 flex items-center justify-center text-[#0084FF]">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                    </svg>
                  </div>
                </div>

                {/* 03 Brand Credibility (Bottom-Left) */}
                <div className="absolute bottom-[40px] left-[45px] w-[72px] h-[72px] rounded-full bg-white shadow-[0_8px_30px_rgb(16,185,129,0.12)] border border-green-100 flex items-center justify-center z-20">
                  <div className="w-[58px] h-[58px] rounded-full bg-green-50/50 flex items-center justify-center text-[#10b981]">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>

                {/* 04 Consistent Leads (Bottom-Right) */}
                <div className="absolute bottom-[40px] right-[45px] w-[72px] h-[72px] rounded-full bg-white shadow-[0_8px_30px_rgb(249,115,22,0.12)] border border-orange-100 flex items-center justify-center z-20">
                  <div className="w-[58px] h-[58px] rounded-full bg-orange-50/50 flex items-center justify-center text-[#f97316]">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="9" />
                      <circle cx="12" cy="12" r="5" />
                      <circle cx="12" cy="12" r="1.5" />
                      <path d="M17.5 6.5l3.5-3.5M21 3h-4M21 3v4" />
                    </svg>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column (02 & 04 Features) */}
            <div className="flex flex-col gap-12 justify-center lg:h-[340px] order-3">

              {/* Item 02 */}
              <div className="flex flex-col items-start text-left relative bg-white lg:bg-transparent p-6 lg:p-0 rounded-[20px] shadow-sm lg:shadow-none border border-slate-50 lg:border-none">
                <div className="flex flex-col items-start mb-2.5">
                  <span className="text-2xl font-black text-[#0084FF]">02</span>
                  <div className="w-8 h-[3px] bg-[#0084FF] rounded-full mt-1" />
                </div>
                <h3 className="text-lg font-bold text-[#0A1128] mb-2">High-Quality Traffic</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs font-medium">
                  Drive organic, high-intent traffic directly to your products and services.
                </p>
              </div>

              {/* Item 04 */}
              <div className="flex flex-col items-start text-left relative bg-white lg:bg-transparent p-6 lg:p-0 rounded-[20px] shadow-sm lg:shadow-none border border-slate-50 lg:border-none">
                <div className="flex flex-col items-start mb-2.5">
                  <span className="text-2xl font-black text-[#f97316]">04</span>
                  <div className="w-8 h-[3px] bg-[#f97316] rounded-full mt-1" />
                </div>
                <h3 className="text-lg font-bold text-[#0A1128] mb-2">Consistent Leads</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs font-medium">
                  Generate consistent leads and sales while staying ahead of your competitors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
