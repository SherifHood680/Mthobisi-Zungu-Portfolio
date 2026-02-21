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

                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                    <div className="lg:col-span-7 space-y-8">
                        <div className="space-y-6">
                            {about.map((paragraph, i) => (
                                <p key={i} className="text-slate-400 leading-relaxed text-lg font-inter">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="relative p-6 rounded-2xl border border-slate-800/50 bg-gradient-to-br from-background-light/40 to-transparent backdrop-blur-sm group hover:border-primary/30 transition-all duration-500 overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 p-2 opacity-5 group-hover:opacity-10 transition-opacity">
                                        <div className="w-12 h-12 bg-primary rounded-full blur-xl" />
                                    </div>
                                    <div className="text-3xl font-black text-white mb-2 font-grotesk group-hover:text-primary transition-colors flex items-baseline gap-1">
                                        {stat.value}
                                        <span className="text-primary text-sm font-bold opacity-0 group-hover:opacity-100 transition-all">+</span>
                                    </div>
                                    <div className="text-xs font-mono text-slate-500 uppercase tracking-[0.2em]">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-5 relative group">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative z-10"
                        >
                            {/* Decorative Background Elements */}
                            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-slate-800 shadow-2xl">
                                <img
                                    src={profile.avatarUrl}
                                    alt={profile.fullName}
                                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Sophisticated Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/60 via-transparent to-transparent opacity-60" />
                            </div>

                            {/* Floating Accent Card */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-6 -left-6 md:-left-10 p-4 bg-background-light border border-slate-800 rounded-xl shadow-xl z-20 hidden md:block backdrop-blur-md"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                    <p className="text-xs font-mono text-slate-300 uppercase tracking-widest whitespace-nowrap">Open for Collaboration</p>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Static Frame Element */}
                        <div className="absolute top-6 right-6 -bottom-6 -left-6 border-2 border-primary/10 rounded-2xl -z-0 group-hover:top-4 group-hover:right-4 group-hover:-bottom-4 group-hover:-left-4 transition-all duration-500" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
