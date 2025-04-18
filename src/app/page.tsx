// src/app/page.tsx
import Footer from './components/layout/Footer';
import Hero from './components/landing/Hero';
import Features from './components/landing/Features';
import Pricing from './components/landing/Pricing';
import Testimonials from './components/landing/Testimonials';
import FAQ from './components/landing/FAQ';
import CTA from './components/landing/CTA';

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}