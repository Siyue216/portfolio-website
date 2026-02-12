'use client';

import React from 'react';
import { skills } from '@/lib/data';
import Card from './ui/Card';

export default function Skills() {
  const categories = [
    { name: 'Frontend', items: skills.frontend, icon: '💻' },
    { name: 'Styling', items: skills.styling, icon: '🎨' },
    { name: 'Backend', items: skills.backend, icon: '⚙️' },
    { name: 'Database', items: skills.database, icon: '🗄️' },
    { name: 'AI', items: skills.AI, icon: '🧠' },
    { name: 'Tools', items: skills.tools, icon: '🛠️' }
  ];

  return (
    <section id="skills" className="section-padding bg-[var(--card-bg)]">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
          <div className="w-20 h-1 bg-[var(--accent)] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {categories.map((category, idx) => (
            <Card key={idx}>
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-2xl font-bold gradient-text">{category.name}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {category.items.map((skill, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="w-2 h-2 rounded-full bg-[var(--accent)] group-hover:scale-150 transition-transform"></div>
                    <span className="text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
