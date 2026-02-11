'use client';

import React from 'react';
import { personalInfo } from '@/lib/data';
import Card from './ui/Card';
import Button from './ui/Button';

export default function About() {
  const bioParagraphs = personalInfo.bio.split('\n\n');

  return (
    <section id="about" className="section-padding bg-[var(--background)]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-hover)] p-2">
                <div className="w-full h-full rounded-full bg-[var(--card-bg)] flex items-center justify-center text-6xl md:text-8xl font-bold gradient-text">
                  {personalInfo.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-6">
            {bioParagraphs.map((paragraph, index) => (
              <p key={index} className="text-lg text-[var(--foreground)] leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="pt-4">
              <Button 
                onClick={() => window.open(personalInfo.resumeUrl, '_blank')}
                variant="primary"
              >
                Download Resume
              </Button>
            </div>

            {/* Key Highlights */}
            <Card className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
              <ul className="space-y-2 text-[var(--foreground)]">
                <li className="flex items-center">
                  <span className="text-[var(--accent)] mr-2">✓</span>
                  5+ years of web development experience
                </li>
                <li className="flex items-center">
                  <span className="text-[var(--accent)] mr-2">✓</span>
                  Specialized in modern JavaScript frameworks
                </li>
                <li className="flex items-center">
                  <span className="text-[var(--accent)] mr-2">✓</span>
                  Passionate about AI automation
                </li>
                <li className="flex items-center">
                  <span className="text-[var(--accent)] mr-2">✓</span>
                  Open source contributor
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
