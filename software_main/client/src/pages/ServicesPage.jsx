import React from "react";

export default function ServicesPage({ setView }) {
  return (
    <div className="w-full bg-white flex items-center justify-center font-sans overflow-hidden py-10 min-h-[calc(100vh-72px)]">
      {/* Self-contained CSS for card slide-in animations */}
      <style>{`
        .card-inner-shadow {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.22);
        }
        
        .card-animate-1 {
          animation: card-1-slide-in 4.2s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
        .card-animate-2 {
          animation: card-2-slide-in 4.2s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
        .card-animate-3 {
          animation: card-3-slide-in 4.2s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
        .card-animate-4 {
          animation: card-4-slide-in 4.2s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
        .card-animate-5 {
          animation: card-5-slide-in 4.2s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }

        @keyframes card-1-slide-in {
          0% {
            transform: translateY(400px) translateX(340px) rotate(-15deg);
            opacity: 0;
          }
          50% {
            transform: translateY(0px) translateX(340px) rotate(-15deg);
            opacity: 1;
          }
          60% {
            transform: translateY(0px) translateX(340px) rotate(-15deg);
            opacity: 1;
          }
          100% {
            transform: translateY(10px) translateX(60px) rotate(-15deg);
          }
        }

        @keyframes card-2-slide-in {
          0% {
            transform: translateY(400px) translateX(170px) rotate(-8deg);
            opacity: 0;
          }
          50% {
            transform: translateY(0px) translateX(170px) rotate(-8deg);
            opacity: 1;
          }
          60% {
            transform: translateY(0px) translateX(170px) rotate(-8deg);
            opacity: 1;
          }
          100% {
            transform: translateY(5px) translateX(30px) rotate(-8deg);
          }
        }

        @keyframes card-3-slide-in {
          0% {
            transform: translateY(400px) translateX(0) rotate(3deg);
            opacity: 0;
          }
          50% {
            transform: translateY(0px) translateX(0) rotate(3deg);
            opacity: 1;
          }
          60% {
            transform: translateY(0px) translateX(0) rotate(3deg);
            opacity: 1;
          }
          100% {
            transform: translateY(0) translateX(0) rotate(3deg);
          }
        }

        @keyframes card-4-slide-in {
          0% {
            transform: translateY(400px) translateX(-170px) rotate(8deg);
            opacity: 0;
          }
          50% {
            transform: translateY(0px) translateX(-170px) rotate(8deg);
            opacity: 1;
          }
          60% {
            transform: translateY(0px) translateX(-170px) rotate(8deg);
            opacity: 1;
          }
          100% {
            transform: translateY(5px) translateX(-30px) rotate(8deg);
          }
        }

        @keyframes card-5-slide-in {
          0% {
            transform: translateY(400px) translateX(-340px) rotate(15deg);
            opacity: 0;
          }
          50% {
            transform: translateY(0px) translateX(-340px) rotate(15deg);
            opacity: 1;
          }
          60% {
            transform: translateY(0px) translateX(-340px) rotate(15deg);
            opacity: 1;
          }
          100% {
            transform: translateY(10px) translateX(-60px) rotate(15deg);
          }
        }

        @keyframes text-fade-in {
          0% {
            opacity: 0;
            transform: translateY(15px);
          }
          60% {
            opacity: 0;
            transform: translateY(15px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .text-animate-fade {
          opacity: 0;
          animation: text-fade-in 4.2s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }

        @media (max-width: 600px) {
          .card-animate-1,
          .card-animate-5 {
            display: none;
          }
        }
      `}</style>

      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-evenly py-4 px-6 relative">
        
        {/* Hero Header */}
        <div className="flex flex-col items-center relative w-full -mt-6 mb-8 text-animate-fade">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0A1128] text-center tracking-tight leading-tight max-w-4xl">
            Best <span className="text-[#0084FF]">innovative solution</span> for businesses
          </h1>
        </div>

        {/* Cards Strip */}
        <div className="flex justify-center items-end py-2 px-5 w-full overflow-visible mt-8 mb-6">
          
          {/* Card 1 */}
          <div className="card-animate-1 w-[230px] shrink-0 z-[1] relative rounded-[16px] overflow-hidden card-inner-shadow transition-all duration-300">
            <div className="w-full h-[290px] flex items-center justify-center relative bg-[#1a1a1a]">
              <span className="absolute top-3 right-3 bg-[#0084FF]/90 text-white text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider z-10 shadow-sm">
                Web Dev
              </span>
              <img 
                src="/images/service_page/web.png" 
                alt="Web Design and Development Services" 
                className="w-full h-full object-cover block"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="card-animate-2 w-[230px] shrink-0 z-[3] relative rounded-[16px] overflow-hidden card-inner-shadow transition-all duration-300">
            <div className="w-full h-[290px] flex items-center justify-center relative bg-[#111111]">
              <span className="absolute top-3 right-3 bg-[#0084FF]/90 text-white text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider z-10 shadow-sm">
                E-commerce
              </span>
              <img 
                src="/images/service_page/ecommerce.png" 
                alt="E-commerce Solutions" 
                className="w-full h-full object-cover block"
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className="card-animate-3 w-[230px] shrink-0 z-[5] relative rounded-[16px] overflow-hidden card-inner-shadow transition-all duration-300">
            <div className="w-full h-[290px] flex items-center justify-center relative bg-[#222222]">
              <span className="absolute top-3 right-3 bg-[#0084FF]/90 text-white text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider z-10 shadow-sm">
                Mobile Apps
              </span>
              <img 
                src="/images/service_page/mobile.png" 
                alt="Mobile App Development Services" 
                className="w-full h-full object-cover block"
              />
            </div>
          </div>

          {/* Card 4 */}
          <div className="card-animate-4 w-[230px] shrink-0 z-[3] relative rounded-[16px] overflow-hidden card-inner-shadow transition-all duration-300">
            <div className="w-full h-[290px] flex items-center justify-center relative bg-[#1a1a1a]">
              <span className="absolute top-3 right-3 bg-[#0084FF]/90 text-white text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider z-10 shadow-sm">
                SEO & Growth
              </span>
              <img 
                src="/images/service_page/seo.png" 
                alt="SEO and Digital Growth Marketing" 
                className="w-full h-full object-cover block"
              />
            </div>
          </div>

          {/* Card 5 */}
          <div className="card-animate-5 w-[230px] shrink-0 z-[1] relative rounded-[16px] overflow-hidden card-inner-shadow transition-all duration-300">
            <div className="w-full h-[290px] flex items-center justify-center relative bg-[#b0b8c1]">
              <span className="absolute top-3 right-3 bg-[#0084FF]/90 text-white text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider z-10 shadow-sm">
                UI/UX Design
              </span>
              <img 
                src="/images/service_page/uiux.png" 
                alt="UI/UX Interface Design" 
                className="w-full h-full object-cover block"
              />
            </div>
          </div>

        </div>

        {/* Hero Footer */}
        <div className="mt-4 flex flex-col items-center max-w-[800px] w-full px-5 text-center text-animate-fade">
          <button 
            onClick={() => setView("contact")}
            className="bg-[#0084FF] hover:bg-[#0070DA] text-white text-sm font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-blue-200 transition-all duration-200 hover:scale-[1.02] cursor-pointer"
          >
            Explore More
          </button>
        </div>

      </div>
    </div>
  );
}
