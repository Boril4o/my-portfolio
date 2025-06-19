'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faFolderOpen, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--card-bg)] text-[var(--foreground)] py-3 rounded-b-xl shadow-sm">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="text-2xl font-bold tracking-tight mb-1" style={{ fontFamily: 'Manrope, sans-serif' }}>
          Boris Georgiev
        </h2>
        <nav>
          <ul className="flex space-x-3 sm:space-x-8 justify-center items-center mt-1">
            <li className='flex items-center'>
              <FontAwesomeIcon icon={faHome}/>
              <Link 
                href="/"
                className="text-[var(--foreground)] hover:text-[var(--accent)] transition-colors duration-150 px-2 pt-1 flex items-center gap-2"
                style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 550 }}
              >
                
                Home
              </Link>
            </li>
            <li className='flex items-center'>
              <FontAwesomeIcon icon={faUser} />
              <Link 
                href="/about"
                className="text-[var(--foreground)] hover:text-[var(--accent)] transition-colors duration-150 px-2 pt-1 flex items-center gap-2"
                style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 550 }}
              >
                About
              </Link>
            </li>
            <li className='flex items-center'>
              <FontAwesomeIcon icon={faFolderOpen} />
              <Link 
                href="/projects"
                className="text-[var(--foreground)] hover:text-[var(--accent)] transition-colors duration-150 px-2 pt-1 flex items-center gap-2"
                style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 550 }}
              >
                Projects
              </Link>
            </li>
            <li className='flex items-center'>
              <FontAwesomeIcon icon={faEnvelope} />
              <Link 
                href="/contact"
                className="text-[var(--foreground)] hover:text-[var(--accent)] transition-colors duration-150 px-2 pt-1 flex items-center gap-2"
                style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 550 }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
} 