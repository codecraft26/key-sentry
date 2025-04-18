'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Check, ChevronRight, Github, Mail } from 'lucide-react';
import dynamic from 'next/dynamic';

// Dynamically import Lottie to avoid SSR issues
const LottiePlayer = dynamic(() => import('lottie-react'), { ssr: false });

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [animationData, setAnimationData] = useState(null);
  
  // Load the Lottie JSON file
  useEffect(() => {
    // Use dynamic import to load the JSON file
    import('/public/Animation.json')
      .then((data) => {
        setAnimationData(data.default);
      })
      .catch((error) => {
        console.error('Failed to load animation:', error);
      });
  }, []);
  
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };
  
  return (
    <div className="fixed inset-0 w-screen h-screen bg-grid overflow-hidden">
      {/* Radial gradient for the background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 dark:from-background dark:to-background/90" aria-hidden="true" />
      
      {/* Floating elements */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        {/* Top-right blob */}
        <div className="absolute -top-24 right-0 transform translate-x-1/3 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/10 to-purple-500/5 blur-3xl opacity-60 dark:from-primary/20 dark:to-purple-600/10" />
        
        {/* Bottom-left blob */}
        <div className="absolute -bottom-32 -left-20 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-blue-500/10 to-primary/5 blur-3xl opacity-60 dark:from-blue-500/20 dark:to-primary/10" />
      </div>

      <div className="h-full w-full flex items-center justify-center p-4 sm:p-6 overflow-auto">
        <div className="w-full max-w-7xl mx-auto relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            {/* Form Section */}
            <div className="lg:col-span-6 xl:col-span-5 mb-10 lg:mb-0">
              <div className="relative z-10 mx-auto max-w-md lg:max-w-none">
                <div className="bg-background/80 backdrop-blur-sm rounded-2xl border border-muted shadow-xl p-6 sm:p-8">
                  {/* Logo or branding */}
                  <div className="mb-6 flex justify-center">
                    <Link href="/" className="inline-flex items-center">
                      <span className="text-2xl font-bold text-gradient">ApiKeyManager</span>
                    </Link>
                  </div>
                  
                  {/* Form Toggle */}
                  <div className="mb-6">
                    <div className="flex bg-muted/50 rounded-full p-1">
                      <button
                        onClick={() => setIsLogin(true)}
                        className={`flex-1 py-2 px-4 text-sm font-medium rounded-full ${
                          isLogin 
                            ? 'bg-primary text-primary-foreground shadow-sm' 
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        Sign In
                      </button>
                      <button
                        onClick={() => setIsLogin(false)}
                        className={`flex-1 py-2 px-4 text-sm font-medium rounded-full ${
                          !isLogin 
                            ? 'bg-primary text-primary-foreground shadow-sm' 
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        Sign Up
                      </button>
                    </div>
                  </div>
                  
                  {/* Form */}
                  <form className="space-y-5">
                    {/* Sign Up Fields */}
                    {!isLogin && (
                      <>
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-foreground">
                            Full Name
                          </label>
                          <div className="mt-1">
                            <input
                              id="name"
                              name="name"
                              type="text"
                              required
                              className="block w-full rounded-md border border-muted bg-background/50 py-2 px-3 text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-foreground">
                            Company Name
                          </label>
                          <div className="mt-1">
                            <input
                              id="company"
                              name="company"
                              type="text"
                              className="block w-full rounded-md border border-muted bg-background/50 py-2 px-3 text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                            />
                          </div>
                        </div>
                      </>
                    )}
                    
                    {/* Common Fields */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground">
                        Email Address
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className="block w-full rounded-md border border-muted bg-background/50 py-2 px-3 text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-foreground">
                        Password
                      </label>
                      <div className="mt-1">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          autoComplete={isLogin ? "current-password" : "new-password"}
                          required
                          className="block w-full rounded-md border border-muted bg-background/50 py-2 px-3 text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                      </div>
                    </div>
                    
                    {!isLogin && (
                      <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-foreground">
                          Confirm Password
                        </label>
                        <div className="mt-1">
                          <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            autoComplete="new-password"
                            required
                            className="block w-full rounded-md border border-muted bg-background/50 py-2 px-3 text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                          />
                        </div>
                      </div>
                    )}

                    {isLogin && (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 rounded border-muted text-primary focus:ring-primary"
                          />
                          <label htmlFor="remember-me" className="ml-2 block text-sm text-muted-foreground">
                            Remember me
                          </label>
                        </div>

                        <div className="text-sm">
                          <Link href="/forgot-password" className="font-medium text-primary hover:text-primary/90">
                            Forgot password?
                          </Link>
                        </div>
                      </div>
                    )}

                    <div>
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-full bg-primary px-4 py-3 text-base font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                      >
                        {isLogin ? 'Sign In' : 'Create Account'}
                      </button>
                    </div>
                  </form>
                  
                  {/* Social Login */}
                  <div className="mt-6">
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-muted" />
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                      </div>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center items-center gap-2 rounded-md border border-muted bg-background/50 py-2 px-4 text-sm font-medium text-foreground shadow-sm hover:bg-muted"
                      >
                        <Mail size={18} />
                        <span>Google</span>
                      </button>

                      <button
                        type="button"
                        className="inline-flex w-full justify-center items-center gap-2 rounded-md border border-muted bg-background/50 py-2 px-4 text-sm font-medium text-foreground shadow-sm hover:bg-muted"
                      >
                        <Github size={18} />
                        <span>GitHub</span>
                      </button>
                    </div>
                  </div>
                  
                  {/* Toggle link */}
                  <div className="mt-5 text-center text-sm text-muted-foreground">
                    {isLogin ? (
                      <>
                        Don't have an account?{' '}
                        <button 
                          onClick={toggleForm} 
                          className="font-medium text-primary hover:text-primary/90"
                        >
                          Sign up now
                        </button>
                      </>
                    ) : (
                      <>
                        Already have an account?{' '}
                        <button 
                          onClick={toggleForm} 
                          className="font-medium text-primary hover:text-primary/90"
                        >
                          Sign in
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Animation/Feature Section */}
            <div className="hidden lg:col-span-6 lg:flex lg:flex-col lg:items-center lg:justify-center xl:col-span-7">
              {/* Lottie Animation */}
              <div className="relative w-full max-w-lg">
                <div className="bg-gradient-to-tr from-primary/5 to-purple-500/5 backdrop-blur-sm rounded-2xl border border-muted shadow-xl dark:from-primary/10 dark:to-purple-500/10 p-1 sm:p-2">
                  <div className="w-full overflow-hidden rounded-xl bg-background/80 backdrop-blur-sm shadow-lg ring-1 ring-muted">
                    {animationData && (
                      <LottiePlayer
                        animationData={animationData}
                        loop={true}
                        autoplay={true}
                        style={{ width: '100%', height: '280px' }}
                      />
                    )}
                  </div>
                </div>
              </div>
              
              {/* Features */}
              <div className="mt-8 max-w-lg w-full">
                <h2 className="text-2xl font-bold tracking-tight text-foreground">
                  <span className="text-gradient">Power</span> your applications with our API management
                </h2>
                
                <dl className="mt-5 space-y-4">
                  {[
                    {
                      name: 'Secure API Key Management',
                      description: 'Generate, rotate, and revoke API keys with complete audit trails',
                    },
                    {
                      name: 'Advanced Analytics',
                      description: 'Track usage patterns and optimize performance with real-time insights',
                    },
                    {
                      name: 'Multi-tenant Support',
                      description: 'Manage access across organizations, teams, and individual users',
                    },
                  ].map((feature) => (
                    <div key={feature.name} className="relative">
                      <dt className="flex items-start">
                        <div className="flex-shrink-0">
                          <Check className="h-6 w-6 text-primary" />
                        </div>
                        <p className="ml-3 text-lg font-semibold text-foreground line-clamp-1">{feature.name}</p>
                      </dt>
                      <dd className="mt-1 ml-9 text-base text-muted-foreground line-clamp-2">
                        {feature.description}
                      </dd>
                    </div>
                  ))}
                </dl>
                
                <div className="mt-8">
                  <Link
                    href="/features"
                    className="inline-flex items-center text-primary font-medium"
                  >
                    Learn more about our features
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}