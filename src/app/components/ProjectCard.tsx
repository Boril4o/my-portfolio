'use client';

import Link from 'next/link';

// Define the type for our props
type ProjectCardProps = {
  title: string;
  description: string;
  url: string;
};

export default function ProjectCard({ title, description, url }: ProjectCardProps) {
  return (
    <Link
      href={url}
      className="block p-5 rounded-xl mb-2 shadow-sm hover:shadow-md transform hover:scale-105 transition-transform duration-150"
      style={{ fontFamily: 'Manrope, sans-serif', background: 'var(--project-card-bg)' }}
    >
      <h3 className="text-lg font-bold mb-1 text-[var(--foreground)]">
        {title}
      </h3>
      {description && (
        <p className="text-sm font-medium text-[var(--accent)]">
          {description}
        </p>
      )}
    </Link>
  );
} 