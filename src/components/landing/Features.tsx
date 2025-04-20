// src/components/landing/Features.tsx
'use client';

import React, { useState } from 'react';

// Define TypeScript interfaces
interface Feature {
  name: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  hoverGradient: string;
  illustration: React.ReactNode;
}

interface AnimationStyleProps {
  animationDelay: string;
  animation: string;
}

// Feature data
const features: Feature[] = [
  {
    name: 'Advanced API Key Management',
    description:
      'Create, revoke, and manage API keys with granular permissions. Set expiration dates, usage limits, and domain restrictions for enhanced security.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
        />
      </svg>
    ),
    gradient: 'from-blue-500/20 to-purple-500/20',
    hoverGradient: 'from-blue-500/30 to-purple-500/30',
    illustration: (
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto mt-4 text-[#6366f1]/80"
      >
        <circle cx="50" cy="38" r="18" stroke="currentColor" strokeWidth="2.5" />
        <path d="M50 56V80" stroke="currentColor" strokeWidth="2.5" />
        <path d="M60 70H40" stroke="currentColor" strokeWidth="2.5" />
        <path d="M65 80H35" stroke="currentColor" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    name: 'Real-time Usage Analytics',
    description:
      'Monitor API usage with detailed analytics. Track requests, response times, error rates, and usage patterns in real-time with customizable dashboards.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
        />
      </svg>
    ),
    gradient: 'from-green-500/20 to-blue-500/20',
    hoverGradient: 'from-green-500/30 to-blue-500/30',
    illustration: (
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto mt-4 text-[#10b981]/80"
      >
        <path d="M20 70L35 55L50 65L65 40L80 30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M20 80H80" stroke="currentColor" strokeWidth="2.5" />
        <path d="M20 30V80" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="35" cy="55" r="3" fill="currentColor" />
        <circle cx="50" cy="65" r="3" fill="currentColor" />
        <circle cx="65" cy="40" r="3" fill="currentColor" />
        <circle cx="80" cy="30" r="3" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'Multi-tenant Architecture',
    description:
      'Support multiple organizations with isolated environments. Manage user permissions, billing, and usage limits for each tenant from a centralized dashboard.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
        />
      </svg>
    ),
    gradient: 'from-amber-500/20 to-rose-500/20',
    hoverGradient: 'from-amber-500/30 to-rose-500/30',
    illustration: (
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto mt-4 text-[#f59e0b]/80"
      >
        <rect x="20" y="30" width="25" height="25" rx="2" stroke="currentColor" strokeWidth="2.5" />
        <rect x="55" y="30" width="25" height="25" rx="2" stroke="currentColor" strokeWidth="2.5" />
        <rect x="20" y="65" width="25" height="15" rx="2" stroke="currentColor" strokeWidth="2.5" />
        <rect x="55" y="65" width="25" height="15" rx="2" stroke="currentColor" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    name: 'Role-Based Access Control',
    description:
      'Implement fine-grained access control with customizable roles and permissions. Limit access to specific endpoints, methods, or resources based on user roles.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
        />
      </svg>
    ),
    gradient: 'from-purple-500/20 to-pink-500/20',
    hoverGradient: 'from-purple-500/30 to-pink-500/30',
    illustration: (
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto mt-4 text-[#8b5cf6]/80"
      >
        <circle cx="35" cy="35" r="10" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="65" cy="45" r="7" stroke="currentColor" strokeWidth="2.5" />
        <path d="M35 45C29.4772 45 24.5 49.9772 24.5 55.5V65H45.5V55.5C45.5 49.9772 40.5228 45 35 45Z" stroke="currentColor" strokeWidth="2.5" />
        <path d="M65 52C61.6863 52 59 54.6863 59 58V65H71V58C71 54.6863 68.3137 52 65 52Z" stroke="currentColor" strokeWidth="2.5" />
        <path d="M25 75H75" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Automated Rate Limiting',
    description:
      'Protect your APIs from abuse with configurable rate limiting. Set limits based on API key, IP address, or user account to ensure fair usage.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    gradient: 'from-cyan-500/20 to-blue-500/20',
    hoverGradient: 'from-cyan-500/30 to-blue-500/30',
    illustration: (
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto mt-4 text-[#0ea5e9]/80"
      >
        <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="2.5" />
        <path d="M50 35V50H65" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M50 50L60 60" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M20 80L35 65" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M80 80L65 65" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Comprehensive Audit Logs',
    description:
      'Track all key management actions with detailed audit logs. Monitor who created, modified, or revoked API keys, when they did it, and from where.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        />
      </svg>
    ),
    gradient: 'from-indigo-500/20 to-sky-500/20',
    hoverGradient: 'from-indigo-500/30 to-sky-500/30',
    illustration: (
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto mt-4 text-[#6366f1]/80"
      >
        <path d="M30 30H70V80H30V30Z" stroke="currentColor" strokeWidth="2.5" />
        <path d="M40 30V25C40 22.7909 41.7909 21 44 21H56C58.2091 21 60 22.7909 60 25V30" stroke="currentColor" strokeWidth="2.5" />
        <path d="M35 45H65" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M35 55H65" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M35 65H55" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="features" className="py-20 sm:py-32 bg-[#f5f7fa]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-[#6366f1] font-heading">
            Powerful Features
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-[#1e293b] font-heading">
            Everything you need to manage API keys and track usage
          </p>
          <p className="mt-6 text-lg leading-8 text-[#475569]">
            Our platform provides comprehensive tools for API key management, analytics, and security, designed for modern development teams.
          </p>
        </div>

        <div className="mt-16 sm:mt-20 lg:mt-24">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature, index) => (
              <div 
                key={feature.name} 
                className="relative group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  animation: 'fadeInUp 0.6s ease-out backwards' 
                } as AnimationStyleProps}
              >
                <div className={`absolute -inset-2 bg-gradient-to-r ${hoveredIndex === index ? feature.hoverGradient : feature.gradient} rounded-xl blur-md opacity-60 transition-all duration-500`}></div>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200 p-6 shadow-sm transition-all duration-300 h-full flex flex-col">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#6366f1]/10 text-[#6366f1]">
                    {feature.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-[#1e293b] font-heading">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-sm text-[#64748b] flex-grow">
                    {feature.description}
                  </p>
                  
                  {/* SVG illustration replaces the image */}
                  <div className="transition-transform duration-500 transform group-hover:scale-110 group-hover:translate-y-1">
                    {feature.illustration}
                  </div>
                  
                  {/* Animated dots for visual effect */}
                  <div className="absolute bottom-4 right-4 flex space-x-1">
                    <span className={`h-1.5 w-1.5 rounded-full bg-[#6366f1]/60 transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-40'}`}></span>
                    <span className={`h-1.5 w-1.5 rounded-full bg-[#6366f1]/60 transition-opacity duration-500 delay-100 ${hoveredIndex === index ? 'opacity-100' : 'opacity-40'}`}></span>
                    <span className={`h-1.5 w-1.5 rounded-full bg-[#6366f1]/60 transition-opacity duration-700 delay-200 ${hoveredIndex === index ? 'opacity-100' : 'opacity-40'}`}></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Add keyframe animations to global styles */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}