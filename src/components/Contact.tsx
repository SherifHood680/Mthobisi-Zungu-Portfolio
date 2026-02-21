import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Contact: React.FC = () => {
    const { profile } = portfolioData;
    const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        setFormState('sending');

        const formData = new FormData(form);
        formData.append("access_key", "ce46af62-52b4-477a-88b5-5ea7248967d5");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setFormState('success');
                form.reset();
                setTimeout(() => setFormState('idle'), 3000);
            } else {
                setFormState('idle');
                alert("Something went wrong. Please try again.");
            }
        } catch (error: any) {
            setFormState('idle');
            console.error("Form Error:", error);
            alert(`Error: ${error.message || "Connection failed"}. Please check your ad-blocker or console.`);
        }
    };

    return (
        <section id="contact">
            <div className="section-container">
                <div className="flex items-center gap-4 mb-16 justify-end text-right">
                    <div className="h-px bg-slate-700 flex-grow max-w-xs md:max-w-md" />
                    <h2 className="text-3xl md:text-4xl font-black tracking-tight">
                        <span className="text-primary font-mono text-xl mr-2">06.</span>
                        Get In Touch
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">
                            Let's <span className="text-primary italic">work together</span> and build something great.
                        </h3>
                        <p className="text-lg text-slate-400">
                            I'm currently open to new opportunities. Whether you have a question
                            or just want to say hi, feel free to reach out!
                        </p>

                        <div className="space-y-6 pt-4">
                            <a href={`mailto:${profile.email}`} className="flex items-center gap-4 p-4 rounded-xl hover:bg-background-light/50 transition-colors group">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-1">Email Me</div>
                                    <div className="text-lg font-bold text-slate-200">{profile.email}</div>
                                </div>
                            </a>

                            <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className="flex items-center gap-4 p-4 rounded-xl hover:bg-background-light/50 transition-colors group">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-1">Call Me</div>
                                    <div className="text-lg font-bold text-slate-200">{profile.phone}</div>
                                </div>
                            </a>

                            <div className="flex items-center gap-4 p-4 rounded-xl group">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-1">Find Me</div>
                                    <div className="text-lg font-bold text-slate-200">{profile.location}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-2xl bg-background-light border border-slate-800 shadow-2xl"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-mono text-slate-400 ml-1">Name</label>
                                    <input
                                        type="text" id="name" name="name" required
                                        className="w-full bg-background-dark/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-primary transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-mono text-slate-400 ml-1">Email</label>
                                    <input
                                        type="email" id="email" name="email" required
                                        className="w-full bg-background-dark/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-primary transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-mono text-slate-400 ml-1">Message</label>
                                <textarea
                                    id="message" name="message" required rows={5}
                                    className="w-full bg-background-dark/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-primary transition-colors resize-none"
                                    placeholder="Your message here..."
                                />
                            </div>

                            <input type="hidden" name="subject" value="New Portfolio Message" />
                            <input type="hidden" name="from_name" value="Your Portfolio" />

                            <motion.button
                                type="submit"
                                disabled={formState !== 'idle'}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`w-full py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all duration-300 ${formState === 'success' ? 'bg-green-500 text-white' : 'bg-primary text-background-dark hover:brightness-110'
                                    }`}
                            >
                                {formState === 'idle' && (
                                    <>
                                        <Send size={18} />
                                        Send Message
                                    </>
                                )}
                                {formState === 'sending' && (
                                    <div className="w-6 h-6 border-2 border-background-dark border-t-transparent rounded-full animate-spin" />
                                )}
                                {formState === 'success' && (
                                    <>
                                        <CheckCircle2 size={18} />
                                        Message Sent!
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
