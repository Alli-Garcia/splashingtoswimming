import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoImage from "../assets/logo.png";
import { useEffect } from "react";
import "../index.css";

interface HeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function Header({ activeSection, onSectionChange }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "book", label: "Book" },
    { id: "reviews", label: "Reviews" },
    { id: "contact", label: "Contact" },
    { id: "about", label: "About" },
  ];

  return (
    <header style={{ backgroundColor: '#FFFFFF', borderBottom: 'none', padding: '40px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <div style={{ textAlign: 'center' }}>
        <img src={logoImage} alt="Logo" style={{ height: '12rem', margin: '0 auto' }} />
        <h1 style={{
          fontSize: '2rem',
          fontWeight: 800,
          marginTop: '1rem',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          fontFamily: "'Fredoka', 'Work Sans', sans-serif",
        }}>
          GRÁINNE MCGRATH
        </h1>
        <p style={{
          marginTop: '0.25rem',
          letterSpacing: '0.1em',
          color: '#94a3b8',
          fontWeight: '700',
          fontSize: '1.125rem',
          textTransform: 'uppercase'
        }}>
          SWIMMING INSTRUCTOR & AUTHOR
        </p>
      </div>

      {/* Desktop Navigation */}
      <nav className="desktop-nav" style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem' }}>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            className={`nav-button ${activeSection === item.id ? 'active' : ''}`}
            style={{
              fontWeight: 400,
              color: activeSection === item.id ? '#065f46' : '#334155',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => {
              if (activeSection !== item.id) {
                e.currentTarget.style.color = '#047857';
              }
            }}
            onMouseLeave={(e) => {
              if (activeSection !== item.id) {
                e.currentTarget.style.color = '#334155';
              }
            }}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <div className="mobile-menu-toggle" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '3rem' }}>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`nav-button ${mobileMenuOpen ? 'active' : ''}`}
          style={{
            fontWeight: 400,
            color: mobileMenuOpen ? '#065f46' : '#334155',
            transition: 'color 0.2s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#047857')}
          onMouseLeave={(e) => (e.currentTarget.style.color = mobileMenuOpen ? '#065f46' : '#334155')}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span style={{ marginLeft: '0.5rem' }}>Menu</span>
        </button>
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

      <style>{`
        @media (max-width: 650px) {
          .desktop-nav {
            display: none !important;
          }
        }

        @media (min-width: 651px) {
          .mobile-menu-toggle {
            display: none !important;
          }
        }

        
      `}</style>
    </header>
  );
}