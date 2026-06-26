import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  const [view, setView] = useState("landing");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [view]);

  return (
    <div className="min-h-screen font-sans">
      <Navbar currentView={view} setView={setView} />
      {/* Spacer to prevent fixed Navbar from covering content */}
      <div className="h-[72px]"></div>
      {view === "landing" ? (
        <LandingPage setView={setView} />
      ) : (
        <ContactPage />
      )}
    </div>
  );
}
