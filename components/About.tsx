'use client';

import React from 'react';
import { personalInfo } from '@/lib/data';
import Card from './ui/Card';
import Button from './ui/Button';

export default function About() {
  const bioParagraphs = personalInfo.bio.split('\n\n');

  return (
    <section id="about" className="section-padding bg-[var(--background)]">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-[var(--accent)] rounded-full"></div>
        </div>

        {/* Content Grid - Centered with max-width */}
        <div className="mx-auto">
          <div className="grid md:grid-cols-5 items-center">
            {/* Profile Image - Takes 2 columns, positioned on the right */}
            <div className="md:col-span-2 flex justify-center mb-16">
              <div className="relative">
                <div className="w-64 h-64 md:w-72 lg:w-80 md:h-72 lg:h-80 rounded-2xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-hover)] ">
                  <div className="w-full h-full rounded-2xl bg-[var(--card-bg)] overflow-hidden">
                    <img
                      src={personalInfo.pimage}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Decorative Element */}
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[var(--accent)] rounded-2xl -z-10"></div>
              </div>
            </div>

            {/* Bio Content - Takes 3 columns */}
            <div className="md:col-span-3 space-y-6 mb-12">
              {bioParagraphs.map((paragraph, index) => (
                <p key={index} className="text-lg  text-[var(--foreground)] leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="pt-6">
                <Button 
                  onClick={() => window.open(personalInfo.resumeUrl, '_blank')}
                  variant="primary"
                >
                  Download Full Resume
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Key Highlights - Centered with same max-width */}
        <div className="mx-auto">
          <div className="mx-auto">
            <Card>
              <h3 className="text-2xl font-bold mt-4 mb-4 text-center">
                Quick <span className="gradient-text">Highlights</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                {[
                  "5+ years of web development experience",
                  "Specialized in modern JavaScript frameworks",
                  "Passionate about AI automation",
                  "Open source contributor"
                ].map((fact, index) => (
                  <div key={index} className="flex items-center gap-3 ml-3">
                    <span className="text-[var(--accent)] text-xl">✓</span>
                    <span className="text-[var(--foreground)]">{fact}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
