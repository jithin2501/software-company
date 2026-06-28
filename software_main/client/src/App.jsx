import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";
import DigitalMarketingPage from "./pages/DigitalMarketingPage";
import AboutPage from "./pages/AboutPage";
import ServicesSection from "./components/ServicesSection";
import CollaborationsSection from "./components/CollaborationsSection";
import TrustedLeadersSection from "./components/TrustedLeadersSection";
import MethodologySection from "./components/MethodologySection";

export default function App() {
  const [view, setView] = useState("landing");
  const [activeServiceTab, setActiveServiceTab] = useState(4); // Default: Cloud Computing

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [view]);

  return (
    <div className="min-h-screen font-sans">
      <Navbar currentView={view} setView={setView} setActiveServiceTab={setActiveServiceTab} />
      {/* Spacer to prevent fixed Navbar from covering content */}
      <div className="h-[72px]"></div>
      {view === "landing" ? (
        <>
          <LandingPage setView={setView} />
          <ServicesSection activeTab={activeServiceTab} setActiveTab={setActiveServiceTab} />
          <CollaborationsSection />
          <TrustedLeadersSection />
          <MethodologySection />
        </>
      ) : view === "services" ? (
        <ServicesPage setView={setView} />
      ) : view === "digital-marketing" ? (
        <DigitalMarketingPage setView={setView} />
      ) : view === "about" ? (
        <AboutPage setView={setView} />
      ) : (
        <ContactPage />
      )}
    </div>
  );
}
