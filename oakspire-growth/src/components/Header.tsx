import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, ArrowRight, ShieldAlert } from 'lucide-react';

interface HeaderProps {
  onAdminOpen: () => void;
  adminEnabled: boolean;
}

export default function Header({ onAdminOpen, adminEnabled }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Why Us', href: '#why-us' },
    { name: 'Our System', href: '#our-system' },
    { name: 'Services', href: '#services' },
    { name: 'Who We Serve', href: '#who-we-serve' },
    { name: 'Results', href: '#results' },
    { name: 'About', href: '#about' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Brand */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="cursor-pointer transition-transform duration-200 active:scale-95"
            id="header-logo-link"
          >
            <Logo
              variant="header"
              iconColor="#FFFFFF"
              textColor="#FFFFFF"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" id="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-slate-300 hover:text-emerald-400 text-sm font-medium transition-colors duration-200"
                id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4" id="desktop-actions">
            <button
              onClick={() => handleLinkClick('#contact')}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold bg-emerald-500 text-white hover:bg-emerald-600 active:bg-emerald-700 shadow-[0_4px_14px_rgba(15,53,96,0.35)] hover:shadow-[0_6px_20px_rgba(15,53,96,0.45)] transition-all duration-200 active:scale-[0.98]"
              id="header-cta-btn"
            >
              Book My Audit
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none transition-colors duration-200"
              aria-expanded={isOpen}
              id="mobile-menu-toggle"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        } bg-slate-900 border-b border-slate-800`}
        id="mobile-nav-panel"
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleLinkClick(link.href)}
              className="block w-full text-left px-4 py-3 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            >
              {link.name}
            </button>
          ))}
          <div className="pt-4 border-t border-slate-800 px-4">
            <button
              onClick={() => {
                setIsOpen(false);
                handleLinkClick('#contact');
              }}
              className="w-full inline-flex items-center justify-center px-5 py-3 rounded-lg text-base font-semibold bg-emerald-500 text-white hover:bg-emerald-600 transition-all duration-200 shadow-md"
            >
              Book My Free Strategy Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
