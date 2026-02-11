'use client';

import React from 'react';
import { skills } from '@/lib/data';
import Card from './ui/Card';

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-[var(--card-bg)]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-center text-[var(--muted)] mb-12 text-lg">
          Technologies and tools I work with
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Frontend */}
          <Card>
            <h3 className="text-2xl font-bold mb-4 gradient-text">Frontend</h3>
            <div className="space-y-2">
              {skills.frontend.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-[var(--accent)] mr-2">▹</span>
                  <span className="text-[var(--foreground)]">{skill}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Styling */}
          <Card>
            <h3 className="text-2xl font-bold mb-4 gradient-text">Styling</h3>
            <div className="space-y-2">
              {skills.styling.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-[var(--accent)] mr-2">▹</span>
                  <span className="text-[var(--foreground)]">{skill}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Backend */}
          <Card>
            <h3 className="text-2xl font-bold mb-4 gradient-text">Backend</h3>
            <div className="space-y-2">
              {skills.backend.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-[var(--accent)] mr-2">▹</span>
                  <span className="text-[var(--foreground)]">{skill}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Database */}
          <Card>
            <h3 className="text-2xl font-bold mb-4 gradient-text">Database</h3>
            <div className="space-y-2">
              {skills.database.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-[var(--accent)] mr-2">▹</span>
                  <span className="text-[var(--foreground)]">{skill}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Tools */}
          <Card>
            <h3 className="text-2xl font-bold mb-4 gradient-text">Tools</h3>
            <div className="space-y-2">
              {skills.tools.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-[var(--accent)] mr-2">▹</span>
                  <span className="text-[var(--foreground)]">{skill}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
