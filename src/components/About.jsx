import { motion } from 'framer-motion'
import { GraduationCap, Award, Users, Code } from 'lucide-react'

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }
    })
}

const cardContainer = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
}

const cardItem = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
}

function About() {
    return (
        <section className="w-full border-t border-zinc-100 dark:border-zinc-900 bg-background-light dark:bg-background-dark" id="about">
            <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left Column: Heading */}
                    <motion.div
                        className="lg:col-span-4"
                        variants={fadeUp}
                        custom={0}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                    >
                        <div className="sticky top-28">
                            <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tighter uppercase text-zinc-900 dark:text-white">
                                About <br className="hidden lg:block" /> Me
                            </h2>
                        </div>
                    </motion.div>

                    {/* Right Column: Content */}
                    <motion.div
                        className="lg:col-span-8 space-y-12"
                        variants={fadeUp}
                        custom={0.15}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                    >
                        {/* Narrative Intro */}
                        <div className="space-y-6 text-base md:text-lg leading-relaxed font-medium text-zinc-600 dark:text-zinc-400">
                            <p>
                                I'm a Computer Science undergraduate specializing in AI &amp; Machine Learning, passionate about building scalable software and intelligent applications. My interests span web development, machine learning, and modern software engineering. I enjoy turning ideas into polished, end-to-end products while continuously learning and contributing to real-world projects.
                            </p>
                        </div>

                        {/* Interactive Cards Grid */}
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4"
                            variants={cardContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-60px' }}
                        >
                            {/* Card 1: Education */}
                            <motion.div
                                variants={cardItem}
                                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                                className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 backdrop-blur-sm hover:border-yellow-500/50 hover:shadow-xl hover:shadow-yellow-500/[0.02] transition-colors duration-300 flex flex-col justify-between cursor-default"
                            >
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-500">
                                            <GraduationCap size={20} />
                                        </div>
                                        <h3 className="font-display text-sm font-bold uppercase tracking-wider text-zinc-400">
                                            Education
                                        </h3>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="font-display font-bold text-lg text-zinc-900 dark:text-white leading-snug">
                                            B.E. in Computer Science (AI &amp; ML)
                                        </p>
                                        <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                                            GSSS Institute of Technology for Women
                                        </p>
                                        <p className="text-xs text-zinc-500 dark:text-zinc-500 font-medium flex justify-between items-center">
                                            <span>Aug 2024 – May 2028</span>
                                            <span className="px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-yellow-500 font-bold">CGPA: 8.9</span>
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Card 2: Open Source */}
                            <motion.div
                                variants={cardItem}
                                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                                className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 backdrop-blur-sm hover:border-yellow-500/50 hover:shadow-xl hover:shadow-yellow-500/[0.02] transition-colors duration-300 flex flex-col justify-between cursor-default"
                            >
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-500">
                                            <Code size={20} />
                                        </div>
                                        <h3 className="font-display text-sm font-bold uppercase tracking-wider text-zinc-400">
                                            Open Source
                                        </h3>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="font-display font-bold text-lg text-zinc-900 dark:text-white leading-snug">
                                            Processing Foundation
                                        </p>
                                        <p className="text-sm text-zinc-600 dark:text-zinc-400 font-medium">
                                            Merged 3 contributions to <span className="font-semibold text-zinc-800 dark:text-zinc-200">p5.js-website</span> (10M+ users globally).
                                        </p>
                                        <p className="text-xs text-zinc-500 dark:text-zinc-500 font-medium italic">
                                            Refactored hero section for correct rendering across mobile/tablet breakpoints with zero desktop regression.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Card 3: Leadership */}
                            <motion.div
                                variants={cardItem}
                                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                                className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 backdrop-blur-sm hover:border-yellow-500/50 hover:shadow-xl hover:shadow-yellow-500/[0.02] transition-colors duration-300 flex flex-col justify-between cursor-default"
                            >
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-500">
                                            <Users size={20} />
                                        </div>
                                        <h3 className="font-display text-sm font-bold uppercase tracking-wider text-zinc-400">
                                            Leadership
                                        </h3>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="font-display font-bold text-lg text-zinc-900 dark:text-white leading-snug">
                                            Club Coordinator
                                        </p>
                                        <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                                            Google Cloud Club
                                        </p>
                                        <p className="text-xs text-zinc-500 dark:text-zinc-500 font-medium">
                                            Led a team of 22 to organize GCP and ML workshops. Mentored 30+ students, completed 42 labs, and earned 4 GCP Skill Badges.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Card 4: Achievements & Certifications */}
                            <motion.div
                                variants={cardItem}
                                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                                className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 backdrop-blur-sm hover:border-yellow-500/50 hover:shadow-xl hover:shadow-yellow-500/[0.02] transition-colors duration-300 flex flex-col justify-between cursor-default"
                            >
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-500">
                                            <Award size={20} />
                                        </div>
                                        <h3 className="font-display text-sm font-bold uppercase tracking-wider text-zinc-400">
                                            Achievements
                                        </h3>
                                    </div>
                                    <ul className="space-y-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                                        <li className="flex items-start gap-1.5">
                                            <span className="text-yellow-500">•</span>
                                            <span>Noteworthy Project Winner — ADK-TS Hackathon 2025 (DoraHacks, $200 award)</span>
                                        </li>
                                        <li className="flex items-start gap-1.5">
                                            <span className="text-yellow-500">•</span>
                                            <span>AWS Academy Graduate — Machine Learning Foundations</span>
                                        </li>
                                        <li className="flex items-start gap-1.5">
                                            <span className="text-yellow-500">•</span>
                                            <span>Prompt Design in Vertex AI — Google Cloud Certified</span>
                                        </li>
                                    </ul>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About
