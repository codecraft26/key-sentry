'use client';

import Image from 'next/image';

// Testimonial data
const testimonials = [
  {
    content:
      "APIScape transformed our API management process. We've reduced security incidents by 75% while gaining valuable insights into how our customers are using our services.",
    author: {
      name: 'Sarah Johnson',
      role: 'CTO at TechForward',
      image: '/images/testimonial-1.jpg',
    },
  },
  {
    content:
      "The multi-tenant features are exceptional. We can manage thousands of client API keys with granular permissions while maintaining strict isolation between tenants.",
    author: {
      name: 'Michael Chen',
      role: 'VP of Engineering at DataSync',
      image: '/images/testimonial-2.jpg',
    },
  },
  {
    content:
      "What impressed me most is how easy it was to integrate APIScape into our existing workflow. Within days, we had complete visibility into our API usage patterns.",
    author: {
      name: 'Priya Patel',
      role: 'Lead Developer at CloudNative',
      image: '/images/testimonial-3.jpg',
    },
  },
  {
    content:
      "The analytics dashboard is a game-changer. We've optimized our infrastructure based on real usage data and saved over $10,000 per month in cloud costs.",
    author: {
      name: 'James Wilson',
      role: 'DevOps Director at ScaleTech',
      image: '/images/testimonial-4.jpg',
    },
  },
  {
    content:
      "APIScape's role-based access control allowed us to meet our compliance requirements while giving our developers the flexibility they need to innovate.",
    author: {
      name: 'Elena Rodriguez',
      role: 'Security Officer at FinanceAPI',
      image: '/images/testimonial-5.jpg',
    },
  },
  {
    content:
      "Customer support has been outstanding. When we needed custom features for our enterprise deployment, the team delivered beyond our expectations.",
    author: {
      name: 'David Kim',
      role: 'Product Manager at EnterpriseCloud',
      image: '/images/testimonial-6.jpg',
    },
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trusted by developers worldwide
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Hear from the teams who have transformed their API management with our platform.
          </p>
        </div>

        {/* Testimonial Cards Section */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative rounded-2xl bg-background p-6 shadow-sm ring-1 ring-muted/50 hover:bg-muted/20 transition-colors duration-300"
            >
              <div className="relative z-10">
                <svg
                  className="h-8 w-8 text-primary/30"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="mt-4 text-base text-foreground">
                  {testimonial.content}
                </p>
                <div className="mt-6 flex items-center">
                  <div className="h-10 w-10 rounded-full overflow-hidden bg-muted/50">
                    <Image
                      className="h-full w-full object-cover"
                      src={testimonial.author.image}
                      alt={testimonial.author.name}
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-foreground">
                      {testimonial.author.name}
                    </p>
                    <p className="text-muted-foreground">
                      {testimonial.author.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brands/Logos Section */}
        <div className="mt-24 sm:mt-32">
          <h3 className="text-center text-lg font-semibold text-foreground mb-8">
            Trusted by innovative companies
          </h3>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 md:grid-cols-4 lg:grid-cols-5 lg:max-w-none">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="opacity-60 grayscale transition hover:grayscale-0 hover:opacity-100 duration-300"
                >
                  <Image
                    className="h-8 w-auto object-contain"
                    src={`/images/logo-${i}.svg`}
                    alt={`Client logo ${i}`}
                    width={158}
                    height={48}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
}
