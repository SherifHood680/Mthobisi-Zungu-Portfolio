import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Projects: React.FC = () => {
    const { projects } = portfolioData;

    return (
        <section id="projects" className="bg-background-light/30">
            <div className="section-container">
                <div className="flex items-center gap-4 mb-16">
                    <h2 className="text-3xl md:text-4xl font-black tracking-tight">
                        <span className="text-primary font-mono text-xl mr-2">03.</span>
                        Featured Projects
                    </h2>
                    <div className="h-px bg-slate-700 flex-grow max-w-xs md:max-w-md" />
                </div>

                <div className="grid gap-12">
                    {projects.map((project, i) => (
                        <motion.article
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className={`flex flex-col lg:flex-row gap-8 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            {/* Image side */}
                            <div className="w-full lg:w-3/5 group relative overflow-hidden rounded-xl aspect-video bg-background-light">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300" />
                            </div>

                            {/* Content side */}
                            <div className={`w-full lg:w-2/5 ${i % 2 === 1 ? 'lg:text-right' : ''}`}>
                                <p className="font-mono text-primary text-sm mb-2">Featured Project</p>
                                <h3 className="text-3xl font-black mb-6 hover:text-primary transition-colors cursor-default">
                                    {project.title}
                                </h3>
                                <div className={`p-6 bg-background-light rounded-xl border border-slate-800 shadow-xl mb-6 relative z-10 ${i % 2 === 1 ? 'lg:-ml-20' : 'lg:-mr-20'}`}>
                                    <p className="text-slate-400 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                                <div className={`flex flex-wrap gap-x-4 gap-y-2 mb-8 ${i % 2 === 1 ? 'justify-end' : ''}`}>
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs font-mono text-slate-500">{tag}</span>
                                    ))}
                                </div>
                                <div className={`flex gap-4 ${i % 2 === 1 ? 'justify-end' : ''}`}>
                                    {project.github && (
                                        <a href={project.github} className="text-slate-300 hover:text-primary transition-colors">
                                            <Github size={22} />
                                        </a>
                                    )}
                                    {project.demo && (
                                        <a href={project.demo} className="text-slate-300 hover:text-primary transition-colors">
                                            <ExternalLink size={22} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
