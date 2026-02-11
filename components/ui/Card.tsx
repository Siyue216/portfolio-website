import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  const hoverStyles = hover ? "hover:shadow-xl hover:scale-105 transition-all duration-300" : "";
  
  return (
    <div className={`bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-6 ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}
