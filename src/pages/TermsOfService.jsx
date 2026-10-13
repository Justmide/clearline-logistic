import { Link } from "react-router-dom";
import { ChevronRight, ShieldCheck, FileCheck2 } from "lucide-react";

export default function TermsOfService() {
  const lastUpdated = "October 2026";

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans pt-24 sm:pt-28 pb-20">
      <div className="border-b border-slate-100 bg-slate-50/70 py-3">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs font-mono uppercase text-slate-500">
          <Link to="/" className="hover:text-[#0A2A50]">Home</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-[#825E12] font-semibold">Terms of Carriage</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <span className="text-xs uppercase text-[#825E12] font-mono font-bold tracking-widest block">
          Freight &amp; Parcel Carriage Agreement
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#0A2A50] mt-2 mb-4">
          Terms of Carriage
        </h1>
        <p className="font-mono text-xs text-slate-500 mb-10 pb-6 border-b border-slate-100">
          Effective Date: {lastUpdated} · ClearLine Express Logistics Ltd
        </p>

        <div className="space-y-10 text-sm sm:text-base text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold uppercase text-[#0A2A50] mb-3 font-sans">
              1. Acceptance of Terms &amp; Scope of Service
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              By registering an account with ClearLine Express Logistics Ltd (&ldquo;ClearLine Express&rdquo;) or shipping parcels to our designated receiving addresses in China (Shenzhen, Guangzhou, Yiwu), you accept these Terms of Carriage. Our service encompasses warehouse receipt, storage, consolidation, export clearance, international freight (air or sea), UK import customs handling, and last-mile UK delivery.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase text-[#0A2A50] mb-3 font-sans">
              2. Warehouse Receiving &amp; Consolidation
            </h2>
            <ul className="list-disc list-inside space-y-1 text-slate-600 pl-2 text-xs sm:text-sm">
              <li><strong>Free 30-Day Storage:</strong> Packages arriving from Chinese merchants are held free of charge for up to 30 calendar days to enable multi-order consolidation.</li>
              <li><strong>Repackaging &amp; Weight Reduction:</strong> Unless specified otherwise, our team removes redundant outer shipping boxes to reduce dimensional volumetric weight.</li>
              <li><strong>Prohibited Items:</strong> Flammable chemicals, illegal substances, and counterfeit goods infringing UK intellectual property cannot be transported.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase text-[#0A2A50] mb-3 font-sans">
              3. Customs Declarations &amp; DDP Terms
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              All quotes provided under Delivered Duty Paid (DDP) include UK customs clearance, VAT, and applicable import duties. Senders must provide accurate item descriptions and declared values upon parcel pre-alert.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase text-[#0A2A50] mb-3 font-sans">
              4. Liability &amp; Transit Protection
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Standard shipments include carrier protection up to £50 per parcel. Optional enhanced cargo insurance is available covering 100% of declared invoice value against total loss or transit damage.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
