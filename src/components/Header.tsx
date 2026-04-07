import { Share2, Linkedin } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 right-0 w-[calc(100%-5rem)] md:w-[calc(100%-16rem)] z-40 flex justify-between items-center px-8 md:px-12 h-20 bg-surface/80 backdrop-blur-xl border-b border-white/5">
      <div className="flex items-center gap-3">
        <span className="text-sm font-bold tracking-widest text-on-surface hidden md:block">NetApp · Product Teardown</span>
        <span className="text-[10px] font-label uppercase text-outline hidden md:block">by Chirag Mewara</span>
      </div>
      <div className="flex items-center gap-6">
        <a href="https://www.linkedin.com/in/chiragmewara/" target="_blank" rel="noreferrer" className="text-on-surface/50 hover:text-secondary transition-colors"><Linkedin className="w-5 h-5" /></a>
        <button onClick={() => navigator.share?.({ title: 'NetApp Product Teardown', url: window.location.href })} className="text-on-surface/50 hover:text-secondary transition-colors"><Share2 className="w-5 h-5" /></button>
        <a href="https://nextleap.app/portfolio/chirag-mewara" target="_blank" rel="noreferrer" className="bg-primary-container text-on-primary-container text-xs font-bold px-4 py-2 rounded-lg hover:brightness-110 transition-all hidden md:block">PORTFOLIO →</a>
      </div>
    </header>
  );
}
