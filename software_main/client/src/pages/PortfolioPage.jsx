import React, { useEffect } from "react";

export default function PortfolioPage({ setView }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById("projects-grid");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const projects = [
    {
      id: "sumathi-trends",
      title: "Sumathi Trends",
      category: "E-Commerce",
      description: "A full-stack e-commerce platform with product management, secure payments and order tracking.",
      imageUrl: "/images/portfolio/sumathi.png",
      techStack: ["React", "Node.js", "MongoDB", "Razorpay"],
      theme: {
        badgeBg: "bg-[#f5f3ff]",
        badgeText: "text-[#7c3aed]",
        btnBg: "bg-[#f5f3ff]",
        btnText: "text-[#7c3aed]",
        hoverBg: "hover:bg-[#7c3aed] hover:text-white"
      }
    },
    {
      id: "skydental-hospital",
      title: "Skydental Hospital",
      category: "Healthcare",
      description: "A dental care website with appointment booking, service management and patient information.",
      imageUrl: "/images/portfolio/skydental.png",
      techStack: ["Next.js", "MongoDB", "Tailwind CSS", "Nodemailer"],
      theme: {
        badgeBg: "bg-[#eefcf7]",
        badgeText: "text-[#02a075]",
        btnBg: "bg-[#eefcf7]",
        btnText: "text-[#02a075]",
        hoverBg: "hover:bg-[#02a075] hover:text-white"
      }
    },
    {
      id: "maria-homes",
      title: "Maria Homes",
      category: "Real Estate",
      description: "A real estate platform to showcase properties with advanced search and inquiry management.",
      imageUrl: "/images/portfolio/mariahomes.png",
      techStack: ["React", "Firebase", "Tailwind CSS"],
      theme: {
        badgeBg: "bg-[#fdf8e6]",
        badgeText: "text-[#c27a27]",
        btnBg: "bg-[#fdf8e6]",
        btnText: "text-[#c27a27]",
        hoverBg: "hover:bg-[#c27a27] hover:text-white"
      }
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Discover",
      description: "We understand your business, goals and target audience.",
      numberColor: "text-indigo-600/90",
      circleBg: "bg-indigo-50/70",
      accentBg: "bg-indigo-500",
      dotBg: "bg-indigo-500",
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.25">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Plan",
      description: "We strategize and plan the best approach for your project.",
      numberColor: "text-blue-600/90",
      circleBg: "bg-blue-50/70",
      accentBg: "bg-blue-500",
      dotBg: "bg-blue-500",
      icon: (
        <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="2" width="8" height="4" rx="1" />
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <path d="M12 11h4" />
          <path d="M12 16h4" />
          <path d="M8 11h.01" />
          <path d="M8 16h.01" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Design & Develop",
      description: "We build scalable and high-quality solutions with modern technology.",
      numberColor: "text-teal-600/90",
      circleBg: "bg-teal-50/70",
      accentBg: "bg-teal-500",
      dotBg: "bg-teal-500",
      icon: (
        <svg className="w-8 h-8 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="17 18 23 12 17 6" />
          <polyline points="7 6 1 12 7 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      )
    },
    {
      number: "04",
      title: "Test & Deploy",
      description: "We test thoroughly and deploy with performance and security in mind.",
      numberColor: "text-pink-600/90",
      circleBg: "bg-pink-50/70",
      accentBg: "bg-pink-500",
      dotBg: "bg-pink-500",
      icon: (
        <svg className="w-8 h-8 text-pink-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
          {/* Rocket Body */}
          <path d="M12 2c0 0-4 3.5-4 8.5V17h8v-6.5c0-5-4-8.5-4-8.5z" />
          {/* Base/Wings */}
          <path d="M6 17h12l-2 4H8l-2-4z" />
          {/* Window */}
          <circle cx="12" cy="9.5" r="1.5" />
        </svg>
      )
    },
    {
      number: "05",
      title: "Support",
      description: "We provide ongoing support and growth for your business.",
      numberColor: "text-orange-600/90",
      circleBg: "bg-orange-50/70",
      accentBg: "bg-orange-500",
      dotBg: "bg-orange-500",
      icon: (
        <svg className="w-8 h-8 text-orange-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
          {/* Headband */}
          <path d="M 3 18 v -6 a 9 9 0 0 1 18 0 v 6" />
          {/* Right Ear Pad */}
          <path d="M 21 19 a 2 2 0 0 1 -2 2 h -1 a 2 2 0 0 1 -2 -2 v -3 a 2 2 0 0 1 2 -2 h 3 z" />
          {/* Left Ear Pad */}
          <path d="M 3 19 a 2 2 0 0 0 2 2 h 1 a 2 2 0 0 0 2 -2 v -3 a 2 2 0 0 0 -2 -2 H 3 z" />
        </svg>
      )
    }
  ];

  return (
    <div className="w-full bg-[#f9fafb] min-h-[calc(100vh-72px)] font-sans relative overflow-hidden">
      {/* Decorative background accents */}
      <div className="absolute top-[-10%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-purple-200/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-blue-200/20 blur-[100px] pointer-events-none" />

      {/* --- HERO SECTION AT THE TOP --- */}
      <div className="max-w-[1240px] mx-auto px-6 md:px-12 pt-12 md:pt-16 pb-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10">

        {/* Left Column: Text & Content */}
        <div className="flex flex-col gap-6 w-full lg:w-[45%] flex-shrink-0 text-left">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 bg-[#f4f7ff] border border-blue-100 rounded-full px-4 py-1.5 w-fit shadow-sm">
            <span className="text-[#0084FF] flex items-center justify-center">
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
              </svg>
            </span>
            <span className="text-[11px] font-black tracking-widest text-[#0084FF] uppercase">
              We Build Digital Experiences
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black leading-[1.1] tracking-tight text-[#0A1128]">
            We Code. We Create.
            <br />
            <span className="text-[#0084FF] bg-gradient-to-r from-[#0084FF] to-[#7c3aed] bg-clip-text text-transparent">
              We Elevate Brands.
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-slate-500 font-medium text-sm sm:text-base leading-relaxed max-w-lg">
            We build high-performance, scalable and user-friendly digital solutions that drive growth and create impact.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mt-2">
            {/* Primary View Our Work -> Smooth scroll to projects */}
            <button
              onClick={scrollToProjects}
              className="flex items-center gap-2.5 bg-[#0084FF] hover:bg-[#0070DA] text-white font-extrabold text-sm px-7 py-4 rounded-full shadow-lg shadow-blue-100 transition-all duration-200 hover:scale-[1.02] cursor-pointer"
            >
              View Our Work
              <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            {/* Secondary Start a Project -> Contact */}
            <button
              onClick={() => setView("contact")}
              className="flex items-center gap-2.5 bg-white border border-slate-200 hover:border-[#0084FF]/30 text-slate-700 hover:text-[#0084FF] font-extrabold text-sm px-7 py-4 rounded-full transition-all duration-200 hover:scale-[1.02] cursor-pointer shadow-sm"
            >
              Start a Project
              <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>

        </div>

        {/* Right Column: Illustration Image & Overlapping Card */}
        <div className="w-full lg:w-[55%] flex justify-center lg:justify-end relative">
          <div className="relative w-full max-w-[550px] lg:max-w-[650px] aspect-[4/3] rounded-[32px] overflow-visible">
            {/* Main Screenshot Image */}
            <div className="w-full h-full rounded-[24px] overflow-hidden shadow-2xl border border-slate-100/50 bg-[#0A1128]">
              <img
                src="/images/home/landing.png"
                alt="Landing Illustration"
                className="w-full h-full object-cover block"
              />
            </div>
          </div>
        </div>

      </div>

      {/* --- PROJECTS AND PORTFOLIO SECTION --- */}
      <div id="projects-grid" className="max-w-[1240px] mx-auto px-6 md:px-12 pt-20 pb-16 md:pb-24 relative z-10 border-t border-slate-100">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-[2px] bg-[#0084FF] rounded-full" />
            <span className="text-[#0084FF] text-[13px] font-black tracking-widest uppercase">
              Our Portfolio
            </span>
            <div className="w-8 h-[2px] bg-[#0084FF] rounded-full" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-black text-[#0A1128] leading-[1.15] tracking-tight mb-4">
            Delivering <span className="text-[#0084FF]">innovative results</span> through digital excellence.
          </h2>
          <p className="text-slate-500 font-medium text-sm sm:text-[15px] leading-relaxed max-w-xl">
            Explore our curated selection of digital transformations. We design, build, and optimize applications that drive business growth and engage users.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 justify-items-center max-w-[1120px] mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative w-full max-w-[360px] bg-white rounded-[32px] overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.02)] border border-slate-100/70 hover:border-slate-200 hover:shadow-[0_20px_45px_rgba(0,0,0,0.055)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col min-h-[500px]"
            >
              {/* Image Container */}
              <div className="w-full aspect-[16/10.5] overflow-hidden bg-slate-50 relative">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              {/* Card Details */}
              <div className="p-8 flex flex-col flex-1 items-start text-left">
                {/* Category Badge */}
                <span className={`inline-block px-3.5 py-1.5 rounded-lg ${project.theme.badgeBg} ${project.theme.badgeText} text-[10px] font-black uppercase tracking-widest mb-4 shadow-sm`}>
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="text-[25px] font-black text-[#0A1128] mb-3 leading-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 font-medium text-[14.5px] leading-relaxed mb-8 flex-1">
                  {project.description}
                </p>

                {/* Card Footer: Tech Stack and Circle Arrow Button */}
                <div className="flex items-center justify-between w-full mt-auto pt-4">
                  {/* Tech Stack */}
                  <div className="text-slate-400 font-bold text-[13px] sm:text-[13.5px] tracking-wide">
                    {project.techStack.join("  •  ")}
                  </div>

                  {/* Circle Arrow Button */}
                  <button
                    onClick={() => setView("contact")}
                    className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 ${project.theme.btnBg} ${project.theme.btnText} ${project.theme.hoverBg} cursor-pointer group/cardBtn`}
                  >
                    <svg className="w-5 h-5 transition-transform group-hover/cardBtn:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- OUR PROCESS SECTION --- */}
        <div className="mt-16 md:mt-20 border-t border-slate-100/80 pt-16 pb-12">
          {/* Header */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-[2px] bg-[#0084FF] rounded-full" />
              <span className="text-[#0084FF] text-[13px] font-black tracking-widest uppercase">
                Our Process
              </span>
              <div className="w-8 h-[2px] bg-[#0084FF] rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-black text-[#0A1128] leading-[1.15] tracking-tight mb-4">
              A simple process that <span className="text-[#0084FF]">delivers results</span>.
            </h2>
            <p className="text-slate-500 font-medium text-sm sm:text-[15px] leading-relaxed max-w-xl">
              We follow a clear, collaborative and proven process to turn ideas into powerful digital solutions.
            </p>
          </div>

          {/* Process Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-y-16 gap-x-8 relative max-w-[1100px] mx-auto">
            {steps.map((step, index) => (
              <div key={step.number} className="flex flex-col items-center text-center relative w-full group">
                {/* Connector line for desktop */}
                {index < steps.length - 1 && (
                  <div className="absolute top-[76px] left-[calc(50%+46px)] w-[calc(100%-92px)] -translate-y-1/2 hidden md:flex items-center justify-center pointer-events-none z-0">
                    <div className="w-full border-t-2 border-dashed border-slate-200/80 relative flex items-center justify-center">
                      <span className={`absolute right-[-5px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full ${step.dotBg}`} />
                    </div>
                  </div>
                )}

                {/* Step Number */}
                <span className={`text-[15px] font-black tracking-wider mb-4 ${step.numberColor}`}>
                  {step.number}
                </span>

                {/* Circle Icon Container */}
                <div className={`w-20 h-20 rounded-full flex items-center justify-center relative z-10 ${step.circleBg} border border-transparent shadow-sm group-hover:scale-105 group-hover:shadow-md transition-all duration-300`}>
                  <div className="group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                </div>

                {/* Short Accent Line */}
                <div className={`w-6 h-[3px] rounded-full my-5 ${step.accentBg}`} />

                {/* Title */}
                <h3 className="text-[17px] font-black text-[#0A1128] mb-2.5">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 font-medium text-[13px] leading-relaxed max-w-[190px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Global CTA Section */}
        <div className="mt-20 md:mt-24 text-center">
          <div className="bg-[#e5f0ff] rounded-[32px] p-8 md:p-12 max-w-[1100px] mx-auto border border-blue-200/50 shadow-sm flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl font-black text-[#0A1128] mb-3">
              Have an <span className="text-[#0084FF]">innovative idea</span> in mind?
            </h2>
            <p className="text-slate-500 font-medium text-sm md:text-[15px] max-w-2xl mb-8 leading-relaxed">
              Let's collaborate to transform your vision into an outstanding digital experience. Contact our product designers today.
            </p>
            <button
              onClick={() => setView("contact")}
              className="bg-[#0084FF] hover:bg-[#0070DA] text-white text-sm font-extrabold px-8 py-4 rounded-full shadow-lg shadow-blue-200 transition-all duration-200 hover:scale-[1.03] cursor-pointer"
            >
              Let's Talk
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
