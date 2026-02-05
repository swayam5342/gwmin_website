
import React from 'react';
import { GraduationCap, Briefcase, Award, FileCheck } from 'lucide-react';
import timelineData from '../data/timeline';
import { TimelineItem } from '../types';

const IconMap = {
  education: GraduationCap,
  project: Briefcase,
  achievement: Award,
  certification: FileCheck
};

export const Timeline: React.FC = () => {
  return (
    <section className="py-24 bg-brand-bg">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-16 text-center">My <span className="text-brand-accent">Journey</span></h2>
        
        <div className="relative border-l-2 border-white/10 ml-4 md:ml-0 md:left-1/2">
          {(timelineData as TimelineItem[]).map((item, idx) => {
            const Icon = IconMap[item.type];
            return (
              <div key={item.id} className={`relative mb-12 md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 md:text-right md:left-[-50%]' : 'md:pl-12 md:left-0'}`}>
                {/* Dot */}
                <div className="absolute top-0 left-[-11px] md:left-auto md:right-[-11px] w-5 h-5 bg-brand-accent rounded-full border-4 border-brand-bg shadow-[0_0_10px_rgba(0,255,194,0.5)] z-10" 
                     style={idx % 2 !== 0 ? { left: '-11px' } : {}}></div>
                
                <div className="p-6 bg-brand-surface rounded-xl border border-white/5 hover:border-brand-accent/30 transition-all group">
                  <div className={`flex items-center space-x-2 mb-2 text-brand-accent ${idx % 2 === 0 ? 'md:flex-row-reverse md:space-x-reverse' : ''}`}>
                    <Icon size={18} />
                    <span className="text-xs font-mono uppercase tracking-widest">{item.date}</span>
                  </div>
                  <h3 className="text-lg font-bold group-hover:text-brand-accent transition-colors">{item.title}</h3>
                  <p className="text-sm font-medium text-brand-text/80 mb-2">{item.subtitle}</p>
                  <p className="text-sm text-brand-muted leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
