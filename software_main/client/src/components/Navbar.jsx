import { useState, useEffect } from "react";

const NAV_LINKS = ["Home", "About", "Services", "Portfolio", "Contact"];

export default function Navbar({ currentView, setView, setActiveServiceTab }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Check initially on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isServicesActive =
    currentView === "services" ||
    currentView === "digital-marketing";

  return (
    <header
      className={`w-full px-14 md:px-36 py-4 flex items-center justify-between fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ease-in-out ${scrolled
        ? "bg-white/90 backdrop-blur-md shadow-none border-none"
        : "bg-[#f9fafb] shadow-none border-none"
        }`}
    >
      {/* Logo */}
      <div
        className="flex items-center gap-3 select-none cursor-pointer md:ml-12"
        onClick={() => setView("landing")}
      >
        <img
          src="/images/navbar/logo.png"
          alt="Zentrivo Technologies Logo"
          className="w-9 h-9 object-contain"
        />
        <div className="flex flex-col justify-center gap-0.5 pt-1">
          <p className="font-serif text-[17px] font-extrabold uppercase text-[#0084FF] tracking-wide leading-none ">Zentrivo</p>
          <p className="font-serif text-[14px] font-bold uppercase text-[#0A1128] tracking-[0.12em] leading-none">Technologies</p>
        </div>
      </div>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => {
          if (link === "Services") {
            return (
              <div
                key={link}
                className="relative py-2"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  onClick={() => setView("services")}
                  className={`text-sm font-medium transition-colors cursor-pointer flex items-center gap-1.5 relative ${
                    isServicesActive ? "text-gray-900 font-semibold" : "text-gray-600 hover:text-[#0084FF]"
                  }`}
                >
                  {link}
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                  {isServicesActive && (
                    <span className="block h-0.5 w-full bg-[#0084FF] rounded-full mt-0.5 absolute -bottom-1 left-0" />
                  )}
                </button>

                {/* Dropdown Menu */}
                {servicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-48 bg-white border border-gray-100/80 rounded-2xl shadow-xl py-2 z-50 flex flex-col">
                    <button
                      onClick={() => {
                        setView("digital-marketing");
                        setServicesOpen(false);
                      }}
                      className={`w-full text-left px-5 py-2.5 text-xs font-bold transition-colors cursor-pointer hover:bg-slate-50 hover:text-[#7c3aed] ${
                        currentView === "digital-marketing" ? "text-[#7c3aed] bg-slate-50/50" : "text-gray-600"
                      }`}
                    >
                      Digital Marketing
                    </button>
                    <div className="h-[1px] bg-slate-100 my-1.5 mx-3" />
                    <button
                      onClick={() => {
                        setView("services");
                        setServicesOpen(false);
                      }}
                      className={`w-full text-left px-5 py-2.5 text-xs font-bold transition-colors cursor-pointer hover:bg-slate-50 hover:text-[#0084FF] ${
                        currentView === "services" ? "text-[#0084FF] bg-slate-50/50" : "text-gray-600"
                      }`}
                    >
                      All Services
                    </button>
                  </div>
                )}
              </div>
            );
          }

          const isActive =
            (link === "Home" && currentView === "landing") ||
            (link === "Contact" && currentView === "contact") ||
            (link === "Services" && isServicesActive);

          return (
            <div key={link} className="relative py-2">
              <button
                onClick={() => {
                  setView(link.toLowerCase() === "contact" ? "contact" : "landing");
                }}
                className={`text-sm font-medium transition-colors cursor-pointer relative ${
                  isActive ? "text-gray-900 font-semibold" : "text-gray-600 hover:text-[#0084FF]"
                }`}
              >
                {link}
                {isActive && (
                  <span className="block h-0.5 w-full bg-[#0084FF] rounded-full mt-0.5 absolute -bottom-1 left-0" />
                )}
              </button>
            </div>
          );
        })}
      </nav>

      {/* CTA */}
      <div className="hidden md:flex items-center gap-3 md:mr-12">
        <button
          onClick={() => setView("contact")}
          className="flex items-center gap-2 bg-[#0084FF] hover:bg-[#0070DA] text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-md transition-all duration-200 hover:shadow-blue-300 cursor-pointer"
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
        <div className="absolute top-full left-0 w-full md:hidden bg-white border-b border-gray-100 px-6 py-4 flex flex-col gap-4 z-40 shadow-md">
          {NAV_LINKS.map((link) => {
            if (link === "Services") {
              return (
                <div key={link} className="flex flex-col gap-2">
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="text-left text-sm font-medium text-gray-700 hover:text-[#0084FF] transition-colors cursor-pointer flex items-center justify-between"
                  >
                    <span>{link}</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  {mobileServicesOpen && (
                    <div className="flex flex-col gap-3 pl-4 py-1.5 border-l border-slate-100">
                      <button
                        onClick={() => {
                          setView("digital-marketing");
                          setMenuOpen(false);
                          setMobileServicesOpen(false);
                        }}
                        className={`text-left text-xs font-bold transition-colors cursor-pointer ${
                          currentView === "digital-marketing" ? "text-[#7c3aed]" : "text-gray-600 hover:text-[#7c3aed]"
                        }`}
                      >
                        Digital Marketing
                      </button>
                      <button
                        onClick={() => {
                          setView("services");
                          setMenuOpen(false);
                          setMobileServicesOpen(false);
                        }}
                        className={`text-left text-xs font-bold transition-colors cursor-pointer ${
                          currentView === "services" ? "text-[#0084FF]" : "text-gray-600 hover:text-[#0084FF]"
                        }`}
                      >
                        All Services
                      </button>
                    </div>
                  )}
                </div>
              );
            }

            const isActive =
              (link === "Home" && currentView === "landing") ||
              (link === "Contact" && currentView === "contact");

            return (
              <button
                key={link}
                onClick={() => {
                  setMenuOpen(false);
                  setView(link.toLowerCase() === "contact" ? "contact" : "landing");
                }}
                className={`text-left text-sm font-medium transition-colors cursor-pointer ${
                  isActive ? "text-gray-900 font-semibold" : "text-gray-700 hover:text-[#0084FF]"
                }`}
              >
                {link}
              </button>
            );
          })}
          <button
            onClick={() => {
              setView("contact");
              setMenuOpen(false);
            }}
            className="mt-2 bg-[#0084FF] text-white text-sm font-semibold px-5 py-2.5 rounded-full text-center shadow cursor-pointer"
          >
            Get Started →
          </button>
        </div>
      )}
    </header>
  );
}
