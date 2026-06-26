import React from "react";

const LOGO_BADGES = {
  microsoft: (
    <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-full shadow-md border border-gray-100/50 text-[11px] font-bold text-gray-800 hover:shadow-lg transition-shadow duration-200">
      <div className="grid grid-cols-2 gap-0.5 w-3.5 h-3.5 flex-shrink-0">
        <div className="bg-[#F25022] w-1.5 h-1.5" />
        <div className="bg-[#7FBA00] w-1.5 h-1.5" />
        <div className="bg-[#00A4EF] w-1.5 h-1.5" />
        <div className="bg-[#FFB900] w-1.5 h-1.5" />
      </div>
      Microsoft
    </div>
  ),
  shopify: (
    <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-full shadow-md border border-gray-100/50 text-[11px] font-bold text-gray-800 hover:shadow-lg transition-shadow duration-200">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#95BF47" strokeWidth="2.5" className="flex-shrink-0">
        <path d="M20.5 6.5h-3.8l-1-3a1 1 0 0 0-.9-.7H9.2a1 1 0 0 0-.9.7l-1 3H3.5a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2v-11a1 1 0 0 0-1-1ZM9.2 4.8h5.6l.6 1.7H8.6l.6-1.7Z" />
      </svg>
      shopify
    </div>
  ),
  figma: (
    <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-full shadow-md border border-gray-100/50 text-[11px] font-bold text-gray-800 hover:shadow-lg transition-shadow duration-200">
      <div className="flex -space-x-1 flex-shrink-0">
        <div className="w-2.5 h-2.5 rounded-full bg-[#F24E1E]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#A259FF]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#1ABC9C]" />
      </div>
      Figma
    </div>
  ),
  slack: (
    <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-full shadow-md border border-gray-100/50 text-[11px] font-bold text-gray-800 hover:shadow-lg transition-shadow duration-200">
      <div className="w-3.5 h-3.5 rounded-full bg-[#E01E5A] flex-shrink-0 flex items-center justify-center text-[8px] text-white font-black">#</div>
      slack
    </div>
  ),
  github: (
    <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-full shadow-md border border-gray-100/50 text-[11px] font-bold text-gray-800 hover:shadow-lg transition-shadow duration-200">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="flex-shrink-0">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      </svg>
      GitHub
    </div>
  ),
  dropbox: (
    <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-full shadow-md border border-gray-100/50 text-[11px] font-bold text-gray-800 hover:shadow-lg transition-shadow duration-200">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0061FE" strokeWidth="2.5" className="flex-shrink-0">
        <path d="M12 2 4 7l8 5 8-5-8-5ZM4 12l8 5 8-5" />
        <path d="M12 17v5" />
      </svg>
      Dropbox
    </div>
  ),
  google: (
    <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-full shadow-md border border-gray-100/50 text-[11px] font-bold text-gray-800 hover:shadow-lg transition-shadow duration-200">
      <span className="text-[#4285F4] font-black">G</span>
      <span className="text-[#EA4335] -ml-1">o</span>
      <span className="text-[#FBBC05] -ml-1">o</span>
      <span className="text-[#4285F4] -ml-1">g</span>
      <span className="text-[#34A853] -ml-1">l</span>
      <span className="text-[#EA4335] -ml-1">e</span>
    </div>
  ),
  aws: (
    <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-full shadow-md border border-gray-100/50 text-[11px] font-bold text-gray-800 hover:shadow-lg transition-shadow duration-200">
      <span className="text-[#FF9900] font-black">aws</span>
    </div>
  ),
  notion: (
    <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-full shadow-md border border-gray-100/50 text-[11px] font-bold text-gray-800 hover:shadow-lg transition-shadow duration-200">
      <div className="w-3.5 h-3.5 bg-black text-white flex items-center justify-center text-[9px] font-bold rounded-sm flex-shrink-0">N</div>
      Notion
    </div>
  ),
  stripe: (
    <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-full shadow-md border border-gray-100/50 text-[11px] font-bold text-gray-800 hover:shadow-lg transition-shadow duration-200">
      <span className="text-[#635BFF] font-black tracking-tight">stripe</span>
    </div>
  ),
  hubspot: (
    <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-full shadow-md border border-gray-100/50 text-[11px] font-bold text-gray-800 hover:shadow-lg transition-shadow duration-200">
      <div className="w-2.5 h-2.5 rounded-full bg-[#FF7A59] flex-shrink-0" />
      HubSpot
    </div>
  ),
  adobe: (
    <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-full shadow-md border border-gray-100/50 text-[11px] font-bold text-gray-800 hover:shadow-lg transition-shadow duration-200">
      <div className="w-3 h-3 bg-[#FF0000] flex-shrink-0 flex items-center justify-center text-[7px] text-white font-bold rounded-sm">A</div>
      Adobe
    </div>
  ),
};

