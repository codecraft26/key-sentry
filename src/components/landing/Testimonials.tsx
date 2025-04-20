'use client';

import { useState, useRef, useEffect } from 'react';

// TypeScript interfaces
interface Author {
  name: string;
  role: string;
  initials: string;
  color: string;
}

interface Testimonial {
  content: string;
  author: Author;
  highlighted?: boolean;
}

interface Company {
  name: string;
  logoPath: string;
}

// Testimonial data
const testimonials: Testimonial[] = [
  {
    content:
      "KeySentry transformed our API management process. We've reduced security incidents by 75% while gaining valuable insights into how our customers are using our services.",
    author: {
      name: 'Sarah Johnson',
      role: 'CTO at TechForward',
      initials: 'SJ',
      color: 'from-[#6366f1] to-[#8b5cf6]'
    },
    highlighted: true,
  },
  {
    content:
      "The multi-tenant features are exceptional. We can manage thousands of client API keys with granular permissions while maintaining strict isolation between tenants.",
    author: {
      name: 'Michael Chen',
      role: 'VP of Engineering at DataSync',
      initials: 'MC',
      color: 'from-[#10b981] to-[#3b82f6]'
    },
  },
  {
    content:
      "What impressed me most is how easy it was to integrate KeySentry into our existing workflow. Within days, we had complete visibility into our API usage patterns.",
    author: {
      name: 'Priya Patel',
      role: 'Lead Developer at CloudNative',
      initials: 'PP',
      color: 'from-[#f59e0b] to-[#ef4444]'
    },
  },
  {
    content:
      "The analytics dashboard is a game-changer. We've optimized our infrastructure based on real usage data and saved over $10,000 per month in cloud costs.",
    author: {
      name: 'James Wilson',
      role: 'DevOps Director at ScaleTech',
      initials: 'JW',
      color: 'from-[#0ea5e9] to-[#8b5cf6]'
    },
  },
  {
    content:
      "KeySentry's role-based access control allowed us to meet our compliance requirements while giving our developers the flexibility they need to innovate.",
    author: {
      name: 'Elena Rodriguez',
      role: 'Security Officer at FinanceAPI',
      initials: 'ER',
      color: 'from-[#ec4899] to-[#8b5cf6]'
    },
  },
  {
    content:
      "Customer support has been outstanding. When we needed custom features for our enterprise deployment, the team delivered beyond our expectations.",
    author: {
      name: 'David Kim',
      role: 'Product Manager at EnterpriseCloud',
      initials: 'DK',
      color: 'from-[#6366f1] to-[#14b8a6]'
    },
  },
];

// Company logos data
const companies: Company[] = [
  { name: 'TechForward', logoPath: '/images/logo-1.svg' },
  { name: 'DataSync', logoPath: '/images/logo-2.svg' },
  { name: 'CloudNative', logoPath: '/images/logo-3.svg' },
  { name: 'ScaleTech', logoPath: '/images/logo-4.svg' },
  { name: 'FinanceAPI', logoPath: '/images/logo-5.svg' },
];

// Styled initials avatar component
function Avatar({ initials, colorGradient, size = 'md' }: { initials: string; colorGradient: string; size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'h-8 w-8 text-xs',
    md: 'h-10 w-10 text-sm',
    lg: 'h-16 w-16 text-xl',
  };
  
  return (
    <div className={`${sizeClasses[size]} rounded-full bg-gradient-to-br ${colorGradient} flex items-center justify-center text-white font-medium shadow-md`}>
      {initials}
    </div>
  );
}

