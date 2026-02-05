
import React from 'react';
import { Terminal, Shield, Cpu, ArrowRight, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import projectsData from '../data/projects';

export const Home: React.FC = () => {
  const featuredProjects = projectsData.filter(p => p.featured).slice(0, 2);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-24">
      {/* Hero */}
      <section className="min-h-[70vh] flex flex-col justify-center border-l border-brand-border pl-8 relative">
        <div className="absolute top-0 left-[-5px] w-2 h-2 bg-brand-accent"></div>
        
        <div className="space-y-6">
          <div className="font-mono text-xs text-brand-accent flex items-center space-x-2">
            <span className="animate-pulse inline-block w-2 h-2 rounded-full bg-brand-accent"></span>
            <span>SYSTEM_ONLINE // DEPLOYED_TO_PROD</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">
            Secure <br />
            <span className="text-brand-accent">Backend</span> <br />
            Architect
          </h1>
          
          <p className="max-w-xl text-brand-muted text-lg leading-relaxed border-l-2 border-brand-border pl-6 italic">
            I engineer high-availability systems with a zero-trust mindset. 
            Specializing in distributed security and protocol research.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link to="/projects" className="bg-brand-accent text-brand-bg px-8 py-3 font-mono text-sm font-bold flex items-center space-x-3 hover:opacity-90 transition-all">
              <span>INIT_ENGINEERING_DATA</span>
              <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="border border-brand-border px-8 py-3 font-mono text-sm font-bold flex items-center space-x-3 hover:bg-white/5 transition-all">
              <span>ESTABLISH_COMM_CHANNEL</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats / Highlights */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "SECURITY_SCORE", value: "A+", icon: Shield },
          { label: "BACKEND_STACK", value: "REST/gRPC", icon: Cpu },
          { label: "GITHUB_COMMITS", value: "1.2K+", icon: Github }
        ].map((stat, i) => (
          <div key={i} className="p-6 border border-brand-border bg-brand-surface group hover:border-brand-accent/50 transition-all">
            <div className="flex items-center justify-between mb-4">
              <stat.icon size={20} className="text-brand-accent" />
              <span className="text-[10px] font-mono text-brand-muted uppercase">Status: OK</span>
            </div>
            <p className="text-[10px] font-mono text-brand-muted mb-1">{stat.label}</p>
            <p className="text-2xl font-bold font-mono">{stat.value}</p>
          </div>
        ))}
      </section>

      {/* Featured Projects Highlight */}
      <section className="space-y-12">
        <div className="flex items-center justify-between border-b border-brand-border pb-4">
          <h2 className="font-mono text-sm font-bold">LATEST_PROJECTS.LOG</h2>
          <Link to="/projects" className="text-brand-accent text-[10px] font-mono hover:underline">VIEW_ALL_REPOS</Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProjects.map((p) => (
            <Link key={p.id} to={`/projects/${p.slug}`} className="group block border border-brand-border p-8 bg-brand-surface hover:bg-white/[0.02] transition-all">
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] font-mono text-brand-accent border border-brand-accent/30 px-2 py-0.5">ID: {p.id.toString().padStart(3, '0')}</span>
                <span className="text-[10px] font-mono text-brand-muted">{p.tags[0]}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-mono group-hover:text-brand-accent transition-colors">{p.title}</h3>
              <p className="text-brand-muted text-sm leading-relaxed mb-8 line-clamp-2">
                {p.description}
              </p>
              <div className="flex items-center text-xs font-mono text-brand-accent group-hover:translate-x-2 transition-transform">
                <span>ANALYSIS_REPORT</span>
                <ArrowRight size={14} className="ml-2" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};
