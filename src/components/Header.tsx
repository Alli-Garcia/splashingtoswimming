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
    <header style={{ borderBottom: "1px solid #e5e7eb", padding: "40px 0" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "32px",
        }}
      >
        {/* Logo */}
        <div style={{ textAlign: "center" }}>
          <img src={logoImage} alt="Logo" style={{ height: 192 }} />
          <h1 style={{ fontSize: 32, fontWeight: 800, marginTop: 16 }}>
            GRÁINNE MCGRATH
          </h1>
          <p style={{ letterSpacing: 2 }}>SWIMMING INSTRUCTOR & AUTHOR</p>
        </div>

        {/* Desktop Nav */}
        <nav>
          <div className="desktop-nav" style={{ gap: "48px" }}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                style={{
                  padding: "8px 16px",
                  border: "1px solid #ccc",
                  background: "white",
                  cursor: "pointer",
                  fontWeight:
                    activeSection === item.id ? "700" : "400",
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
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
          <div className="mobile-only" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
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
      </div>
    </header>
  );
}
