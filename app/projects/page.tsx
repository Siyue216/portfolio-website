import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Projects from '@/components/Projects';
import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Anurag Wazarkar',
  description: 'View all projects and case studies by Anurag Wazarkar',
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1 pt-20">
        {/* We pass showMoreButton={false} so the 'View More Projects' 
            button hidden on this dedicated page*/}
        <Projects showMoreButton={false} />
      </main>
      <Footer />
    </div>
  );
}
