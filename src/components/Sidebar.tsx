import { AlertCircle, BarChart3, TrendingUp, GitBranch, Lightbulb, Map, Users, Target, ShieldAlert } from 'lucide-react';

const navItems = [
  { id: 'hero', label: 'Overview', icon: BarChart3 },
  { id: 'problem', label: 'The Problem', icon: AlertCircle },
  { id: 'proof', label: 'Proof & Market', icon: TrendingUp },
  { id: 'personas', label: 'User Personas', icon: Users },
  { id: 'painpoints', label: 'Pain Points', icon: ShieldAlert },
  { id: 'solution', label: 'Product Solution', icon: GitBranch },
  { id: 'rice', label: 'RICE Priority', icon: Target },
  { id: 'metrics', label: 'Metrics', icon: Lightbulb },
  { id: 'gtm', label: 'GTM & Risks', icon: Map },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen z-50 flex flex-col py-12 px-6 w-20 md:w-64 border-r border-white/5 bg-surface/80 backdrop-blur-xl">
      <div className="mb-10">
        <h1 className="text-lg font-black tracking-tighter text-primary hidden md:block">The Analyst</h1>
        <p className="text-[10px] font-label uppercase tracking-widest text-outline hidden md:block">NetApp Teardown</p>
      </div>
      <nav className="flex-1 space-y-6 overflow-y-auto">
        {navItems.map((item) => (
          <a key={item.id} href={`#${item.id}`} className="flex items-center space-x-4 text-on-surface/30 hover:text-secondary transition-all group">
            <item.icon className="w-5 h-5 flex-shrink-0 group-hover:drop-shadow-[0_0_8px_rgba(76,214,251,0.6)]" />
            <span className="hidden md:block font-label text-xs uppercase tracking-wider">{item.label}</span>
          </a>
        ))}
      </nav>
      <div className="pt-8 border-t border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-xs font-bold text-on-primary flex-shrink-0">CM</div>
          <div className="hidden md:block">
            <p className="text-xs font-bold">Chirag Mewara</p>
            <p className="text-[10px] text-outline">Assoc. Product Manager</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
