import { useState } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  const [view, setView] = useState("landing");

  return (
    <div className="min-h-screen font-sans overflow-x-hidden">
      <Navbar currentView={view} setView={setView} />
      {view === "landing" ? (
        <LandingPage setView={setView} />
      ) : (
        <ContactPage />
      )}
    </div>
  );
}
