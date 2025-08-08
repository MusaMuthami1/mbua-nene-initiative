'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, Heart } from 'lucide-react';
import { navigationItems, organizationInfo } from '@/lib/data';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <>
      <a 
        href="#main-content" 
        className="skip-link"
        onFocus={(e) => e.target.classList.add('top-6')}
        onBlur={(e) => e.target.classList.remove('top-6')}
      >
        Skip to main content
      </a>
      
      <header 
        ref={headerRef}
        className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm"
        role="banner"
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center space-x-3 group"
              onClick={closeMenu}
              aria-label={`${organizationInfo.name} - Home`}
            >
              <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-gradient-primary rounded-full group-hover:shadow-lg transition-shadow duration-200">
                <Heart className="w-5 h-5 md:w-6 md:h-6 text-white" aria-hidden="true" />
              </div>
              <div className="hidden sm:block">
                <div className="font-heading font-bold text-lg md:text-xl text-primary-800">
                  {organizationInfo.name}
                </div>
                <div className="text-xs md:text-sm text-gray-600 -mt-1">
                  {organizationInfo.tagline}
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.children ? (
                    <>
                      <button
                        className={cn(
                          "flex items-center space-x-1 px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium",
                          activeDropdown === item.name && "text-primary-600"
                        )}
                        onClick={() => handleDropdownToggle(item.name)}
                        aria-expanded={activeDropdown === item.name}
                        aria-haspopup="true"
                      >
                        <span>{item.name}</span>
                        <ChevronDown 
                          className={cn(
                            "w-4 h-4 transition-transform duration-200",
                            activeDropdown === item.name && "rotate-180"
                          )} 
                          aria-hidden="true"
                        />
                      </button>
                      
                      {/* Dropdown Menu */}
                      <div
                        className={cn(
                          "absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 opacity-0 invisible transform translate-y-2 transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0",
                          activeDropdown === item.name && "opacity-100 visible translate-y-0"
                        )}
                        role="menu"
                        aria-label={`${item.name} submenu`}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                            role="menuitem"
                            onClick={closeMenu}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium"
                      onClick={closeMenu}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/volunteer" className="btn-primary">
                Get Involved
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden fixed inset-x-0 top-16 md:top-20 bg-white border-b border-gray-200 shadow-lg transform transition-transform duration-300 ease-in-out z-30",
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          )}
          role="navigation"
          aria-label="Mobile navigation"
          aria-hidden={!isMenuOpen}
        >
          <div className="container py-4 max-h-screen overflow-y-auto">
            <div className="space-y-1">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <>
                      <button
                        className={cn(
                          "w-full flex items-center justify-between px-4 py-3 text-left text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors duration-200 font-medium",
                          activeDropdown === item.name && "bg-primary-50 text-primary-600"
                        )}
                        onClick={() => handleDropdownToggle(item.name)}
                        aria-expanded={activeDropdown === item.name}
                      >
                        <span>{item.name}</span>
                        <ChevronDown 
                          className={cn(
                            "w-4 h-4 transition-transform duration-200",
                            activeDropdown === item.name && "rotate-180"
                          )} 
                          aria-hidden="true"
                        />
                      </button>
                      
                      {activeDropdown === item.name && (
                        <div className="pl-4 space-y-1" role="menu">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block px-4 py-2 text-gray-600 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors duration-200"
                              role="menuitem"
                              onClick={closeMenu}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors duration-200 font-medium"
                      onClick={closeMenu}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-200">
                <Link 
                  href="/volunteer" 
                  className="btn-primary w-full justify-center"
                  onClick={closeMenu}
                >
                  Get Involved
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile overlay */}
        {isMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/20 z-20"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}
      </header>
    </>
  );
}