const CAROUSEL_LOGOS = [
  { name: "Microsoft", element: LOGO_BADGES.microsoft },
  { name: "slack", element: LOGO_BADGES.slack },
  { name: "Google", element: LOGO_BADGES.google },
  { name: "shopify", element: LOGO_BADGES.shopify },
  { name: "aws", element: LOGO_BADGES.aws },
  { name: "Dropbox", element: LOGO_BADGES.dropbox },
];

const STATS = [
  {
    value: "500+",
    label: "Clients Worldwide",
    desc: "Growing together globally",
    color: "bg-blue-50 text-[#0084FF]",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    value: "50+",
    label: "Technology Partners",
    desc: "Strong alliances that drive results",
    color: "bg-emerald-50 text-emerald-500",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    value: "15+",
    label: "Industries Served",
    desc: "Diverse domain expertise for greater impact",
    color: "bg-amber-50 text-amber-500",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
        <line x1="9" y1="22" x2="9" y2="16" />
        <line x1="15" y1="22" x2="15" y2="16" />
      </svg>
    ),
  },
  {
    value: "98%",
    label: "Client Satisfaction",
    desc: "Our commitment reflected in results",
    color: "bg-violet-50 text-violet-500",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

export default function TrustedLeadersSection() {
  return (
    <section className="w-full bg-[#f9fafb] pb-24 pt-8">

      {/* Styles for continuous scroll marquee */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>

      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col gap-12">

        {/* Section Header */}
        <div className="text-center flex flex-col items-center gap-3">
          <h2 className="text-3xl md:text-4.5xl font-black leading-tight">
            <span className="text-[#F57C00]">Trusted by</span>{" "}
            <span className="text-[#0084FF]">Industry</span>{" "}
            <span className="text-[#F57C00]">Leaders</span>
          </h2>
          <p className="text-sm md:text-base text-gray-500 max-w-xl leading-relaxed mt-1">
            We partner with forward-thinking companies and startups around the world
            to deliver innovative digital solutions.
          </p>
        </div>

        {/* Network Orbit Diagram */}
        <div className="relative w-full min-h-[460px] flex items-center justify-center overflow-hidden py-4">
          <div className="relative w-[1000px] h-[460px] scale-[0.65] sm:scale-[0.8] md:scale-[0.95] lg:scale-100 origin-center flex-shrink-0 flex items-center justify-center">

            {/* SVG Orbit Lines Background */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" viewBox="0 0 1000 460" fill="none">
              {/* Markers for double-headed curved arrows */}
              <defs>
                <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#F57C00" />
                </marker>
              </defs>

              {/* Center Circle Grey Ring */}
              <circle cx="500" cy="230" r="148" stroke="#E5E7EB" strokeWidth="2.5" fill="none" />

              {/* Left Dotted Concentric Orbits */}
              {/* Inner orbit: Touches grey ring at top/bottom, curves through Slack (250, 230) */}
              <path d="M 381 142 Q 119 230 381 318" stroke="#0084FF" strokeWidth="1.5" strokeDasharray="5 5" opacity="0.6" />
              {/* Outer orbit: Shopify (280, 120) -> Microsoft -> Figma -> GitHub -> Dropbox (300, 360) */}
              <path d="M 280 120 Q -80 240 300 360" stroke="#0084FF" strokeWidth="1.5" strokeDasharray="5 5" opacity="0.6" />

              {/* Outer Node Circle next to Figma */}
              <circle cx="105" cy="240" r="5.5" fill="#0084FF" />

              {/* Right Dotted Concentric Orbits */}
              {/* Inner orbit: Touches grey ring at top/bottom, curves through Adobe (750, 230) */}
              <path d="M 619 142 Q 881 230 619 318" stroke="#F57C00" strokeWidth="1.5" strokeDasharray="5 5" opacity="0.6" />
              {/* Outer orbit: Google (720, 120) -> AWS -> Notion -> Stripe -> HubSpot (700, 360) */}
              <path d="M 720 120 Q 1080 240 700 360" stroke="#F57C00" strokeWidth="1.5" strokeDasharray="5 5" opacity="0.6" />

              {/* Outer Node Circle next to Notion */}
              <circle cx="895" cy="240" r="5.5" fill="#F57C00" />

              {/* Top-Left Verified Partner Curved Double Arrow */}
              <path d="M 240 75 Q 315 75 385 135" stroke="#F57C00" strokeWidth="1.5" strokeDasharray="4 4" markerEnd="url(#arrow)" markerStart="url(#arrow)" />

              {/* Top-Right 500+ Clients Curved Double Arrow */}
              <path d="M 760 75 Q 685 75 615 135" stroke="#F57C00" strokeWidth="1.5" strokeDasharray="4 4" markerEnd="url(#arrow)" markerStart="url(#arrow)" />
            </svg>

            {/* Central Globe Block */}
            <div className="relative z-10 w-56 h-56 md:w-60 md:h-60 rounded-full border border-gray-100 shadow-xl bg-white flex flex-col items-center justify-center p-6 text-center">
              {/* Globe stylised pattern */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-300 via-transparent to-transparent pointer-events-none" />
              <svg className="absolute w-[80%] h-[80%] text-blue-500/10 pointer-events-none" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                <circle cx="50" cy="50" r="45" strokeWidth="0.5" />
                <ellipse cx="50" cy="50" rx="30" ry="45" strokeWidth="0.5" />
                <ellipse cx="50" cy="50" rx="12" ry="45" strokeWidth="0.5" />
                <line x1="5" y1="50" x2="95" y2="50" strokeWidth="0.5" />
                <line x1="15" y1="25" x2="85" y2="25" strokeWidth="0.5" />
                <line x1="15" y1="75" x2="85" y2="75" strokeWidth="0.5" />
              </svg>

              {/* Heart and Content */}
              <div className="relative flex flex-col items-center gap-2">
                <span className="text-xl animate-pulse">❤️</span>
                <span className="text-sm font-black text-[#0A1128] tracking-tight leading-tight">
                  Join <span className="text-[#0084FF]">500+</span>
                  <br />
                  Brands Growing
                  <br />
                  With Us
                </span>
              </div>
            </div>

            {/* Orbit Badges - Absolute Positioning Centered on SVG Paths */}

            {/* Top Indicators */}
            <div className="absolute left-[24%] top-[75px] -translate-x-1/2 -translate-y-1/2 z-20 flex items-center gap-3 bg-white px-4 py-3 rounded-2xl shadow-md border border-gray-50 max-w-[200px]">
              <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center flex-shrink-0">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-emerald-600 uppercase tracking-wider">Verified Partner</span>
                <span className="text-[9px] font-bold text-gray-400">Official Tech Partners</span>
              </div>
            </div>

            <div className="absolute right-[24%] top-[75px] translate-x-1/2 -translate-y-1/2 z-20 flex items-center gap-3 bg-white px-4 py-3 rounded-2xl shadow-md border border-gray-50 max-w-[200px]">
              <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0084FF] flex items-center justify-center flex-shrink-0">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-[#0084FF] uppercase tracking-wider">500+</span>
                <span className="text-[9px] font-bold text-gray-400">Happy Clients</span>
              </div>
            </div>

            {/* Left Orbit Badges */}
            <div className="absolute left-[28%] top-[120px] -translate-x-1/2 -translate-y-1/2 z-15">{LOGO_BADGES.shopify}</div>
            <div className="absolute left-[15%] top-[170px] -translate-x-1/2 -translate-y-1/2 z-15">{LOGO_BADGES.microsoft}</div>
            <div className="absolute left-[4%] top-[240px] -translate-x-1/2 -translate-y-1/2 z-15">{LOGO_BADGES.figma}</div>
            <div className="absolute left-[25%] top-[230px] -translate-x-1/2 -translate-y-1/2 z-15">{LOGO_BADGES.slack}</div>
            <div className="absolute left-[15%] top-[290px] -translate-x-1/2 -translate-y-1/2 z-15">{LOGO_BADGES.github}</div>
            <div className="absolute left-[28%] top-[340px] -translate-x-1/2 -translate-y-1/2 z-15">{LOGO_BADGES.dropbox}</div>

            {/* Right Orbit Badges */}
            <div className="absolute right-[28%] top-[120px] translate-x-1/2 -translate-y-1/2 z-15">{LOGO_BADGES.google}</div>
            <div className="absolute right-[15%] top-[170px] translate-x-1/2 -translate-y-1/2 z-15">{LOGO_BADGES.aws}</div>
            <div className="absolute right-[4%] top-[240px] translate-x-1/2 -translate-y-1/2 z-15">{LOGO_BADGES.notion}</div>
            <div className="absolute right-[25%] top-[230px] translate-x-1/2 -translate-y-1/2 z-15">{LOGO_BADGES.adobe}</div>
            <div className="absolute right-[15%] top-[290px] translate-x-1/2 -translate-y-1/2 z-15">{LOGO_BADGES.stripe}</div>
            <div className="absolute right-[28%] top-[340px] translate-x-1/2 -translate-y-1/2 z-15">{LOGO_BADGES.hubspot}</div>

          </div>
        </div>

        {/* Divider and Continuous Scrolling Carousel */}
        <div className="w-full flex flex-col gap-6 mt-4">

          <div className="w-full flex items-center justify-between gap-4">
            <div className="flex-1 h-[1px] bg-gray-200" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 whitespace-nowrap">
              In Partnership with Innovation Leaders
            </span>
            <div className="flex-1 h-[1px] bg-gray-200" />
          </div>

          {/* Auto-scroll Marquee Wrapper */}
          <div className="w-full overflow-hidden py-4 bg-white rounded-2xl border border-gray-50 shadow-sm relative">
            {/* Gradients on edges */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div className="flex flex-row items-center gap-12 w-max animate-marquee">
              {/* Double items for loop */}
              {[...CAROUSEL_LOGOS, ...CAROUSEL_LOGOS, ...CAROUSEL_LOGOS].map((logo, idx) => (
                <div key={idx} className="flex-shrink-0 scale-105 hover:scale-110 transition-transform duration-200">
                  {logo.element}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Four Column Statistics Box */}
        <div className="bg-white rounded-[28px] shadow-md border border-gray-50 p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative overflow-hidden mt-6">
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex items-center gap-5 px-4 ${index !== 0 ? "lg:border-l lg:border-gray-100" : ""
                }`}
            >
              <div className={`w-11 h-11 rounded-full ${stat.color} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                {stat.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-black text-[#0A1128] tracking-tight">
                  {stat.value}
                </span>
                <span className="text-sm font-black text-gray-700 mt-0.5">
                  {stat.label}
                </span>
                <span className="text-[11px] font-medium text-gray-400 leading-tight mt-0.5">
                  {stat.desc}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
