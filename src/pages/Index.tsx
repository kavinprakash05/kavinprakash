
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Portfolio from '@/components/Portfolio';
import Research from '@/components/Research';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { trackPageView } from '@/lib/analytics';

const Index = () => {
  useEffect(() => {
    // Track initial page view
    trackPageView('Portfolio Home', window.location.href);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Research />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
