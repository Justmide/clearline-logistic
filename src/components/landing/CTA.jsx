import { ArrowRight, Package, UserPlus, PhoneCall, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section id="contact" className="bg-[#0B1320] text-white py-14 sm:py-20 border-t border-slate-800 paint-deferred">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Chip */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-5 font-mono text-[10px] uppercase font-bold text-slate-300">
          <Package className="w-3 h-3 text-[#FFB000]" />
          Instant Setup
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
          Ready to Ship from China to the UK?
        </h2>

        <p className="mt-2.5 text-sm sm:text-base text-slate-300 max-w-lg mx-auto">
          Create a free account in 30 seconds to get your personal Shenzhen warehouse suite.
        </p>

        {/* Action Buttons */}
        <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/signup"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#FFB000] hover:bg-[#F45B0B] active:scale-[0.98] text-[#0B1320] hover:text-white font-mono text-xs font-bold uppercase tracking-wider transition-all"
          >
            <UserPlus className="w-4 h-4" />
            Get Free China Suite
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            to="/login"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 active:scale-[0.98] bg-white/5 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all"
          >
            Client Portal Login
          </Link>
        </div>

        {/* Contact Strip */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-slate-400">
          <a
            href="mailto:ops@clearlineexpress.com"
            className="inline-flex items-center gap-2 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#FFB000]" />
            <span>ops@clearlineexpress.com</span>
          </a>

          <a
            href="tel:+447548643563"
            className="inline-flex items-center gap-2 hover:text-white transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#FFB000]" />
            <span>UK Desk · +44 7548 643 563</span>
          </a>
        </div>
      </div>
    </section>
  );
}
