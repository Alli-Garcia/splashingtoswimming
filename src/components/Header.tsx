import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import logoImage from '../assets/logo.png'; // Make sure your logo is in src/assets/

interface HeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function Header({ activeSection, onSectionChange }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'book', label: 'Book' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="bg-gradient-to-b from-white to-slate-50 shadow-lg border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 min-h-[520px]">
        
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-8">
          <img
            src={logoImage}
            alt="Splashing to Swimming Logo"
            className="h-48 sm:h-56 md:h-64 lg:h-72 w-auto mb-6"
          />
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-2 uppercase tracking-wide font-display"style={{ fontFamily: "'Fredoka', 'Work Sans', sans-serif" }}>
              GRÁINNE MCGRATH
            </h1>
            <p className="text-slate-300 mb-6 font-bold text-lg uppercase tracking-widest">SWIMMING INSTRUCTOR & AUTHOR</p>

          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`px-6 py-3 rounded-lg font-medium text-lg transition-all duration-200 ${
                activeSection === item.id
                  ? 'bg-emerald-100 text-emerald-700 shadow-sm'
                  : 'text-slate-700 hover:text-emerald-600 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden mt-4">
          <Button
            variant="ghost"
            size="lg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-slate-700 flex items-center"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="ml-2">{mobileMenuOpen ? 'Close Menu' : 'Menu'}</span>
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-6 w-full max-w-sm">
            <div className="bg-white rounded-lg shadow-lg border border-slate-200 p-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onSectionChange(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`block px-4 py-3 rounded-lg w-full text-center font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-emerald-100 text-emerald-700 shadow-sm'
                      : 'text-slate-700 hover:text-emerald-600 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}