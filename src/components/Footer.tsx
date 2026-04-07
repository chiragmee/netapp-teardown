export default function Footer() {
  return (
    <footer className="py-16 px-12 mt-24 border-t border-white/5 bg-surface-container-low -mx-8 md:-mx-16">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 w-full max-w-7xl mx-auto">
        <div>
          <h6 className="font-mono text-tertiary text-xl mb-2">NetApp Product Teardown v1.0</h6>
          <p className="font-label text-sm text-on-surface/40 max-w-md">An independent PM product analysis prepared by Chirag Mewara for a Product Manager application at NetApp, Inc. All data sourced from public analyst reports, earnings calls, and customer reviews. April 2026.</p>
        </div>
        <div className="flex flex-wrap gap-8 justify-start md:justify-end font-label text-sm">
          <a className="text-outline hover:text-secondary underline transition-all" href="https://linkedin.com/in/chirag-mewara" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="text-outline hover:text-secondary underline transition-all" href="https://nextleap.app/portfolio/chirag-mewara" target="_blank" rel="noreferrer">Portfolio</a>
          <a className="text-outline hover:text-secondary underline transition-all" href="mailto:chirag.mewara.18@gmail.com">Contact</a>
        </div>
      </div>
    </footer>
  );
}
