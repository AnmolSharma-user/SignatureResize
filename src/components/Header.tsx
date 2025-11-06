import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Contact', to: '/contact-us' },
  { name: 'Ai Gen', to: 'https://ai.signaturereform.com'},
];

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Animated underline style
  const underline =
    'relative after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-0.5 after:bg-gradient-to-r after:from-green-400 after:to-green-600 after:rounded-full after:transition-all after:duration-300';

  // Cute, animated dark mode switcher with a new sun icon
  const DarkModeSwitch = () => (
    <button
      onClick={() => setDarkMode(!darkMode)}
      aria-label="Toggle dark mode"
      className="relative flex items-center w-12 h-7 rounded-[12px] transition-colors duration-500 focus:outline-none group bg-transparent border-2 border-blue-200 dark:border-[#232b44]"
      tabIndex={0}
    >
      {/* Background */}
      <span
        className={`absolute inset-0 rounded-[12px] transition-colors duration-500 ${darkMode ? 'bg-[#232b44]' : 'bg-blue-200'}`}
      />
      {/* Knob */}
      <span
        className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-[10px] shadow-md transition-all duration-500 flex items-center justify-center bg-white dark:bg-[#101a1a] ${darkMode ? 'translate-x-5' : 'translate-x-0'} group-active:scale-110`}
        style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)' }}
      >
        {!darkMode ? (
          // New Sun Icon (light mode)
          <span className="relative flex items-center justify-center w-4 h-4">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="4" fill="#FFD600"/><g stroke="#FFD600" strokeWidth="1.2"><line x1="9" y1="1.5" x2="9" y2="3.2"/><line x1="9" y1="14.8" x2="9" y2="16.5"/><line x1="3.2" y1="9" x2="1.5" y2="9"/><line x1="16.5" y1="9" x2="14.8" y2="9"/><line x1="4.636" y1="4.636" x2="3.515" y2="3.515"/><line x1="14.485" y1="14.485" x2="13.364" y2="13.364"/><line x1="4.636" y1="13.364" x2="3.515" y2="14.485"/><line x1="14.485" y1="3.515" x2="13.364" y2="4.636"/></g></svg>
          </span>
        ) : (
          // Moon & stars (dark mode)
          <span className="relative flex items-center justify-center w-4 h-4">
            <svg width="16" height="16" viewBox="0 0 22 22" fill="none"><path d="M13.5 10.5C11.1863 10.5 9.5 8.8137 9.5 6.5C9.5 5.11929 9.9473 3.84344 10.7071 2.82843C8.07347 3.07347 6 5.36739 6 8.125C6 11.3137 8.68629 14 11.875 14C13.6326 14 15.0735 13.0735 15.5 12.5Z" fill="#fff"/></svg>
            {/* Stars */}
            <span className="absolute w-0.5 h-0.5 bg-white rounded-full left-0.5 top-0.5" />
            <span className="absolute w-0.5 h-0.5 bg-white rounded-full left-2.5 top-1.5" />
            <span className="absolute w-0.5 h-0.5 bg-white rounded-full left-1.5 top-2.5" />
          </span>
        )}
      </span>
    </button>
  );

  // Free! tag for Create Signature button
  const FreeTag = () => (
    <span className="absolute md:-top-2 -top-4 left-2 md:-left-3 bg-pink-500 text-white md:text-xs text-[10px] font-bold md:px-2 px-1.5 md:py-0.5 py-0.5 rounded-full shadow-md animate-bounce z-10 select-none pointer-events-none whitespace-nowrap">
      Free!
    </span>
  );

  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur-xl bg-white/60 dark:bg-[#101a1a]/80 shadow-md transition-colors duration-500 mb-0 md:mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-28 md:h-24 relative items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 flex-shrink-0 group">
          <img src="/logo.png" alt="Logo" className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/30 shadow group-hover:scale-105 transition-transform duration-300" />
          <span className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight drop-shadow group-hover:text-green-500 transition-colors duration-300">SignatureResize</span>
        </Link>
        {/* Desktop Nav */}
        <nav className="hidden lg:flex flex-1 justify-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-slate-700 dark:text-slate-200 px-3 py-2 font-medium rounded-[10px] ${underline} after:bg-gradient-to-r after:from-green-400 after:to-green-600 ${location.pathname === link.to ? 'after:w-full text-green-600 dark:text-green-400' : ''}`}
              style={{ position: 'relative' }}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        {/* Right: Create Signature button & Dark mode switch */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="hidden lg:inline-block relative">
            <FreeTag />
            <Link
              to="/signature-creator"
              className="px-6 py-1.5 md:py-2 rounded-[12px] border border-green-400 bg-transparent text-green-700 dark:text-green-300 font-semibold shadow-sm hover:bg-green-50 dark:hover:bg-green-900/30 hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 dark:focus:ring-offset-[#101a1a]"
            >
              Create Signature
            </Link>
          </div>
          {/* Modern dark mode switcher */}
          <DarkModeSwitch />
          {/* Hamburger for mobile */}
          <button
            className="lg:hidden p-2 rounded-[10px] hover:bg-green-100 dark:hover:bg-[#223a2a] focus:outline-none ml-2 transition-colors"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
          >
            <span className={`block transition-transform duration-300 ${menuOpen ? 'rotate-90' : ''}`}>
              {menuOpen ? <X className="h-8 w-8 text-slate-900 dark:text-white" /> : <Menu className="h-8 w-8 text-slate-900 dark:text-white" />}
            </span>
          </button>
        </div>
        {/* Mobile Nav Drawer */}
        {menuOpen && (
          <nav className="absolute top-full left-0 w-full backdrop-blur-xl bg-white/95 dark:bg-[#101a1a]/95 shadow-lg z-40 flex flex-col lg:hidden animate-fade-in transition-all duration-500 pt-4 pb-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-8 py-4 text-lg text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 rounded-[10px] ${underline} after:bg-gradient-to-r after:from-green-400 after:to-green-600 hover:text-green-700 dark:hover:text-green-300 transition-colors`}
                onClick={() => setMenuOpen(false)}
                style={{ position: 'relative' }}
              >
                {link.name}
              </Link>
            ))}
            <div className="relative">
              <FreeTag />
              <Link
                to="/signature-creator"
                className="m-4 px-6 py-1.5 md:py-3 rounded-[12px] border border-green-400 bg-transparent text-green-700 dark:text-green-300 font-semibold shadow-sm hover:bg-green-50 dark:hover:bg-green-900/30 hover:shadow-lg text-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 dark:focus:ring-offset-[#101a1a]"
                onClick={() => setMenuOpen(false)}
              >
                Create Signature
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
