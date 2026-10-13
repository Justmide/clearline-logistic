import { ArrowRight, Package, UserPlus, PhoneCall, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#171B22] text-white py-20 sm:py-28"
    >
      {/* Ambient glows */}
      <div
        aria-hidden="true"
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[450px] rounded-full opacity-30 blur-[140px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #FFB00055, transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 right-0 w-[500px] h-[400px] rounded-full opacity-25 blur-[140px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #F45B0B44, transparent 70%)" }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Chip */}
        <div className="flex justify-center mb-8" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md">
            <Package className="w-3 h-3 text-[#FFB000]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
              Start moving today
            </span>
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-[34px] sm:text-[44px] lg:text-[52px] font-extrabold tracking-[-0.03em] leading-[1.02] text-white" data-aos="fade-up" data-aos-delay="50">
          Ready to ship from China
          <br />
          <span className="relative inline-block">
            <span className="relative z-10">without the hassle?</span>
            <span
              aria-hidden="true"
              className="absolute left-0 right-0 bottom-[0.08em] h-[0.32em] bg-[#FFB000]/40 -skew-x-6 -z-0"
            />
          </span>
        </h2>

        {/* Sub */}
        <p className="mt-5 text-[15px] sm:text-base text-white/60 leading-relaxed max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Create a free account in 30 seconds to get your personal Shenzhen warehouse suite — or
          talk to our London team directly.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3" data-aos="fade-up" data-aos-delay="150">
          <Link
            to="/signup"
            className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#FFB000] hover:bg-[#F45B0B] text-[#171B22] hover:text-white font-mono text-[11px] font-bold uppercase tracking-[0.14em] transition-all duration-200 shadow-[0_8px_30px_-8px_rgba(255,176,0,0.6)] hover:shadow-[0_12px_36px_-8px_rgba(244,91,11,0.6)]"
          >
            <UserPlus className="w-4 h-4" />
            Get your free China suite
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            to="/login"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-xl border border-white/15 hover:border-white/30 bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-md text-white font-mono text-[11px] font-bold uppercase tracking-[0.14em] transition-all duration-200"
          >
            Client portal sign in
          </Link>
        </div>

        {/* Contact strip */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4" data-aos="fade-up" data-aos-delay="200">
          <a
            href="mailto:ops@clearlineexpress.com"
            className="group inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#FFB000]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.16em]">
              ops@clearlineexpress.com
            </span>
          </a>

          <span className="hidden sm:block w-px h-4 bg-white/15" />

          <a
            href="tel:+447548643563"
            className="group inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#FFB000]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.16em]">
              UK desk · +44 7548 643 563
            </span>
          </a>

          {/* <span className="hidden sm:block w-px h-4 bg-white/15" />

          <span className="inline-flex items-center gap-2 text-white/60">
            <PhoneCall className="w-3.5 h-3.5 text-[#FFB000]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.16em]">
              Shenzhen hub · +86 138 2345 6789
            </span>
          </span> */}
        </div>
      </div>
    </section>
  );
}