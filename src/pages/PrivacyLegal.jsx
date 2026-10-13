import { Link } from "react-router-dom";
import { ChevronRight, ShieldCheck } from "lucide-react";

export default function PrivacyLegal() {
  const lastUpdated = "October 2026";

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans pt-24 sm:pt-28 pb-20">
      {/* Breadcrumb Navigation */}
      <div className="border-b border-slate-100 bg-slate-50/70 py-3">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs font-mono uppercase text-slate-500">
          <Link to="/" className="hover:text-[#0A2A50]">Home</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-[#825E12] font-semibold">Privacy Policy</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <span className="text-xs uppercase text-[#825E12] font-mono font-bold tracking-widest block">
          UK GDPR &amp; Logistics Data Protection
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#0A2A50] mt-2 mb-4">
          Privacy Policy
        </h1>
        <p className="font-mono text-xs text-slate-500 mb-10 pb-6 border-b border-slate-100">
          Effective Date: {lastUpdated} · ClearLine Express Logistics Ltd (United Kingdom)
        </p>

        <div className="space-y-10 text-sm sm:text-base text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold uppercase text-[#0A2A50] mb-3 font-sans">
              1. Information We Collect
            </h2>
            <p className="mb-3">
              ClearLine Express Logistics Ltd (&ldquo;ClearLine Express&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) respects your personal data privacy under the UK General Data Protection Regulation (UK GDPR) and Data Protection Act 2018. When you use our shipping portal, we collect:
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-600 pl-2 text-xs sm:text-sm">
              <li><strong>Contact &amp; Account Data:</strong> Full name, email address, password hash, phone number for delivery notifications.</li>
              <li><strong>Delivery Information:</strong> UK destination street address, postal code, recipient identity for customs declaration.</li>
              <li><strong>Shipment Details:</strong> Parcel tracking codes, item descriptions, declared customs value, weights, and dimensions.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase text-[#0A2A50] mb-3 font-sans">
              2. How We Use Your Shipping Data
            </h2>
            <p className="mb-3">
              We process personal data strictly to fulfill package forwarding, customs clearance, and courier carriage:
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-600 pl-2 text-xs sm:text-sm">
              <li>To receive, inspect, store, and consolidate packages at our Shenzhen and Guangzhou receiving hubs.</li>
              <li>To submit electronic import customs declarations to HM Revenue &amp; Customs (HMRC) under DDP terms.</li>
              <li>To dispatch and track domestic last-mile deliveries with courier partners (DPD UK, Royal Mail, FedEx UK).</li>
              <li>To provide real-time shipment milestone SMS and email notifications.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase text-[#0A2A50] mb-3 font-sans">
              3. Data Sharing &amp; Third Parties
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              We never sell or trade your data. Data is shared exclusively with necessary operational partners: UK Customs (HMRC), licensed airlines, port terminals, and domestic courier delivery networks to fulfill transportation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase text-[#0A2A50] mb-3 font-sans">
              4. Contact Our Operations Team
            </h2>
            <div className="p-5 bg-[#0A2A50] text-white rounded-xl font-mono text-xs space-y-1.5">
              <p className="font-bold text-[#C9A64A] text-sm">ClearLine Express Logistics Ltd</p>
              <p>Email: ops@clearlineexpress.com</p>
              <p>UK Operations: +44 20 7946 0123</p>
              <p>Website: https://www.clearlineexpress.com</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
