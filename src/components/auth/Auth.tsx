'use client'
import { useState } from 'react';
import Link from 'next/link';
import { Check, ChevronRight, Github, Mail, Building2, User, ArrowRight } from 'lucide-react';

// Account type options
type AccountType = 'individual' | 'organization';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [accountType, setAccountType] = useState<AccountType>('individual');
  
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };
  
  return (
    <div className="fixed inset-0 w-screen h-screen bg-grid overflow-hidden">
      {/* Enhanced radial gradient for the background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/80 dark:from-background dark:via-background/95 dark:to-background/90" aria-hidden="true" />
      
      {/* Enhanced floating elements with motion */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top-right blob with enhanced size and color */}
        <div className="absolute -top-24 right-0 transform translate-x-1/3 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-primary/15 via-purple-500/10 to-blue-500/5 blur-3xl opacity-70 dark:from-primary/25 dark:via-purple-600/15 dark:to-blue-500/10 animate-slow-pulse" />
        
        {/* Bottom-left blob with enhanced size and color */}
        <div className="absolute -bottom-32 -left-20 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-blue-500/15 via-primary/10 to-purple-500/5 blur-3xl opacity-70 dark:from-blue-500/25 dark:via-primary/15 dark:to-purple-500/10 animate-slow-drift" />
        
        {/* Additional subtle blob */}
        <div className="absolute top-1/4 -left-32 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-cyan-500/10 to-primary/5 blur-2xl opacity-60 dark:from-cyan-500/15 dark:to-primary/10 animate-slow-rotate" />
      </div>

      <div className="h-full w-full flex items-center justify-center p-4 sm:p-6 overflow-auto">
        <div className="w-full max-w-7xl mx-auto relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            {/* Form Section - Enhanced with better borders and shadows */}
            <div className="lg:col-span-6 xl:col-span-5 mb-10 lg:mb-0">
              <div className="relative z-10 mx-auto max-w-md lg:max-w-none">
                <div className="bg-background/70 backdrop-blur-md rounded-2xl border border-muted/50 shadow-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-primary/5">
                  {/* Logo with enhanced gradient */}
                  <div className="mb-8 flex justify-center">
                  <Link href="/" className="inline-flex items-center">
                      <div className="relative">
                        <span className="text-2xl font-bold text-foreground">ApiKey<span className="text-primary">Manager</span></span>
                        <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/80 to-purple-500/50 rounded-full"></div>
                      </div>
                    </Link>
                  </div>
                  
                  {/* Enhanced Form Toggle with smooth transitions */}
                  <div className="mb-8">
                    <div className="flex bg-muted/30 rounded-full p-1 border border-muted/50 shadow-inner">
                      <button
                        onClick={() => setIsLogin(true)}
                        className={`flex-1 py-2.5 px-4 text-sm font-medium rounded-full transition-all duration-300 ${
                          isLogin 
                            ? 'bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-sm' 
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                        }`}
                      >
                        Sign In
                      </button>
                      <button
                        onClick={() => setIsLogin(false)}
                        className={`flex-1 py-2.5 px-4 text-sm font-medium rounded-full transition-all duration-300 ${
                          !isLogin 
                            ? 'bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-sm' 
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                        }`}
                      >
                        Sign Up
                      </button>
                    </div>
                  </div>
                  
                  {/* Enhanced Account Type Toggle with better visuals */}
                  {!isLogin && (
                    <div className="mb-8">
                      <label className="block text-sm font-medium text-foreground mb-2.5">
                        Account Type
                      </label>
                      <div className="flex bg-background/60 rounded-lg p-1.5 border border-muted/70 shadow-sm">
                        <button
                          type="button"
                          onClick={() => setAccountType('individual')}
                          className={`flex items-center justify-center flex-1 py-2.5 px-4 text-sm font-medium rounded-md transition-all duration-300 ${
                            accountType === 'individual'
                              ? 'bg-background text-foreground shadow-sm border border-muted/70'
                              : 'text-muted-foreground hover:text-foreground hover:bg-background/80'
                          }`}
                        >
                          <User size={18} className={`mr-2 ${accountType === 'individual' ? 'text-primary' : ''}`} />
                          Individual
                        </button>
                        <button
                          type="button"
                          onClick={() => setAccountType('organization')}
                          className={`flex items-center justify-center flex-1 py-2.5 px-4 text-sm font-medium rounded-md transition-all duration-300 ${
                            accountType === 'organization'
                              ? 'bg-background text-foreground shadow-sm border border-muted/70'
                              : 'text-muted-foreground hover:text-foreground hover:bg-background/80'
                          }`}
                        >
                          <Building2 size={18} className={`mr-2 ${accountType === 'organization' ? 'text-primary' : ''}`} />
                          Organization
                        </button>
                      </div>
                    </div>
                  )}
                  
                  {/* Enhanced Form */}
                  <form className="space-y-6">
                    {/* Sign Up Fields - Individual */}
                    {!isLogin && accountType === 'individual' && (
                      <div className="group">
                        <label htmlFor="fullName" className="block text-sm font-medium text-foreground">
                          Full Name
                        </label>
                        <div className="mt-1.5 relative">
                          <input
                            id="fullName"
                            name="fullName"
                            type="text"
                            required
                            className="block w-full rounded-lg border border-muted/70 bg-background/40 py-2.5 px-4 text-foreground shadow-sm focus:border-primary focus:ring-1 focus:ring-primary/60 transition-all duration-200"
                            placeholder="John Doe"
                          />
                          <div className="absolute inset-0 rounded-lg border border-primary/0 group-focus-within:border-primary/20 group-focus-within:shadow-[0_0_0_4px_rgba(var(--primary),0.1)] pointer-events-none transition-all duration-300"></div>
                        </div>
                      </div>
                    )}
                    
                    {/* Sign Up Fields - Organization - Enhanced with focus effects */}
                    {!isLogin && accountType === 'organization' && (
                      <>
                        <div className="group">
                          <label htmlFor="organizationName" className="block text-sm font-medium text-foreground">
                            Organization Name
                          </label>
                          <div className="mt-1.5 relative">
                            <input
                              id="organizationName"
                              name="organizationName"
                              type="text"
                              required
                              className="block w-full rounded-lg border border-muted/70 bg-background/40 py-2.5 px-4 text-foreground shadow-sm focus:border-primary focus:ring-1 focus:ring-primary/60 transition-all duration-200"
                              placeholder="Acme Inc."
                            />
                            <div className="absolute inset-0 rounded-lg border border-primary/0 group-focus-within:border-primary/20 group-focus-within:shadow-[0_0_0_4px_rgba(var(--primary),0.1)] pointer-events-none transition-all duration-300"></div>
                          </div>
                        </div>
                        
                        <div className="group">
                          <label htmlFor="adminName" className="block text-sm font-medium text-foreground">
                            Admin Name
                          </label>
                          <div className="mt-1.5 relative">
                            <input
                              id="adminName"
                              name="adminName"
                              type="text"
                              required
                              className="block w-full rounded-lg border border-muted/70 bg-background/40 py-2.5 px-4 text-foreground shadow-sm focus:border-primary focus:ring-1 focus:ring-primary/60 transition-all duration-200"
                              placeholder="Admin User"
                            />
                            <div className="absolute inset-0 rounded-lg border border-primary/0 group-focus-within:border-primary/20 group-focus-within:shadow-[0_0_0_4px_rgba(var(--primary),0.1)] pointer-events-none transition-all duration-300"></div>
                          </div>
                        </div>
                        
                        <div className="group">
                          <label htmlFor="industry" className="block text-sm font-medium text-foreground">
                            Industry
                          </label>
                          <div className="mt-1.5 relative">
                            <select
                              id="industry"
                              name="industry"
                              className="block w-full rounded-lg border border-muted/70 bg-background/40 py-2.5 px-4 text-foreground shadow-sm focus:border-primary focus:ring-1 focus:ring-primary/60 transition-all duration-200 cursor-pointer"
                            >
                              <option value="">Select Industry</option>
                              <option value="technology">Technology</option>
                              <option value="finance">Finance</option>
                              <option value="healthcare">Healthcare</option>
                              <option value="education">Education</option>
                              <option value="ecommerce">E-commerce</option>
                              <option value="other">Other</option>
                            </select>
                            <div className="absolute inset-0 rounded-lg border border-primary/0 group-focus-within:border-primary/20 group-focus-within:shadow-[0_0_0_4px_rgba(var(--primary),0.1)] pointer-events-none transition-all duration-300"></div>
                          </div>
                        </div>
                      </>
                    )}
                    
                    {/* Common Fields with enhanced styling */}
                    <div className="group">
                      <label htmlFor="email" className="block text-sm font-medium text-foreground">
                        Email Address
                      </label>
                      <div className="mt-1.5 relative">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className="block w-full rounded-lg border border-muted/70 bg-background/40 py-2.5 px-4 text-foreground shadow-sm focus:border-primary focus:ring-1 focus:ring-primary/60 transition-all duration-200"
                          placeholder="you@example.com"
                        />
                        <div className="absolute inset-0 rounded-lg border border-primary/0 group-focus-within:border-primary/20 group-focus-within:shadow-[0_0_0_4px_rgba(var(--primary),0.1)] pointer-events-none transition-all duration-300"></div>
                      </div>
                    </div>

                    <div className="group">
                      <label htmlFor="password" className="block text-sm font-medium text-foreground">
                        Password
                      </label>
                      <div className="mt-1.5 relative">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          autoComplete={isLogin ? "current-password" : "new-password"}
                          required
                          className="block w-full rounded-lg border border-muted/70 bg-background/40 py-2.5 px-4 text-foreground shadow-sm focus:border-primary focus:ring-1 focus:ring-primary/60 transition-all duration-200"
                          placeholder={isLogin ? "Your password" : "Create a password"}
                        />
                        <div className="absolute inset-0 rounded-lg border border-primary/0 group-focus-within:border-primary/20 group-focus-within:shadow-[0_0_0_4px_rgba(var(--primary),0.1)] pointer-events-none transition-all duration-300"></div>
                      </div>
                    </div>
                    
                    {!isLogin && (
                      <div className="group">
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-foreground">
                          Confirm Password
                        </label>
                        <div className="mt-1.5 relative">
                          <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            autoComplete="new-password"
                            required
                            className="block w-full rounded-lg border border-muted/70 bg-background/40 py-2.5 px-4 text-foreground shadow-sm focus:border-primary focus:ring-1 focus:ring-primary/60 transition-all duration-200"
                            placeholder="Confirm your password"
                          />
                          <div className="absolute inset-0 rounded-lg border border-primary/0 group-focus-within:border-primary/20 group-focus-within:shadow-[0_0_0_4px_rgba(var(--primary),0.1)] pointer-events-none transition-all duration-300"></div>
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
                            className="h-4 w-4 rounded border-muted text-primary focus:ring-primary transition-colors duration-200"
                          />
                          <label htmlFor="remember-me" className="ml-2 block text-sm text-muted-foreground">
                            Remember me
                          </label>
                        </div>

                        <div className="text-sm">
                          <Link href="/forgot-password" className="font-medium text-primary hover:text-primary/80 transition-colors duration-200">
                            Forgot password?
                          </Link>
                        </div>
                      </div>
                    )}

                    {/* Enhanced submit button with gradient */}
                    <div>
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-lg bg-gradient-to-r from-primary to-primary/90 px-5 py-3 text-base font-semibold text-primary-foreground shadow-md hover:from-primary/95 hover:to-primary/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-300 group"
                      >
                        <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                    </div>
                  </form>
                  
                  {/* Enhanced Social Login */}
                  <div className="mt-8">
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-muted/70" />
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="bg-background/70 backdrop-blur-sm px-3 text-muted-foreground">Or continue with</span>
                      </div>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center items-center gap-2.5 rounded-lg border border-muted/70 bg-background/50 py-2.5 px-4 text-sm font-medium text-foreground shadow-sm hover:bg-muted/30 hover:border-muted transition-all duration-200"
                      >
                        <Mail size={18} className="text-red-500" />
                        <span>Google</span>
                      </button>

                      <button
                        type="button"
                        className="inline-flex w-full justify-center items-center gap-2.5 rounded-lg border border-muted/70 bg-background/50 py-2.5 px-4 text-sm font-medium text-foreground shadow-sm hover:bg-muted/30 hover:border-muted transition-all duration-200"
                      >
                        <Github size={18} />
                        <span>GitHub</span>
                      </button>
                    </div>
                  </div>
                  
                  {/* Enhanced toggle link with better hover effect */}
                  <div className="mt-8 text-center text-sm text-muted-foreground">
                    {isLogin ? (
                      <>
                        Not have an account?{' '}
                        <button 
                          onClick={toggleForm} 
                          className="font-medium text-primary hover:text-primary/80 hover:underline transition-colors duration-200"
                        >
                          Sign up now
                        </button>
                      </>
                    ) : (
                      <>
                        Already have an account?{' '}
                        <button 
                          onClick={toggleForm} 
                          className="font-medium text-primary hover:text-primary/80 hover:underline transition-colors duration-200"
                        >
                          Sign in
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Animation/Feature Section - Enhanced visuals */}
            <div className="hidden lg:col-span-6 lg:flex lg:flex-col lg:items-center lg:justify-center xl:col-span-7">
              {/* Enhanced placeholder for animation */}
              <div className="relative w-full max-w-lg">
                <div className="bg-gradient-to-tr from-primary/10 via-purple-500/10 to-blue-500/5 backdrop-blur-sm rounded-2xl border border-muted/50 shadow-xl dark:from-primary/15 dark:via-purple-500/15 dark:to-blue-500/10 p-2 sm:p-3 transition-all duration-300 hover:shadow-primary/10">
                  <div className="w-full overflow-hidden rounded-xl bg-background/70 backdrop-blur-sm shadow-lg ring-1 ring-muted/50 aspect-video flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full mx-auto flex items-center justify-center mb-4">
                        <Check className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">API Management Made Simple</h3>
                      <p className="text-muted-foreground">Secure, scalable, and easy to use.</p>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced decorative elements */}
                <div className="absolute -bottom-6 -right-12 w-32 h-32 bg-gradient-to-r from-primary/20 to-purple-500/10 rounded-full blur-xl opacity-70 animate-pulse"></div>
                <div className="absolute -top-8 -left-12 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-primary/10 rounded-full blur-xl opacity-70 animate-pulse delay-700"></div>
              </div>
              
              {/* Enhanced Features */}
              <div className="mt-12 max-w-lg w-full">
                <h2 className="text-2xl font-bold tracking-tight text-foreground mb-2">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500 dark:from-primary dark:via-purple-400 dark:to-blue-400">Power</span> your applications with our API management
                </h2>
                
                <p className="text-muted-foreground mb-6">Streamline your API infrastructure with our comprehensive management solution.</p>
                
                <dl className="mt-6 space-y-5">
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
                    <div key={feature.name} className="relative pl-10 group">
                      <dt className="flex items-start">
                        <div className="absolute left-0 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 group-hover:from-primary/30 group-hover:to-primary/10 transition-colors duration-300">
                          <Check className="h-5 w-5 text-primary" />
                        </div>
                        <p className="text-lg font-semibold text-foreground line-clamp-1">{feature.name}</p>
                      </dt>
                      <dd className="mt-1 text-base text-muted-foreground line-clamp-2">
                        {feature.description}
                      </dd>
                    </div>
                  ))}
                </dl>
                
                <div className="mt-8">
                  <Link
                    href="/features"
                    className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors duration-200 group"
                  >
                    Learn more about our features
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
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