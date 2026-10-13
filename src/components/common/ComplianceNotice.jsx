import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";

export default function ComplianceNotice() {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const consent = localStorage.getItem("hf_site_notice");
    if (!consent) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [location.pathname]);

  const handleAllow = () => {
    localStorage.setItem(
      "hf_site_notice",
      JSON.stringify({ allowed: true, timestamp: new Date().toISOString() })
    );
    setIsVisible(false);
  };

  const handleDeny = () => {
    localStorage.setItem(
      "hf_site_notice",
      JSON.stringify({ allowed: false, timestamp: new Date().toISOString() })
    );
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      role="region"
      aria-label="Privacy and cookies notice"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 animate-in fade-in slide-in-from-bottom-3 duration-200"
    >
      <div className="bg-white text-slate-800 border border-slate-200/90 rounded-xl p-4 sm:p-5 shadow-[0_10px_35px_rgba(0,0,0,0.12)] font-sans">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-slate-900">
              Privacy &amp; Cookies
            </h3>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              We use cookies to analyze website traffic and improve your browsing experience. By clicking "Allow", you consent to our use of cookies.
            </p>
          </div>

          <button
            onClick={handleDeny}
            className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer transition-colors"
            aria-label="Close notice"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* 2 Simple Clean Buttons */}
        <div className="mt-4 flex items-center gap-2.5">
          <button
            onClick={handleAllow}
            className="flex-1 py-2 px-3 bg-[#16304D] hover:bg-[#10181F] text-white text-xs font-medium rounded-lg transition-colors cursor-pointer text-center shadow-2xs"
          >
            Allow
          </button>
          <button
            onClick={handleDeny}
            className="flex-1 py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium rounded-lg transition-colors cursor-pointer text-center border border-slate-200"
          >
            Deny
          </button>
        </div>

        {/* Clean Minimalist Links - Does not hide banner prematurely */}
        <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-500">
          <Link
            to="/privacy-policy"
            className="hover:text-slate-900 underline underline-offset-2"
          >
            Privacy Policy
          </Link>
          <span>·</span>
          <Link
            to="/terms"
            className="hover:text-slate-900 underline underline-offset-2"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </aside>
  );
}
