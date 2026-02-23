import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Projects: React.FC = () => {
    const categories = ["Software Engineering", "Data Projects"];
    const [activeCategory, setActiveCategory] = React.useState("Software Engineering");

    // @ts-ignore
    const filteredProjects = portfolioData.projects.filter(project => project.category === activeCategory);

    return (
        <section id="projects" className="bg-background-light/30">
            <div className="section-container">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
                    <div className="flex items-center gap-4">
                        <h2 className="text-3xl md:text-4xl font-black tracking-tight">
                            <span className="text-primary font-mono text-xl mr-2">03.</span>
                            Featured Projects
                        </h2>
                        <div className="hidden md:block h-px bg-slate-700 w-32" />
                    </div>

                    {/* Category Selector */}
                    <div className="flex bg-background-dark/50 p-1 rounded-xl border border-slate-800">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${activeCategory === cat
                                    ? 'bg-primary text-background-dark shadow-lg'
                                    : 'text-slate-400 hover:text-white'
                                    }`}
                            >
                                {cat}
                                {cat === "Data Projects" && <span className="ml-2 text-[10px] opacity-70 underline uppercase">Coming Soon</span>}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid gap-20">
                    {filteredProjects.map((project: any, i: number) => (
                        <motion.article
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5 }}
                            className={`flex flex-col lg:flex-row gap-8 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            {/* Image side */}
                            <div className="w-full lg:w-3/5 group relative overflow-hidden rounded-xl aspect-video bg-background-light border border-slate-800/50">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${project.isPlaceholder ? 'opacity-20 blur-sm' : 'opacity-60 group-hover:opacity-100'}`}
                                />
                                <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-300" />
                                {project.isPlaceholder && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="px-6 py-3 bg-primary/10 border border-primary/30 backdrop-blur-md rounded-full text-primary font-mono text-sm tracking-widest uppercase animate-pulse">
                                            In Development
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Content side */}
                            <div className={`w-full lg:w-2/5 ${i % 2 === 1 ? 'lg:text-right' : ''}`}>
                                <p className="font-mono text-primary text-sm mb-2">{project.category}</p>
                                <h3 className="text-2xl md:text-3xl font-black mb-4 hover:text-primary transition-colors cursor-default">
                                    {project.title}
                                </h3>
                                <div className={`p-5 md:p-6 bg-background-light/80 backdrop-blur-sm rounded-xl border border-slate-800 shadow-2xl mb-6 relative z-10 ${i % 2 === 1 ? 'lg:-ml-12' : 'lg:-mr-12'}`}>
                                    <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                                <div className={`flex flex-wrap gap-x-3 gap-y-2 mb-6 ${i % 2 === 1 ? 'justify-end' : ''}`}>
                                    {project.tags.map((tag: string) => (
                                        <span key={tag} className="text-[10px] md:text-xs font-mono text-slate-500 border-b border-slate-800 pb-0.5">{tag}</span>
                                    ))}
                                </div>
                                <div className={`flex gap-4 ${i % 2 === 1 ? 'justify-end' : ''}`}>
                                    {project.github && (
                                        <a href={project.github} className="p-2 rounded-full hover:bg-slate-800 text-slate-300 hover:text-primary transition-all duration-300 border border-transparent hover:border-slate-700">
                                            <Github size={22} />
                                        </a>
                                    )}
                                    {project.demo && (
                                        <a href={project.demo} className="p-2 rounded-full hover:bg-slate-800 text-slate-300 hover:text-primary transition-all duration-300 border border-transparent hover:border-slate-700">
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
