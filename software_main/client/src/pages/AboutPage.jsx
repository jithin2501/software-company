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
      <div className="w-full bg-[#0084FF] py-12 mt-20 md:mt-28 relative z-10">
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
      <div className="max-w-[1240px] mx-auto px-6 md:px-12 pt-24 md:pt-32 pb-16 md:pb-24 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-8 h-[2px] bg-[#0084FF] rounded-full" />
            <span className="text-[#0084FF] text-[13px] font-black tracking-widest uppercase">Our Core Pillars</span>
            <div className="w-8 h-[2px] bg-[#0084FF] rounded-full" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-[#0A1128] tracking-tight">
            The foundation of <span className="text-[#0084FF]">Zentrivo Technologies</span>
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

      {/* Our Core Values Section */}
      <div className="max-w-[1240px] mx-auto px-6 md:px-12 pb-24 md:pb-32 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-8 h-[2px] bg-[#0084FF] rounded-full" />
            <span className="text-[#0084FF] text-[13px] font-black tracking-widest uppercase">Our Core Values</span>
            <div className="w-8 h-[2px] bg-[#0084FF] rounded-full" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-[#0A1128] tracking-tight">
            Guiding principles that shape <span className="text-[#0084FF]">our culture</span> and drive <span className="text-[#0084FF]">our success</span>
          </h2>
        </div>

        {/* Desktop Interactive Layout */}
        <div className="hidden lg:block relative w-[1144px] h-[520px] mx-auto -mt-16">
          {/* SVG Dotted Connection Lines Canvas */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 1144 520" fill="none">
            {/* 01: Innovation (purple curve) */}
            <path d="M 390 108 C 440 108, 468 160, 468 200" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
            <circle cx="468" cy="200" r="4" fill="#8b5cf6" />
 
            {/* 02: Integrity (blue curve) */}
            <path d="M 754 108 C 704 108, 676 160, 676 200" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
            <circle cx="676" cy="200" r="4" fill="#3b82f6" />
 
            {/* 03: Collaboration (blue horizontal) */}
            <path d="M 390 260 L 468 260" stroke="#0084FF" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
            <circle cx="468" cy="260" r="4" fill="#0084FF" />
 
            {/* 06: Adaptability (green horizontal) */}
            <path d="M 754 260 L 676 260" stroke="#10b981" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
            <circle cx="676" cy="260" r="4" fill="#10b981" />
 
            {/* 05: Client-Centric (purple curve) */}
            <path d="M 390 412 C 440 412, 468 360, 468 320" stroke="#a855f7" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
            <circle cx="468" cy="320" r="4" fill="#a855f7" />
 
            {/* 04: Excellence (orange curve) */}
            <path d="M 754 412 C 704 412, 676 360, 676 320" stroke="#f97316" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
            <circle cx="676" cy="320" r="4" fill="#f97316" />
          </svg>

          {/* Left Column Cards */}
          <div className="absolute left-0 top-0 bottom-0 w-[360px] flex flex-col justify-between py-1">
            {/* Card 1: Innovation */}
            <div className="group relative w-full h-[96px] bg-white border border-slate-100/80 rounded-full flex items-center px-6 shadow-[0_4px_25px_rgba(0,0,0,0.02)] hover:border-purple-100 hover:shadow-[0_10px_30px_rgba(139,92,246,0.06)] transition-all duration-300 hover:-translate-y-1 mt-[56px] translate-x-[30px]">
              <div className="w-12 h-12 rounded-full border border-blue-100 bg-blue-50/50 flex items-center justify-center flex-shrink-0 text-[#0084FF] group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25V4.5m0 15v2.25m-9-9h2.25m15 0H21.75M4.93 4.93l1.59 1.59m10.96 10.96l1.59 1.59m-1.59-14.14l-1.59 1.59m-10.96 10.96l-1.59 1.59" />
                </svg>
              </div>
              <div className="flex-1 pl-4 text-left">
                <h4 className="text-[#f97316] text-sm font-black tracking-wider uppercase mb-1">Innovation</h4>
                <p className="text-slate-500 font-medium text-[11px] leading-snug">
                  Embracing creativity and technology to deliver cutting-edge digital solutions.
                </p>
              </div>
              <div className="absolute right-[-14px] w-7 h-7 rounded-full bg-gradient-to-tr from-[#8b5cf6] to-[#a78bfa] text-white text-[11px] font-black flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform">
                01
              </div>
            </div>

            {/* Card 3: Collaboration */}
            <div className="group relative w-full h-[96px] bg-white border border-slate-100/80 rounded-full flex items-center px-6 shadow-[0_4px_25px_rgba(0,0,0,0.02)] hover:border-blue-100 hover:shadow-[0_10px_30px_rgba(0,132,255,0.06)] transition-all duration-300 hover:-translate-y-1 translate-x-[30px]">
              <div className="w-12 h-12 rounded-full border border-emerald-100 bg-emerald-50/50 flex items-center justify-center flex-shrink-0 text-emerald-500 group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21.75c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <div className="flex-1 pl-4 text-left">
                <h4 className="text-[#f97316] text-sm font-black tracking-wider uppercase mb-1">Collaboration</h4>
                <p className="text-slate-500 font-medium text-[11px] leading-snug">
                  Working as an extension of your team to achieve shared goals.
                </p>
              </div>
              <div className="absolute right-[-14px] w-7 h-7 rounded-full bg-gradient-to-tr from-[#0084FF] to-[#38bdf8] text-white text-[11px] font-black flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                03
              </div>
            </div>

            {/* Card 5: Client-Centric */}
            <div className="group relative w-full h-[96px] bg-white border border-slate-100/80 rounded-full flex items-center px-6 shadow-[0_4px_25px_rgba(0,0,0,0.02)] hover:border-purple-100 hover:shadow-[0_10px_30px_rgba(168,85,247,0.06)] transition-all duration-300 hover:-translate-y-1 mb-[56px] translate-x-[30px]">
              <div className="w-12 h-12 rounded-full border border-purple-100 bg-purple-50/50 flex items-center justify-center flex-shrink-0 text-purple-500 group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <div className="flex-1 pl-4 text-left">
                <h4 className="text-[#f97316] text-sm font-black tracking-wider uppercase mb-1">Client-Centric</h4>
                <p className="text-slate-500 font-medium text-[11px] leading-snug">
                  Placing your business needs at the heart of our strategy.
                </p>
              </div>
              <div className="absolute right-[-14px] w-7 h-7 rounded-full bg-gradient-to-tr from-[#a855f7] to-[#d8b4fe] text-white text-[11px] font-black flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform">
                05
              </div>
            </div>
          </div>

          {/* Center Hexagon & Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] flex items-center justify-center">
            {/* Outer faint hexagons */}
            <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 300 300">
              {/* Outer faint hexagon 2 (R = 142) */}
              <polygon points="150,8 273,79 273,221 150,292 27,221 27,79" fill="none" stroke="#cbd5e1" strokeWidth="1.2" strokeLinejoin="round" />

              {/* Outer faint hexagon 1 (R = 132) */}
              <polygon points="150,18 264.3,84 264.3,216 150,282 35.7,216 35.7,84" fill="none" stroke="#cbd5e1" strokeWidth="1.2" strokeLinejoin="round" />

              {/* Colored Pointy-topped inner hexagon (thick edges, shortened segments with gaps) */}
              {/* Top-Right slanted */}
              <line x1="158.7" y1="53" x2="229.6" y2="94" stroke="#3b82f6" strokeWidth="4.5" strokeLinecap="round" />
              {/* Right vertical */}
              <line x1="238.3" y1="109" x2="238.3" y2="191" stroke="#10b981" strokeWidth="4.5" strokeLinecap="round" />
              {/* Bottom-Right slanted */}
              <line x1="229.6" y1="206" x2="158.7" y2="247" stroke="#f97316" strokeWidth="4.5" strokeLinecap="round" />
              {/* Bottom-Left slanted */}
              <line x1="141.3" y1="247" x2="70.4" y2="206" stroke="#a855f7" strokeWidth="4.5" strokeLinecap="round" />
              {/* Left vertical */}
              <line x1="61.7" y1="191" x2="61.7" y2="109" stroke="#0084FF" strokeWidth="4.5" strokeLinecap="round" />
              {/* Top-Left slanted */}
              <line x1="70.4" y1="94" x2="141.3" y2="53" stroke="#8b5cf6" strokeWidth="4.5" strokeLinecap="round" />
            </svg>

            {/* Center White Circular Badge with Logo */}
            <div className="w-[144px] h-[144px] rounded-full bg-white shadow-[0_15px_50px_rgba(0,0,0,0.06)] flex items-center justify-center border border-slate-100/50 z-10 hover:scale-105 transition-transform duration-300">
              <img src="/images/navbar/logo.png" alt="Zentrivo Logo" className="w-16 h-16 object-contain" />
            </div>
          </div>

          {/* Right Column Cards */}
          <div className="absolute right-0 top-0 bottom-0 w-[360px] flex flex-col justify-between py-1">
            {/* Card 2: Integrity */}
            <div className="group relative w-full h-[96px] bg-white border border-slate-100/80 rounded-full flex flex-row-reverse items-center px-6 shadow-[0_4px_25px_rgba(0,0,0,0.02)] hover:border-blue-100 hover:shadow-[0_10px_30px_rgba(59,130,246,0.06)] transition-all duration-300 hover:-translate-y-1 mt-[56px] -translate-x-[30px]">
              <div className="w-12 h-12 rounded-full border border-violet-100 bg-violet-50/50 flex items-center justify-center flex-shrink-0 text-violet-500 group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <div className="flex-1 pr-4 text-left pl-2">
                <h4 className="text-[#f97316] text-sm font-black tracking-wider uppercase mb-1">Integrity</h4>
                <p className="text-slate-500 font-medium text-[11px] leading-snug">
                  Maintaining transparency and ethical practices in every partnership.
                </p>
              </div>
              <div className="absolute left-[-14px] w-7 h-7 rounded-full bg-gradient-to-tr from-[#3b82f6] to-[#60a5fa] text-white text-[11px] font-black flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                02
              </div>
            </div>

            {/* Card 6: Adaptability */}
            <div className="group relative w-full h-[96px] bg-white border border-slate-100/80 rounded-full flex flex-row-reverse items-center px-6 shadow-[0_4px_25px_rgba(0,0,0,0.02)] hover:border-emerald-100 hover:shadow-[0_10px_30px_rgba(16,185,129,0.06)] transition-all duration-300 hover:-translate-y-1 -translate-x-[30px]">
              <div className="w-12 h-12 rounded-full border border-emerald-100 bg-emerald-50/50 flex items-center justify-center flex-shrink-0 text-emerald-500 group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
              </div>
              <div className="flex-1 pr-4 text-left pl-2">
                <h4 className="text-[#f97316] text-sm font-black tracking-wider uppercase mb-1">Adaptability</h4>
                <p className="text-slate-500 font-medium text-[11px] leading-snug">
                  Staying agile in an ever-evolving digital landscape.
                </p>
              </div>
              <div className="absolute left-[-14px] w-7 h-7 rounded-full bg-gradient-to-tr from-[#10b981] to-[#34d399] text-white text-[11px] font-black flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                06
              </div>
            </div>

            {/* Card 4: Excellence */}
            <div className="group relative w-full h-[96px] bg-white border border-slate-100/80 rounded-full flex flex-row-reverse items-center px-6 shadow-[0_4px_25px_rgba(0,0,0,0.02)] hover:border-orange-100 hover:shadow-[0_10px_30px_rgba(249,115,22,0.06)] transition-all duration-300 hover:-translate-y-1 mb-[56px] -translate-x-[30px]">
              <div className="w-12 h-12 rounded-full border border-blue-100 bg-blue-50/50 flex items-center justify-center flex-shrink-0 text-blue-500 group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499c.151-.312.51-.482.87-.482.361 0 .72.17.87.482l2.477 5.022 5.54.805c.348.05.62.33.682.683a.747.747 0 01-.19.673l-4.009 3.908.946 5.518c.059.349-.079.7-.354.912-.275.212-.663.243-.969.08l-4.957-2.61-4.957 2.61a.75.75 0 01-.969-.08c-.275-.213-.413-.563-.354-.912l.946-5.518-4.009-3.908a.75.75 0 01-.19-.673c.062-.353.334-.633.682-.683l5.54-.805 2.477-5.022z" />
                </svg>
              </div>
              <div className="flex-1 pr-4 text-left pl-2">
                <h4 className="text-[#f97316] text-sm font-black tracking-wider uppercase mb-1">Excellence</h4>
                <p className="text-slate-500 font-medium text-[11px] leading-snug">
                  Striving for the highest quality to ensure measurable results.
                </p>
              </div>
              <div className="absolute left-[-14px] w-7 h-7 rounded-full bg-gradient-to-tr from-[#f97316] to-[#fb923c] text-white text-[11px] font-black flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform">
                04
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Stacked Layout */}
        <div className="lg:hidden flex flex-col items-center gap-8 max-w-[500px] mx-auto -mt-16">
          {/* Logo center piece */}
          <div className="relative w-[180px] h-[180px] flex items-center justify-center">
            <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 300 300">
              {/* Outer faint hexagon 2 (R = 142) */}
              <polygon points="150,8 273,79 273,221 150,292 27,221 27,79" fill="none" stroke="#cbd5e1" strokeWidth="1.5" strokeLinejoin="round" />

              {/* Outer faint hexagon 1 (R = 132) */}
              <polygon points="150,18 264.3,84 264.3,216 150,282 35.7,216 35.7,84" fill="none" stroke="#cbd5e1" strokeWidth="1.5" strokeLinejoin="round" />

              {/* Colored Pointy-topped inner hexagon (thick edges, shortened segments with gaps) */}
              <line x1="158.7" y1="53" x2="229.6" y2="94" stroke="#3b82f6" strokeWidth="5.5" strokeLinecap="round" />
              <line x1="238.3" y1="109" x2="238.3" y2="191" stroke="#10b981" strokeWidth="5.5" strokeLinecap="round" />
              <line x1="229.6" y1="206" x2="158.7" y2="247" stroke="#f97316" strokeWidth="5.5" strokeLinecap="round" />
              <line x1="141.3" y1="247" x2="70.4" y2="206" stroke="#a855f7" strokeWidth="5.5" strokeLinecap="round" />
              <line x1="61.7" y1="191" x2="61.7" y2="109" stroke="#0084FF" strokeWidth="5.5" strokeLinecap="round" />
              <line x1="70.4" y1="94" x2="141.3" y2="53" stroke="#8b5cf6" strokeWidth="5.5" strokeLinecap="round" />
            </svg>
            <div className="w-[86px] h-[86px] rounded-full bg-white shadow-lg flex items-center justify-center border border-slate-100 z-10">
              <img src="/images/navbar/logo.png" alt="Zentrivo Logo" className="w-9 h-9 object-contain" />
            </div>
          </div>

          {/* Cards List */}
          <div className="w-full flex flex-col gap-5">
            {[
              {
                num: "01",
                title: "Innovation",
                desc: "Embracing creativity and technology to deliver cutting-edge digital solutions.",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25V4.5m0 15v2.25m-9-9h2.25m15 0H21.75M4.93 4.93l1.59 1.59m10.96 10.96l1.59 1.59m-1.59-14.14l-1.59 1.59m-10.96 10.96l-1.59 1.59" />
                  </svg>
                ),
                gradient: "from-[#8b5cf6] to-[#a78bfa]",
                borderClass: "hover:border-purple-100",
                shadowClass: "hover:shadow-purple-500/5",
                iconColor: "text-[#0084FF] border-blue-100 bg-blue-50/50"
              },
              {
                num: "02",
                title: "Integrity",
                desc: "Maintaining transparency and ethical practices in every partnership.",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
                gradient: "from-[#3b82f6] to-[#60a5fa]",
                borderClass: "hover:border-blue-100",
                shadowClass: "hover:shadow-blue-500/5",
                iconColor: "text-violet-500 border-violet-100 bg-violet-50/50"
              },
              {
                num: "03",
                title: "Collaboration",
                desc: "Working as an extension of your team to achieve shared goals.",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21.75c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                ),
                gradient: "from-[#0084FF] to-[#38bdf8]",
                borderClass: "hover:border-blue-100",
                shadowClass: "hover:shadow-blue-500/5",
                iconColor: "text-emerald-500 border-emerald-100 bg-emerald-50/50"
              },
              {
                num: "04",
                title: "Excellence",
                desc: "Striving for the highest quality to ensure measurable results.",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499c.151-.312.51-.482.87-.482.361 0 .72.17.87.482l2.477 5.022 5.54.805c.348.05.62.33.682.683a.747.747 0 01-.19.673l-4.009 3.908.946 5.518c.059.349-.079.7-.354.912-.275.212-.663.243-.969.08l-4.957-2.61-4.957 2.61a.75.75 0 01-.969-.08c-.275-.213-.413-.563-.354-.912l.946-5.518-4.009-3.908a.75.75 0 01-.19-.673c.062-.353.334-.633.682-.683l5.54-.805 2.477-5.022z" />
                  </svg>
                ),
                gradient: "from-[#f97316] to-[#fb923c]",
                borderClass: "hover:border-orange-100",
                shadowClass: "hover:shadow-orange-500/5",
                iconColor: "text-blue-500 border-blue-100 bg-blue-50/50"
              },
              {
                num: "05",
                title: "Client-Centric",
                desc: "Placing your business needs at the heart of our strategy.",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                ),
                gradient: "from-[#a855f7] to-[#d8b4fe]",
                borderClass: "hover:border-purple-100",
                shadowClass: "hover:shadow-purple-500/5",
                iconColor: "text-purple-500 border-purple-100 bg-purple-50/50"
              },
              {
                num: "06",
                title: "Adaptability",
                desc: "Staying agile in an ever-evolving digital landscape.",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                  </svg>
                ),
                gradient: "from-[#10b981] to-[#34d399]",
                borderClass: "hover:border-emerald-100",
                shadowClass: "hover:shadow-emerald-500/5",
                iconColor: "text-emerald-500 border-emerald-100 bg-emerald-50/50"
              }
            ].map((item) => (
              <div
                key={item.num}
                className={`group relative w-full h-[96px] bg-white border border-slate-100/80 rounded-full flex items-center px-6 shadow-[0_4px_25px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 ${item.borderClass} ${item.shadowClass}`}
              >
                <div className={`w-12 h-12 rounded-full border flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform ${item.iconColor}`}>
                  {item.icon}
                </div>
                <div className="flex-1 pl-4 text-left">
                  <h4 className="text-[#f97316] text-sm font-black tracking-wider uppercase mb-1">{item.title}</h4>
                  <p className="text-slate-500 font-medium text-[11px] leading-snug">{item.desc}</p>
                </div>
                <div className={`absolute right-[-10px] w-7 h-7 rounded-full bg-gradient-to-tr ${item.gradient} text-white text-[11px] font-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  {item.num}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
