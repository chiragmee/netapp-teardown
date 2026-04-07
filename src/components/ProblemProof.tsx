import { AlertTriangle, Database, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function Problem() {
  return (
    <section id="problem" className="py-32 relative">
      <div className="section-watermark -right-12 top-20">01</div>
      <p className="font-label text-xs uppercase tracking-widest text-secondary mb-4">Section 01</p>
      <h3 className="text-4xl font-headline font-bold mb-4">Why AI Fails at the Data Layer</h3>
      <p className="text-on-surface/50 mb-16 max-w-2xl">The problem isn't the model. It's never been the model. It's the data sitting behind 3 clouds, 5 tools, and zero governance.</p>
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card p-10 rounded-xl space-y-6 border-l-4 border-l-error">
          <AlertTriangle className="text-error w-10 h-10" />
          <h4 className="text-2xl font-bold">Enterprise User Side</h4>
          <ul className="space-y-3 text-on-surface/70 text-sm">
            <li className="flex gap-3"><span className="text-error mt-1">✗</span>Data fragmented across AWS, Azure, GCP and on-prem with no unified view or namespace</li>
            <li className="flex gap-3"><span className="text-error mt-1">✗</span>AI pipelines break on ungoverned, unstructured data — 80% of data scientist time lost to prep</li>
            <li className="flex gap-3"><span className="text-error mt-1">✗</span>Cloud-native storage (S3, Blob) lacks enterprise governance, ransomware protection, and NFS/SMB protocol support for legacy workloads</li>
            <li className="flex gap-3"><span className="text-error mt-1">✗</span>Enterprises can't run AI on fragmented data — RAG pipelines require unified, low-latency, governed data access</li>
          </ul>
          <div className="bg-surface-container-lowest p-4 rounded-lg">
            <p className="font-mono text-4xl text-error">88–95%</p>
            <p className="font-label text-xs text-outline uppercase">of enterprise AI pilots never reach production</p>
            <p className="text-[10px] text-outline mt-1">Source: MIT Report 2025 / McKinsey State of AI 2024</p>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card p-10 rounded-xl space-y-6 border-l-4 border-l-primary">
          <Database className="text-primary w-10 h-10" />
          <h4 className="text-2xl font-bold">What ONTAP Fills</h4>
          <ul className="space-y-3 text-on-surface/70 text-sm">
            <li className="flex gap-3"><CheckCircle className="text-tertiary w-4 h-4 mt-1 flex-shrink-0" />One OS (ONTAP) running identically on-prem, AWS FSx, Azure NetApp Files, and Google Cloud NetApp Volumes</li>
            <li className="flex gap-3"><CheckCircle className="text-tertiary w-4 h-4 mt-1 flex-shrink-0" />AI Data Engine collapses data discovery, curation, vectorization, and guardrails into the storage layer itself</li>
            <li className="flex gap-3"><CheckCircle className="text-tertiary w-4 h-4 mt-1 flex-shrink-0" />BlueXP provides a single control plane for visibility, protection, and auto-remediation across the entire hybrid estate</li>
            <li className="flex gap-3"><CheckCircle className="text-tertiary w-4 h-4 mt-1 flex-shrink-0" />Only enterprise storage natively embedded in all 3 hyperscalers simultaneously — no competitor replicates this</li>
          </ul>
          <div className="bg-primary/10 border border-primary/20 p-4 rounded-lg">
            <p className="text-primary font-label text-xs uppercase font-bold mb-1">NetApp's Unique Moat</p>
            <p className="text-sm text-on-surface/70">"ONTAP is the only storage OS that treats on-prem and all 3 clouds as one unified data estate."</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Proof() {
  return (
    <section id="proof" className="py-32 bg-surface-container-low -mx-8 md:-mx-16 px-8 md:px-16">
      <div className="section-watermark -left-12 top-20">02</div>
      <p className="font-label text-xs uppercase tracking-widest text-secondary mb-4">Section 02</p>
      <h3 className="text-4xl font-headline font-bold mb-16">The Data Doesn't Lie</h3>
      <div className="grid md:grid-cols-3 gap-8 mb-24">
        {[
          { num: '95%', label: 'of GenAI pilots fail to reach production', src: 'MIT / McKinsey 2025', color: 'text-error' },
          { num: '$394B', label: 'AI Infrastructure market size by 2030', src: 'MarketsandMarkets', color: 'text-primary' },
          { num: '72%', label: 'of CDOs cite data readiness as their #1 AI blocker', src: 'Evanta CDAO Survey 2024', color: 'text-secondary' },
        ].map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-8 border border-outline-variant/20 rounded-xl bg-surface">
            <p className={`font-mono text-5xl mb-2 ${s.color}`}>{s.num}</p>
            <p className="text-sm font-label text-on-surface/70 mb-2">{s.label}</p>
            <span className="text-[10px] bg-outline-variant/20 text-outline px-2 py-1 rounded font-mono">{s.src}</span>
          </motion.div>
        ))}
      </div>
      <div className="relative py-12">
        <h4 className="font-label text-xs uppercase tracking-widest text-outline mb-8">The Critical Gap: Production Never Happens</h4>
        <div className="h-2 w-full bg-outline-variant/20 rounded-full relative">
          <div className="absolute left-0 top-0 h-full w-1/4 bg-tertiary rounded-l-full"></div>
          <div className="absolute left-1/4 top-0 h-full w-1/4 bg-secondary"></div>
          <div className="absolute left-2/4 top-0 h-full w-1/4 bg-error shadow-[0_0_15px_#ffb4ab]"></div>
          <div className="absolute left-3/4 top-0 h-full w-1/4 bg-outline-variant/30 rounded-r-full"></div>
        </div>
        <div className="grid grid-cols-4 mt-4 text-[10px] font-label uppercase tracking-widest">
          <div className="text-tertiary">Inception & POC</div>
          <div className="text-secondary text-center">Data Prep Hell</div>
          <div className="text-error text-center">The Bottleneck ← NetApp plays here</div>
          <div className="text-outline text-right">Production Scale</div>
        </div>
      </div>
    </section>
  );
}
