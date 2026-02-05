
import React from 'react';
import { Mail, Github, Linkedin, Terminal, Send, CheckCircle } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <header className="mb-12 border-b border-brand-border pb-8">
        <h1 className="text-4xl font-mono font-bold tracking-tighter">ESTABLISH_CONNECTION</h1>
        <p className="text-brand-muted mt-2 font-mono text-xs tracking-widest">SEND_PACKET_TO: hello@johndoe.com</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
        <div className="md:col-span-2 space-y-8">
          <div className="space-y-6">
            <h3 className="font-mono text-xs text-brand-accent uppercase">Social_Nodes</h3>
            <div className="space-y-4">
              <a href="https://github.com" className="flex items-center space-x-3 text-brand-muted hover:text-brand-accent transition-colors font-mono text-sm">
                <Github size={18} />
                <span>GITHUB_REPO</span>
              </a>
              <a href="https://linkedin.com" className="flex items-center space-x-3 text-brand-muted hover:text-brand-accent transition-colors font-mono text-sm">
                <Linkedin size={18} />
                <span>LINKEDIN_PROF</span>
              </a>
            </div>
          </div>

          <div className="p-6 bg-brand-surface border border-brand-border">
            <p className="font-mono text-[10px] text-brand-muted leading-relaxed">
              ENCRYPTION: AES-256-GCM<br />
              HANDSHAKE: SUCCESS<br />
              LOCATION: US_EAST_1
            </p>
          </div>
        </div>

        <div className="md:col-span-3">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="font-mono text-[10px] text-brand-muted uppercase">IDENTITY_CLAIM</label>
              <input type="text" className="w-full bg-brand-surface border border-brand-border p-3 outline-none focus:border-brand-accent text-sm font-mono" placeholder="Your Name" />
            </div>
            <div className="space-y-2">
              <label className="font-mono text-[10px] text-brand-muted uppercase">RETURN_ADDRESS</label>
              <input type="email" className="w-full bg-brand-surface border border-brand-border p-3 outline-none focus:border-brand-accent text-sm font-mono" placeholder="your@email.com" />
            </div>
            <div className="space-y-2">
              <label className="font-mono text-[10px] text-brand-muted uppercase">PAYLOAD_DATA</label>
              <textarea rows={5} className="w-full bg-brand-surface border border-brand-border p-3 outline-none focus:border-brand-accent text-sm font-mono resize-none" placeholder="Enter your message..."></textarea>
            </div>
            
            <button className="group relative w-full bg-brand-accent text-brand-bg font-mono font-bold py-4 hover:opacity-90 transition-all">
              <div className="flex items-center justify-center space-x-3">
                <Send size={18} />
                <span>TRANSMIT_PACKET</span>
              </div>
            </button>
            
            <div className="flex items-center space-x-2 text-[10px] font-mono text-brand-muted justify-center uppercase">
              <CheckCircle size={10} className="text-brand-success" />
              <span>Sanitized_Output_Verified</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
