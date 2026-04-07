import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const pipeline = [
  { label: 'Input', value: 'Raw Enterprise Data', bg: 'bg-surface-container', border: 'border-t-2 border-primary' },
  { label: 'Storage OS', value: 'ONTAP', bg: 'bg-primary-container', text: 'text-on-primary-container' },
  { label: 'AI Engine', value: 'AI Data Engine', bg: 'bg-secondary-container', text: 'text-on-secondary-container' },
  { label: 'Compute', value: 'NVIDIA NIM/NeMo', bg: 'bg-surface-bright' },
  { label: 'Method', value: 'RAG Pipeline', bg: 'bg-tertiary-container', text: 'text-on-tertiary-container' },
  { label: 'Output', value: 'AI Insights', bg: 'bg-surface-container', border: 'border-t-2 border-tertiary' },
];

const products = [
  { title: 'ONTAP', gradient: 'from-primary to-primary-container', desc: 'The only storage OS running identically on-prem, AWS FSx, Azure NetApp Files, and Google Cloud NetApp Volumes. One OS. One namespace. Every environment. The foundational moat.' },
  { title: 'BlueXP', gradient: 'from-secondary to-secondary-container', desc: 'The unified control plane — monitors, manages, protects, and auto-remediates across the entire hybrid estate. Current gap: needs an AI co-pilot layer for proactive decision-making.' },
  { title: 'Keystone STaaS', gradient: 'from-tertiary to-tertiary-container', desc: 'Consumption-based AI infrastructure. Pay for what you use. Removes CapEx risk for enterprise AI scaling. The commercial model NetApp needs to win mid-market accounts.' },
];

export default function Solution() {
  return (
    <section id="solution" className="py-32">
      <div className="section-watermark -right-12 top-20">07</div>
      <p className="font-label text-xs uppercase tracking-widest text-secondary mb-4">Section 07</p>
      <h3 className="text-4xl font-headline font-bold mb-4">The Architecture of Intelligent Data</h3>
      <p className="text-on-surface/50 mb-16 max-w-2xl">How NetApp collapses the enterprise AI data pipeline into the storage layer — from raw data to production RAG in one unified stack.</p>
      <div className="flex flex-col md:flex-row items-stretch justify-between gap-2 mb-24 overflow-x-auto">
        {pipeline.map((item, i) => (
          <div key={i} className="flex flex-col md:flex-row items-center gap-2 flex-1">
            <div className={`w-full p-4 rounded-lg text-center ${item.bg} ${item.border || ''} ${item.text || ''}`}>
              <p className={`text-[9px] font-label uppercase mb-1 ${item.text ? 'opacity-70' : 'text-outline'}`}>{item.label}</p>
              <p className="font-bold text-sm">{item.value}</p>
            </div>
            {i < pipeline.length - 1 && <ArrowRight className="text-outline hidden md:block flex-shrink-0" size={16} />}
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {products.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card overflow-hidden rounded-xl">
            <div className={`h-32 bg-gradient-to-br ${item.gradient} p-8 flex items-end`}>
              <h5 className="text-2xl font-bold text-on-primary-container">{item.title}</h5>
            </div>
            <div className="p-8">
              <p className="text-sm text-on-surface/60 leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const riceData = [
  { init: 'AI Readiness Score', reach: 'H', impact: 'H', conf: 'H', effort: 'L', score: '9.2', badge: 'BUILD NOW', badgeColor: 'bg-primary text-on-primary', rowBg: 'bg-primary/5', rationale: 'Free audit product → 10K qualified leads. Every enterprise needs this answer NOW.' },
  { init: 'BlueXP AI Co-Pilot', reach: 'H', impact: 'H', conf: 'M', effort: 'M', score: '7.8', badge: 'BUILD NOW', badgeColor: 'bg-primary text-on-primary', rowBg: 'bg-primary/5', rationale: 'Directly fixes the #1 churn signal. Proactive intelligence inside the control plane.' },
  { init: 'ONTAP for Agents API', reach: 'H', impact: 'H', conf: 'M', effort: 'H', score: '6.4', badge: 'BUILD NOW', badgeColor: 'bg-primary text-on-primary', rowBg: 'bg-primary/5', rationale: 'Captures agentic AI infra market before AWS commoditizes it. 5-year window.' },
  { init: 'Usage-Based AI Pricing', reach: 'M', impact: 'H', conf: 'M', effort: 'H', score: '5.1', badge: 'NEXT 6 MO', badgeColor: 'bg-secondary-container text-on-secondary-container', rowBg: '', rationale: 'Unlocks AI-native startups who will never buy capacity-based storage.' },
  { init: 'Mid-Market Self-Serve Onboarding', reach: 'M', impact: 'M', conf: 'M', effort: 'H', score: '4.2', badge: 'NEXT 12 MO', badgeColor: 'bg-surface-bright text-on-surface', rowBg: '', rationale: 'Pure Storage is winning here. Clock is ticking.' },
  { init: 'NetApp Data Marketplace', reach: 'L', impact: 'H', conf: 'L', effort: 'H', score: '3.1', badge: 'FUTURE', badgeColor: 'bg-outline-variant/30 text-outline', rowBg: '', rationale: 'Platform business model on top of infra. Long-term $1B+ opportunity.' },
];

export function RiceTable() {
  return (
    <section id="rice" className="py-32">
      <p className="font-label text-xs uppercase tracking-widest text-secondary mb-4">Section 08</p>
      <h3 className="text-4xl font-headline font-bold mb-4">6 Ideas. One 12-Month Window.</h3>
      <p className="text-on-surface/50 mb-16 max-w-2xl">RICE prioritisation across the biggest product opportunities. Top 3 highlighted — these are the bets that could move NetApp's AI narrative from "storage company" to "AI infrastructure layer."</p>
      <div className="overflow-hidden border border-outline-variant/20 rounded-xl mb-16">
        <table className="w-full text-left min-w-[700px]">
          <thead>
            <tr className="bg-surface-container text-xs uppercase font-label text-outline">
              <th className="py-4 px-5">Initiative</th>
              <th className="py-4 px-5">R</th>
              <th className="py-4 px-5">I</th>
              <th className="py-4 px-5">C</th>
              <th className="py-4 px-5">E</th>
              <th className="py-4 px-5">Score</th>
              <th className="py-4 px-5">Priority</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {riceData.map((r, i) => (
              <tr key={i} className={`border-b border-white/5 ${r.rowBg}`}>
                <td className="py-5 px-5 font-bold">{r.init}</td>
                <td className="py-5 px-5 font-mono text-xs">{r.reach}</td>
                <td className="py-5 px-5 font-mono text-xs">{r.impact}</td>
                <td className="py-5 px-5 font-mono text-xs">{r.conf}</td>
                <td className="py-5 px-5 font-mono text-xs">{r.effort}</td>
                <td className="py-5 px-5 font-mono font-bold">{r.score}</td>
                <td className="py-5 px-5"><span className={`px-3 py-1 rounded text-[10px] font-bold ${r.badgeColor}`}>{r.badge}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {riceData.slice(0, 3).map((r, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-6 rounded-xl border-t-2 border-t-primary">
            <span className="text-[10px] font-label uppercase text-primary tracking-widest">Top {i + 1} · Build Now</span>
            <h5 className="font-bold text-lg mt-2 mb-3">{r.init}</h5>
            <p className="text-sm text-on-surface/60">{r.rationale}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
