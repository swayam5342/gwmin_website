
import React, { useState } from 'react';
import { ShieldAlert, ChevronDown, ChevronUp, Lock, Zap, FileJson, Globe, Key } from 'lucide-react';

const MindsetCard: React.FC<{ icon: any, title: string, desc: string }> = ({ icon: Icon, title, desc }) => (
  <div className="p-6 bg-brand-surface border border-white/5 rounded-xl hover:border-brand-accent/30 transition-all group">
    <div className="text-brand-accent mb-4 group-hover:scale-110 transition-transform">
      <Icon size={24} />
    </div>
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-sm text-brand-muted leading-relaxed">{desc}</p>
  </div>
);

export const SecurityMindset: React.FC = () => {
  const [threatModelOpen, setThreatModelOpen] = useState(false);

  const mindset = [
    { icon: ShieldAlert, title: "Input Sanitization", desc: "Rigorous validation of all incoming data using strict schemas and type-safe parsers." },
    { icon: Lock, title: "Secure Auth Flows", desc: "Implementing OAuth2, PKCE, and multi-factor authentication with hardware security keys." },
    { icon: Zap, title: "Rate Limiting", desc: "Distributed rate limiting at the API Gateway level to mitigate DDoS and brute-force attacks." },
    { icon: Globe, title: "Secure Headers", desc: "Strict Content Security Policy (CSP), HSTS, and X-Frame-Options configured by default." },
    { icon: Key, title: "Secrets Management", desc: "Zero secrets in source code. All credentials managed via HashiCorp Vault or AWS Secrets Manager." },
    { icon: FileJson, title: "Logging & Monitoring", desc: "Structured logging with real-time anomaly detection and intrusion alerting (SIEM ready)." }
  ];

  return (
    <section id="security" className="py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Security <span className="text-brand-accent">Mindset</span></h2>
            <p className="text-brand-muted">The core principles I follow for every line of code written.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {mindset.map((item, idx) => (
            <MindsetCard key={idx} {...item} />
          ))}
        </div>

        {/* Mini Threat Model */}
        <div className="bg-brand-surface rounded-2xl border border-white/10 overflow-hidden">
          <button 
            onClick={() => setThreatModelOpen(!threatModelOpen)}
            className="w-full flex items-center justify-between p-6 hover:bg-white/5 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <ShieldAlert className="text-brand-accent" size={24} />
              <div className="text-left">
                <h3 className="font-bold text-lg">Site Security Disclosure</h3>
                <p className="text-xs text-brand-muted font-mono tracking-widest">MINI THREAT MODEL</p>
              </div>
            </div>
            {threatModelOpen ? <ChevronUp /> : <ChevronDown />}
          </button>
          
          {threatModelOpen && (
            <div className="p-6 border-t border-white/5 space-y-4 bg-brand-bg/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-sm">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-brand-accent font-bold mb-2">1. No Frontend Secrets</h4>
                    <p className="text-brand-muted">This site utilizes static JSON for data. No API keys or private tokens are embedded in the client bundle.</p>
                  </div>
                  <div>
                    <h4 className="text-brand-accent font-bold mb-2">2. Strict Headers</h4>
                    <p className="text-brand-muted">Enforced HTTPS via HSTS. Content Security Policy restricts script execution to trusted domains.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-brand-accent font-bold mb-2">3. Sanity Checks</h4>
                    <p className="text-brand-muted">All dynamic content is rendered using React's built-in XSS protection and sanitized markdown components.</p>
                  </div>
                  <div>
                    <h4 className="text-brand-accent font-bold mb-2">4. Static Read-Only</h4>
                    <p className="text-brand-muted">The architecture is strictly read-only from the user perspective, eliminating common SQLi or data mutation vectors.</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
