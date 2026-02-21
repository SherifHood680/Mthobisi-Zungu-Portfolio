import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Footer: React.FC = () => {
    const { profile } = portfolioData;

    return (
        <footer className="py-12 border-t border-slate-800 bg-background-dark">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6">
                <div className="flex gap-8">
                    <a href={profile.github} className="text-slate-500 hover:text-primary transition-colors hover:-translate-y-1 transform duration-300">
                        <Github size={24} />
                    </a>
                    <a href={profile.linkedin} className="text-slate-500 hover:text-primary transition-colors hover:-translate-y-1 transform duration-300">
                        <Linkedin size={24} />
                    </a>
                    <a href={`mailto:${profile.email}`} className="text-slate-500 hover:text-primary transition-colors hover:-translate-y-1 transform duration-300">
                        <Mail size={24} />
                    </a>
                </div>

                <div className="text-center font-mono text-xs text-slate-500 space-y-2">
                    <p>© {new Date().getFullYear()} {profile.fullName}. All rights reserved.</p>
                    <p>Built with React, TypeScript, Tailwind & Framer Motion</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
