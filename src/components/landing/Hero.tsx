// src/components/landing/Hero.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-32 sm:pt-32 sm:pb-40 bg-[#f5f7fa]">
      {/* Background with gray gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f5f7fa] to-[#e2e8f0]" aria-hidden="true" />
      
      {/* Floating elements/orbs */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        {/* Star/sparkle in top-right */}
        <div className="absolute top-24 right-16 w-6 h-6 transform rotate-45 bg-[#6366f1] opacity-40"></div>
        
        {/* Circle in top-right area */}
        <div className="absolute top-20 right-64 w-16 h-16 rounded-full border-2 border-[#9ca3af] opacity-20"></div>
        
        {/* Small dot top area */}
        <div className="absolute top-40 right-1/4 w-4 h-4 rounded-full bg-[#8b5cf6] opacity-30"></div>
        
        {/* Circle in left area */}
        <div className="absolute top-1/3 left-16 w-8 h-8 rounded-full bg-[#d1d5db] opacity-60"></div>
        
        {/* Small dot in left-bottom area */}
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 rounded-full bg-[#6366f1] opacity-40"></div>
        
        {/* Medium circle in bottom-right */}
        <div className="absolute bottom-1/3 right-1/5 w-10 h-10 rounded-full border border-[#9ca3af] opacity-40"></div>
      </div>

      {/* Wave shape at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-48">
        <svg 
          className="absolute bottom-0 w-full h-full" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,224L80,202.7C160,181,320,139,480,128C640,117,800,139,960,165.3C1120,192,1280,224,1360,240L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-10">
          {/* Text Content */}
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <h1 className="text-4xl font-bold tracking-tight text-[#1e293b] md:text-5xl lg:text-6xl">
              Manage API Keys with 
              <span className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent"> Power & Precision</span>
            </h1>
            <p className="mt-6 text-lg text-[#475569]">
              Comprehensive API key management, usage tracking, and deep analytics for multi-tenant applications. Secure your APIs with fine-grained access control and gain valuable insights from detailed usage patterns.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
              <Link
                href="/signup"
                className="rounded-full bg-[#6366f1] px-6 py-3 text-base font-semibold text-white shadow-md hover:shadow-lg transition-all duration-200 hover:bg-[#5153cc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Start for free
              </Link>
              <Link
                href="/demo"
                className="rounded-full bg-white/80 backdrop-blur-sm border border-[#9ca3af]/30 px-6 py-3 text-base font-semibold text-[#1e293b] shadow-md hover:bg-white transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
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
                  <p className="text-3xl font-bold tracking-tight text-[#1e293b]">
                    {stat.value}
                  </p>
                  <p className="text-sm text-[#64748b]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image/Dashboard Mockup */}
          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:mt-0 xl:col-span-6">
            <div className="relative -mx-4 h-[450px] sm:mx-0 lg:h-[600px]">
              {/* Glow effect behind the dashboard */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6366f1]/20 to-[#8b5cf6]/20 rounded-2xl blur-xl opacity-50"></div>
              
              {/* Dashboard frame with shadow */}
              <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-2xl border border-[#d1d5db] shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                <div className="absolute inset-0 p-2 sm:p-4">
                  <div className="h-full w-full overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-[#e2e8f0]">
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
      </div>
    </section>
  );
}