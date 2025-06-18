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
      className="block p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
    >
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-gray-600">
        {description}
      </p>
    </Link>
  );
} 