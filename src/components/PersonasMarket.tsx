import { Network, Server } from 'lucide-react';
import { motion } from 'motion/react';

export default function Personas() {
  return (
    <section id="personas" className="py-32 relative">
      <div className="section-watermark -left-12 top-20">03</div>
      <p className="font-label text-xs uppercase tracking-widest text-secondary mb-4">Section 03</p>
      <h3 className="text-4xl font-headline font-bold mb-4">Two Sides of the Same Problem</h3>
      <p className="text-on-surface/50 mb-16 max-w-2xl">NetApp serves a two-sided market. Enterprises who need AI-ready data. And a platform that needs those enterprises to be set up right to deliver value.</p>
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-10 rounded-xl border-t-2 border-t-error">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-full bg-error/10 border border-error/20 flex items-center justify-center text-error font-bold text-lg">MT</div>
            <div>
              <h5 className="text-xl font-bold">Marcus T.</h5>
              <p className="text-xs text-outline font-label uppercase">VP Infrastructure · Fortune 500 Financial Services</p>
            </div>
          </div>
          <p className="italic text-on-surface/60 mb-6 leading-relaxed">"I manage 8PB of data across 3 clouds. My team has no single view of any of it. We've been trying to ship our first AI use case for 14 months. The model is ready. The data isn't."</p>
          <div className="space-y-3 mb-6">
            <p className="text-[10px] font-label uppercase text-outline">Top Pain Points</p>
            {['No unified control plane across cloud + on-prem', 'Cloud storage costs are unpredictable at AI scale', 'BlueXP connector failed on first deployment attempt', 'Capacity-based licensing impossible to forecast for AI workloads'].map((p, i) => (
              <div key={i} className="flex gap-3 text-sm text-on-surface/70"><span className="text-error flex-shrink-0">✗</span>{p}</div>
            ))}
          </div>
          <div className="bg-surface-container p-4 rounded-lg">
            <p className="text-[10px] font-label uppercase text-outline mb-2">What "Good" Looks Like</p>
            {['One OS across every environment — no re-architecting', 'AI pipeline live in under 30 days from contract', 'Predictable consumption-based billing'].map((g, i) => (
              <div key={i} className="flex gap-3 text-sm text-tertiary"><span>✓</span>{g}</div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass-card p-10 rounded-xl border-t-2 border-t-primary">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary"><Server className="w-7 h-7" /></div>
            <div>
              <h5 className="text-xl font-bold">NetApp Platform</h5>
              <p className="text-xs text-outline font-label uppercase">The Supply Side · What NetApp Needs to Deliver Value</p>
            </div>
          </div>
          <p className="italic text-on-surface/60 mb-6 leading-relaxed">"We can unify your entire data estate — but we need governance configured, ONTAP deployed, and BlueXP connected before the value is visible. That gap is where we lose customers."</p>
          <div className="space-y-3 mb-6">
            <p className="text-[10px] font-label uppercase text-outline">What NetApp Needs from Customers</p>
            {['Data governance framework defined before deployment', 'Cloud credentials + network config for BlueXP connector', 'ONTAP cluster deployed (on-prem or cloud)', 'Clear AI use case scoped — not just "we want AI"'].map((p, i) => (
              <div key={i} className="flex gap-3 text-sm text-on-surface/70"><span className="text-primary flex-shrink-0">→</span>{p}</div>
            ))}
          </div>
          <div className="bg-error/10 border border-error/20 p-4 rounded-lg">
            <p className="text-[10px] font-label uppercase text-outline mb-2">Biggest Drop-off Point</p>
            <p className="text-sm text-error font-bold">Sold → Value Realized gap averages 6–9 months</p>
            <p className="text-xs text-on-surface/50 mt-1">BlueXP onboarding complexity is the #1 reason. Source: G2 / PeerSpot reviews</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Market() {
  return (
    <section id="market" className="py-32">
      <p className="font-label text-xs uppercase tracking-widest text-secondary mb-4">Section 04</p>
      <h3 className="text-4xl font-headline font-bold mb-16">A Once-in-a-Decade Infrastructure Moment</h3>
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <p className="text-[10px] font-label uppercase text-outline mb-4">Bottom-Up Market Sizing</p>
          {[
            { label: 'TAM: Global Enterprise Storage Market', value: '$82B', color: 'border-primary', bg: 'bg-primary/10', w: 'w-full' },
            { label: 'SAM: AI-Ready Hybrid Multicloud Storage', value: '$28B', color: 'border-secondary', bg: 'bg-secondary/10', w: 'w-4/5 ml-8' },
            { label: 'SOM: NetApp Addressable with Current Products', value: '$8.4B', color: 'border-tertiary', bg: 'bg-tertiary/10', w: 'w-3/5 ml-16' },
          ].map((item, i) => (
            <div key={i} className={`${item.w} h-20 ${item.bg} rounded-xl flex items-center justify-between px-6 border-l-4 ${item.color}`}>
              <span className="font-label text-sm font-bold">{item.label}</span>
              <span className="font-mono text-2xl flex-shrink-0 ml-4">{item.value}</span>
            </div>
          ))}
          <p className="text-sm italic text-on-surface/50 mt-4 border-l-2 border-primary/30 pl-4">"NetApp is already inside the machine. The question is whether it claims the AI layer before AWS builds it natively."</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: 'All-Flash AFF Growth', value: 'Fastest Segment', sub: 'FY2025' },
            { label: 'ESS Market Share', value: '#1 Globally', sub: 'IDC Q3 2025' },
            { label: 'AI Infra CAGR', value: '26.5%', sub: 'Through 2030' },
            { label: 'Cloud Revenue Growth', value: '+22% YoY', sub: 'FY2025' },
            { label: 'Gartner MQ', value: 'Leader', sub: 'Enterprise Storage 2025' },
            { label: 'Customer NPS', value: '98% Recommend', sub: 'Gartner Peer Insights' },
          ].map((s, i) => (
            <div key={i} className="bg-surface-container p-5 rounded-lg">
              <p className="text-[10px] text-outline uppercase font-label mb-1">{s.label}</p>
              <p className="text-xl font-mono text-on-surface font-bold">{s.value}</p>
              <p className="text-[10px] text-outline mt-1">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
