import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoImage from "../assets/logo.png";

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
      <nav style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem' }}>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            className={`nav-button ${activeSection === item.id ? 'active' : ''}`}
            style={{
              fontWeight: 400, // Removed bold font weight for selected nav text
              color: activeSection === item.id ? '#065f46' : '#334155', // Dark green when selected
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => {
              if (activeSection !== item.id) {
                e.currentTarget.style.color = '#047857'; // Green on hover for non-selected
              }
            }}
            onMouseLeave={(e) => {
              if (activeSection !== item.id) {
                e.currentTarget.style.color = '#334155'; // Reset to default for non-selected
              }
            }}
          >
            {item.label}
          </button>
          ))
        }
      </nav>

      {/* Mobile Menu Toggle */}
      <button
        className="mobile-only"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        style={{ marginTop: 24 }}
      >
        {mobileMenuOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div
          className="mobile-only"
          style={{ display: "flex", flexDirection: "column", gap: 12 }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onSectionChange(item.id);
                setMobileMenuOpen(false);
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}