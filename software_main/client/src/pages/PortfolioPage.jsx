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
      id: "maria-homes",
      title: "Maria Homes",
      category: "Real Estate & Development",
      description: "A premium real estate platform featuring modern property listings, high-resolution media viewer, and an optimized lead generation funnel for prospective home buyers.",
      imageUrl: "/images/portfolio/mariahomes.png",
      tags: ["React", "Tailwind CSS", "UX Design"],
    },
    {
      id: "sky-dental",
      title: "Sky Dental Clinic",
      category: "Healthcare & Booking",
      description: "An intuitive patient portal and administrative panel for a dental clinic, streamlining online appointments, doctor availability calendars, and services catalog.",
      imageUrl: "/images/portfolio/skydental.png",
      tags: ["Web App", "Clinic System", "Scheduler"],
    },
    {
      id: "auxilium",
      title: "Auxilium Platform",
      category: "E-Learning & Community Support",
      description: "An interactive support system designed to connect community volunteers with local social initiatives, featuring resource tracking and real-time request updates.",
      imageUrl: "/images/portfolio/auxilium.png",
      tags: ["NGO Tech", "Platform", "Community"],
    },
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative w-full bg-white rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.015)] border border-slate-100/80 hover:border-blue-100 hover:shadow-[0_20px_40px_rgba(0,132,255,0.04)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col min-h-[480px]"
            >
              {/* Image Container */}
              <div className="w-full aspect-[16/10] overflow-hidden bg-slate-50 relative border-b border-slate-50">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Card Details */}
              <div className="p-8 flex flex-col flex-1 items-start text-left">
                {/* Category & Tags */}
                <div className="flex items-center justify-between w-full mb-3">
                  <span className="text-[12px] font-extrabold text-[#0084FF] uppercase tracking-wider">
                    {project.category}
                  </span>
                  <div className="flex gap-1.5">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2.5 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-black text-[#0A1128] mb-3 group-hover:text-[#0084FF] transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 font-medium text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* CTA Action */}
                <button
                  onClick={() => setView("contact")}
                  className="inline-flex items-center gap-2 text-[#0084FF] hover:text-[#0070DA] font-extrabold text-sm transition-colors group/btn"
                >
                  Start Similar Project
                  <svg
                    className="w-4 h-4 transform transition-transform group-hover/btn:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Global CTA Section */}
        <div className="mt-20 md:mt-24 text-center">
          <div className="bg-[#f0f7ff] rounded-[32px] p-8 md:p-12 max-w-4xl mx-auto border border-blue-100/50 shadow-sm flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl font-black text-[#0A1128] mb-3">
              Have an <span className="text-[#0084FF]">innovative idea</span> in mind?
            </h2>
            <p className="text-slate-500 font-medium text-sm md:text-[15px] max-w-lg mb-8 leading-relaxed">
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