// Quote icon component
function QuoteIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`h-8 w-8 ${className}`}
      fill="currentColor"
      viewBox="0 0 32 32"
      aria-hidden="true"
    >
      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
    </svg>
  );
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonials" className="py-20 sm:py-32 bg-[#f5f7fa]">
      <div 
        ref={containerRef} 
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-[#6366f1]">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-[#1e293b] sm:text-4xl">
            Trusted by developers worldwide
          </p>
          <p className="mt-6 text-lg leading-8 text-[#475569]">
            Hear from the teams who have transformed their API management with our platform.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="mt-16 flex flex-col items-center">
          {testimonials.filter(t => t.highlighted).map((testimonial, index) => (
            <div
              key={`featured-${index}`}
              className="relative max-w-2xl rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 mb-16"
            >
              {/* Decorative elements */}
              <div className="absolute -top-3 -left-3 h-16 w-16 rounded-full bg-gradient-to-r from-[#6366f1]/10 to-[#8b5cf6]/10 blur-xl"></div>
              <div className="absolute -bottom-3 -right-3 h-16 w-16 rounded-full bg-gradient-to-r from-[#6366f1]/10 to-[#8b5cf6]/10 blur-xl"></div>
              
              <div className="relative z-10">
                <QuoteIcon className="text-[#6366f1]/30 mb-2" />
                <p className="text-xl italic text-[#1e293b] leading-relaxed">
                  {testimonial.content}
                </p>
                <div className="mt-8 flex items-center">
                  <Avatar 
                    initials={testimonial.author.initials} 
                    colorGradient={testimonial.author.color} 
                    size="lg"
                  />
                  <div className="ml-4">
                    <p className="font-semibold text-[#1e293b] text-lg">
                      {testimonial.author.name}
                    </p>
                    <p className="text-[#64748b]">
                      {testimonial.author.role}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Background pattern */}
              <div className="absolute top-2 right-2 opacity-10">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 16C0 7.16344 7.16344 0 16 0H64C72.8366 0 80 7.16344 80 16V64C80 72.8366 72.8366 80 64 80H16C7.16344 80 0 72.8366 0 64V16Z" fill="#6366f1"/>
                  <path d="M40 8L45.8 25.8H64.2L49.2 36.2L55 54L40 43.6L25 54L30.8 36.2L15.8 25.8H34.2L40 8Z" fill="#6366f1"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Cards Grid */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.filter(t => !t.highlighted).map((testimonial, index) => (
            <div
              key={index}
              className="group relative rounded-xl bg-white p-6 shadow-md ring-1 ring-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Animated gradient background */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${testimonial.author.color} opacity-0 transition-opacity duration-300 group-hover:opacity-[0.03]`}></div>
              
              <div className="relative z-10">
                <QuoteIcon className="text-[#6366f1]/30" />
                <p className="mt-4 text-base text-[#1e293b] leading-relaxed">
                  {testimonial.content}
                </p>
                <div className="mt-6 flex items-center">
                  <Avatar 
                    initials={testimonial.author.initials} 
                    colorGradient={testimonial.author.color} 
                  />
                  <div className="ml-3">
                    <p className="font-semibold text-[#1e293b]">
                      {testimonial.author.name}
                    </p>
                    <p className="text-[#64748b]">
                      {testimonial.author.role}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Hover indicator dots */}
              <div className="absolute bottom-4 right-4 flex space-x-1">
                <span className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${activeIndex === index ? 'bg-[#6366f1]' : 'bg-gray-300'}`}></span>
                <span className={`h-1.5 w-1.5 rounded-full transition-colors duration-500 delay-100 ${activeIndex === index ? 'bg-[#6366f1]' : 'bg-gray-300'}`}></span>
                <span className={`h-1.5 w-1.5 rounded-full transition-colors duration-700 delay-200 ${activeIndex === index ? 'bg-[#6366f1]' : 'bg-gray-300'}`}></span>
              </div>
            </div>
          ))}
        </div>

        {/* Companies Logos Section */}
        <div className="mt-24 sm:mt-32">
          <div className="relative">
            {/* Background decorative elements */}
            <div className="absolute -top-12 left-1/4 h-24 w-24 rounded-full bg-gradient-to-r from-[#6366f1]/5 to-[#8b5cf6]/5 blur-2xl"></div>
            <div className="absolute -bottom-12 right-1/4 h-24 w-24 rounded-full bg-gradient-to-r from-[#6366f1]/5 to-[#8b5cf6]/5 blur-2xl"></div>
            
            <h3 className="text-center text-lg font-semibold text-[#1e293b] mb-8">
              Trusted by innovative companies
            </h3>
            
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="relative p-8 rounded-2xl bg-white shadow-sm border border-gray-100">
                <div className="mx-auto grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 md:grid-cols-4 lg:grid-cols-5 lg:max-w-none">
                  {companies.map((company, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center transition duration-300 hover:scale-110 filter grayscale hover:grayscale-0"
                    >
                      <div className="h-16 w-auto relative">
                        {/* We'll use SVG placeholders instead of images */}
                        <div className="h-full w-full flex items-center justify-center">
                          <svg 
                            viewBox="0 0 200 60" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-32"
                          >
                            <rect width="200" height="60" rx="4" fill="#E2E8F0" className="opacity-30" />
                            <text 
                              x="100" 
                              y="35" 
                              fontFamily="sans-serif" 
                              fontSize="16" 
                              fill="#64748B" 
                              textAnchor="middle"
                            >
                              {company.name}
                            </text>
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}