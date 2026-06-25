import { useState } from "react";

const NAV_LINKS = ["Home", "About", "Services", "Portfolio", "Review", "Contact"];

export default function Navbar({ currentView, setView }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="w-full px-14 md:px-36 py-4 flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-50">
      {/* Logo */}
      <div 
        className="flex items-center gap-2.5 select-none cursor-pointer md:ml-12"
        onClick={() => setView("landing")}
      >
        <div className="relative w-9 h-9">
          <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
            <circle cx="20" cy="20" r="18" fill="#1a1a2e" />
            <path d="M12 20 Q20 8 28 20 Q20 32 12 20Z" fill="#f97316" />
            <path d="M20 12 Q32 20 20 28 Q8 20 20 12Z" fill="#3b82f6" opacity="0.85" />
            <circle cx="20" cy="20" r="4" fill="white" />
          </svg>
        </div>
        <div className="leading-tight">
          <p className="text-[15px] font-bold text-gray-900 tracking-tight">Digital Elite</p>
          <p className="text-[13px] font-semibold text-orange-500 -mt-0.5">Service</p>
        </div>
      </div>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <div key={link} className="relative">
            {link === "Services" ? (
              <button
                onClick={() => setServicesOpen((o) => !o)}
                className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors cursor-pointer"
              >
                {link}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
            ) : (
              <button
                onClick={() => setView(link.toLowerCase() === "contact" ? "contact" : "landing")}
                className={`text-sm font-medium transition-colors cursor-pointer relative ${
                  (link === "Home" && currentView === "landing") || (link === "Contact" && currentView === "contact")
                    ? "text-gray-900 font-semibold"
                    : "text-gray-600 hover:text-orange-500"
                }`}
              >
                {link}
                {((link === "Home" && currentView === "landing") || (link === "Contact" && currentView === "contact")) && (
                  <span className="block h-0.5 w-full bg-orange-500 rounded-full mt-0.5 absolute -bottom-1 left-0" />
                )}
              </button>
            )}

            {/* Services dropdown */}
            {link === "Services" && servicesOpen && (
              <div className="absolute top-8 left-0 bg-white shadow-xl rounded-xl py-2 w-44 z-50 border border-gray-100">
                {["Web Design", "SEO & Growth", "App Development", "Branding"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-colors"
                  >
                    {s}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* CTA */}
      <div className="hidden md:flex items-center gap-3 md:mr-12">
        <button
          onClick={() => setView("contact")}
          className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-md transition-all duration-200 hover:shadow-orange-300 cursor-pointer"
        >
          Get Started
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition cursor-pointer"
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
          {menuOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full md:hidden bg-white border-b border-gray-100 px-6 py-4 flex flex-col gap-4 z-40 shadow-md">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => {
                setView(link.toLowerCase() === "contact" ? "contact" : "landing");
                setMenuOpen(false);
              }}
              className="text-left text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors cursor-pointer"
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => {
              setView("contact");
              setMenuOpen(false);
            }}
            className="mt-2 bg-orange-500 text-white text-sm font-semibold px-5 py-2.5 rounded-full text-center shadow cursor-pointer"
          >
            Get Started →
          </button>
        </div>
      )}
    </header>
  );
}
