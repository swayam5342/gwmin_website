
import React from 'react';

export const AboutPage: React.FC = () => {
  const skills = {
    cyber: ["Buffer Overflows", "Penetration Testing", "OIDC/OAuth2", "Cryptography", "GDB/Radare2", "Wireshark"],
    backend: ["FastAPI", "Go-Micro", "Redis Streams", "PostgreSQL", "Docker", "Nginx", "Envoy"],
    core: ["Python", "C++", "Go", "Rust", "Typescript"]
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-16 space-y-16">
      <header className="border-b border-brand-border pb-8">
        <h1 className="text-4xl font-mono font-bold tracking-tighter">About</h1>
        <p className="text-brand-muted mt-2 font-mono text-[10px] tracking-widest uppercase">ID_IDENTIFIER: JD_ENGINEER_V4</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-8 space-y-8 text-brand-muted leading-relaxed font-sans">
          <div className="bg-brand-surface border border-brand-border p-10 relative">
             <div className="absolute top-0 right-0 p-3 font-mono text-[8px] text-brand-muted/20 uppercase">Core_Data_Stream</div>
             <p className="text-brand-text mb-6 text-lg font-medium leading-snug">
               Focused on the engineering of high-assurance backend systems and defensive security architectures. I follow a <span className="text-brand-accent">Zero-Trust</span> design philosophy.
             </p>
             <p className="text-sm">
               Specializing in low-latency systems built with Go and C++, I prioritize observability and security as first-class citizens. My background involves binary analysis, reverse engineering, and architecting distributed backends for mission-critical applications.
             </p>
          </div>
          
          <div className="border border-brand-border p-8 bg-brand-bg">
            <h3 className="font-mono text-[10px] font-bold text-brand-muted uppercase border-b border-brand-border pb-2 mb-6">OPERATING_PRINCIPLES</h3>
            <ul className="space-y-6 text-xs font-mono">
              <li className="flex items-start space-x-4">
                <span className="bg-brand-accent text-brand-bg px-1 font-bold">01</span>
                <span>SECURITY IS AN INVARIANT, NOT A FEATURE.</span>
              </li>
              <li className="flex items-start space-x-4">
                <span className="bg-brand-accent text-brand-bg px-1 font-bold">02</span>
                <span>OBSERVABILITY IS PREREQUISITE FOR SECURITY.</span>
              </li>
              <li className="flex items-start space-x-4">
                <span className="bg-brand-accent text-brand-bg px-1 font-bold">03</span>
                <span>SIMPLICITY IS THE ULTIMATE HARDENING TOOL.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="md:col-span-4 space-y-12">
          <div className="space-y-4">
            <h4 className="font-mono text-[9px] text-brand-accent uppercase tracking-widest mb-4">Cyber_Security</h4>
            <div className="flex flex-wrap gap-1.5">
              {skills.cyber.map(s => <span key={s} className="bg-brand-surface border border-brand-border px-3 py-1 text-[9px] font-mono text-brand-muted">{s}</span>)}
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-mono text-[9px] text-brand-accent uppercase tracking-widest mb-4">Backend_Infra</h4>
            <div className="flex flex-wrap gap-1.5">
              {skills.backend.map(s => <span key={s} className="bg-brand-surface border border-brand-border px-3 py-1 text-[9px] font-mono text-brand-muted">{s}</span>)}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-mono text-[9px] text-brand-accent uppercase tracking-widest mb-4">Runtime_Env</h4>
            <div className="flex flex-wrap gap-1.5">
              {skills.core.map(s => <span key={s} className="bg-brand-accent text-brand-bg px-3 py-1 text-[9px] font-mono font-bold">{s}</span>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
