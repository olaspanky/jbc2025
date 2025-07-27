// components/Navigation.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/jbc/about" },
  { name: "Speakers", path: "/jbc/speakers" },
  { name: "Schedule", path: "#" },
  { name: "Register", path: "#" },
] as const;

const Navigation: React.FC = React.memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center" onClick={closeMenu}>
              <Image
                src="/images/emlogo.png"
                alt="Jericho Businessmen Club Logo"
                width={48}
                height={48}
                className="rounded-full w-12 h-12 sm:w-14 sm:h-14"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="text-white text-sm lg:text-base font-medium hover:text-purple-300 transition-colors duration-200 relative group"
                aria-label={`Navigate to ${item.name} page`}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-purple-300 transition-colors p-2 cursor-pointer"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="backdrop-blur-xl bg-black/40 border-t border-white/10 px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="block px-3 py-2 text-white text-base font-medium hover:text-purple-300 hover:bg-white/5 rounded-md transition-all duration-200"
                aria-label={`Navigate to ${item.name} page`}
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
});

Navigation.displayName = "Navigation";

export default Navigation;