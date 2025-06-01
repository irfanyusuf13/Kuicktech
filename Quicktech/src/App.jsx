import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import HowItWorksSection from './components/HowItWorksSection';
import FeaturesSection from './components/FeaturesSection';
import MarketUseCasesSection from './components/MarketUseCasesSection';
import FoundersSection from './components/FounderSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-gray-800"> {/* Atur font default di tailwind.config.js jika perlu */}
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <FeaturesSection />
      <MarketUseCasesSection />
      <FoundersSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;