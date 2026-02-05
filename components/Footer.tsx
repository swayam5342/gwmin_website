
import React from 'react';
import { Shield, Cpu, Code2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-white/10 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          
          <div className="flex flex-col items-center md:items-start space-y-2">
            <div className="flex items-center space-x-2">
              <Shield size={20} className="text-brand-accent" />
              <span className="font-mono font-bold">SEC<span className="text-brand-accent">BACK</span></span>
            </div>
            <p className="text-sm text-brand-muted">Built with security in mind &copy; {currentYear}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-xs font-mono text-brand-muted uppercase tracking-widest">
            <div className="flex items-center space-x-1">
              <Code2 size={12} />
              <span>React + Vite</span>
            </div>
            <div className="flex items-center space-x-1">
              <Cpu size={12} />
              <span>Tailwind CSS</span>
            </div>
            <div className="flex items-center space-x-1">
              <Shield size={12} />
              <span>Static CMS</span>
            </div>
          </div>

          <div className="text-right">
            <p className="text-xs font-mono text-brand-muted">LAST UPDATED: 2024-05-20_09:00_UTC</p>
            <a href="/security.txt" className="text-[10px] text-brand-accent underline hover:text-brand-accent/70">Vulnerability Disclosure Policy</a>
          </div>

        </div>
      </div>
    </footer>
  );
};
