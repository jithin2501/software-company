import { useState } from "react";

const contactMethods = [
  {
    icon: (
      <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <polyline points="2,4 12,13 22,4" />
      </svg>
    ),
    label: "Email Us",
    detail: "hello@presenly.com",
    accent: false,
  },
  {
    icon: (
      <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.02 1.18C.02.67.22.16.59.09A2 2 0 012.16 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    label: "Call Us",
    detail: "+1 (555) 123-4567",
    accent: false,
  },
  {
    icon: (
      <svg width="38" height="38" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        <circle cx="8" cy="10" r="0.85" fill="currentColor" />
        <circle cx="12" cy="10" r="0.85" fill="currentColor" />
        <circle cx="16" cy="10" r="0.85" fill="currentColor" />
      </svg>
    ),
    label: "Send a Message",
    detail: "We'll get back to you as soon as possible",
    accent: true,
  },
  {
    icon: (
      <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Visit Us",
    detail: "123 Innovation Drive, San Francisco, CA 94107",
    accent: false,
  },
  {
    icon: (
      <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12,6 12,12 16,14" />
      </svg>
    ),
    label: "Support Hours",
    detail: "Mon–Fri, 9 AM – 6 PM PST",
    accent: false,
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", email: "", company: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen font-sans">
      {/* Header */}
      <div className="text-center pt-14 pb-10 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          <span className="text-[#0084FF]">We're Here</span>
          <br />
          <span className="text-gray-800">When </span>
          <span className="text-[#0A1128]">You Need Us</span>
        </h1>
        <p className="mt-4 text-gray-500 text-base max-w-2xl mx-auto">
          Got a question, feedback, or a project in mind? Reach out to us — we'd love to hear from you!
        </p>
      </div>

      {/* Contact method strip with wave connector */}
      <div className="relative max-w-5xl mx-auto px-6 mb-12 hidden md:block">
        {/*
          SVG canvas: 1000 wide × 130 tall
          5 icons centered at x = 100, 250, 500, 750, 900  (icon center x)
          Icon row y = 50 (center of 56px circle → top=22, center=50)
          Wave path goes: start at left icon center, curves UP between icons 1-2,
          DOWN to center icon 3, UP between 3-4, DOWN to icon 5.
          Actual reference image: line dips DOWN from icon1→2 and 4→5 (below center),
          rises UP to center icon 3 (above center).
        */}
        <div className="relative" style={{ height: 180 }}>
          <svg
            viewBox="0 0 1000 130"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full pointer-events-none z-10"
            style={{ height: 130, top: 0, left: 0 }}
            aria-hidden="true"
          >
            {/* Segment 1: Leftmost dot to Email Us (Blue) */}
            <path
              d="M10,15 C30,15 45,45 66,55"
              fill="none"
              stroke="#0084FF"
              strokeWidth="2"
            />
            <circle cx="10" cy="15" r="4.5" fill="#0084FF" />

            {/* Segment 2: Email Us to Call Us (Navy) */}
            <path
              d="M134,60 C175,85 225,15 266,55"
              fill="none"
              stroke="#0A1128"
              strokeWidth="2"
            />

            {/* Segment 3: Call Us to Send a Message (Blue) */}
            <path
              d="M334,55 C365,40 405,40 434,50"
              fill="none"
              stroke="#0084FF"
              strokeWidth="2"
            />
            <circle cx="434" cy="50" r="4.5" fill="#0084FF" />

            {/* Segment 4: Send a Message to Visit Us (Navy) */}
            <path
              d="M566,50 C595,40 635,40 666,55"
              fill="none"
              stroke="#0A1128"
              strokeWidth="2"
            />
            <circle cx="566" cy="50" r="4.5" fill="#0A1128" />

            {/* Segment 5: Visit Us to Support Hours (Blue) */}
            <path
              d="M734,55 C775,15 825,85 866,60"
              fill="none"
              stroke="#0084FF"
              strokeWidth="2"
            />

            {/* Segment 6: Support Hours to Rightmost dot (Navy) */}
            <path
              d="M934,55 C955,45 970,15 990,15"
              fill="none"
              stroke="#0A1128"
              strokeWidth="2"
            />
            <circle cx="990" cy="15" r="4.5" fill="#0A1128" />
          </svg>

          {/* Icon nodes — absolutely positioned over the SVG */}
          {[
            { x: "10%", label: contactMethods[0].label, detail: contactMethods[0].detail, icon: contactMethods[0].icon, accent: false },
            { x: "30%", label: contactMethods[1].label, detail: contactMethods[1].detail, icon: contactMethods[1].icon, accent: false },
            { x: "50%", label: contactMethods[2].label, detail: contactMethods[2].detail, icon: contactMethods[2].icon, accent: true },
            { x: "70%", label: contactMethods[3].label, detail: contactMethods[3].detail, icon: contactMethods[3].icon, accent: false },
            { x: "90%", label: contactMethods[4].label, detail: contactMethods[4].detail, icon: contactMethods[4].icon, accent: false },
          ].map((m, i) => (
            <div
              key={i}
              className="absolute flex flex-col items-center text-center"
              style={{
                left: m.x,
                top: m.accent ? -6 : 21,
                transform: "translateX(-50%)",
                width: 120,
              }}
            >
              <div
                className={`rounded-full flex items-center justify-center shadow-xl ${m.accent
                  ? "bg-white ring-8 ring-blue-50/30"
                  : "bg-white border border-gray-100"
                  }`}
                style={{
                  width: m.accent ? 112 : 68,
                  height: m.accent ? 112 : 68,
                  marginBottom: 8,
                }}
              >
                {m.accent ? (
                  <div className="w-[92px] h-[92px] rounded-full bg-gradient-to-br from-[#0084FF] to-[#0A1128] flex items-center justify-center">
                    <span className="text-white">
                      {m.icon}
                    </span>
                  </div>
                ) : (
                  <span className="text-[#0084FF]">
                    {m.icon}
                  </span>
                )}
              </div>
              <p className={`text-xs font-semibold leading-tight ${m.accent ? "text-[#0084FF]" : "text-gray-700"}`}>
                {m.label}
              </p>
              <p className="text-[10px] text-gray-400 leading-snug mt-0.5">{m.detail}</p>
            </div>
          ))}
        </div>

        {/* Mobile fallback: vertical list */}
      </div>
      <div className="md:hidden flex flex-col items-center gap-6 mb-12 px-6">
        {contactMethods.map((m, i) => (
          <div key={i} className="flex flex-col items-center text-center gap-2 w-40">
            <div
              className={`rounded-full flex items-center justify-center shadow-xl ${m.accent
                ? "bg-white ring-8 ring-blue-50/30"
                : "bg-white border border-gray-100"
                }`}
              style={{
                width: m.accent ? 104 : 72,
                height: m.accent ? 104 : 72,
              }}
            >
              {m.accent ? (
                <div className="w-[84px] h-[84px] rounded-full bg-gradient-to-br from-[#0084FF] to-[#0A1128] flex items-center justify-center">
                  <span className="text-white">{m.icon}</span>
                </div>
              ) : (
                <span className="text-[#0084FF]">{m.icon}</span>
              )}
            </div>
            <p className={`text-xs font-semibold ${m.accent ? "text-[#0084FF]" : "text-gray-700"}`}>{m.label}</p>
            <p className="text-[11px] text-gray-400 leading-snug">{m.detail}</p>
          </div>
        ))}
      </div>

      {/* Main content: sidebar + form */}
      <div className="max-w-5xl mx-auto px-6 pb-20 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left sidebar */}
        <div className="flex flex-col gap-5 h-full">
          {/* Big idea card */}
          <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 flex flex-col gap-4 flex-1">
            <p className="text-xl font-bold leading-tight text-slate-800">
              Have a big idea?<br />
              Let's build something{" "}
              <span className="text-[#0084FF] italic">extraordinary.</span>
            </p>
            {/* Big Idea Image */}
            <div className="w-full mt-auto pt-4 flex justify-center">
              <img
                src="/images/contact/contact_image.png"
                alt="Contact Illustration"
                className="w-full h-auto object-contain rounded-xl transform scale-[1.35] origin-bottom"
              />
            </div>
          </div>

          {/* Real people card */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col items-center gap-3">
            <div className="flex -space-x-3 mb-1">
              {[
                "bg-gradient-to-br from-blue-400 to-blue-600",
                "bg-gradient-to-br from-[#0084FF] to-cyan-300",
                "bg-gradient-to-br from-[#0A1128] to-slate-700",
              ].map((g, i) => (
                <div
                  key={i}
                  className={`w-10 h-10 rounded-full ${g} border-2 border-white flex items-center justify-center text-white font-semibold text-sm shadow`}
                >
                  {["A", "B", "C"][i]}
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className="text-sm font-bold text-gray-800">Real people.</p>
              <p className="text-sm font-bold text-gray-800">Real support.</p>
              <p className="text-xs text-gray-400 mt-1">Always here for you.</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="md:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-7">
          {/* Form Header */}
          <div className="flex flex-col items-center mb-8 text-center">

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Let's Create Something<br />
              <span className="bg-gradient-to-r from-[#0084FF] to-[#0A1128] bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h2>

            {/* Subtitle with colored accent lines */}
            <div className="flex items-center mt-3">
              <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-blue-400" />
              <p className="text-xs text-gray-500 font-medium px-3">
                Share your idea with us and let's turn it into reality.
              </p>
              <div className="h-[1px] w-8 bg-gradient-to-r from-[#0084FF] to-transparent" />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full pl-9 pr-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition"
                  required
                />
              </div>
              {/* Work email */}
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <polyline points="2,4 12,13 22,4" />
                  </svg>
                </span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Work Email"
                  className="w-full pl-9 pr-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition"
                  required
                />
              </div>
            </div>

            {/* Company */}
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <rect x="2" y="3" width="20" height="18" rx="1" />
                  <path d="M8 21V7m8 14V7M3 9h18M3 13h18M3 17h18" />
                </svg>
              </span>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Company (Optional)"
                className="w-full pl-9 pr-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition"
              />
            </div>

            {/* Subject */}
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="How can we help you?"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition"
              required
            />

            {/* Message */}
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us more about your project or question..."
              rows={4}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition resize-none"
              required
            />

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl text-white font-semibold text-sm tracking-wide shadow-md transition-all duration-200 hover:opacity-90 active:scale-[0.98] flex items-center justify-center gap-2"
              style={{
                background: "linear-gradient(90deg, #0084FF 0%, #0070DA 50%, #0A1128 100%)",
              }}
            >
              {submitted ? (
                <>
                  <svg width="18" height="18" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                    <polyline points="20,6 9,17 4,12" />
                  </svg>
                  Message sent!
                </>
              ) : (
                <>
                  Send Message
                  <svg width="18" height="18" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22,2 15,22 11,13 2,9" />
                  </svg>
                </>
              )}
            </button>

            {/* Privacy note */}
            <p className="text-center text-[11px] text-gray-400 flex items-center justify-center gap-1">
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              We respect your privacy. Your information is safe with us.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
