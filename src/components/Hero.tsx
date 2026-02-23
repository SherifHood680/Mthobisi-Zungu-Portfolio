import React from 'react';
import { motion } from 'framer-motion';
import { Code, Download, ChevronDown } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import HeroBackground from './HeroBackground';

const Hero: React.FC = () => {
    const { profile } = portfolioData;

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            <HeroBackground
                leftImage="assets/images/Mthobisi Zungu (6).webp"
                rightImage="assets/images/Mthobisi Zungu (7).webp"
            />

            <div className="section-container relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="font-mono text-primary mb-4 tracking-widest uppercase">Hi, my name is</p>
                    <h1 className="text-5xl md:text-8xl font-black mb-4 tracking-tighter">
                        <span className="text-white block">{profile.firstName} {profile.middleName}</span>
                        <span className="text-gradient block">{profile.lastName}</span>
                    </h1>
                    <p className="text-xl md:text-3xl font-medium text-slate-400 mb-6 font-grotesk">
                        {profile.title} | {profile.subTitle}
                    </p>
                    <p className="max-w-2xl mx-auto text-lg text-slate-500 mb-10 leading-relaxed">
                        {profile.tagline}
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <motion.a
                            href="#projects"
                            className="btn btn-primary"
                            whileHover={{ y: -5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Code size={18} />
                            View My Work
                        </motion.a>
                        <motion.a
                            href={profile.resumeUrl}
                            className="btn btn-secondary"
                            download
                            whileHover={{ y: -5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Download size={18} />
                            Download CV
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <span className="font-mono text-xs uppercase tracking-widest">Scroll to explore</span>
                <ChevronDown size={20} className="text-primary" />
            </motion.div>
        </section>
    );
};

export default Hero;
