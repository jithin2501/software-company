export default function LandingPage({ setView }) {
  return (
    <main className="max-w-6xl mx-auto px-6 md:px-12 pt-16 md:pt-12 pb-16 flex flex-col md:flex-row items-center gap-10 md:gap-16 min-h-[calc(100vh-72px)]">
      {/* Left Column: Text Content */}
      <div className="flex flex-col gap-6 md:gap-7 w-full md:w-[40%] flex-shrink-0 md:-mt-10">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 w-fit shadow-sm">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
          <span className="text-[11px] font-semibold tracking-widest text-gray-600 uppercase">
            Architecture of Innovation
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight text-gray-900">
          Find the{" "}
          <span className="text-blue-500">best</span>
          <br />
          <span className="text-blue-500">solution</span>
          <br />
          <span className="text-orange-500">together.</span>
        </h1>

        {/* Subtext */}
        <p className="text-gray-500 text-base leading-relaxed max-w-sm">
          Designing <strong className="text-gray-800 font-semibold">resilient digital ecosystems</strong> where technical performance meets architectural minimalism.
        </p>

        {/* CTAs */}
        <div className="flex items-center gap-5 mt-2">
          <button
            onClick={() => setView("contact")}
            className="flex items-center gap-2.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm px-6 py-3.5 rounded-full shadow-lg shadow-orange-200 transition-all duration-200 hover:scale-[1.02] cursor-pointer"
          >
            Begin Journey
            <span className="w-5 h-5 bg-white/25 rounded-full flex items-center justify-center">
              <svg width="11" height="11" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
                <polyline points="7 17 17 7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </span>
          </button>

          <button className="flex items-center gap-3 text-gray-700 hover:text-orange-500 text-sm font-semibold transition-colors group cursor-pointer">
            <span className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-100 group-hover:border-orange-300 transition-colors">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" className="text-orange-500 ml-0.5">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </span>
            View Manifesto
          </button>
        </div>
      </div>

      {/* Right Column: Landing Illustration Image */}
      <div className="w-full md:w-[60%] flex justify-center md:justify-end">
        <img
          src="/images/home/landing.png"
          alt="Landing Illustration"
          className="w-full max-w-[550px] md:max-w-[720px] h-auto object-contain"
        />
      </div>
    </main>
  );
}
