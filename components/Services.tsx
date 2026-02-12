'use client';

import React from 'react';
import { services } from '@/lib/data';
import Card from './ui/Card';

export default function Services() {
  return (
    <section id="services" className="section-padding bg-[var(--background)]">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            How I can help you grow your business
          </p>
          <div className="w-20 h-1 bg-[var(--accent)] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service) => (
            <Card key={service.id} hover className="text-center">
              {/* Icon */}
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-hover)] rounded-2xl flex items-center justify-center text-4xl">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>

              {/* Description */}
              <p className="text-[var(--muted)] leading-relaxed text-lg">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
