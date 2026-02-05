
import React from 'react';
import { User, Cpu, Server, Code } from 'lucide-react';

const SkillTag = ({ children }: { children: React.ReactNode }) => (
  <span className="px-3 py-1 rounded-full bg-brand-surface border border-white/10 text-xs font-mono text-brand-muted hover:text-brand-accent hover:border-brand-accent/50 transition-colors cursor-default">
    {children}
  </span>
);

export const About: React.FC = () => {
  const skills = {
    cyber: ["Reverse Engineering", "Binary Analysis", "Web Security", "Cryptography", "Linux", "Networking", "Threat Modeling"],
    backend: ["FastAPI", "Flask", "Express", "Go", "PostgreSQL", "MySQL", "MongoDB", "Redis", "JWT", "OAuth", "Docker", "Kubernetes"],
    prog: ["C", "C++", "Python", "Go", "JavaScript", "TypeScript"]
  };

  return (
    <section id="about" className="py-24 bg-brand-surface/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center space-x-3">
              <User className="text-brand-accent" />
              <span>About Me</span>
            </h2>
            <div className="space-y-4 text-brand-muted leading-relaxed">
              <p>
                I am a Computer Science student dedicated to the intersection of 
                <span className="text-brand-text font-medium"> Cybersecurity and Backend Systems</span>. 
                My journey began with a curiosity about how things break, which naturally led me to a passion for building unbreakable things.
              </p>
              <p>
                I specialize in developing high-performance, secure backend architectures and conducting deep-dives into binary security and reverse engineering. I believe that security shouldn't be a feature—it should be the foundation.
              </p>
              <p>
                When I'm not auditing code or designing APIs, you can find me competing in CTFs or contributing to open-source security tools.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div className="p-6 bg-brand-surface rounded-2xl border border-white/5">
              <h3 className="flex items-center space-x-2 font-bold mb-4">
                <Cpu size={18} className="text-brand-accent" />
                <span>Cybersecurity</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.cyber.map(s => <SkillTag key={s}>{s}</SkillTag>)}
              </div>
            </div>

            <div className="p-6 bg-brand-surface rounded-2xl border border-white/5">
              <h3 className="flex items-center space-x-2 font-bold mb-4">
                <Server size={18} className="text-brand-cyan" />
                <span>Backend Engineering</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map(s => <SkillTag key={s}>{s}</SkillTag>)}
              </div>
            </div>

            <div className="p-6 bg-brand-surface rounded-2xl border border-white/5">
              <h3 className="flex items-center space-x-2 font-bold mb-4">
                <Code size={18} className="text-brand-accent" />
                <span>Programming</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.prog.map(s => <SkillTag key={s}>{s}</SkillTag>)}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
