'use client';

import React from 'react';
import { personalInfo } from '@/lib/data';
import Button from './ui/Button';

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-[var(--background)] to-[var(--card-bg)] py-20">
      {/* Centered Container */}
      <div className="w-full">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            {/* Greeting */}
            <p className="text-sm md:text-lg font-medium text-[var(--accent)] uppercase tracking-wide">
              Welcome to my portfolio
            </p>
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Hi, I'm{' '}
              <span className="gradient-text block mt-3">
                {personalInfo.name}
              </span>
            </h1>
            
            {/* Role */}
            <p className="text-xl md:text-2xl lg:text-3xl font-medium text-[var(--foreground)] opacity-90 pt-2">
              {personalInfo.role}
            </p>
            
            {/* Tagline */}
            <p className="text-base md:text-lg lg:text-xl text-[var(--muted)] max-w-2xl mx-auto leading-relaxed pt-2">
              {personalInfo.tagline}
            </p>
            
            {/* CTAs - Centered */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button onClick={scrollToProjects} variant="primary">
                View My Work
              </Button>
              <Button 
                onClick={() => window.open(personalInfo.resumeUrl, '_blank')}
                variant="outline"
              >
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-[var(--accent)] rounded-full opacity-10 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-[var(--accent-hover)] rounded-full opacity-10 blur-3xl pointer-events-none"></div>
    </section>
  );
}
