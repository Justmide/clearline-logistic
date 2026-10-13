import { Link, useLocation } from "react-router-dom";
import { Package, Plane, Ship, MapPin, Mail, Phone, ShieldCheck, ArrowRight } from "lucide-react";
import logo from "../../assets/logo.jpeg";

const shippingServices = [
  { name: "Air Express · 3–7 days", href: "/#services" },
  { name: "Ocean freight · FCL / LCL", href: "/#services" },
  { name: "Taobao & 1688 consolidation", href: "/#services" },
  { name: "UK customs DDP clearance", href: "/#services" },
  { name: "Amazon FBA & B2B", href: "/#services" },
];

const clientLinks = [
  { name: "Register for China suite", href: "/signup" },
  { name: "Client portal login", href: "/login" },
  { name: "How it works", href: "/#how-it-works" },
  { name: "Why ClearLine", href: "/#why-us" },
  { name: "Rate calculator", href: "/#services" },
  { name: "Track a package", href: "/#services" },
];

// Routes where the footer is hidden entirely
const HIDDEN_ROUTES = ["/login", "/register", "/signup", "/onboard"];

export default function Footer() {
  const location = useLocation();
  const year = new Date().getFullYear();

  // ── Hide footer on auth routes ──────────────────────────
  const shouldHide = HIDDEN_ROUTES.some(
    (route) =>
      location.pathname === route ||
      location.pathname.startsWith(`${route}/`)
  );
  if (shouldHide) return null;

  return (
    <footer className="relative overflow-hidden bg-white text-[#171B22] pt-16 pb-8 border-t border-[#171B22]/10">
      {/* Soft ambient glow */}
      <div
        aria-hidden="true"
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-[0.18] blur-[140px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #FFB00055, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Top grid ───────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-[#171B22]/10" data-aos="fade-up">
          {/* Brand column */}
          <div className="md:col-span-5 space-y-5">
            <Link to="/" className="inline-block" aria-label="ClearLine Express">
              <img
                src={logo}
                alt="ClearLine Express Logistics"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </Link>

            <p className="text-[13px] text-[#171B22]/60 leading-relaxed max-w-sm">
              Dedicated package forwarding and freight between China and the UK. Direct Shenzhen
              air flights, warehouse consolidation, and HMRC-compliant DDP doorstep delivery.
            </p>

            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200">
              <ShieldCheck className="w-3 h-3 text-emerald-600" />
              <span className="font-mono text-[9px] uppercase tracking-[0.14em] font-bold text-emerald-700">
                HMRC DDP compliant · zero hidden fees
              </span>
            </div>

            {/* Contact block */}
            <div className="pt-3 space-y-2">
              <a
                href="mailto:ops@clearlineexpress.com"
                className="group flex items-center gap-2 text-[#171B22]/60 hover:text-[#F45B0B] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#FFB000]" />
                <span className="font-mono text-[10px] uppercase tracking-[0.14em]">
                  ops@clearlineexpress.com
                </span>
              </a>
              <a
                href="tel:+447548643563"
                className="group flex items-center gap-2 text-[#171B22]/60 hover:text-[#F45B0B] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#FFB000]" />
                <span className="font-mono text-[10px] uppercase tracking-[0.14em]">
                  UK · 07548 643 563
                </span>
              </a>
            </div>
          </div>

          {/* Services column */}
          <div className="md:col-span-3">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#171B22]/45 mb-5">
              Shipping services
            </h3>
            <ul className="space-y-3">
              {shippingServices.map((svc) => (
                <li key={svc.name}>
                  <Link
                    to={svc.href}
                    className="group inline-flex items-center gap-1.5 text-[12.5px] text-[#171B22]/75 hover:text-[#F45B0B] transition-colors"
                  >
                    <span className="w-0 h-px bg-[#FFB000] transition-all duration-200 group-hover:w-3" />
                    {svc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Client / tools column */}
          <div className="md:col-span-4">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#171B22]/45 mb-5">
              Client portal & tools
            </h3>
            <ul className="space-y-3 mb-6">
              {clientLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="group inline-flex items-center gap-1.5 text-[12.5px] text-[#171B22]/75 hover:text-[#F45B0B] transition-colors"
                  >
                    <span className="w-0 h-px bg-[#FFB000] transition-all duration-200 group-hover:w-3" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Transit gateways block */}
            <div className="rounded-xl border border-[#171B22]/10 bg-[#F4F5F7] p-4 space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#F45B0B]" />
                <span className="font-mono text-[9px] uppercase tracking-[0.16em] font-bold text-[#171B22]/60">
                  Transit gateways
                </span>
              </div>
              <div className="space-y-1.5 pt-1">
                <div className="flex items-start gap-2">
                  <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#171B22]/40 pt-0.5 w-6 shrink-0">
                    CN
                  </span>
                  <span className="font-mono text-[10px] text-[#171B22]/70 leading-snug">
                    Shenzhen · Guangzhou · Yiwu
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#171B22]/40 pt-0.5 w-6 shrink-0">
                    UK
                  </span>
                  <span className="font-mono text-[10px] text-[#171B22]/70 leading-snug">
                    Heathrow · Felixstowe · Southampton
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom strip ───────────────────────────────────── */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4" data-aos="fade-up">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#171B22]/45 text-center sm:text-left">
            © {year} ClearLine Express Logistics Ltd · All rights reserved
          </p>

          <div className="flex items-center gap-4">
            <Link
              to="/privacy-policy"
              className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#171B22]/45 hover:text-[#F45B0B] transition-colors"
            >
              Privacy
            </Link>
            <span className="w-1 h-1 rounded-full bg-[#171B22]/20" />
            <Link
              to="/terms"
              className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#171B22]/45 hover:text-[#F45B0B] transition-colors"
            >
              Terms of carriage
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}