import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Experience: React.FC = () => {
    const { experience } = portfolioData;

    return (
        <section id="experience">
            <div className="section-container">
                <div className="flex items-center gap-4 mb-16 justify-end text-right">
                    <div className="h-px bg-slate-700 flex-grow max-w-xs md:max-w-md" />
                    <h2 className="text-3xl md:text-4xl font-black tracking-tight">
                        <span className="text-primary font-mono text-xl mr-2">04.</span>
                        Where I've Worked
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="space-y-16">
                        {experience.map((item, i) => (
                            <motion.div
                                key={item.company + item.period}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative pl-8 border-l-2 border-slate-800 hover:border-primary/30 transition-colors"
                            >
                                {/* Dot */}
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-700 group-hover:border-primary transition-colors" />

                                <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                                    <h3 className="text-2xl font-bold flex flex-wrap items-baseline gap-2">
                                        <span className="text-slate-100">{item.role}</span>
                                        <span className="text-primary font-mono text-lg">@ {item.company}</span>
                                    </h3>
                                    <span className="font-mono text-sm text-slate-500">{item.period}</span>
                                </div>

                                <p className="text-slate-400 mb-6 italic">{item.description}</p>

                                <ul className="space-y-4 mb-8">
                                    {item.responsibilities.map((resp, j) => (
                                        <li key={j} className="flex gap-3 text-slate-400 leading-relaxed">
                                            <span className="text-primary mt-1.5 leading-none">▹</span>
                                            <span>{resp}</span>
                                        </li>
                                    ))}
                                </ul>

                                {item.tags && (
                                    <div className="flex flex-wrap gap-2">
                                        {item.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 text-xs font-mono text-primary bg-primary/5 rounded-full border border-primary/10">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
