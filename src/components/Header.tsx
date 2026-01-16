import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import logoImage from '../assets/logo.png';

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
    <header className="bg-gradient-to-b from-white to-slate-50 shadow-lg border-b border-slate-200">
      <div className="min-h-[520px] flex flex-col items-center justify-center px-4">

        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <img src={logoImage} alt="Logo" className="h-48 w-auto mb-6" />
          <h1 className="text-3xl font-black uppercase">GRÁINNE MCGRATH</h1>
          <p className="text-slate-600 font-bold tracking-widest">
            SWIMMING INSTRUCTOR & AUTHOR
          </p>
        </div>

        {/* ===== DESKTOP NAV ===== */}
        <nav className="max-[500px]:hidden flex space-x-6 lg:space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`px-6 py-3 rounded-lg font-medium text-lg transition-all ${
                activeSection === item.id
                  ? 'bg-emerald-100 text-emerald-700'
                  : 'text-slate-700 hover:text-emerald-600'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>


        {/* ===== MOBILE MENU BUTTON ===== */}
        <div className="max-[500px]:block hidden mt-4">
          <Button
            variant="ghost"
            size="lg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center gap-2"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
            <span>{mobileMenuOpen ? 'Close' : 'Menu'}</span>
          </Button>
        </div>

        {/* ===== MOBILE NAV ===== */}
        {mobileMenuOpen && (
          <nav className="max-[500px]:block hidden mt-6 w-full max-w-sm bg-white border rounded-lg p-4 space-y-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => {
                  onSectionChange(item.id);
                  setMobileMenuOpen(false);
                }}
                className="w-full justify-center"
              >
                {item.label}
              </Button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}