// src/app/page.tsx
// import Header from '@/components/layout/Header';

import Header from './components/layout/Header';
// import Footer from '@/components/layout/Footer';
import Footer from './components/layout/Footer';
// import Hero from '@/components/landing/Hero';
import Hero from './components/landing/Hero';
// import Features from '@/components/landing/Features';
import Features from './components/landing/Features';
// import Pricing from '@/components/landing/Pricing';
import Pricing from './components/landing/Pricing';
// import Testimonials from '@/components/landing/Testimonials';
import Testimonials from './components/landing/Testimonials';
// import FAQ from '@/components/landing/FAQ';
import FAQ from './components/landing/FAQ';
// import CTA from '@/components/landing/CTA';
import CTA from './components/landing/CTA';

export default function HomePage() {
  return (
    <>
      <Header />
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