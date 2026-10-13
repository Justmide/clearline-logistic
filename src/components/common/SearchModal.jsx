import { useState, useEffect, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  X,
  Plane,
  Ship,
  Package,
  ShieldCheck,
  UserPlus,
  LogIn,
  Calculator,
  MapPin,
  ChevronRight,
  Clock,
  Sparkles,
} from "lucide-react";

export const searchIndex = [
  {
    id: "action-register",
    title: "Register for Free China Receiving Suite",
    category: "Portal",
    icon: UserPlus,
    href: "/register",
    tag: "Instant Suite ID",
    desc: "Create an account to receive your personalized Shenzhen & Guangzhou warehouse shipping address.",
    keywords: ["register", "sign up", "suite", "china address", "account", "new user"],
    featured: true,
  },
  {
    id: "action-login",
    title: "Client Portal Login",
    category: "Portal",
    icon: LogIn,
    href: "/login",
    tag: "Track & Manage",
    desc: "Sign in to track your parcels, pre-alert incoming packages, and manage UK deliveries.",
    keywords: ["login", "sign in", "portal", "account", "my packages", "dashboard"],
    featured: true,
  },
  {
    id: "service-air",
    title: "Air Express Courier (3–7 Days)",
    category: "Services",
    icon: Plane,
    href: "/#services",
    tag: "Fastest Transit",
    desc: "Direct daily air cargo from Shenzhen/Guangzhou to London Heathrow with DDP customs clearance.",
    keywords: ["air freight", "air express", "courier", "fast shipping", "heathrow", "planes"],
    featured: true,
  },
  {
    id: "service-sea",
    title: "Ocean Freight & Container Shipping (FCL/LCL)",
    category: "Services",
    icon: Ship,
    href: "/#services",
    tag: "Economy / Bulk",
    desc: "Economical ocean shipping from Ningbo, Shanghai, or Shenzhen into Port of Felixstowe & Southampton.",
    keywords: ["sea freight", "ocean cargo", "container", "fcl", "lcl", "felixstowe", "southampton"],
    featured: true,
  },
  {
    id: "service-consolidation",
    title: "Taobao, 1688 & JD Package Consolidation",
    category: "Services",
    icon: Package,
    href: "/#services",
    tag: "Save 40–60%",
    desc: "Combine multiple merchant boxes into one reinforced box. Free inspection & HD photo verification.",
    keywords: ["consolidation", "repacking", "taobao", "1688", "weidian", "jd", "combine parcels"],
    featured: true,
  },
  {
    id: "service-ddp",
    title: "UK Customs Clearance & DDP Service",
    category: "Customs",
    icon: ShieldCheck,
    href: "/#services",
    tag: "100% Tax-Paid",
    desc: "Full HMRC import duty & VAT clearance in advance — zero surprise post office handling charges.",
    keywords: ["customs", "ddp", "duty", "vat", "hmrc", "clearance", "taxes"],
  },
  {
    id: "tool-calc",
    title: "Shipping Rate Calculator",
    category: "Tools",
    icon: Calculator,
    href: "/#services",
    tag: "Instant Quote",
    desc: "Estimate China to UK air express and ocean cargo costs based on weight and goods classification.",
    keywords: ["calculator", "rates", "quote", "cost", "price", "how much", "estimate"],
  },
  {
    id: "route-shenzhen",
    title: "Shenzhen Bao'an Transit Hub",
    category: "Network",
    icon: MapPin,
    href: "/#about",
    tag: "China Receiving",
    desc: "Our primary Guangdong package intake hub with automated weigh scales and daily flight manifests.",
    keywords: ["shenzhen", "warehouse", "guangdong", "baoan", "address"],
  },
  {
    id: "route-london",
    title: "London Heathrow UK Fulfillment Hub",
    category: "Network",
    icon: MapPin,
    href: "/#about",
    tag: "UK Distribution",
    desc: "Fast customs clearance and direct handover to DPD UK and Royal Mail Tracked for last-mile delivery.",
    keywords: ["heathrow", "london", "dpd", "royal mail", "doorstep", "delivery"],
  },
];

export default function SearchModal({ isOpen, onClose }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Keyboard shortcut listener (Cmd/Ctrl + K and Escape)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return searchIndex.filter((item) => item.featured);

    return searchIndex.filter((item) => {
      return (
        item.title.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.keywords.some((kw) => kw.toLowerCase().includes(q))
      );
    });
  }, [query]);

  const handleSelect = (item) => {
    onClose();
    if (item.href.startsWith("/#")) {
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector(item.href.replace("/", ""));
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      navigate(item.href);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-100 flex items-center gap-3">
          <Search className="w-5 h-5 text-[#C9A64A] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search China → UK shipping services, tracking, rates, or login..."
            className="w-full text-sm sm:text-base outline-none bg-transparent text-slate-900 placeholder:text-slate-400 font-sans"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-1">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-xs font-mono text-slate-400">
              No matching shipping services or tools found for &ldquo;{query}&rdquo;.
            </div>
          ) : (
            filtered.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  className={`p-3.5 rounded-xl cursor-pointer transition-all flex items-center justify-between gap-3 ${
                    index === selectedIndex
                      ? "bg-[#0A2A50]/5 border border-[#0A2A50]/15"
                      : "hover:bg-slate-50 border border-transparent"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#0A2A50]/10 text-[#0A2A50] flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-[#C9A64A]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-[#0A2A50] font-sans">
                          {item.title}
                        </span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-slate-100 text-slate-600">
                          {item.tag}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span>ClearLine Express Search &amp; Directory</span>
          <div className="flex items-center gap-2">
            <span>Esc to close</span>
          </div>
        </div>
      </div>
    </div>
  );
}