'use client';

import React, { useState } from 'react';
import { projects } from '@/lib/data';
import Card from './ui/Card';
import Modal from './ui/Modal';
import Button from './ui/Button';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="section-padding bg-[var(--card-bg)]">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            Check out some of my recent work and side projects
          </p>
          <div className="w-20 h-1 bg-[var(--accent)] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <Card key={project.id} hover className="flex flex-col h-full">
              {/* Project Thumbnail */}
              <div className="w-full h-48 bg-gradient-to-br from-[var(--accent)]/20 to-[var(--accent-hover)]/20 rounded-lg flex items-center justify-center mb-6 overflow-hidden border border-[var(--border)]">
                <span className="text-6xl">🚀</span>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                
                <p className="text-[var(--muted)] mb-6 flex-1 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-[var(--background)] text-[var(--accent)] rounded-full border border-[var(--accent)]/30 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  onClick={() => setSelectedProject(project)}
                  variant="primary"
                  className="w-full"
                >
                  View Case Study
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <Modal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject.title}
        >
          <div className="space-y-8">
            {/* Problem */}
            <div>
              <h3 className="text-xl font-semibold text-[var(--accent)] mb-3 flex items-center gap-2">
                <span>💡</span> Problem
              </h3>
              <p className="text-[var(--foreground)] leading-relaxed">{selectedProject.problem}</p>
            </div>

            {/* Solution */}
            <div>
              <h3 className="text-xl font-semibold text-[var(--accent)] mb-3 flex items-center gap-2">
                <span>⚡</span> Solution
              </h3>
              <p className="text-[var(--foreground)] leading-relaxed">{selectedProject.solution}</p>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-xl font-semibold text-[var(--accent)] mb-3 flex items-center gap-2">
                <span>🛠️</span> Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.stack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[var(--card-bg)] text-[var(--foreground)] rounded-lg border border-[var(--border)] font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Role */}
            <div>
              <h3 className="text-xl font-semibold text-[var(--accent)] mb-3 flex items-center gap-2">
                <span>👤</span> My Role
              </h3>
              <p className="text-[var(--foreground)] leading-relaxed">{selectedProject.role}</p>
            </div>

            {/* Results */}
            <div>
              <h3 className="text-xl font-semibold text-[var(--accent)] mb-3 flex items-center gap-2">
                <span>📈</span> Results
              </h3>
              <p className="text-[var(--foreground)] leading-relaxed">{selectedProject.results}</p>
            </div>

            {/* Links */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-[var(--border)]">
              <Button
                onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                variant="primary"
                className="flex-1"
              >
                Live Demo →
              </Button>
              <Button
                onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                variant="outline"
                className="flex-1"
              >
                GitHub Repo
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}
