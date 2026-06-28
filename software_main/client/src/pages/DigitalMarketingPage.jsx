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
    <div className="w-full bg-[#fcfcff] min-h-[calc(100vh-72px)] py-14 font-sans relative overflow-hidden">
      {/* Dynamic Keyframe Animations for Card Load */}
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
      `}</style>

      {/* Background Soft Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-200/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-blue-200/20 blur-[100px] pointer-events-none" />

      {/* Page Header */}
      <div className="max-w-6xl mx-auto px-6 text-center flex flex-col items-center gap-2 mb-10">
        {/* Category Header Badge */}
        <div className="flex items-center gap-3 mb-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed]" />
          <span className="w-8 h-[2px] bg-indigo-200 rounded-full" />
          <span className="text-[11px] font-black text-[#7c3aed] uppercase tracking-[0.25em]">Our Core Services</span>
          <span className="w-8 h-[2px] bg-indigo-200 rounded-full" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed]" />
        </div>

        {/* Dynamic Title with Colored Accent */}
        <div className="relative inline-block mb-3">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#0A1128] tracking-tight leading-tight">
            Professional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c3aed] to-[#4f46e5]">
              Digital Marketing
            </span>{" "}
            Services
          </h1>
          {/* Scribble Underline SVG */}
          <div className="flex justify-center mt-1.5">
            <svg className="w-56 h-4 text-[#7c3aed] opacity-80" viewBox="0 0 200 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 10 Q 50 2, 100 8 T 195 5" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            </svg>
          </div>
        </div>

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
  );
}
