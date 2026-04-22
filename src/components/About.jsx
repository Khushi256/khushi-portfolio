import { motion } from 'framer-motion'

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }
    })
}

const staggerContainer = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
}

const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
}

function About() {
    return (
        <section className="py-20 md:py-32 px-6 max-w-7xl mx-auto border-t border-zinc-100 dark:border-zinc-900" id="about">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <motion.div
                    className="lg:col-span-4"
                    variants={fadeUp}
                    custom={0}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                >
                    <h2 className="font-display text-4xl font-extrabold tracking-tighter uppercase">About Me</h2>
                </motion.div>

                <motion.div
                    className="lg:col-span-8"
                    variants={fadeUp}
                    custom={0.15}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                >
                    <p className="text-lg md:text-xl font-display font-medium leading-relaxed text-zinc-900 dark:text-zinc-100">
                        Hi, I'm Khushi - a <span className="text-yellow-500 font-syne font-bold" style={{ fontFamily: '"Syne", sans-serif' }}>Frontend Developer</span> focused on building scalable and user-centric web applications. I specialize in <span className="text-yellow-500 font-syne font-bold" style={{ fontFamily: '"Syne", sans-serif' }}>React</span>, TypeScript, and Tailwind CSS, with a strong emphasis on clean architecture, performance, and intuitive <span className="text-yellow-500 font-syne font-bold" style={{ fontFamily: '"Syne", sans-serif' }}>UI/UX</span> design.
                        <br /><br />
                        I have experience developing real-world projects and integrating APIs, along with a growing interest in <span className="text-yellow-500 font-syne font-bold" style={{ fontFamily: '"Syne", sans-serif' }}>AI/ML-driven</span> applications. As an <span className="text-yellow-500 font-syne font-bold" style={{ fontFamily: '"Syne", sans-serif' }}>ADK-TS Hackathon Winner</span> for multi-agent collaboration, I've worked on solving complex problems with a balance of functionality and design.
                        <br /><br />
                        I'm actively contributing to <span className="text-yellow-500 font-syne font-bold" style={{ fontFamily: '"Syne", sans-serif' }}>open source</span> and exploring opportunities where I can build impactful products while continuously expanding my skills in modern web technologies and intelligent systems.
                    </p>

                    <motion.div
                        className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8 text-sm uppercase tracking-widest font-bold text-zinc-400"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                    >
                        <motion.div variants={itemVariant}>
                            <p className="text-primary dark:text-white mb-2">Location</p>
                            <p>Remote / India</p>
                        </motion.div>
                        <motion.div variants={itemVariant}>
                            <p className="text-primary dark:text-white mb-2">Education</p>
                            <p>Computer Science</p>
                        </motion.div>
                        <motion.div variants={itemVariant}>
                            <p className="text-primary dark:text-white mb-2">Interests</p>
                            <p>AI, ML, Design</p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default About
