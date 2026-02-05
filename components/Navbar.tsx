
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Shield, Cpu, ExternalLink } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'SYSTEM_ROOT', path: '/' },
    { name: 'BIO_DATA', path: '/about' },
    { name: 'ENGINEERING', path: '/projects' },
    { name: 'CERT_VAULT', path: '/certificates' },
    { name: 'DOC_RESUME', path: '/resume' },
    { name: 'CONTACT', path: '/contact' },
  ];

  const activeClass = "text-brand-accent border-b-2 border-brand-accent";
  const inactiveClass = "text-brand-muted hover:text-brand-text border-b-2 border-transparent";

  return (
    <nav className="fixed top-0 w-full z-50 bg-brand-bg/80 backdrop-blur-xl border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-brand-accent/10 p-1 border border-brand-accent/30 text-brand-accent">
              <Shield size={18} />
            </div>
            <span className="font-mono font-bold tracking-tight text-sm flex flex-col leading-none">
              <span>SEC_KERNEL_v3.1</span>
              <span className="text-[10px] text-brand-muted font-normal">AUTHORIZED ACCESS ONLY</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => 
                  `font-mono text-[11px] font-medium transition-all py-1 px-1 ${isActive ? activeClass : inactiveClass}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-muted hover:text-brand-accent p-1 border border-brand-border"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-surface border-b border-brand-border px-4 py-4 space-y-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block font-mono text-xs text-brand-muted hover:text-brand-accent"
            >
              {`> ${link.name}`}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};
