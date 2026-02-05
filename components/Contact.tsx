
import React from 'react';
import { Mail, Github, Linkedin, Send, ShieldCheck } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-brand-surface/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's <span className="text-brand-accent">Secure</span> the Web</h2>
            <p className="text-brand-muted mb-8 text-lg">
              Always open to discussing secure architecture, backend optimizations, or potential collaborations on security research projects.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:hello@johndoe.com" className="flex items-center space-x-4 p-4 bg-brand-surface rounded-xl border border-white/5 hover:border-brand-accent/30 transition-all group">
                <div className="bg-brand-accent/10 p-3 rounded-lg text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-bg transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-mono text-brand-muted uppercase">Email Me</p>
                  <p className="font-bold">hello@johndoe.com</p>
                </div>
              </a>

              <div className="flex space-x-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center space-x-2 p-4 bg-brand-surface rounded-xl border border-white/5 hover:border-brand-accent/30 transition-all">
                  <Github size={20} />
                  <span className="font-bold">GitHub</span>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center space-x-2 p-4 bg-brand-surface rounded-xl border border-white/5 hover:border-brand-accent/30 transition-all">
                  <Linkedin size={20} />
                  <span className="font-bold">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-brand-surface p-8 rounded-2xl border border-white/10 shadow-xl">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-mono text-brand-muted uppercase mb-2">Full Name</label>
                <input type="text" className="w-full bg-brand-bg border border-white/10 rounded-lg px-4 py-3 focus:border-brand-accent outline-none transition-all" placeholder="Ada Lovelace" />
              </div>
              <div>
                <label className="block text-xs font-mono text-brand-muted uppercase mb-2">Email Address</label>
                <input type="email" className="w-full bg-brand-bg border border-white/10 rounded-lg px-4 py-3 focus:border-brand-accent outline-none transition-all" placeholder="ada@analytical-engine.com" />
              </div>
              <div>
                <label className="block text-xs font-mono text-brand-muted uppercase mb-2">Message</label>
                <textarea rows={4} className="w-full bg-brand-bg border border-white/10 rounded-lg px-4 py-3 focus:border-brand-accent outline-none transition-all resize-none" placeholder="Let's build something secure..."></textarea>
              </div>
              <button className="w-full flex items-center justify-center space-x-2 bg-brand-accent text-brand-bg font-bold py-4 rounded-lg hover:scale-[1.02] transition-all">
                <Send size={18} />
                <span>Send Securely</span>
              </button>
              <div className="flex items-center justify-center space-x-2 text-[10px] text-brand-muted uppercase font-mono mt-4">
                <ShieldCheck size={12} />
                <span>End-to-end encrypted locally via mindset</span>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
