
import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Download, Eye } from 'lucide-react';
import certificatesData from '../data/certificates';
import { Certificate } from '../types';

export const Certificates: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Professional <span className="text-brand-accent">Certifications</span></h1>
        <p className="text-brand-muted">Validated expertise in industry-standard security and backend practices.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {(certificatesData as Certificate[]).map((cert) => (
          <div key={cert.id} className="group bg-brand-surface rounded-2xl border border-white/5 hover:border-brand-accent/50 transition-all flex flex-col p-6">
            <div className="bg-brand-bg p-4 rounded-xl mb-6 flex items-center justify-center text-brand-muted group-hover:text-brand-accent transition-colors">
              <FileText size={64} />
            </div>
            
            <div className="flex-grow">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-brand-muted">{cert.issuer}</span>
                <span className="text-xs font-bold text-brand-accent">{cert.year}</span>
              </div>
              <h3 className="text-lg font-bold mb-6">{cert.name}</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-3 pt-6 border-t border-white/5">
              <Link 
                to={`/certificates/${cert.id}`}
                className="flex items-center justify-center space-x-2 text-xs font-bold py-2.5 rounded bg-brand-accent/10 text-brand-accent hover:bg-brand-accent hover:text-brand-bg transition-all"
              >
                <Eye size={14} />
                <span>View PDF</span>
              </Link>
              <a 
                href={cert.file}
                download
                className="flex items-center justify-center space-x-2 text-xs font-bold py-2.5 rounded bg-white/5 text-brand-text hover:bg-white/10 transition-all"
              >
                <Download size={14} />
                <span>Download</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
