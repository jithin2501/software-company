import React, { useEffect } from "react";

export default function AboutPage({ setView }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="w-full bg-[#f9fafb] min-h-[calc(100vh-72px)] pt-10 pb-16 md:pt-16 md:pb-24 font-sans relative overflow-hidden">
      {/* Decorative background accents */}
      <div className="absolute top-[-10%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-purple-200/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-blue-200/20 blur-[100px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">

          {/* Left Column: Image Collage */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[520px] aspect-square pr-12 pb-12 sm:pr-16 sm:pb-16">



              {/* Main Image: VR Girl (Top Left) */}
              <div className="w-full aspect-square rounded-[32px] overflow-hidden shadow-lg border border-slate-100 relative z-10">
                <img
                  src="/images/about/about_vr_girl.png"
                  alt="VR Experience"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlapping Image: Globe Hands (Bottom Right) */}
              <div className="absolute bottom-0 right-[-32px] sm:right-[-48px] w-[62%] aspect-square rounded-[32px] overflow-hidden shadow-2xl border border-white/80 z-20">
                <img
                  src="/images/about/about_hand_globe.png"
                  alt="Digital Globe connections"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">

            {/* About Us Eyebrow */}
            <div className="flex items-center gap-2 mb-1 lg:-ml-20">
              <div className="w-8 h-[2px] bg-[#0084FF] rounded-full" />
              <span className="text-[#0084FF] text-[13px] font-black tracking-widest uppercase">
                About Us
              </span>
            </div>

            {/* Title / Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#0A1128] leading-[1.15] tracking-tight mb-3 lg:-ml-20 lg:-mt-2">
              Creating <span className="text-[#0084FF]">digital experiences</span> focused on design and performance.
            </h1>

            {/* Indented Content Block (Staggered layout matching design) */}
            <div className="w-full lg:pl-6 flex flex-col items-start mt-6">

              {/* Description Paragraph */}
              <p className="text-slate-500 font-medium text-sm sm:text-[15px] leading-relaxed mb-4 max-w-xl">
                Zentrivo Technologies is a results-driven agency specializing in Digital Marketing, Graphic Design, and Web Development, delivering intuitive, powerful solutions that bridge the gap between technology and human connection.
              </p>

              {/* Info Section: Stats Card & Checklist */}
              <div className="flex flex-col sm:flex-row items-center gap-8 w-full mb-4">

                {/* Stats Card (Soft Blue background) */}
                <div className="w-full sm:w-[155px] h-[135px] bg-[#f0f7ff] rounded-3xl flex flex-col items-center justify-center text-center p-4 shadow-sm border border-blue-100/60">
                  <span className="text-4xl font-extrabold text-[#0084FF] mb-1">
                    25+
                  </span>
                  <span className="text-xs font-black text-[#0A1128] uppercase tracking-wide leading-tight">
                    Years<br />Experience
                  </span>
                </div>

                {/* Checklist */}
                <div className="flex flex-col gap-3.5 items-start">
                  {[
                    "Brand Strategy & Positioning",
                    "UX/UI Design & Prototyping",
                    "Custom Web Development",
                    "Results-Driven Marketing"
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-blue-100/80 flex items-center justify-center text-[#0084FF] flex-shrink-0">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </span>
                      <span className="text-slate-500 font-medium text-sm sm:text-[15px] tracking-wide">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

              </div>

              {/* CTA Button */}
              <button
                onClick={() => setView("contact")}
                className="bg-[#0084FF] hover:bg-[#0070DA] text-white text-sm font-extrabold px-7 py-4 rounded-full shadow-md shadow-blue-100 transition-all duration-200 hover:scale-[1.03] flex items-center gap-2 cursor-pointer"
              >
                Discover More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

            </div>

          </div>

        </div>
      </div>

      {/* Stats Bar */}
      <div className="w-full bg-[#f97316] py-12 mt-20 md:mt-28 relative z-10">
        <div className="max-w-[1240px] mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-black text-white mb-2">680+</span>
            <span className="text-xs font-bold text-white/95 uppercase tracking-widest">Business Trust Us</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-black text-white mb-2">1,354+</span>
            <span className="text-xs font-bold text-white/95 uppercase tracking-widest">Projects Done</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-black text-white mb-2">97%</span>
            <span className="text-xs font-bold text-white/95 uppercase tracking-widest">Success Rate</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-black text-white mb-2">15Y+</span>
            <span className="text-xs font-bold text-white/95 uppercase tracking-widest">Years Of Experience</span>
          </div>
        </div>
      </div>

      {/* Mission, Vision & Values Section */}
      <div className="max-w-[1240px] mx-auto px-6 md:px-12 py-24 md:py-32 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-8 h-[2px] bg-[#0084FF] rounded-full" />
            <span className="text-[#0084FF] text-[13px] font-black tracking-widest uppercase">Our Core Pillars</span>
            <div className="w-8 h-[2px] bg-[#0084FF] rounded-full" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-[#0A1128] tracking-tight">
            The foundation of Zentrivo Technologies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">

          {/* Card 1: Mission */}
          <div className="group relative w-full max-w-[360px] bg-white rounded-3xl p-8 pt-10 shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-slate-100/80 hover:border-orange-100 hover:shadow-[0_20px_40px_rgba(249,115,22,0.05)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-start text-left min-h-[320px] overflow-hidden">
            {/* Watermark Number */}
            <span className="absolute right-6 top-6 text-7xl font-black text-slate-100/40 select-none transition-colors group-hover:text-orange-50/70">
              01
            </span>

            {/* Icon Badged Container */}
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center shadow-lg shadow-orange-500/20 text-white mb-8 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="3" fill="currentColor" />
              </svg>
            </div>

            {/* Title */}
            <h3 className="text-[#0A1128] text-lg font-black tracking-wide mb-3 group-hover:text-[#f97316] transition-colors">
              MISSION
            </h3>

            {/* Description */}
            <p className="text-slate-500 text-[14px] leading-relaxed font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </div>

          {/* Card 2: Vision */}
          <div className="group relative w-full max-w-[360px] bg-white rounded-3xl p-8 pt-10 shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-slate-100/80 hover:border-blue-100 hover:shadow-[0_20px_40px_rgba(0,132,255,0.05)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-start text-left min-h-[320px] overflow-hidden">
            {/* Watermark Number */}
            <span className="absolute right-6 top-6 text-7xl font-black text-slate-100/40 select-none transition-colors group-hover:text-blue-50/70">
              02
            </span>

            {/* Icon Badged Container */}
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#0084FF] to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/20 text-white mb-8 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" fill="currentColor" />
              </svg>
            </div>

            {/* Title */}
            <h3 className="text-[#0A1128] text-lg font-black tracking-wide mb-3 group-hover:text-[#0084FF] transition-colors">
              VISION
            </h3>

            {/* Description */}
            <p className="text-slate-500 text-[14px] leading-relaxed font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </div>

          {/* Card 3: Values */}
          <div className="group relative w-full max-w-[360px] bg-white rounded-3xl p-8 pt-10 shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-slate-100/80 hover:border-slate-200 hover:shadow-[0_20px_40px_rgba(10,17,40,0.05)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-start text-left min-h-[320px] overflow-hidden">
            {/* Watermark Number */}
            <span className="absolute right-6 top-6 text-7xl font-black text-slate-100/40 select-none transition-colors group-hover:text-slate-100/70">
              03
            </span>

            {/* Icon Badged Container */}
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#0A1128] to-slate-600 flex items-center justify-center shadow-lg shadow-slate-900/20 text-white mb-8 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
              </svg>
            </div>

            {/* Title */}
            <h3 className="text-[#0A1128] text-lg font-black tracking-wide mb-3 group-hover:text-[#0A1128] transition-colors">
              VALUES
            </h3>

            {/* Description */}
            <p className="text-slate-500 text-[14px] leading-relaxed font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
