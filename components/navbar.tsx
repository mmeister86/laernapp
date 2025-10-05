"use client";

import Link from "next/link";
import { useState } from "react";

/**
 * Navbar mit neobrutalism Design für LaernApp
 *
 * @example
 * <Navbar />
 */
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-[#FFC667] border-4 border-black rounded-[15px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center group-hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] transition-all duration-100">
              <span className="text-2xl font-extrabold text-black">L</span>
            </div>
            <span className="text-2xl font-extrabold text-black">LaernApp</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/features"
              className="text-lg font-medium text-black hover:text-[#FFC667] transition-colors duration-200"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-lg font-medium text-black hover:text-[#FFC667] transition-colors duration-200"
            >
              Preise
            </Link>
            <Link
              href="/about"
              className="text-lg font-medium text-black hover:text-[#FFC667] transition-colors duration-200"
            >
              Über uns
            </Link>
            <Link
              href="/contact"
              className="text-lg font-medium text-black hover:text-[#FFC667] transition-colors duration-200"
            >
              Kontakt
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="px-6 py-2 text-lg font-medium text-black border-4 border-black rounded-[15px] bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] transition-all duration-100"
            >
              Anmelden
            </Link>
            <Link
              href="/register"
              className="px-6 py-2 text-lg font-extrabold text-black border-4 border-black rounded-[15px] bg-[#FFC667] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] transition-all duration-100"
            >
              Kostenlos starten
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 border-4 border-black rounded-[15px] bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] transition-all duration-100"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/features"
                className="block px-3 py-2 text-lg font-medium text-black hover:bg-[#FFC667] hover:text-black rounded-[15px] transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="block px-3 py-2 text-lg font-medium text-black hover:bg-[#FFC667] hover:text-black rounded-[15px] transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Preise
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-lg font-medium text-black hover:bg-[#FFC667] hover:text-black rounded-[15px] transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Über uns
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-lg font-medium text-black hover:bg-[#FFC667] hover:text-black rounded-[15px] transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontakt
              </Link>
              <div className="pt-4 space-y-2">
                <Link
                  href="/login"
                  className="block px-3 py-2 text-lg font-medium text-black border-4 border-black rounded-[15px] bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Anmelden
                </Link>
                <Link
                  href="/register"
                  className="block px-3 py-2 text-lg font-extrabold text-black border-4 border-black rounded-[15px] bg-[#FFC667] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Kostenlos starten
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
