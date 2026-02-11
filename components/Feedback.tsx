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
    <section className="section-padding bg-[var(--card-bg)]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Client <span className="gradient-text">Feedback</span>
        </h2>
        <p className="text-center text-[var(--muted)] mb-12 text-lg">
          What people say about working with me
        </p>

        <div className="relative">
          <Card className="text-center max-w-3xl mx-auto">
            {/* Stars */}
            <div className="flex justify-center mb-4">
              {[...Array(current.rating)].map((_, i) => (
                <span key={i} className="text-yellow-500 text-2xl">★</span>
              ))}
            </div>

            {/* Feedback Text */}
            <p className="text-xl text-[var(--foreground)] mb-6 italic">
              "{current.feedback}"
            </p>

            {/* Avatar */}
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-hover)] flex items-center justify-center text-white font-bold text-xl">
                {current.avatar}
              </div>
            </div>

            {/* Name and Company */}
            <h4 className="text-lg font-bold text-[var(--foreground)]">{current.name}</h4>
            <p className="text-[var(--muted)]">{current.role}</p>
            <p className="text-[var(--accent)]">{current.company}</p>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-[var(--background)] hover:bg-[var(--accent)] hover:text-white transition-all"
                aria-label="Previous testimonial"
              >
                ←
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'bg-[var(--accent)] w-8' : 'bg-[var(--border)]'}`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-[var(--background)] hover:bg-[var(--accent)] hover:text-white transition-all"
                aria-label="Next testimonial"
              >
                →
              </button>
            </div>
          </Card>

          {/* All Testimonials (Grid View) */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} hover className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-hover)] flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <h4 className="font-bold text-[var(--foreground)]">{testimonial.name}</h4>
                <p className="text-sm text-[var(--muted)] mb-2">{testimonial.company}</p>
                <div className="flex justify-center mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-sm">★</span>
                  ))}
                </div>
                <p className="text-sm text-[var(--foreground)] italic">"{testimonial.feedback.substring(0, 80)}..."</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
