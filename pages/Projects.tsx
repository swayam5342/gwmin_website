
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Github, ExternalLink, Filter, ChevronRight } from 'lucide-react';
import projectsData from '../data/projects';
import { Project } from '../types';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Cybersecurity', 'Backend', 'Fullstack'];

  const filteredProjects = (projectsData as Project[]).filter(p => {
    if (filter === 'All') return true;
    return p.tags.includes(filter);
  }).sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

  return (
    <div className="max-w-7xl mx-auto px-4">
      <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between border-b border-brand-border pb-8">
        <div>
          <h1 className="text-4xl font-mono font-bold tracking-tighter uppercase">Engineering_Arsenal</h1>
          <p className="text-brand-muted mt-2 font-mono text-xs uppercase tracking-widest">Listing internal repositories and systems.</p>
        </div>
        
        <div className="mt-8 md:mt-0 flex border border-brand-border p-1 bg-brand-surface">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1 font-mono text-[10px] uppercase transition-all ${
                filter === cat ? 'bg-brand-accent text-brand-bg font-bold' : 'text-brand-muted hover:text-brand-text'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((p) => (
          <div key={p.id} className="group border border-brand-border bg-brand-surface p-8 relative flex flex-col">
            <div className="absolute top-2 right-2 font-mono text-[8px] opacity-10 uppercase tracking-widest">System::V0.2</div>
            
            <div className="flex items-center space-x-3 mb-6">
              <span className="w-1 h-8 bg-brand-accent"></span>
              <div>
                <h3 className="text-xl font-bold font-mono group-hover:text-brand-accent transition-colors">{p.title}</h3>
                <div className="flex gap-2 mt-1">
                  {p.tags.map(t => <span key={t} className="text-[9px] font-mono text-brand-muted border border-brand-border px-1.5">{t}</span>)}
                </div>
              </div>
            </div>

            <p className="text-sm text-brand-muted leading-relaxed mb-8 flex-grow">
              {p.description}
            </p>
            
            <div className="flex items-center justify-between border-t border-brand-border pt-6">
              <Link to={`/projects/${p.slug}`} className="flex items-center text-[11px] font-mono text-brand-accent hover:underline">
                [INIT_DEEP_SEARCH] <ChevronRight size={14} className="ml-1" />
              </Link>
              <div className="flex space-x-4 text-brand-muted">
                {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent"><Github size={18} /></a>}
                {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent"><ExternalLink size={18} /></a>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
