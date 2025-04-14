// src/components/landing/CTA.tsx
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20 py-20 sm:py-32">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Circle patterns */}
        <svg
          className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/4 transform text-primary/20 dark:text-primary/30"
          width="800"
          height="800"
          fill="none"
          viewBox="0 0 800 800"
          aria-hidden="true"
        >
          <circle cx="400" cy="400" r="400" />
        </svg>
        <svg
          className="absolute left-0 bottom-0 -translate-x-1/2 translate-y-1/4 transform text-primary/20 dark:text-primary/30"
          width="800"
          height="800"
          fill="none"
          viewBox="0 0 800 800"
          aria-hidden="true"
        >
          <circle cx="400" cy="400" r="400" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready to transform your API management?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
            Join thousands of developers who trust APIScape for secure API key management and insightful analytics.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/signup"
              className="rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Get started for free
            </Link>
            <Link
              href="/demo"
              className="text-base font-semibold leading-6 text-foreground transition hover:text-primary"
            >
              Schedule a demo <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}