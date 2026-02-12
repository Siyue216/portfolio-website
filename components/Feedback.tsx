'use client';

import React, { useState } from 'react';
import { testimonials } from '@/lib/data';
import Card from './ui/Card';

export default function Feedback() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="feedback" className="section-padding bg-[var(--background)]">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            What people say about working with me
          </p>
          <div className="w-20 h-1 bg-[var(--accent)] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="text-center p-12">
            {/* Quote Icon */}
            <div className="text-6xl text-[var(--accent)] opacity-30 mb-6">"</div>

            {/* Stars */}
            <div className="flex justify-center gap-2 mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <span key={i} className="text-yellow-500 text-2xl">★</span>
              ))}
            </div>

            {/* Feedback */}
            <p className="text-xl md:text-2xl text-[var(--foreground)] mb-8 italic leading-relaxed">
              {current.feedback}
            </p>

            {/* Client Info */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-hover)] flex items-center justify-center text-white font-bold text-xl">
                {current.avatar}
              </div>
              <div>
                <h4 className="text-xl font-bold text-[var(--foreground)]">{current.name}</h4>
                <p className="text-[var(--muted)]">{current.role}</p>
                <p className="text-[var(--accent)] font-medium">{current.company}</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-6 mt-10">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-[var(--card-bg)] border border-[var(--border)] hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition-all flex items-center justify-center text-xl font-bold"
                aria-label="Previous testimonial"
              >
                ←
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex 
                        ? 'bg-[var(--accent)] w-8' 
                        : 'bg-[var(--border)] w-2 hover:bg-[var(--accent)]/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-[var(--card-bg)] border border-[var(--border)] hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition-all flex items-center justify-center text-xl font-bold"
                aria-label="Next testimonial"
              >
                →
              </button>
            </div>
          </Card>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} hover className="text-center">
              {/* Avatar */}
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-hover)] flex items-center justify-center text-white font-bold">
                {testimonial.avatar}
              </div>

              {/* Name & Company */}
              <h4 className="font-bold text-[var(--foreground)] mb-1">{testimonial.name}</h4>
              <p className="text-sm text-[var(--muted)] mb-3">{testimonial.company}</p>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500">★</span>
                ))}
              </div>

              {/* Feedback Preview */}
              <p className="text-sm text-[var(--foreground)] italic">
                "{testimonial.feedback.substring(0, 100)}..."
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
