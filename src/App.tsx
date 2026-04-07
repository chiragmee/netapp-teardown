import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem, { Proof } from './components/ProblemProof';
import Personas, { Market } from './components/PersonasMarket';
import PainPoints, { Gap } from './components/PainPointsGap';
import Solution, { RiceTable } from './components/SolutionRice';
import Metrics, { GtmRisks } from './components/MetricsGtm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <Sidebar />
      <Header />
      <main className="ml-20 md:ml-64 px-8 md:px-16 pt-20">
        <Hero />
        <Problem />
        <Proof />
        <Personas />
        <Market />
        <PainPoints />
        <Gap />
        <Solution />
        <RiceTable />
        <Metrics />
        <GtmRisks />
        <Footer />
      </main>
    </div>
  );
}
