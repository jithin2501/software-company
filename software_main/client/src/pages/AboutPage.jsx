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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 justify-items-center">

          {/* Card 1: Mission */}
          <div className="relative w-full max-w-[290px] bg-white rounded-[28px] shadow-[0_15px_40px_rgba(0,0,0,0.03)] border border-slate-100/50 flex flex-col items-center text-center p-8 pt-0 min-h-[380px] z-10">
            {/* Top Cap */}
            <div className="w-full h-8 bg-[#f59e0b] rounded-t-[27px] -mx-8 mb-6" style={{ width: 'calc(100% + 64px)' }} />

            {/* Icon */}
            <div className="w-16 h-16 rounded-full border border-slate-100 flex items-center justify-center shadow-sm bg-white mb-4 z-10">
              <svg className="w-8 h-8 text-[#0A1128]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="12" r="6" strokeWidth="1.8" />
                <circle cx="11" cy="12" r="1.5" fill="currentColor" />
                <path d="M11 12h9" strokeWidth="1.8" strokeLinecap="round" />
                <circle cx="20" cy="12" r="1.5" fill="currentColor" />
              </svg>
            </div>

            {/* Title Row */}
            <div className="w-full flex items-center justify-center relative mt-2 mb-4 z-10">
              <h3 className="text-[#0A1128] text-base font-black uppercase tracking-[0.2em] bg-white px-3 relative z-10">
                MISSION
              </h3>
            </div>

            {/* Text Description */}
            <p className="text-slate-400 text-xs sm:text-[13px] leading-relaxed font-medium z-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            {/* SVG Outline */}
            <svg className="absolute inset-0 pointer-events-none overflow-visible w-full h-full z-0" viewBox="0 0 290 380" fill="none">
              <path
                d="M 100 180 L 16 180 A 16 16 0 0 0 0 196 L 0 364 A 16 16 0 0 0 16 380 L 274 380 A 16 16 0 0 0 290 364 L 290 196 A 16 16 0 0 1 306 180 L 342 180"
                stroke="#f97316"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <circle cx="100" cy="180" r="4.5" fill="#f97316" />
              <circle cx="342" cy="180" r="4.5" fill="#f97316" />
            </svg>
          </div>

          {/* Card 2: Vision */}
          <div className="relative w-full max-w-[290px] bg-white rounded-[28px] shadow-[0_15px_40px_rgba(0,0,0,0.03)] border border-slate-100/50 flex flex-col items-center text-center p-8 pt-0 min-h-[380px] z-10">
            {/* Top Cap */}
            <div className="w-full h-8 bg-[#06b6d4] rounded-t-[27px] -mx-8 mb-6" style={{ width: 'calc(100% + 64px)' }} />

            {/* Icon */}
            <div className="w-16 h-16 rounded-full border border-slate-100 flex items-center justify-center shadow-sm bg-white mb-4 z-10">
              <svg className="w-8 h-8 text-[#0A1128]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 14h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2z" strokeWidth="1.8" />
                <path d="M10 14a2 2 0 0 1 4 0" strokeWidth="1.8" />
                <path d="M4 10h-2m18 0h2" strokeWidth="1.5" />
                <path d="M12 4V2M7.5 5L6 3.5M16.5 5L18 3.5" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </div>

            {/* Title Row */}
            <div className="w-full flex items-center justify-center relative mt-2 mb-4 z-10">
              <h3 className="text-[#0A1128] text-base font-black uppercase tracking-[0.2em] bg-white px-3 relative z-10">
                VISION
              </h3>
            </div>

            {/* Text Description */}
            <p className="text-slate-400 text-xs sm:text-[13px] leading-relaxed font-medium z-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            {/* SVG Outline */}
            <svg className="absolute inset-0 pointer-events-none overflow-visible w-full h-full z-0" viewBox="0 0 290 380" fill="none">
              {/* Blue Top/Right Wrap Outline */}
              <path
                d="M -52 180 L -28 180 A 16 16 0 0 1 -12 164 L -12 16 A 28 28 0 0 1 16 -12 L 274 -12 A 28 28 0 0 1 302 16 L 302 164 A 16 16 0 0 0 318 180 L 350 180"
                stroke="#06b6d4"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <circle cx="-52" cy="180" r="4.5" fill="#06b6d4" />
              <circle cx="350" cy="180" r="4.5" fill="#06b6d4" />

              {/* Blue line from VISION text */}
              <path
                d="M 100 180 L 16 180 A 16 16 0 0 0 0 196 L 0 212 A 16 16 0 0 1 -16 228 L -52 228"
                stroke="#06b6d4"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <circle cx="100" cy="180" r="4.5" fill="#06b6d4" />
              <circle cx="-52" cy="228" r="4.5" fill="#06b6d4" />
            </svg>
          </div>

          {/* Card 3: Values */}
          <div className="relative w-full max-w-[290px] bg-white rounded-[28px] shadow-[0_15px_40px_rgba(0,0,0,0.03)] border border-slate-100/50 flex flex-col items-center text-center p-8 pt-0 min-h-[380px] z-10">
            {/* Top Cap */}
            <div className="w-full h-8 bg-[#0A1128] rounded-t-[27px] -mx-8 mb-6" style={{ width: 'calc(100% + 64px)' }} />

            {/* Icon */}
            <div className="w-16 h-16 rounded-full border border-slate-100 flex items-center justify-center shadow-sm bg-white mb-4 z-10">
              <svg className="w-8 h-8 text-[#0A1128]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 5v14M8 19h8" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M5 8h14" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M5 8l-2.5 6h5L5 8z M5 14v2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M19 8l-2.5 6h5L19 8z M19 14v2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Title */}
            <div className="w-full flex items-center justify-center relative mt-2 mb-4 z-10">
              <h3 className="text-[#0A1128] text-base font-black uppercase tracking-[0.2em] bg-white px-3 relative z-10">
                VALUES
              </h3>
            </div>

            {/* Text Description */}
            <p className="text-slate-400 text-xs sm:text-[13px] leading-relaxed font-medium z-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            {/* SVG Outline */}
            <svg className="absolute inset-0 pointer-events-none overflow-visible w-full h-full z-0" viewBox="0 0 290 380" fill="none">
              <path
                d="M 100 180 L 16 180 A 16 16 0 0 0 0 196 L 0 364 A 16 16 0 0 0 16 380 L 274 380 A 16 16 0 0 0 290 364 L 290 196 A 16 16 0 0 1 306 180 L 350 180"
                stroke="#0A1128"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <circle cx="100" cy="180" r="4.5" fill="#0A1128" />
              <circle cx="350" cy="180" r="4.5" fill="#0A1128" />
            </svg>
          </div>

        </div>
      </div>
    </div>
  );
}
