import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Education: React.FC = () => {
    const { education, certifications } = portfolioData;

    return (
        <section id="education" className="bg-background-light/30">
            <div className="section-container">
                <div className="flex items-center gap-4 mb-16">
                    <h2 className="text-3xl md:text-4xl font-black tracking-tight">
                        <span className="text-primary font-mono text-xl mr-2">05.</span>
                        Education & Certs
                    </h2>
                    <div className="h-px bg-slate-700 flex-grow max-w-xs md:max-w-md" />
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Education side */}
                    <div className="space-y-8">
                        <h3 className="text-xl font-bold font-mono text-slate-300 mb-8 flex items-center gap-2">
                            <GraduationCap className="text-primary" />
                            Academic Path
                        </h3>
                        {education.map((item, i) => (
                            <motion.div
                                key={item.degree}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 rounded-xl bg-background-light/50 border border-slate-800 hover:border-primary/20 transition-all flex gap-6"
                            >
                                <div className="hidden sm:block mt-1">
                                    <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
                                        <GraduationCap size={20} />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${item.status === 'Completed' ? 'bg-green-500/10 text-green-400' : 'bg-primary/10 text-primary'}`}>
                                            {item.status}
                                        </span>
                                        <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                                            <Calendar size={12} /> {item.period}
                                        </span>
                                    </div>
                                    <h4 className="text-lg font-bold text-slate-200">{item.degree}</h4>
                                    <p className="text-slate-400">{item.school}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Certifications side */}
                    <div className="space-y-8">
                        <h3 className="text-xl font-bold font-mono text-slate-300 mb-8 flex items-center gap-2">
                            <Award className="text-primary" />
                            Certifications
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {certifications.map((cert, i) => (
                                <motion.div
                                    key={cert.issuer}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-6 rounded-xl bg-background-light/50 border border-slate-800"
                                >
                                    <h4 className="text-primary font-mono text-sm font-bold mb-4">{cert.issuer}</h4>
                                    <ul className="space-y-3">
                                        {cert.items.map((item: any) => (
                                            <li key={item.name} className="flex flex-col gap-1">
                                                <div className="flex items-start gap-2">
                                                    <span className="text-primary opacity-50 mt-1">•</span>
                                                    <span className="text-sm text-slate-300 font-medium leading-tight">{item.name}</span>
                                                </div>
                                                <div className="pl-4">
                                                    <span className={`px-2 py-0.5 rounded-[4px] text-[9px] font-bold uppercase tracking-wider inline-block ${item.status === 'Completed' ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
                                                            item.status === 'In Progress' ? 'bg-sky-500/10 text-sky-400 border border-sky-500/20' :
                                                                item.status === 'Upcoming' ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' :
                                                                    'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                                                        }`}>
                                                        {item.status}
                                                    </span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
