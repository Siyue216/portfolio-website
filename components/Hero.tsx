'use client';

import React from 'react';
import { personalInfo } from '@/lib/data';
import Button from './ui/Button';

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-24 bg-gradient-to-br from-[var(--background)] to-[var(--card-bg)]">
      <div className="max-w-7xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
          </h1>
          <p className="text-2xl md:text-3xl text-[var(--muted)] mb-4">
            {personalInfo.role}
          </p>
          <p className="text-xl md:text-2xl text-[var(--foreground)] mb-12 max-w-3xl mx-auto">
            {personalInfo.tagline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={scrollToProjects} variant="primary">
              View Projects
            </Button>
            <Button 
              onClick={() => window.open(personalInfo.resumeUrl, '_blank')}
              variant="outline"
            >
              Download Resume
            </Button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--accent)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[var(--accent-hover)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
}
