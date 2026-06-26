import React from "react";

const INDUSTRIES = [
  {
    name: "CHARITABLE TRUST",
    color: "bg-blue-50 text-blue-500 border-blue-500",
    lineColor: "bg-blue-500",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
  },
  {
    name: "TECHNOLOGY",
    color: "bg-cyan-50 text-cyan-500 border-cyan-500",
    lineColor: "bg-cyan-500",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5" />
        <line x1="9" y1="18" x2="15" y2="18" />
        <line x1="10" y1="22" x2="14" y2="22" />
      </svg>
    ),
  },
  {
    name: "REAL ESTATE",
    color: "bg-emerald-50 text-emerald-500 border-emerald-500",
    lineColor: "bg-emerald-500",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 21h18M9 21V9a3 3 0 0 1 6 0v12M9 13h6M11 5h2" />
      </svg>
    ),
  },
  {
    name: "EDUCATION",
    color: "bg-amber-50 text-amber-500 border-amber-500",
    lineColor: "bg-amber-500",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
      </svg>
    ),
  },
  {
    name: "HOSPITALITY",
    color: "bg-violet-50 text-violet-500 border-violet-500",
    lineColor: "bg-violet-500",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    name: "FOOD & BEVERAGE",
    color: "bg-lime-50 text-lime-600 border-lime-500",
    lineColor: "bg-lime-500",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M2 22h20M12 2v20M5 12h14" />
      </svg>
    ),
  },
  {
    name: "STARTUPS",
    color: "bg-blue-50 text-blue-500 border-blue-500",
    lineColor: "bg-blue-500",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    name: "ENTERPRISE",
    color: "bg-slate-50 text-slate-700 border-slate-500",
    lineColor: "bg-slate-600",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    name: "HEALTHCARE",
    color: "bg-red-50 text-red-500 border-red-500",
    lineColor: "bg-red-500",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    name: "FINANCE",
    color: "bg-indigo-50 text-indigo-500 border-indigo-500",
    lineColor: "bg-indigo-500",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    name: "MANUFACTURING",
    color: "bg-yellow-50 text-yellow-600 border-yellow-500",
    lineColor: "bg-yellow-500",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    name: "E-COMMERCE",
    color: "bg-fuchsia-50 text-fuchsia-500 border-fuchsia-500",
    lineColor: "bg-fuchsia-500",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
  },
];

const COLLAB_CARDS = [
  {
    stat: "150+",
    statLabel: "startups launched",
    title: "Startups",
    subtitle: "Launch & Scale",
    themeColor: "text-blue-600",
    buttonBg: "bg-blue-600 hover:bg-blue-700 focus:ring-blue-300",
    headerBg: "bg-blue-50 text-blue-500",
    borderTheme: "border-t-[4px] border-t-blue-600",
    bullets: [
      "Brand identity & positioning",
      "Go-to-market acceleration",
      "Digital growth infrastructure",
      "Investor-ready presentations",
      "Partner Strategy",
    ],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    stat: "92%",
    statLabel: "client retention",
    title: "SMBs",
    subtitle: "Growth & Visibility",
    themeColor: "text-emerald-600",
    buttonBg: "bg-emerald-500 hover:bg-emerald-600 focus:ring-emerald-300",
    headerBg: "bg-emerald-50 text-emerald-500",
    borderTheme: "border-t-[4px] border-t-emerald-500",
    bullets: [
      "Revenue optimization",
      "Market expansion strategies",
      "Digital presence transformation",
      "Customer acquisition systems",
      "Partner Strategy",
    ],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    stat: "50+",
    statLabel: "agency partners",
    title: "Agencies",
    subtitle: "White-Label Solutions",
    themeColor: "text-violet-600",
    buttonBg: "bg-violet-600 hover:bg-violet-700 focus:ring-violet-300",
    headerBg: "bg-violet-50 text-violet-500",
    borderTheme: "border-t-[4px] border-t-violet-600",
    bullets: [
      "Scalable delivery capacity",
      "Enterprise-grade execution",
      "Seamless brand integration",
      "Dedicated partnership team",
      "Partner Strategy",
    ],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    stat: "Fortune 500",
    statLabel: "trusted",
    title: "Enterprises",
    subtitle: "Digital Excellence",
    themeColor: "text-orange-600",
    buttonBg: "bg-orange-500 hover:bg-orange-600 focus:ring-orange-300",
    headerBg: "bg-orange-50 text-orange-500",
    borderTheme: "border-t-[4px] border-t-orange-500",
    bullets: [
      "Digital transformation",
      "Custom platform development",
      "Enterprise architecture",
      "24/7 premium support",
      "Partner Strategy",
    ],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
        <line x1="9" y1="22" x2="9" y2="16" />
        <line x1="15" y1="22" x2="15" y2="16" />
        <line x1="9" y1="16" x2="15" y2="16" />
      </svg>
    ),
  },
];

