import { motion } from 'motion/react';

const painPoints = [
  { title: 'BlueXP Connector Instability', tag: 'CRITICAL', tagColor: 'text-error bg-error/20', desc: 'Connector goes down on network disruptions with no graceful degradation — full loss of control plane visibility. Reported in NetApp KB and PeerSpot.', src: 'NetApp KB / PeerSpot' },
  { title: 'Dashboard Query Builder', tag: 'HIGH', tagColor: 'text-error bg-error/20', desc: '"The field labels are not intuitive. Building a useful dashboard requires an in-house developer." Cloud Insights makes basic chargeback reporting require SQL-level effort.', src: 'Gartner Peer Insights' },
  { title: 'Keystone Pricing Opacity', tag: 'CRITICAL', tagColor: 'text-error bg-error/20', desc: 'Capacity-based licensing cannot be forecast as AI workloads scale. Customers cannot predict bills — the biggest commercial friction in enterprise renewals.', src: 'PeerSpot Reviews' },
  { title: 'BlueXP Onboarding Complexity', tag: 'HIGH', tagColor: 'text-secondary bg-secondary/20', desc: '"Even with NetApp reps present, the connector setup failed on first attempt." 12+ step setup process creates a long time-to-value gap before any product benefit is visible.', src: 'G2 Reviews' },
  { title: 'Native Vector Search Missing', tag: 'OPPORTUNITY', tagColor: 'text-primary bg-primary/20', desc: 'Integrating vector DBs directly into ONTAP would collapse a key step in the RAG pipeline. Currently enterprises must bolt on Pinecone or Weaviate externally.', src: 'PM Analysis', border: 'border-t-2 border-t-primary' },
];

export default function PainPoints() {
  return (
    <section id="painpoints" className="py-32 bg-surface-container-lowest -mx-8 md:-mx-16 px-8 md:px-16">
      <div className="section-watermark -right-12 top-20">05</div>
      <p className="font-label text-xs uppercase tracking-widest text-secondary mb-4">Section 05</p>
      <h3 className="text-4xl font-headline font-bold mb-4">Real Friction. Real Quotes.</h3>
      <p className="text-on-surface/50 mb-16 max-w-2xl">Sourced from Gartner Peer Insights, G2, PeerSpot, and NetApp's own knowledge base. This is what customers say when nobody from NetApp is in the room.</p>
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
        {painPoints.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`glass-card p-6 rounded-xl flex flex-col justify-between min-h-64 ${item.border || ''}`}>
            <div>
              <span className={`px-2 py-1 ${item.tagColor} text-[10px] font-bold rounded mb-3 inline-block`}>{item.tag}</span>
              <h6 className="font-bold text-base mb-3">{item.title}</h6>
              <p className="text-xs text-on-surface/60 leading-relaxed italic">"{item.desc}"</p>
            </div>
            <span className="text-[10px] bg-outline-variant/20 text-outline px-2 py-1 rounded font-mono mt-4 self-start">{item.src}</span>
          </motion.div>
        ))}
      </div>
      <div className="space-y-3">
        <p className="font-label text-xs uppercase text-outline">Customer Friction Journey Map</p>
        <div className="h-2 w-full bg-outline-variant/10 rounded-full flex overflow-hidden">
          <div className="h-full w-1/4 bg-tertiary"></div>
          <div className="h-full w-1/4 bg-secondary"></div>
          <div className="h-full w-1/4 bg-error shadow-[0_0_10px_#D62828]"></div>
          <div className="h-full w-1/4 bg-primary"></div>
        </div>
        <div className="flex justify-between text-[10px] font-mono text-outline">
          <span>DISCOVERY</span><span>PURCHASE</span><span className="text-error font-bold">ONBOARDING ← TRUST LOST HERE</span><span>SCALE</span>
        </div>
      </div>
    </section>
  );
}

const competitors = [
  { cap: 'Hybrid Cloud Mobility', pure: '⚠ Limited', aws: '✗ Native Only', netapp: '✓ Seamless', cohesity: '✗ Backup Only' },
  { cap: 'AI Data Management', pure: '✓ Strong (AIRI)', aws: '⚠ Tool-Dependent', netapp: '✓ AI Data Engine', cohesity: '✗ Meta Only' },
  { cap: 'Multi-Protocol (NFS/SMB/S3)', pure: '⚠ Partial', aws: '✗ S3 Only', netapp: '✓ Native All', cohesity: '✗ No' },
  { cap: 'Ransomware Protection', pure: '⚠ Separate Tool', aws: '✗ Add-On', netapp: '✓ ARP/AI Bundled', cohesity: '✓ Strong' },
  { cap: 'Developer / API Ergonomics', pure: '✓ REST-first', aws: '✓ SDK-native', netapp: '⚠ Improving', cohesity: '⚠ Limited' },
  { cap: 'Mid-Market Accessibility', pure: '✓ Self-serve', aws: '✓ Pay-as-you-go', netapp: '✗ Complex onboard', cohesity: '⚠ Enterprise focus' },
];

export function Gap() {
  return (
    <section id="gap" className="py-32 relative">
      <div className="section-watermark -left-12 top-20">06</div>
      <p className="font-label text-xs uppercase tracking-widest text-secondary mb-4">Section 06</p>
      <h3 className="text-4xl font-headline font-bold mb-16">The Competitive Landscape</h3>
      <div className="overflow-x-auto mb-16">
        <table className="w-full text-left min-w-[700px]">
          <thead>
            <tr className="border-b border-white/10 text-outline text-xs uppercase font-label">
              <th className="py-4 px-4">Capability</th>
              <th className="py-4 px-4">Pure Storage</th>
              <th className="py-4 px-4">AWS Native</th>
              <th className="py-4 px-4 text-secondary">NetApp</th>
              <th className="py-4 px-4">Cohesity</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {competitors.map((row, i) => (
              <tr key={i} className={`border-b border-white/5 hover:bg-white/5 transition-colors ${i % 2 === 0 ? 'bg-surface-container/20' : ''}`}>
                <td className="py-4 px-4 font-bold text-on-surface/80">{row.cap}</td>
                <td className="py-4 px-4 text-on-surface/50">{row.pure}</td>
                <td className="py-4 px-4 text-on-surface/50">{row.aws}</td>
                <td className="py-4 px-4 text-tertiary font-bold">{row.netapp}</td>
                <td className="py-4 px-4 text-on-surface/50">{row.cohesity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="glass-card p-12 rounded-xl border-2 border-dashed border-primary/40 text-center">
        <p className="text-primary font-label uppercase tracking-widest text-sm mb-4">The Strategic Void</p>
        <h4 className="text-3xl font-headline font-bold mb-6">"The Unbuilt Product"</h4>
        <p className="max-w-2xl mx-auto text-on-surface/60 leading-relaxed">A developer-first, API-native, self-serve ONTAP onboarding experience for AI-first teams — with usage-based pricing, vector DB integration, and a 30-minute time-to-first-value. Pure Storage is heading there. AWS is building around it. NetApp hasn't shipped it yet. This is the $10B gap.</p>
      </motion.div>
    </section>
  );
}
