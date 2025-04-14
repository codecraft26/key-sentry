// src/components/landing/FAQ.tsx
'use client';

import { useState } from 'react';

// FAQ data
const faqs = [
  {
    question: 'How does APIScape ensure the security of API keys?',
    answer:
      'APIScape employs multiple security measures including encryption at rest and in transit, secure storage with hashing, regular security audits, and optional hardware security module (HSM) integration for enterprise customers. We also provide comprehensive audit logs for all key operations.',
  },
  {
    question: 'Can I integrate APIScape with my existing authentication system?',
    answer:
      'Yes, APIScape seamlessly integrates with popular authentication providers including Auth0, Okta, AWS Cognito, and custom OAuth/OIDC implementations. We provide detailed documentation and SDKs to help you integrate with your existing authentication system.',
  },
  {
    question: 'How does the multi-tenant architecture work?',
    answer:
      'Our multi-tenant architecture allows you to create isolated environments for different organizations or teams. Each tenant has its own set of API keys, users, permissions, and usage quotas, while you maintain centralized administration and billing. Data is strictly isolated between tenants for maximum security.',
  },
  {
    question: 'What analytics metrics are available in the dashboard?',
    answer:
      'The analytics dashboard provides comprehensive metrics including request volume, response times, error rates, endpoint popularity, geographic distribution, and usage patterns. You can create custom dashboards, set alerts, and export data for further analysis.',
  },
  {
    question: 'Can I set different rate limits for different API keys?',
    answer:
      'Absolutely. You can set custom rate limits at multiple levels: per API key, per endpoint, per IP address, or per user. Rate limits can be defined as requests per second, minute, hour, or day, with different quotas for different endpoints or operations.',
  },
  {
    question: 'Is it possible to self-host APIScape for enhanced privacy?',
    answer:
      'Yes, enterprise customers can deploy APIScape on-premises or in their own cloud environment. We provide Docker containers and Kubernetes configurations for easy deployment, along with documentation for integrating with your existing infrastructure.',
  },
  {
    question: 'How does role-based access control work?',
    answer:
      'RBAC allows you to define custom roles with specific permissions for managing API keys, viewing analytics, and administering users. You can assign users to one or more roles, and permissions are checked at every operation to ensure proper access control.',
  },
  {
    question: 'What happens when an API key is revoked?',
    answer:
      'When you revoke an API key, it becomes invalid immediately across all your services. Our real-time key verification system ensures that revoked keys are rejected within seconds, even in distributed environments.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">FAQ</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently asked questions
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Everything you need to know about APIScape. Can't find the answer you're looking for?{' '}
            <a href="/contact" className="font-medium text-primary hover:text-primary/80">
              Contact our support team
            </a>
            .
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl lg:max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-xl border border-muted bg-background p-2 transition-all duration-200 ${
                  openIndex === index ? 'ring-1 ring-primary/50' : 'hover:border-muted-foreground/20'
                }`}
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="flex w-full items-center justify-between px-4 py-3 text-left"
                >
                  <span className="text-lg font-medium text-foreground">{faq.question}</span>
                  <svg
                    className={`h-5 w-5 text-primary transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 pb-4' : 'max-h-0'
                  }`}
                >
                  <p className="px-4 text-muted-foreground">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}