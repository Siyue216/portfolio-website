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
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-center text-[var(--muted)] mb-12 text-lg">
          Check out some of my recent work
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} hover>
              <div className="space-y-4">
                {/* Project Thumbnail */}
                <div className="w-full h-48 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-hover)] rounded-lg flex items-center justify-center text-6xl">
                  🚀
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold">{project.title}</h3>

                {/* Description */}
                <p className="text-[var(--muted)]">{project.description}</p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-[var(--background)] text-[var(--accent)] rounded-full border border-[var(--accent)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Case Study Button */}
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
          <div className="space-y-6">
            {/* Problem */}
            <div>
              <h3 className="text-xl font-semibold text-[var(--accent)] mb-2">Problem</h3>
              <p className="text-[var(--foreground)]">{selectedProject.problem}</p>
            </div>

            {/* Solution */}
            <div>
              <h3 className="text-xl font-semibold text-[var(--accent)] mb-2">Solution</h3>
              <p className="text-[var(--foreground)]">{selectedProject.solution}</p>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-xl font-semibold text-[var(--accent)] mb-2">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.stack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[var(--card-bg)] text-[var(--foreground)] rounded-lg border border-[var(--border)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Role */}
            <div>
              <h3 className="text-xl font-semibold text-[var(--accent)] mb-2">My Role</h3>
              <p className="text-[var(--foreground)]">{selectedProject.role}</p>
            </div>

            {/* Results */}
            <div>
              <h3 className="text-xl font-semibold text-[var(--accent)] mb-2">Results</h3>
              <p className="text-[var(--foreground)]">{selectedProject.results}</p>
            </div>

            {/* Links */}
            <div className="flex gap-4 pt-4">
              <Button
                onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                variant="primary"
              >
                Live Demo
              </Button>
              <Button
                onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                variant="outline"
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
