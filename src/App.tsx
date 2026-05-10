import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturesSection } from './components/FeaturesSection';
import { StatsSection } from './components/StatsSection';
import { AudienceSection } from './components/AudienceSection';
import { TechSection } from './components/TechSection';
import { PackageSection } from './components/PackageSection';
import { ProtectionSection } from './components/ProtectionSection';
import { PricingSection } from './components/PricingSection';
import { HowToStart } from './components/HowToStart';
import { FAQSection } from './components/FAQSection';
import { Disclaimer } from './components/Disclaimer';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="bg-background text-on-background antialiased selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow flex flex-col">
        <Hero />
        <div className="section-divider" />
        <FeaturesSection />
        <div className="section-divider" />
        <StatsSection />
        <div className="section-divider" />
        <AudienceSection />
        <div className="section-divider" />
        <TechSection />
        <div className="section-divider" />
        <PackageSection />
        <div className="section-divider" />
        <ProtectionSection />
        <div className="section-divider" />
        <PricingSection />
        <div className="section-divider" />
        <HowToStart />
        <div className="section-divider" />
        <FAQSection />
        <div className="section-divider" />
        <Disclaimer />
      </main>

      <Footer />
    </div>
  );
}
