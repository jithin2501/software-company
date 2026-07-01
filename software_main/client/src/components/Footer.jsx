import { useEffect } from "react";

export default function Footer({ setView }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-white border-t border-slate-100 pt-16 pb-8 relative overflow-hidden font-sans">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12 flex flex-col gap-12 relative z-10">

        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_0.9fr_1.1fr_1.2fr] gap-12 md:gap-16 lg:gap-20 xl:gap-24 text-left">

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
            <div className="flex items-center gap-4">
              {[
                { name: "Facebook", iconUrl: "/images/icons/facebook.png" },
                { name: "LinkedIn", iconUrl: "/images/icons/linkedin.png" },
                { name: "Instagram", iconUrl: "/images/icons/instagram.png" },
                { name: "YouTube", iconUrl: "/images/icons/youtube.png" }
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="hover:scale-110 transition-transform duration-200 flex items-center justify-center"
                  aria-label={social.name}
                >
                  <img src={social.iconUrl} alt={social.name} className="w-8 h-8 object-contain" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Company (Useful Links) */}
          <div className="flex flex-col gap-5">
            <div>
              <h4 className="text-[15px] font-black text-[#0A1128] uppercase tracking-wide">Useful Links</h4>
              <div className="w-6 h-[2px] bg-[#0084FF] rounded-full mt-2" />
            </div>
            <ul className="flex flex-col gap-3">
              {[
                { name: "Home", view: "landing" },
                { name: "About", view: "about" },
                { name: "Services", view: "services" },
                { name: "Portfolio", view: "landing" },
                { name: "Contact", view: "contact" }
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

          {/* Column 3: Services */}
          <div className="flex flex-col gap-5">
            <div>
              <h4 className="text-[15px] font-black text-[#0A1128] uppercase tracking-wide">Services</h4>
              <div className="w-6 h-[2px] bg-[#0084FF] rounded-full mt-2" />
            </div>
            <ul className="flex flex-col gap-3">
              {[
                { name: "Web Development", view: "services", icon: <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg> },
                { name: "UI/UX Design", view: "services", icon: <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M9.53 16.122A3 3 0 0012 17h.08a3 3 0 002.825-2.03M18 12a6 6 0 11-12 0 6 6 0 0112 0z" /></svg> },
                { name: "SEO Optimization", view: "digital-marketing", icon: <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg> },
                { name: "Digital Marketing", view: "digital-marketing", icon: <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg> },
                { name: "Mobile App Development", view: "services", icon: <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><path d="M12 18h.01" /></svg> }
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

          {/* Column 4: Contact Us */}
          <div className="flex flex-col gap-5">
            <div>
              <h4 className="text-[15px] font-black text-[#0A1128] uppercase tracking-wide">Contact Us</h4>
              <div className="w-6 h-[2px] bg-[#0084FF] rounded-full mt-2" />
            </div>
            <ul className="flex flex-col gap-4">
              {/* Location */}
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 pt-0.5">
                  <img src="/images/icons/location.png" alt="Location" className="w-6 h-6 object-contain" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] font-medium text-slate-600 leading-relaxed">
                    No. 123, 2nd Floor, Hebbal<br />Bengaluru, Karnataka 560024
                  </span>
                </div>
              </li>
              {/* Email */}
              <li className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <img src="/images/icons/mail.png" alt="Email" className="w-6 h-6 object-contain" />
                </div>
                <a href="mailto:hello@zentrivotech.com" className="text-[13px] font-medium text-slate-600 hover:text-[#0084FF] transition-colors pt-0.5">
                  hello@zentrivotech.com
                </a>
              </li>
              {/* Phone */}
              <li className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <img src="/images/icons/phone.png" alt="Phone" className="w-6 h-6 object-contain" />
                </div>
                <a href="tel:+919876543210" className="text-[13px] font-medium text-slate-600 hover:text-[#0084FF] transition-colors pt-0.5">
                  +91 98765 43210
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-slate-100" />

        {/* Footer Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
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