const BOTTOM_FEATURES = [
  {
    title: "Unified Partnerships",
    desc: "Stronger together for sustainable growth",
    color: "bg-blue-50 text-blue-500",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14h-2v-4h2zm0-6h-2V8h2z" />
      </svg>
    ),
  },
  {
    title: "Value Driven",
    desc: "Delivering measurable impact and long-term value",
    color: "bg-emerald-50 text-emerald-500",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    title: "Future Ready",
    desc: "Building tomorrow's solutions, today",
    color: "bg-indigo-50 text-indigo-500",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: "Trusted by Leaders",
    desc: "Collaborating with industry leaders worldwide",
    color: "bg-orange-50 text-orange-500",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

export default function CollaborationsSection() {
  return (
    <section className="w-full bg-[#f9fafb] pb-24 pt-8">
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col gap-12">
        
        {/* Section Header */}
        <div className="text-center flex flex-col items-center gap-3">
          <h2 className="text-3xl md:text-4.5xl font-black leading-tight text-[#0A1128]">
            Strategic <span className="text-[#0084FF]">Collaborations</span>
          </h2>
          <p className="text-sm md:text-base text-gray-500 max-w-2xl leading-relaxed mt-1">
            Fostering growth through unified digital intelligence.
            <br />
            We align with organizations that demand excellence and prioritize market.
          </p>
        </div>

        {/* Industry Selector Bar */}
        <div className="w-full bg-white rounded-[24px] shadow-sm border border-gray-100 p-6 flex flex-row items-center justify-between gap-6 overflow-x-auto scrollbar-none">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.name}
              className="flex flex-col items-center gap-3 flex-shrink-0 cursor-pointer group min-w-[90px]"
            >
              <div className={`w-12 h-12 rounded-full ${ind.color} flex items-center justify-center shadow-sm transform transition-transform duration-300 group-hover:scale-110`}>
                {ind.icon}
              </div>
              <span className="text-[10px] font-bold tracking-wider text-gray-600 text-center whitespace-nowrap">
                {ind.name}
              </span>
              <div className={`w-6 h-[3px] ${ind.lineColor} rounded-full transition-all duration-300 transform scale-x-50 group-hover:scale-x-100`} />
            </div>
          ))}
        </div>

        {/* Four Collaboration Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COLLAB_CARDS.map((card) => (
            <div
              key={card.title}
              className={`bg-white rounded-[24px] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative ${card.borderTheme} group h-full`}
            >
              <div className="p-6 md:p-8 flex flex-col gap-6 flex-1">
                
                {/* Card Header Stat */}
                <div className="flex items-start justify-between">
                  <div className="flex flex-col">
                    <span className={`text-2xl md:text-3xl font-black tracking-tight ${card.themeColor}`}>
                      {card.stat}
                    </span>
                    <span className="text-[11px] font-bold text-gray-400 mt-0.5">
                      {card.statLabel}
                    </span>
                  </div>
                  <div className={`w-10 h-10 rounded-full ${card.headerBg} flex items-center justify-center shadow-sm`}>
                    {card.icon}
                  </div>
                </div>

                {/* Separator line */}
                <div className="w-full h-[1px] bg-gray-100" />

                {/* Card Main Info */}
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-xl font-extrabold text-[#0A1128]">
                    {card.title}
                  </h3>
                  <h4 className={`text-xs font-black uppercase tracking-wider ${card.themeColor}`}>
                    {card.subtitle}
                  </h4>
                </div>

                {/* Card Bullet Checklist */}
                <div className="flex flex-col gap-3 mt-2 flex-1">
                  {card.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-start gap-2.5">
                      <span className={`w-4 h-4 rounded-full ${card.headerBg} flex items-center justify-center flex-shrink-0 text-[8px] mt-0.5`}>
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span className="text-[12.5px] font-medium text-gray-500 leading-tight">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Card Footer Action Button */}
              <button className={`w-full py-4 text-white text-sm font-bold flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 ${card.buttonBg}`}>
                Partner with Us
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" className="transform transition-transform duration-200 group-hover:translate-x-1">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>

            </div>
          ))}
        </div>

        {/* Bottom Banner Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {BOTTOM_FEATURES.map((feat) => (
            <div
              key={feat.title}
              className="bg-white rounded-2xl p-5 border border-gray-50 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className={`w-10 h-10 rounded-full ${feat.color} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                {feat.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-black text-[#0A1128]">
                  {feat.title}
                </span>
                <span className="text-[11px] font-medium text-gray-400 leading-tight mt-0.5">
                  {feat.desc}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
