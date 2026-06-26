import React, { useState } from "react";

const SERVICES = [
  {
    name: "Web Design",
    title: "Create stunning, high-converting websites to your brand",
    desc: "We design and build bespoke, responsive websites that combine rich aesthetics with flawless functionality to turn visitors into loyal customers.",
    bullets: ["Custom UI/UX Designs", "Mobile-First Optimization", "Speed & Performance Built-in"],
    image: "/images/services/web-design.png",
  },
  {
    name: "SEO & Growth",
    title: "Dominate search rankings and drive organic traffic growth",
    desc: "Our search engine experts implement data-driven SEO strategies, keyword optimization, and technical audits to guarantee higher visibility and customer reach.",
    bullets: ["Keyword & Market Research", "Technical SEO Audits", "On-Page & Content Strategy"],
    image: "/images/services/web-design.png", // fallback
  },
  {
    name: "App Development",
    title: "Build powerful, scalable mobile and web applications",
    desc: "We develop native and cross-platform apps using modern stacks, providing robust security, smooth transitions, and scale-ready architecture.",
    bullets: ["iOS & Android Mobile Apps", "Scalable Web Applications", "API Integration & Security"],
    image: "/images/services/web-design.png", // fallback
  },
  {
    name: "Branding",
    title: "Craft a memorable identity that sets your business apart",
    desc: "From logo creation to brand style guides, we establish strong visual guidelines and identity systems that build trust and stand out in the marketplace.",
    bullets: ["Logo & Visual Identity", "Typography & Color Palettes", "Complete Brand Guidelines"],
    image: "/images/services/web-design.png", // fallback
  },
  {
    name: "Cloud Computing",
    title: "Scale effortlessly with secure cloud platforms and hybrid solutions",
    desc: "Our job doesn't stop. We provide continuous monitoring, maintenance, and ensure seamless operation and peak performance for your business.",
    bullets: ["Technology Consultancy", "We Provide best services", "Requirements Gathering"],
    image: "/images/services/cloud.png",
  },
  {
    name: "Data Protection",
    title: "Safeguard your corporate assets with advanced cyber security",
    desc: "Implement enterprise-grade encryption, continuous vulnerability testing, and compliance frameworks to protect sensitive user and system data.",
    bullets: ["End-to-End Encryption", "Vulnerability & Threat Auditing", "GDPR & Compliance Readiness"],
    image: "/images/services/cloud.png", // fallback
  },
];

export default function ServicesSection({ activeTab, setActiveTab }) {
  const activeService = SERVICES[activeTab];

  return (
    <section id="services" className="w-full bg-[#f9fafb] py-16 md:py-24">
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col gap-8">

        {/* Section Header */}
        <div className="text-center flex flex-col items-center gap-2 mb-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A1128] leading-tight max-w-xl">
            Best <span className="text-[#0084FF]">Innovative Solution</span> for Businesses
          </h2>
          <p className="text-sm md:text-base text-gray-500 font-medium max-w-2xl mx-auto mt-2 leading-relaxed">
            We offer customized digital services tailored to your business needs, helping you streamline operations, enhance user experiences, and drive sustainable growth.
          </p>
        </div>

        {/* Core Layout Card */}
        <div className="w-full bg-[#0A1128] rounded-[28px] shadow-xl border border-gray-100 flex flex-col lg:flex-row overflow-hidden min-h-[400px]">

          {/* Sidebar Tabs */}
          <div className="w-full lg:w-[26%] py-6 pl-4 pr-0 flex flex-col gap-2 justify-center">
            {SERVICES.map((service, index) => {
              const isActive = index === activeTab;
              return (
                <button
                  key={service.name}
                  onClick={() => setActiveTab(index)}
                  className={`text-left font-bold text-sm transition-all duration-300 flex items-center justify-between cursor-pointer group ${isActive
                    ? "w-[112%] bg-[#0084FF] text-white py-1.5 pl-6 pr-1.5 rounded-full shadow-xl relative z-20 translate-x-4"
                    : "w-full text-slate-400 hover:text-white py-3 pl-6 rounded-l-full hover:translate-x-1"
                    }`}
                >
                  <span className="tracking-wide">{service.name}</span>
                  {isActive && (
                    <span className="w-8 h-8 rounded-full bg-white border-[3px] border-[#0084FF] flex items-center justify-center text-[#0084FF] shadow-md transform transition-transform group-hover:rotate-45 flex-shrink-0">
                      <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Content & Image Area */}
          <div className="w-full lg:w-[74%] bg-white rounded-t-[28px] lg:rounded-t-none lg:rounded-l-[32px] flex flex-col md:flex-row items-stretch transition-all duration-500 overflow-hidden">

            {/* Middle text content (shifted slightly to the right) */}
            <div className="flex-1 flex flex-col justify-center gap-5 p-8 lg:p-10 pl-10 lg:pl-14 pr-6 lg:pr-8">
              <h3 className="text-xl md:text-2xl font-extrabold text-[#0A1128] leading-snug">
                {activeService.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {activeService.desc}
              </p>

              {/* Bullets Checklist */}
              <div className="flex flex-col gap-3 mt-2">
                {activeService.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-50 text-[#0084FF] flex items-center justify-center flex-shrink-0">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="text-sm font-bold text-gray-700">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-[46%] flex-shrink-0 relative group overflow-hidden md:rounded-l-[28px]">
              <img
                src={activeService.image}
                alt={activeService.name}
                className="w-full h-full min-h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/20 to-transparent pointer-events-none" />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
