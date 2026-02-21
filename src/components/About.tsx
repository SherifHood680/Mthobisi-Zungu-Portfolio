import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const About: React.FC = () => {
    const { profile, about, stats } = portfolioData;

    return (
        <section id="about" className="bg-background-light/30">
            <div className="section-container">
                <div className="flex items-center gap-4 mb-12">
                    <h2 className="text-3xl md:text-4xl font-black tracking-tight">
                        <span className="text-primary font-mono text-xl mr-2">01.</span>
                        About Me
                    </h2>
                    <div className="h-px bg-slate-700 flex-grow max-w-xs md:max-w-md" />
                </div>

                <div className="grid md:grid-cols-5 md:gap-16 items-start">
                    <div className="md:col-span-3 space-y-6">
                        {about.map((paragraph, i) => (
                            <p key={i} className="text-slate-400 leading-relaxed text-lg">
                                {paragraph}
                            </p>
                        ))}

                        <div className="grid grid-cols-2 gap-4 mt-10">
                            {stats.map((stat, i) => (
                                <div key={i} className="p-6 rounded-xl border border-slate-800 bg-background-light/50 group hover:border-primary/50 transition-colors">
                                    <div className="text-3xl font-black text-white mb-1 font-grotesk group-hover:text-primary transition-colors">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm font-mono text-slate-500 uppercase tracking-wider">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="md:col-span-2 mt-12 md:mt-0 relative group">
                        <motion.div
                            whileHover={{ x: -10, y: -10 }}
                            className="relative z-10 rounded-xl overflow-hidden aspect-square border-2 border-primary"
                        >
                            <img
                                src={profile.avatarUrl}
                                alt={profile.fullName}
                                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </motion.div>
                        <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/20 rounded-xl -z-0 group-hover:-bottom-6 group-hover:-right-6 transition-all duration-300" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
