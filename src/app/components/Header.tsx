'use client';

import Link from 'next/link';

export default function Header() {
  return (
    // Main header container with dark background, white text, and padding
    <header className="bg-gray-800 text-white p-4">
      {/* Container with max width and centered content */}
      <div className="container mx-auto">
        {/* Flex container to place name and nav side by side */}
        <div className="flex justify-between items-center">
          {/* Name heading with larger text and bold weight */}
          <h2 className="text-2xl font-bold">Boris Georgiev</h2>
          
          {/* Navigation container */}
          <nav>
            {/* Unordered list with flex layout and gap between items */}
            <ul className="flex space-x-6">
              <li>
                <Link 
                  href="/" 
                  className="hover:text-gray-300 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="hover:text-gray-300 transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/projects" 
                  className="hover:text-gray-300 transition-colors duration-200"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="hover:text-gray-300 transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
} 