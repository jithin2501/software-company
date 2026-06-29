import { useEffect } from "react";

export default function Footer({ setView }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-white border-t border-slate-100 pt-16 pb-8 relative overflow-hidden font-sans">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12 flex flex-col gap-12 relative z-10">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_1.1fr_0.9fr_1.2fr] gap-10 text-left">
          
          {/* Column 1: Brand Info */}
          <div className="flex flex-col gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3 select-none cursor-pointer" onClick={() => { setView("landing"); scrollToTop(); }}>
              <img src="/images/navbar/logo.png" alt="Zentrivo Logo" className="w-9 h-9 object-contain" />
              <div className="flex flex-col justify-center gap-0.5 pt-1">
                <p className="font-serif text-[17px] font-extrabold uppercase text-[#0084FF] tracking-wide leading-none">Zentrivo</p>
                <p className="font-serif text-[14px] font-bold uppercase text-[#0A1128] tracking-[0.12em] leading-none">Technologies</p>
              </div>
            </div>
            {/* Description */}
            <p className="text-slate-500 text-[13.5px] leading-relaxed font-medium max-w-sm">
              We create innovative digital solutions that help businesses grow, engage customers, and outperform the competition.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-2.5">
              {[
                { name: "Facebook", icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/></svg> },
                { name: "LinkedIn", icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg> },
                { name: "Instagram", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01"/></svg> },
                { name: "X", icon: <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> }
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-9 h-9 rounded-full border border-slate-100 flex items-center justify-center text-slate-500 hover:text-[#0084FF] hover:border-[#0084FF]/30 hover:bg-blue-50/20 transition-all duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="flex flex-col gap-5">
            <div>
              <h4 className="text-[15px] font-black text-[#0A1128] uppercase tracking-wide">Services</h4>
              <div className="w-6 h-[2px] bg-[#0084FF] rounded-full mt-2" />
            </div>
            <ul className="flex flex-col gap-3">
              {[
                { name: "Web Development", view: "services", icon: <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"/></svg> },
                { name: "UI/UX Design", view: "services", icon: <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M9.53 16.122A3 3 0 0012 17h.08a3 3 0 002.825-2.03M18 12a6 6 0 11-12 0 6 6 0 0112 0z"/></svg> },
                { name: "SEO Optimization", view: "digital-marketing", icon: <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"/></svg> },
                { name: "Mobile App Development", view: "services", icon: <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><path d="M12 18h.01"/></svg> }
              ].map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => { setView(item.view); scrollToTop(); }}
                    className="flex items-center group text-left cursor-pointer"
                  >
                    <div className="flex items-center gap-2 text-slate-500 group-hover:text-[#0084FF] transition-colors text-[13.5px] font-medium">
                      <span className="text-slate-400 group-hover:text-[#0084FF] transition-colors">{item.icon}</span>
                      {item.name}
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="flex flex-col gap-5">
            <div>
              <h4 className="text-[15px] font-black text-[#0A1128] uppercase tracking-wide">Company</h4>
              <div className="w-6 h-[2px] bg-[#0084FF] rounded-full mt-2" />
            </div>
            <ul className="flex flex-col gap-3">
              {[
                { name: "About Us", view: "about" },
                { name: "Our Work", view: "landing" },
                { name: "Case Studies", view: "landing" },
                { name: "Testimonials", view: "landing" }
              ].map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => { setView(item.view); scrollToTop(); }}
                    className="flex items-center group text-left text-slate-500 hover:text-[#0084FF] transition-colors text-[13.5px] font-medium cursor-pointer"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="flex flex-col gap-5">
            <div>
              <h4 className="text-[15px] font-black text-[#0A1128] uppercase tracking-wide">Contact Us</h4>
              <div className="w-6 h-[2px] bg-[#0084FF] rounded-full mt-2" />
            </div>
            <ul className="flex flex-col gap-4">
              {/* Location */}
              <li className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-blue-50/50 flex items-center justify-center text-[#0084FF] flex-shrink-0 border border-blue-100/30">
                  <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M12 2a8 8 0 00-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 00-8-8z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] font-medium text-slate-600 leading-relaxed">
                    No. 123, 2nd Floor, Hebbal<br />Bengaluru, Karnataka 560024
                  </span>
                </div>
              </li>
              {/* Email */}
              <li className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-blue-50/50 flex items-center justify-center text-[#0084FF] flex-shrink-0 border border-blue-100/30">
                  <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0L12 13.525 2.25 6.75"/>
                  </svg>
                </div>
                <a href="mailto:hello@zentrivotech.com" className="text-[13px] font-medium text-slate-600 hover:text-[#0084FF] transition-colors pt-2">
                  hello@zentrivotech.com
                </a>
              </li>
              {/* Phone */}
              <li className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-blue-50/50 flex items-center justify-center text-[#0084FF] flex-shrink-0 border border-blue-100/30">
                  <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M2.25 6.622c0-1.258 1.02-2.28 2.28-2.28h3.06c.647 0 1.251.278 1.673.766l2.128 2.464c.32.37.382.905.155 1.343l-1.077 2.08a11.025 11.025 0 004.832 4.832l2.08-1.077a1.47 1.47 0 011.343.155l2.464 2.128c.488.42.766 1.024.766 1.673v3.06c0 1.26-1.022 2.28-2.28 2.28-11.41 0-20.622-9.213-20.622-20.622z"/>
                  </svg>
                </div>
                <a href="tel:+919876543210" className="text-[13px] font-medium text-slate-600 hover:text-[#0084FF] transition-colors pt-2">
                  +91 98765 43210
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider with heart */}
        <div className="relative w-full flex items-center justify-center mt-6">
          <div className="w-full h-[1px] bg-slate-100" />
          <div className="absolute bg-white px-4 text-[#0084FF] flex items-center justify-center">
            <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-4">
          {/* Copyright */}
          <span className="text-slate-400 text-[12.5px] font-medium">
            &copy; 2024 Zentrivo Technologies. All rights reserved.
          </span>
          {/* Terms / Policies */}
          <div className="flex items-center gap-4 text-slate-400 text-[12.5px] font-medium">
            <a href="#" className="hover:text-[#0084FF] transition-colors">Privacy Policy</a>
            <span className="text-slate-200">|</span>
            <a href="#" className="hover:text-[#0084FF] transition-colors">Terms &amp; Conditions</a>
            <span className="text-slate-200">|</span>
            <a href="#" className="hover:text-[#0084FF] transition-colors">Refund Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
