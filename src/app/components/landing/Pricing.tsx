// src/components/landing/Pricing.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

// Pricing plans data
const pricingPlans = [
  {
    name: 'Free',
    id: 'free',
    description: 'Perfect for small projects and personal use',
    monthlyPrice: '$0',
    yearlyPrice: '$0',
    features: [
      '5 API keys',
      '10,000 requests per month',
      'Basic analytics',
      'Email support',
      '1 project',
      '1 team member',
    ],
    popularFeature: false,
    buttonText: 'Get started',
    buttonLink: '/signup',
  },
  {
    name: 'Pro',
    id: 'pro',
    description: 'Ideal for growing teams and applications',
    monthlyPrice: '$49',
    yearlyPrice: '$470',
    features: [
      'Unlimited API keys',
      '1 million requests per month',
      'Advanced analytics',
      'Priority support',
      '5 projects',
      '5 team members',
      'Custom rate limits',
      'Webhook notifications',
    ],
    popularFeature: true,
    buttonText: 'Start 14-day trial',
    buttonLink: '/signup?plan=pro',
  },
  {
    name: 'Enterprise',
    id: 'enterprise',
    description: 'For large organizations with complex needs',
    monthlyPrice: 'Custom',
    yearlyPrice: 'Custom',
    features: [
      'Unlimited everything',
      'Dedicated support',
      'Custom integrations',
      'SLA guarantees',
      'On-premise deployment option',
      'Advanced security features',
      'Custom branding',
      'Training & onboarding',
    ],
    popularFeature: false,
    buttonText: 'Contact sales',
    buttonLink: '/contact',
  },
];

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section id="pricing" className="bg-background py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Pricing</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Plans for teams of all sizes
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Choose the perfect plan for your needs. All plans include a 14-day free trial.
          </p>
        </div>

        {/* Billing toggle */}
        <div className="mt-10 flex justify-center">
          <div className="relative flex rounded-full bg-muted p-1">
            <button
              type="button"
              className={`relative flex items-center rounded-full px-4 py-2 text-sm font-medium ${
                billingCycle === 'monthly'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
            <button
              type="button"
              className={`relative ml-0.5 flex items-center rounded-full px-4 py-2 text-sm font-medium ${
                billingCycle === 'yearly'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              onClick={() => setBillingCycle('yearly')}
            >
              Yearly
              <span className="ml-1.5 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col rounded-3xl bg-background border backdrop-blur-sm p-8 shadow-sm ring-1 transition-all duration-300 hover:border-primary/50 hover:shadow-md ${
                plan.popularFeature
                  ? 'ring-primary scale-105 lg:scale-110 border-primary/30'
                  : 'ring-muted/70'
              }`}
            >
              {plan.popularFeature && (
                <div className="absolute -top-5 left-0 right-0 flex justify-center">
                  <div className="inline-flex items-center rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
                <p className="mt-6">
                  <span className="text-4xl font-bold tracking-tight text-foreground">
                    {billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                  </span>
                  {plan.id !== 'enterprise' && (
                    <span className="text-sm text-muted-foreground">
                      {billingCycle === 'monthly' ? '/month' : '/year'}
                    </span>
                  )}
                </p>

                <ul role="list" className="mt-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-5 w-5 text-primary"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-sm text-muted-foreground">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={plan.buttonLink}
                className={`mt-8 block rounded-full px-4 py-3 text-center text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  plan.popularFeature
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-primary'
                    : 'bg-primary/10 text-primary hover:bg-primary/20 focus-visible:outline-primary'
                }`}
              >
                {plan.buttonText}
              </Link>
            </div>
          ))}
        </div>

        {/* Enterprise callout */}
        <div className="mt-20 rounded-3xl bg-muted/50 p-8 sm:p-10 lg:flex lg:items-center lg:gap-x-10 lg:p-12">
          <div className="lg:w-2/3">
            <h3 className="text-2xl font-bold tracking-tight text-foreground">
              Need a custom solution?
            </h3>
            <p className="mt-4 text-lg text-muted-foreground">
              Our enterprise plan offers custom features, dedicated support, and flexible pricing for organizations with complex requirements. Let's discuss how we can help.
            </p>
          </div>
          <div className="mt-6 lg:mt-0 lg:w-1/3 lg:flex-none">
            <Link
              href="/contact"
              className="block rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Contact our sales team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}