import React from "react";

const STEPS = [
  {
    number: "01",
    title: "Discovery",
    desc: "We begin by diving deep into your vision, requirements, and target audience to build a solid foundation.",
    color: "#0084FF",
    bgLight: "bg-blue-50/50",
    textClass: "text-[#0084FF]",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Strategy",
    desc: "Developing a comprehensive roadmap that outlines technical architecture and project milestones.",
    color: "#F57C00",
    bgLight: "bg-orange-50/50",
    textClass: "text-[#F57C00]",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Prototyping",
    desc: "Rapidly visualizing concepts to test usability and flow, ensuring the user experience is flawless from the start.",
    color: "#6366F1",
    bgLight: "bg-indigo-50/50",
    textClass: "text-[#6366F1]",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Engineering",
    desc: "Transforming designs into high-quality code using the latest technologies and best practices.",
    color: "#A855F7",
    bgLight: "bg-purple-50/50",
    textClass: "text-[#A855F7]",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path d="m18 16 4-4-4-4M6 8l-4 4 4 4M14.5 4l-5 16" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Quality Control",
    desc: "Rigorous testing and debugging to ensure a seamless, bug-free, and high-performance product.",
    color: "#EC4899",
    bgLight: "bg-pink-50/50",
    textClass: "text-[#EC4899]",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 11 2 2 4-4" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Scale & Grow",
    desc: "Ongoing support and optimization to help your product evolve and succeed in the marketplace.",
    color: "#10B981",
    bgLight: "bg-emerald-50/50",
    textClass: "text-[#10B981]",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path d="m22 7-8.5 8.5-5-5L2 17" />
        <path d="M16 7h6v6" />
      </svg>
    ),
  },
];

export default function MethodologySection() {
  return (
    <section className="w-full bg-[#f9fafb] pb-28 pt-8">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16">

        {/* Section Header */}
        <div className="text-center flex flex-col items-center gap-2">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center leading-tight tracking-tight max-w-xl mx-auto text-[#0A1128]">
            Always <span className="text-[#0084FF]">Giving You Exactly</span>
            <br className="hidden md:inline" />
            What You Need
          </h2>
          <p className="text-sm md:text-base text-gray-500 font-medium max-w-2xl mx-auto mt-2">
            We follow a structured and transparent process to turn your ideas into high-quality software, ensuring we deliver value at every step.
          </p>
        </div>

        {/* Responsive Grid/Flex Row of Steps */}
        <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-10 md:gap-3 lg:gap-4.5 w-full max-w-[1100px] mx-auto">
          {STEPS.map((step, index) => (
            <div
              key={step.number}
              className="relative pt-[60px] flex flex-col items-center w-full max-w-[280px] md:max-w-none md:flex-1"
            >
              {/* Arch & Connecting Line - SVG */}
              <svg
                className="absolute w-full h-[60px] top-0 left-0 overflow-visible pointer-events-none hidden md:block"
                viewBox="0 0 100 60"
                fill="none"
              >
                {/* Filled arch vault to match card background */}
                <path
                  d="M 0 60 A 50 50 0 0 1 100 60 L 100 64 L 0 64 Z"
                  fill="white"
                />
                <path
                  d={`M ${index === 0 ? -15 : -40} 60 L 0 60 A 50 50 0 0 1 100 60 L ${index === STEPS.length - 1 ? 115 : 140} 60`}
                  stroke={step.color}
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  opacity="0.8"
                />
              </svg>

              {/* Number Badge (Centered exactly on top of the arch line) */}
              <div
                className="absolute top-[10px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full text-white flex items-center justify-center font-black text-xs shadow-sm z-20"
                style={{ backgroundColor: step.color }}
              >
                {step.number}
              </div>

              {/* Circular Icon (Nested inside the arch curve) */}
              <div
                className={`absolute top-[68px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-2 ${step.bgLight} ${step.textClass} flex items-center justify-center shadow-md z-10 transition-transform duration-300 hover:scale-105`}
                style={{ borderColor: step.color }}
              >
                {step.icon}
              </div>

              {/* Horizontal Connecting Arrow (Desktop Only) - Placed inside Step Container, centered precisely in the gap */}
              {index < STEPS.length - 1 && (
                <div className="absolute top-[60px] left-[calc(100%-7px)] lg:left-[calc(100%-5px)] -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center pointer-events-auto hidden md:flex">
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke={step.color} strokeWidth="3.5">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}

              {/* Card Body */}
              <div className="w-[90%] md:w-full bg-white rounded-[30px] shadow-sm hover:shadow-md border border-gray-100/70 p-5 md:p-6 flex flex-col items-center text-center transition-all duration-300 flex-1">
                <h3 className="text-lg font-black text-[#0A1128] tracking-tight mt-8">
                  {step.title}
                </h3>
                {/* Underline divider */}
                <div className="w-8 h-[2.5px] rounded-full mb-4 mt-2" style={{ backgroundColor: step.color }} />
                <p className="text-xs md:text-[13px] font-medium text-gray-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Vertical Connecting Arrow (Mobile Only) */}
              {index < STEPS.length - 1 && (
                <div className="w-[2px] h-12 bg-gray-200 my-4 md:hidden relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center">
                    <svg width="6" height="6" viewBox="0 0 24 24" fill="none" stroke={step.color} strokeWidth="4">
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
