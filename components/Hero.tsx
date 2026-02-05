
import React from 'react';
import { Terminal, Github, ChevronRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden hacker-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/0 via-brand-bg/50 to-brand-bg"></div>
      
      <div className="relative z-10 max-w-4xl px-4 text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 mb-6 animate-pulse">
          <Terminal size={14} className="text-brand-accent" />
          <span className="text-xs font-mono text-brand-accent font-medium">status: available for hire</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-cyan">John Doe</span>
        </h1>
        
        <p className="text-2xl md:text-3xl font-mono text-brand-muted mb-8">
          Cybersecurity & <span className="text-brand-text">Backend Developer</span>
        </p>
        
        <p className="text-lg text-brand-muted max-w-2xl mx-auto mb-10">
          I build secure, scalable systems with a defensive-first mindset. 
          Currently specializing in reverse engineering and high-performance backend architectures.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link to="/projects" className="group flex items-center space-x-2 bg-brand-accent text-brand-bg px-6 py-3 rounded-lg font-bold hover:scale-105 transition-all">
            <span>View Projects</span>
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link to="/resume" className="flex items-center space-x-2 bg-white/5 border border-white/10 hover:border-brand-accent/50 text-brand-text px-6 py-3 rounded-lg font-bold transition-all">
            <FileText size={18} />
            <span>Resume</span>
          </Link>
          
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-white/10 hover:border-brand-accent/50 rounded-lg text-brand-text transition-all">
            <Github size={20} />
          </a>
        </div>
      </div>

      {/* Visual background details */}
      <div className="absolute bottom-10 left-10 opacity-10 font-mono text-xs hidden lg:block">
        <pre>{`$ nmap -sV -T4 127.0.0.1
$ nc -lvp 4444
$ docker-compose up -d
$ go build -o vault ./cmd/main.go`}</pre>
      </div>
    </section>
  );
};
