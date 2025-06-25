import React from 'react';

interface BookCardProps {
  image: string | undefined;
  title: string;
  author: string;
}

export default function BookCard({ image, title, author }: BookCardProps) {
    return (
        <div className="bg-[var(--card-bg)] rounded-2xl shadow-sm overflow-hidden flex flex-col w-full max-w-xs">
          <div className="w-full h-56 flex items-center justify-center bg-gray-100">
            <img
              src={image}
              alt={title}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-4 flex flex-col">
            <h3 className="text-lg font-bold text-[var(--foreground)] mb-2" style={{ fontFamily: 'Manrope, sans-serif' }}>
              {title}
            </h3>
            <div className="text-sm text-[var(--accent)]" style={{ fontFamily: 'Manrope, sans-serif' }}>
              {author}
            </div>
          </div>
        </div>
      );
};