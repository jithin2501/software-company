import { useState } from "react";

const TESTIMONIALS = [
  {
    name: "Arun Mehta",
    role: "Founder & CEO",
    company: "Techvora Solutions",
    quote: "Zentrivo Technologies transformed our online presence completely. Their team is professional, creative, and results-driven. Highly recommended!",
    highlight: "results-driven.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    colorTheme: "purple",
    bgClass: "bg-purple-50/40",
    borderClass: "border-purple-100/50 hover:border-purple-200/80",
    quoteColor: "text-purple-500",
    highlightColor: "text-purple-600 font-bold",
    starColor: "text-purple-500",
    badgeBorder: "border-purple-200/50"
  },
  {
    name: "Sneha Reddy",
    role: "Marketing Head",
    company: "BrightMart",
    quote: "Their digital marketing strategies helped us increase traffic and leads by 300%. Great communication and on-time delivery!",
    highlight: "increase traffic",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    colorTheme: "emerald",
    bgClass: "bg-emerald-50/40",
    borderClass: "border-emerald-100/50 hover:border-emerald-200/80",
    quoteColor: "text-emerald-500",
    highlightColor: "text-emerald-600 font-bold",
    starColor: "text-emerald-500",
    badgeBorder: "border-emerald-200/50"
  },
  {
    name: "Vikram Kapoor",
    role: "CTO",
    company: "InnovaX Systems",
    quote: "From UI/UX design to full-stack development, their work quality is outstanding. They understand our needs and deliver beyond expectations.",
    highlight: "outstanding.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    colorTheme: "amber",
    bgClass: "bg-amber-50/40",
    borderClass: "border-amber-100/50 hover:border-amber-200/80",
    quoteColor: "text-amber-500",
    highlightColor: "text-amber-600 font-bold",
    starColor: "text-amber-500",
    badgeBorder: "border-amber-200/50"
  }
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Helper to highlight part of the quote text
  const renderQuote = (testimonial) => {
    const parts = testimonial.quote.split(testimonial.highlight);
    if (parts.length === 2) {
      return (
        <>
          {parts[0]}
          <span className={testimonial.highlightColor}>{testimonial.highlight}</span>
          {parts[1]}
        </>
      );
    }
    return testimonial.quote;
  };

  return (
    <section className="w-full bg-white py-24 md:py-32 relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 right-1/4 w-[350px] h-[350px] bg-purple-50/60 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 md:px-12 flex flex-col gap-20">
        
        {/* Section Header */}
        <div className="text-center flex flex-col items-center gap-2">
          <h2 className="text-3xl md:text-4xl font-black text-[#0A1128] tracking-tight mb-2">
            What Our Clients Say About <span className="text-[#0084FF]">Our Solutions</span>
          </h2>
          <p className="text-sm md:text-base text-gray-500 font-medium max-w-xl mx-auto mt-2 leading-relaxed">
            We partner with ambitious brands to create digital experiences that drive growth and build lasting relationships.
          </p>
        </div>

        {/* Testimonials Main Grid (Left Copy & Right Slider/Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.8fr] gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Client Love intro */}
          <div className="flex flex-col items-center text-center max-w-md mx-auto">
            <div className="flex items-center justify-center gap-2 text-purple-600 mb-4">
              <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <span className="text-[12px] font-black tracking-widest uppercase">CLIENT LOVE</span>
            </div>
            
            <h3 className="text-3xl md:text-[36px] font-black text-[#0A1128] leading-[1.2] tracking-tight mb-4">
              Success is better <br className="hidden md:inline" /> when shared.
            </h3>
            
            <p className="text-sm md:text-[15px] font-medium text-gray-500 leading-relaxed mb-8">
              We're proud to have helped businesses across industries achieve their goals.
            </p>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center justify-center gap-3">
              <button 
                onClick={handlePrev}
                className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-600 hover:text-purple-600 hover:border-purple-100 hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-600 hover:text-purple-600 hover:border-purple-100 hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column: Testimonial Cards */}
          <div className="w-full">
            {/* Desktop Grid Layout */}
            <div className="hidden md:grid grid-cols-3 gap-6">
              {TESTIMONIALS.map((test, index) => (
                <div key={test.name} className="flex flex-col gap-6 h-full group">
                  {/* Quote Bubble */}
                  <div className={`p-6 md:p-8 rounded-[28px] border flex flex-col gap-5 ${test.bgClass} ${test.borderClass} shadow-sm group-hover:shadow-md transition-all duration-300 relative min-h-[220px] flex-grow`}>
                    
                    {/* Star Rating & Quote Icon */}
                    <div className="flex items-center justify-between">
                      {/* Quote Mark */}
                      <span className={`text-4xl font-serif font-black leading-none ${test.quoteColor}`}>“</span>
                      
                      {/* Stars */}
                      <div className="flex gap-0.5">
                        {[...Array(test.rating)].map((_, i) => (
                          <svg key={i} className={`w-4 h-4 fill-current ${test.starColor}`} viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    
                    {/* Quote Text */}
                    <p className="text-[13.5px] font-medium text-slate-600 leading-relaxed text-left flex-grow">
                      {renderQuote(test)}
                    </p>
                  </div>

                  {/* Profile Info */}
                  <div className="flex items-center gap-3.5 pl-2 text-left">
                    {/* Avatar Container with Gradient Border */}
                    <div className={`w-12 h-12 rounded-full p-[2.5px] bg-gradient-to-tr from-${test.colorTheme}-500 to-${test.colorTheme}-300 flex items-center justify-center shadow-sm`}>
                      <img 
                        src={test.avatar} 
                        alt={test.name} 
                        className="w-full h-full rounded-full object-cover border border-white"
                      />
                    </div>
                    
                    <div className="flex flex-col">
                      <span className="text-[14px] font-extrabold text-[#0A1128]">{test.name}</span>
                      <span className="text-[11px] font-bold text-gray-400 mt-0.5">{test.role}</span>
                      <a 
                        href="#" 
                        className={`text-[11px] font-extrabold flex items-center gap-1.5 mt-0.5 hover:underline text-${test.colorTheme}-600`}
                        style={{ color: test.colorTheme === "purple" ? "#8b5cf6" : test.colorTheme === "emerald" ? "#10b981" : "#d97706" }}
                      >
                        {test.company}
                        <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile / Tablet Carousel Viewport */}
            <div className="md:hidden w-full overflow-hidden relative min-h-[340px]">
              <div 
                className="flex transition-transform duration-300 ease-out" 
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {TESTIMONIALS.map((test) => (
                  <div key={test.name} className="w-full flex-shrink-0 px-2 flex flex-col gap-6">
                    {/* Quote Bubble */}
                    <div className={`p-6 rounded-[24px] border flex flex-col gap-5 ${test.bgClass} ${test.borderClass} shadow-sm relative min-h-[200px]`}>
                      <div className="flex items-center justify-between">
                        <span className={`text-4xl font-serif font-black leading-none ${test.quoteColor}`}>“</span>
                        <div className="flex gap-0.5">
                          {[...Array(test.rating)].map((_, i) => (
                            <svg key={i} className={`w-3.5 h-3.5 fill-current ${test.starColor}`} viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <p className="text-[13px] font-medium text-slate-600 leading-relaxed text-left">
                        {renderQuote(test)}
                      </p>
                    </div>

                    {/* Profile */}
                    <div className="flex items-center gap-3 pl-1 text-left">
                      <div className={`w-11 h-11 rounded-full p-[2px] bg-gradient-to-tr from-${test.colorTheme}-500 to-${test.colorTheme}-300 flex items-center justify-center shadow-sm`}>
                        <img 
                          src={test.avatar} 
                          alt={test.name} 
                          className="w-full h-full rounded-full object-cover border border-white"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[13px] font-extrabold text-[#0A1128]">{test.name}</span>
                        <span className="text-[10px] font-bold text-gray-400 mt-0.5">{test.role}</span>
                        <a 
                          href="#" 
                          className={`text-[10px] font-extrabold flex items-center gap-1 mt-0.5`}
                          style={{ color: test.colorTheme === "purple" ? "#8b5cf6" : test.colorTheme === "emerald" ? "#10b981" : "#d97706" }}
                        >
                          {test.company}
                          <svg className="w-2 h-2 ml-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Dot Indicators */}
              <div className="flex justify-center gap-1.5 mt-6 w-full">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${activeIndex === idx ? "w-5 bg-purple-600" : "bg-gray-200"}`}
                  />
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
