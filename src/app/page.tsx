import Hero from '@/components/landing/Hero';
import PersonaShowcase from '@/components/landing/PersonaShowcase';
import About from '@/components/landing/About';
import Features from '@/components/landing/Features';
import HowItWorks from '@/components/landing/HowItWorks';
import FinalCTA from '@/components/landing/FinalCTA';
import Footer from '@/components/layout/Footer'; // Import the new Footer component

export default function LandingPage() {
  return (
    <main>
      <Hero />
      <PersonaShowcase />
      <About />
      <Features />
      <HowItWorks />
      <FinalCTA />
      <Footer /> {/* Add the Footer component */}
    </main>
  );
}