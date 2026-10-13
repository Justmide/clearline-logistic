import { Link } from "react-router-dom";
import { Plane, Ship, Package, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

const facts = [
  { label: "Specialty", value: "China ➔ UK Logistics Corridor" },
  { label: "China Hubs", value: "Shenzhen, Guangzhou, Yiwu" },
  { label: "UK Hubs", value: "London Heathrow & Felixstowe" },
  { label: "Customs Clearance", value: "100% HMRC DDP Compliant" },
];

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans pt-28 sm:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#825E12] font-semibold bg-[#C9A64A]/15 px-3 py-1 rounded-full border border-[#C9A64A]/30">
            About ClearLine Express
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0A2A50] font-sans mt-3 tracking-tight">
            Connecting Chinese Factories Directly to UK Doorsteps.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            ClearLine Express is a specialized freight forwarding and package moving company operating the dedicated trade lane between China and the United Kingdom.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-slate-700 leading-relaxed">
            <p>
              Founded to remove friction from cross-border shopping and commercial supply chains, ClearLine provides British consumers, Amazon sellers, and independent retailers with seamless access to Chinese suppliers (Taobao, 1688, JD, and manufacturing factories).
            </p>
            <p>
              We solve the core challenges of international parcel moving:
            </p>
            <ul className="space-y-2.5 text-sm text-slate-700 list-none pl-0">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Volumetric Weight Reduction:</strong> Free unpacking of bulky supplier outer boxes and vacuum consolidation to cut air freight expenses by up to 50%.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Delivered Duty Paid (DDP):</strong> We settle UK customs VAT and duties in advance so packages arrive without royal mail £12 collection fees or postal holding delays.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Full Transparency:</strong> English and Chinese tracking support with milestone notifications from Shenzhen warehouse receipt to domestic courier dispatch.</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-5 bg-[#F8FAFC] border border-slate-200/90 rounded-2xl p-6 sm:p-8 space-y-6">
            <h3 className="font-bold text-lg text-[#0A2A50]">
              Key Infrastructure Facts
            </h3>
            <div className="space-y-4">
              {facts.map((f, i) => (
                <div key={i} className="bg-white p-4 rounded-xl border border-slate-100 shadow-2xs">
                  <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1">
                    {f.label}
                  </span>
                  <span className="font-bold text-sm text-[#0A2A50] font-mono">
                    {f.value}
                  </span>
                </div>
              ))}
            </div>

            <Link
              to="/register"
              className="w-full py-3.5 px-4 bg-[#0A2A50] hover:bg-[#163E70] text-white rounded-xl text-xs font-mono uppercase tracking-wider font-semibold flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              Get Your Free China Suite Address
              <ArrowRight className="w-4 h-4 text-[#C9A64A]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}