import { useEffect, useLayoutEffect, useState } from "react";
import { Route, Routes, useLocation, Link, Navigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowUp, AlertTriangle } from "lucide-react";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ComplianceNotice from "./components/common/ComplianceNotice";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutUs";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import DashboardPage from "./pages/Dashboard";
import PrivacyLegal from "./pages/PrivacyLegal";
import TermsOfService from "./pages/TermsOfService";
import { preloadImagesInBackground } from "./utils/imagePreloader";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const timer = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [pathname, hash]);

  useEffect(() => {
    const timer = setTimeout(() => {
      AOS.refresh();
    }, 120);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white px-4 py-24">
      <div className="text-center max-w-md mx-auto">
        <div className="w-16 h-16 rounded-2xl bg-[#0A2A50]/10 border border-[#C9A64A]/30 flex items-center justify-center mx-auto mb-6 text-[#825E12]">
          <AlertTriangle className="w-8 h-8" />
        </div>
        <h1 className="text-5xl sm:text-6xl text-[#0A2A50] uppercase font-bold tracking-tight mb-2 font-mono">
          404
        </h1>
        <p className="text-xs uppercase tracking-widest text-[#825E12] font-semibold mb-3 font-mono">
          Page Not Found
        </p>
        <p className="text-sm text-slate-600 mb-8 leading-relaxed">
          The requested page could not be located. Explore our China to UK package forwarding and logistics services or return to the homepage.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto text-xs uppercase font-mono px-6 py-3 bg-[#0A2A50] text-white hover:bg-[#C9A64A] hover:text-[#0A2A50] transition-all rounded-xl font-bold"
          >
            Return to Homepage
          </Link>
          <Link
            to="/register"
            className="w-full sm:w-auto text-xs uppercase font-mono px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 transition-all rounded-xl border border-slate-200 font-bold"
          >
            Register for China Suite
          </Link>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-out-cubic",
      once: true,
      offset: 20,
      delay: 0,
      disable: false,
    });

    preloadImagesInBackground();

    const handleLoad = () => AOS.refresh();
    window.addEventListener("load", handleLoad, { passive: true });
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col justify-between overflow-x-clip w-full max-w-full font-sans">
      <ScrollToTop />
      <Navbar />

      <main className="flex-grow w-full max-w-full overflow-x-clip">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/onboard" element={<Navigate to="/signup" replace />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/account" element={<Navigate to="/dashboard" replace />} />
          <Route path="/services" element={<Navigate to="/#services" replace />} />
          <Route path="/services/*" element={<Navigate to="/#services" replace />} />
          <Route path="/how-we-work" element={<Navigate to="/#how-it-works" replace />} />
          <Route path="/routes" element={<Navigate to="/#services" replace />} />
          <Route path="/track" element={<Navigate to="/#services" replace />} />
          <Route path="/pricing" element={<Navigate to="/#services" replace />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Navigate to="/#contact" replace />} />
          <Route path="/quote" element={<Navigate to="/#services" replace />} />
          <Route path="/start-project" element={<Navigate to="/register" replace />} />
          <Route path="/privacy-policy" element={<PrivacyLegal />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
      <ComplianceNotice />

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-xl border border-[#C9A64A] bg-[#0A2A50] text-[#C9A64A] shadow-lg transition-all hover:bg-[#C9A64A] hover:text-[#0A2A50] cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}

export default App;