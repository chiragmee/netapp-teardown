import { Users, Handshake, Zap } from 'lucide-react';
import { motion } from 'motion/react';

const aarrr = [
  { label: 'Acquisition', color: 'border-primary', items: ['New enterprise pipeline (quarterly)', '% sourced via cloud marketplace vs direct', 'Partner-sourced pipeline %', 'MQL → SQL conversion rate'] },
  { label: 'Activation', color: 'border-secondary', items: ['Days from contract → first ONTAP workload live', 'BlueXP connector deployed successfully (%)', 'First AI Data Engine pipeline executed', 'Time-to-first-value < 30 days target'] },
  { label: 'Retention', color: 'border-tertiary', items: ['Weekly active BlueXP logins per account', 'Support ticket volume (leading churn signal)', 'Quarterly active storage utilization trend', 'Churn rate < 2% target'] },
  { label: 'Revenue', color: 'border-secondary-container', items: ['Product vs Subscription vs Support split', 'Keystone STaaS ACV growth', 'Cloud volume revenue (AWS/Azure/GCP)', 'Net Revenue Retention (NRR)'] },
  { label: 'Expansion', color: 'border-primary-container', items: ['New cloud regions added per existing account', 'AFF A-Series → AFX upgrade rate', 'ONTAP workload types per account (breadth)', '# of hyperscaler co-sell deals closed'] },
];

const risks = [
  { risk: 'Hyperscaler Builds ONTAP-Equivalent Natively', sev: 'CRITICAL', sevColor: 'text-error', mitigation: 'Double down on NVIDIA partnership + AI Data Engine moat. Differentiate on data services, not storage primitives.' },
  { risk: 'Pure Storage Wins Mid-Market First', sev: 'HIGH', sevColor: 'text-error', mitigation: 'Ship self-serve onboarding + usage-based pricing in next 12 months. Mid-market window is closing fast.' },
  { risk: 'AI Pricing Disrupts Legacy ARR', sev: 'HIGH', sevColor: 'text-error', mitigation: 'Introduce pipeline-run pricing tier in Keystone. Preserve capacity revenue while capturing AI-native buyers.' },
  { risk: 'BlueXP Adoption Continues to Stall', sev: 'MEDIUM', sevColor: 'text-secondary', mitigation: 'AI Co-Pilot inside BlueXP within 12 months. Fix onboarding friction — reduce setup from 12 steps to under 5.' },
  { risk: 'Talent & Product Velocity Gap vs Cloud-Native', sev: 'MEDIUM', sevColor: 'text-secondary', mitigation: 'Acquire a developer-first storage tooling startup. Or build an external developer program around ONTAP APIs.' },
];

export default function Metrics() {
  return (
    <section id="metrics" className="py-32 bg-surface-container-high -mx-8 md:-mx-16 px-8 md:px-16">
      <div className="section-watermark -left-12 top-20">09</div>
      <p className="font-label text-xs uppercase tracking-widest text-secondary mb-4">Section 09</p>
      <div className="mb-16 max-w-3xl">
        <h3 className="text-5xl font-headline font-extrabold mb-4">From Storage Sold to Intelligence Delivered</h3>
        <div className="glass-card p-8 rounded-xl border-l-4 border-secondary mt-8">
          <p className="font-label text-xs uppercase text-outline mb-2">North Star Metric</p>
          <p className="text-2xl font-bold text-secondary mb-2"># of Enterprise AI Workloads Running in Production on NetApp Infrastructure / Quarter</p>
          <p className="text-sm text-on-surface/50">Not terabytes sold. Not licenses renewed. Not POCs launched. AI workloads shipped to production — the only metric that proves NetApp has moved from storage vendor to AI infrastructure layer.</p>
        </div>
      </div>
      <div className="grid md:grid-cols-5 gap-4">
        {aarrr.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`bg-surface p-6 rounded-xl border-t-2 ${item.color}`}>
            <p className="text-[10px] font-label text-outline uppercase mb-4 tracking-widest">{item.label}</p>
            <ul className="space-y-3">
              {item.items.map((metric, j) => (
                <li key={j} className="font-mono text-xs text-on-surface/70 border-b border-white/5 pb-2">{metric}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function GtmRisks() {
  return (
    <section id="gtm" className="py-32">
      <div className="section-watermark -right-12 top-20">10</div>
      <p className="font-label text-xs uppercase tracking-widest text-secondary mb-4">Section 10</p>
      <h3 className="text-4xl font-headline font-bold mb-16">GTM Strategy & Risk Matrix</h3>
      <div className="grid md:grid-cols-3 gap-8 mb-24">
        {[
          { icon: Users, title: 'Direct Enterprise', desc: 'Named accounts, white-glove CISO relationships, executive-level QBRs. 70% of current revenue. Needs AI outcomes narrative — sell data intelligence, not gigabytes.', color: 'text-primary' },
          { icon: Handshake, title: 'Hyperscaler Co-Sell', desc: 'AWS FSx for ONTAP, Azure NetApp Files, Google Cloud NetApp Volumes co-sell agreements. Every cloud win is a NetApp win. Deepening NVIDIA partnership for AI pipeline deals.', color: 'text-secondary' },
          { icon: Zap, title: 'Product-Led Growth', desc: 'Free-tier BlueXP monitoring as the hook for DevOps and MLOps teams. AI Readiness Score as a freemium entry product generating qualified pipeline. Mid-market self-serve — unbuilt but critical.', color: 'text-tertiary' },
        ].map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="glass-card p-8 rounded-xl">
            <item.icon className={`${item.color} mb-4 w-8 h-8`} />
            <h5 className="text-xl font-bold mb-3">{item.title}</h5>
            <p className="text-sm text-on-surface/60 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
      <h4 className="text-2xl font-bold mb-8">Risk Matrix — Next 24 Months</h4>
      <div className="overflow-hidden border border-outline-variant/20 rounded-xl">
        <table className="w-full text-left min-w-[600px]">
          <thead className="bg-surface-container">
            <tr className="text-xs font-label uppercase text-outline">
              <th className="py-4 px-6">Risk</th>
              <th className="py-4 px-6">Severity</th>
              <th className="py-4 px-6">Mitigation</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {risks.map((r, i) => (
              <tr key={i} className={`border-b border-white/5 ${i % 2 === 0 ? 'bg-surface-container/20' : ''}`}>
                <td className="py-5 px-6 font-bold text-on-surface/80">{r.risk}</td>
                <td className={`py-5 px-6 font-bold ${r.sevColor}`}>{r.sev}</td>
                <td className="py-5 px-6 text-on-surface/60 text-xs leading-relaxed">{r.mitigation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
