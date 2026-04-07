import { ArrowDown, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

const stats = [
  { value: '$20.6B', label: 'Market Cap (NTAP)' },
  { value: '$6.71B', label: 'Revenue TTM' },
  { value: '$10B', label: 'Revenue Target' },
  { value: '#1', label: 'IDC ESS Market Share' },
  { value: '12,677', label: 'Employees Globally' },
  { value: '98%', label: 'Customer Recommend Rate' },
];

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="section-watermark -left-12 top-0">00</div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-5xl space-y-8">
        <div className="flex flex-wrap gap-3">
          <div className="inline-block px-3 py-1 bg-surface-container border border-outline-variant/30 rounded-lg font-label text-secondary text-sm tracking-widest">PM PRODUCT TEARDOWN · APRIL 2026</div>
          <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/30 rounded-lg font-label text-primary text-sm tracking-widest">NASDAQ: NTAP · GARTNER MQ LEADER 2025</div>
        </div>
        <div>
          <h1 className="text-7xl md:text-9xl font-headline font-extrabold text-on-surface leading-none tracking-tighter">NetApp</h1>
          <h2 className="text-2xl md:text-3xl font-headline text-secondary mt-2">Intelligent Data Infrastructure — A PM's Deep Dive</h2>
        </div>
        <p className="text-on-surface/60 font-body max-w-2xl leading-relaxed">A complete product teardown covering why AI fails at the data layer, where NetApp's gaps are, what should be built next, and the PM lens behind the $10B ambition.</p>
        <div className="flex flex-wrap gap-8 py-8 border-y border-white/5">
          {stats.map((s, i) => (
            <div key={i}>
              <p className="font-mono text-2xl text-primary">{s.value}</p>
              <p className="font-label text-xs uppercase text-outline">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#problem" className="bg-primary-container text-on-primary-container px-8 py-4 font-bold rounded-lg flex items-center justify-center gap-2 hover:brightness-110 transition-all">READ TEARDOWN <ArrowDown className="w-5 h-5" /></a>
          <a href="https://nextleap.app/portfolio/chirag-mewara" target="_blank" rel="noreferrer" className="border border-outline-variant text-on-surface px-8 py-4 font-bold rounded-lg hover:bg-white/5 transition-all flex items-center justify-center gap-2">VIEW PORTFOLIO <ExternalLink className="w-4 h-4" /></a>
        </div>
        <p className="font-label text-xs text-outline uppercase tracking-widest">By <span className="text-secondary">Chirag Mewara</span> · Associate Product Manager · Bengaluru, India</p>
      </motion.div>
      <div className="absolute right-0 bottom-24 opacity-20 pointer-events-none"><div className="w-96 h-96 bg-primary blur-[120px] rounded-full"></div></div>
    </section>
  );
}
