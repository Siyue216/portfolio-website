'use client';

import React from 'react';
import { services } from '@/lib/data';
import Card from './ui/Card';

export default function Services() {
  return (
    <section id="services" className="section-padding bg-[var(--background)]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          My <span className="gradient-text">Services</span>
        </h2>
        <p className="text-center text-[var(--muted)] mb-12 text-lg">
          How I can help you grow your business
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Card key={service.id} hover>
              <div className="text-center space-y-4">
                {/* Icon */}
                <div className="text-6xl mb-4">{service.icon}</div>

                {/* Title */}
                <h3 className="text-xl font-bold">{service.title}</h3>

                {/* Description */}
                <p className="text-[var(--muted)]">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
