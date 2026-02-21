import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layers, Database, Wrench, Lightbulb, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap: Record<string, any> = {
    Code,
    Layers,
    Database,
    Wrench,
    Lightbulb,
    CheckCircle,
};

const Skills: React.FC = () => {
    const { skills } = portfolioData;

    return (
        <section id="skills">
            <div className="section-container">
                <div className="flex items-center gap-4 mb-12 justify-end text-right">
                    <div className="h-px bg-slate-700 flex-grow max-w-xs md:max-w-md" />
                    <h2 className="text-3xl md:text-4xl font-black tracking-tight">
                        <span className="text-primary font-mono text-xl mr-2">02.</span>
                        Technical Skills
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, i) => (
                        <motion.div
                            key={skill.category}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-2xl bg-background-light/30 border border-slate-800 hover:border-primary/30 hover:bg-background-light/50 transition-all duration-300 group"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                                    {React.createElement(iconMap[skill.icon] || Code, { size: 24 })}
                                </div>
                                <h3 className="text-xl font-bold font-grotesk">{skill.category}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skill.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-3 py-1 rounded-full bg-slate-800/50 text-slate-400 text-sm border border-slate-700 group-hover:border-primary/20 hover:text-primary transition-colors cursor-default"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
