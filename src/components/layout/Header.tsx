// src/components/layout/Header.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Navigation from './Navigation';


export default function Header() {

  const [isScrolled, setIsScrolled] = useState(false);
  
  // Track scroll position for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image 
                src={'dark' === 'dark' ? '/images/logo-light.svg' : '/images/logo-dark.svg'} 
                alt="APIScape Logo" 
                width={140} 
                height={32} 
                className="h-8 w-auto" 
              />
            </Link>
          </div>

          {/* Navigation */}
          <Navigation />

          {/* Action buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link 
              href="/auth" 
              className="text-sm font-medium transition hover:text-primary"
            >
              Log in
            </Link>
            <Link 
              href="/signup" 
              className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
            >
              Sign up
            </Link>
           
          </div>
        </div>
      </div>
    </header>
  );
}