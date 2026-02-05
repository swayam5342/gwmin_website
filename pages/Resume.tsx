
import React, { useState } from 'react';
import { Download, Maximize2, ChevronDown } from 'lucide-react';
import resumesData from '../data/resumes';
import { ResumeData } from '../types';

export const Resume: React.FC = () => {
  const versions = [
    { id: 'default', label: 'General / Full-Stack' },
    { id: 'security', label: 'Cybersecurity Focus' },
    { id: 'backend', label: 'Backend Engineering Focus' }
  ];
  
  const [activeVersion, setActiveVersion] = useState<keyof ResumeData>('default');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const currentFile = (resumesData as ResumeData)[activeVersion];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col h-[calc(100vh-120px)]">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 space-y-6 md:space-y-0">
        <div>
          <h1 className="text-4xl font-bold mb-2">Curriculum <span className="text-brand-accent">Vitae</span></h1>
          <p className="text-brand-muted">Select a version optimized for specific roles.</p>
        </div>
        
        <div className="flex flex-wrap items-center gap-4">
          <div className="relative">
            <button 
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center justify-between w-64 px-4 py-3 bg-brand-surface border border-white/10 rounded-lg text-left text-sm font-bold focus:border-brand-accent transition-all"
            >
              <span>{versions.find(v => v.id === activeVersion)?.label}</span>
              <ChevronDown size={18} className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {dropdownOpen && (
              <div className="absolute z-50 top-full mt-2 w-full bg-brand-surface border border-white/10 rounded-lg shadow-2xl overflow-hidden py-1 animate-in fade-in zoom-in-95 duration-100">
                {versions.map(v => (
                  <button
                    key={v.id}
                    onClick={() => {
                      setActiveVersion(v.id as keyof ResumeData);
                      setDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-sm hover:bg-brand-accent/10 hover:text-brand-accent transition-colors ${
                      activeVersion === v.id ? 'text-brand-accent bg-brand-accent/5' : 'text-brand-muted'
                    }`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center space-x-3">
            <a href={currentFile} target="_blank" rel="noopener noreferrer" className="p-3 bg-brand-surface border border-white/10 rounded-lg text-brand-muted hover:text-brand-accent transition-all" title="Fullscreen">
              <Maximize2 size={20} />
            </a>
            <a href={currentFile} download className="flex items-center space-x-2 bg-brand-accent text-brand-bg px-6 py-3 rounded-lg font-bold hover:scale-[1.02] transition-all">
              <Download size={18} />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </div>

      <div className="flex-grow bg-[#323639] rounded-2xl border border-white/10 overflow-hidden shadow-2xl relative">
        <iframe
          src={`${currentFile}#toolbar=0&navpanes=0`}
          className="w-full h-full border-none"
          title="Resume Viewer"
          key={activeVersion}
        />
        <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur px-3 py-1 rounded text-[10px] font-mono text-white/50 pointer-events-none md:hidden uppercase tracking-widest">
          Scroll inside to view
        </div>
      </div>
    </div>
  );
};
