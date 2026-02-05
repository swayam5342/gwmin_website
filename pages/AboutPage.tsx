
import React from 'react';
import { User, ShieldCheck, Terminal, Database, Code } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const skills = {
    cyber: ["Buffer Overflows", "Penetration Testing", "OIDC/OAuth2", "Cryptography", "GDB/Radare2", "Wireshark"],
    backend: ["FastAPI", "Go-Micro", "Redis Streams", "PostgreSQL", "Docker", "Nginx", "Envoy"],
    core: ["Python", "C++", "Go", "Rust", "Typescript"]
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-16 space-y-16">
      <header className="border-b border-brand-border pb-8">
        <h1 className="text-4xl font-mono font-bold">BIO_DATA // PROFILE</h1>
        <p className="text-brand-muted mt-2 font-mono text-xs tracking-widest uppercase">System User: John Doe [UID: 1001]</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-8 space-y-8 text-brand-muted leading-relaxed">
          <div className="bg-brand-surface border border-brand-border p-8 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-2 font-mono text-[10px] opacity-20 select-none">DATA_BLOCK_01</div>
             <p className="text-brand-text mb-4">
               I operate at the intersection of high-availability backend engineering and defensive security research. My design philosophy is rooted in the principle of <b>Least Privilege</b> and <b>Immutable Infrastructure</b>.
             </p>
             <p>
               With a deep focus on C++ and Go, I build microservices that aren't just fast, but resilient against the modern threat landscape. I specialize in auditing distributed systems and hardening CI/CD pipelines against supply chain attacks.
             </p>
          </div>
          
          <div className="border border-brand-border p-8 space-y-6 bg-brand-bg">
            <h3 className="font-mono text-sm font-bold text-brand-accent border-b border-brand-border pb-2">PHILOSOPHY.md</h3>
            <ul className="space-y-4 text-sm font-mono">
              <li className="flex items-start space-x-3">
                <span className="text-brand-accent mt-1">01.</span>
                <span>Security is not a feature; it is an invariant.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-brand-accent mt-1">02.</span>
                <span>Performance without auditability is a liability.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-brand-accent mt-1">03.</span>
                <span>Complexity is the primary enemy of secure systems.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="md:col-span-4 space-y-8">
          <div className="space-y-4">
            <h4 className="font-mono text-[10px] text-brand-muted uppercase border-l-2 border-brand-accent pl-2">Security_Stack</h4>
            <div className="flex flex-wrap gap-2">
              {skills.cyber.map(s => <span key={s} className="bg-brand-surface border border-brand-border px-3 py-1 text-[10px] font-mono">{s}</span>)}
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-mono text-[10px] text-brand-muted uppercase border-l-2 border-brand-accent pl-2">Backend_Engine</h4>
            <div className="flex flex-wrap gap-2">
              {skills.backend.map(s => <span key={s} className="bg-brand-surface border border-brand-border px-3 py-1 text-[10px] font-mono">{s}</span>)}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-mono text-[10px] text-brand-muted uppercase border-l-2 border-brand-accent pl-2">Languages</h4>
            <div className="flex flex-wrap gap-2">
              {skills.core.map(s => <span key={s} className="bg-brand-surface border border-brand-border px-3 py-1 text-[10px] font-mono text-brand-accent">{s}</span>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
