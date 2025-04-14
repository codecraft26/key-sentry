// src/components/landing/Hero.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-grid pt-24 pb-20 sm:pt-32 sm:pb-32">
      {/* Radial gradient for the background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 dark:from-background dark:to-background/90" aria-hidden="true" />
      
      {/* Floating elements */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        {/* Top-right blob */}
        <div className="absolute -top-24 right-0 transform translate-x-1/3 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/10 to-purple-500/5 blur-3xl opacity-60 dark:from-primary/20 dark:to-purple-600/10" />
        
        {/* Bottom-left blob */}
        <div className="absolute -bottom-32 -left-20 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-blue-500/10 to-primary/5 blur-3xl opacity-60 dark:from-blue-500/20 dark:to-primary/10" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-10">
          {/* Text Content */}
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Manage API Keys with 
              <span className="text-gradient"> Power & Precision</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Comprehensive API key management, usage tracking, and deep analytics for multi-tenant applications. Secure your APIs with fine-grained access control and gain valuable insights from detailed usage patterns.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
              <Link
                href="/signup"
                className="rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Start for free
              </Link>
              <Link
                href="/demo"
                className="rounded-full bg-background/50 backdrop-blur-sm border border-primary/20 px-6 py-3 text-base font-semibold text-foreground shadow-sm hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Live demo
                <span aria-hidden="true" className="ml-2">→</span>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-x-4 gap-y-6 sm:gap-x-6 lg:pt-4">
              {[
                { value: '99.9%', label: 'Uptime guarantee' },
                { value: '24/7', label: 'Customer support' },
                { value: '100K+', label: 'API keys managed' },
              ].map((stat) => (
                <div key={stat.label} className="inline-flex flex-col gap-y-2">
                  <p className="text-3xl font-bold tracking-tight text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image/Dashboard Mockup */}
          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:mt-0 xl:col-span-6">
            <div className="relative -mx-4 h-[450px] sm:mx-0 lg:h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-purple-500/5 backdrop-blur-sm rounded-2xl border border-muted shadow-xl dark:from-primary/10 dark:to-purple-500/10" />
              
              <div className="absolute inset-0 p-2 sm:p-4">
                <div className="h-full w-full overflow-hidden rounded-xl bg-background/80 backdrop-blur-sm shadow-lg ring-1 ring-muted">
                <Image
  src="/images/dashboard-preview.jpg"
  alt="Admin Dashboard"
  width={1364}
  height={866}
  quality={100}
  className="h-full w-full object-cover"
/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}