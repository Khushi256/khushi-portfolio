import { motion } from 'framer-motion'

const skillCategories = [
    {
        title: "Languages",
        skills: ['C++', 'Java', 'JavaScript', 'TypeScript', 'Python', 'C']
    },
    {
        title: "Frontend",
        skills: ['React', 'Redux', 'Framer', 'HTML5', 'CSS3', 'Tailwind', 'Shadcn UI', 'Radix UI', 'Zod']
    },
    {
        title: "Tools",
        skills: ['Git', 'Figma', 'Postman', 'Vercel', 'Antigravity', 'Stitch', 'Web Sockets']
    },
    {
        title: "Cloud & ML",
        skills: ['Google Cloud Platform (GCP)', 'ML Fundamentals', 'scikit-learn', 'NumPy', 'Pandas', 'Matplotlib']
    }
]

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12, delayChildren: 0.2 }
    }
}

const columnVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
}

const chipVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.04 } }
}

const chipItem = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: 'easeOut' } }
}

function Skills() {
    return (
        <section className="min-h-0 md:min-h-screen flex flex-col justify-center py-20 bg-zinc-50 dark:bg-zinc-900/20" id="skills">
            <div className="max-w-7xl mx-auto px-6 w-full">
                <motion.div
                    className="mb-10 text-center md:text-left"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h2 className="font-display text-4xl md:text-6xl font-extrabold tracking-tighter uppercase">Skills</h2>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                >
                    {skillCategories.map((category, catIndex) => (
                        <motion.div key={catIndex} variants={columnVariant}>
                            <h3 className="font-display text-lg font-bold uppercase tracking-widest mb-4 text-yellow-500">
                                {category.title}
                            </h3>
                            <motion.div
                                className="flex flex-wrap gap-2 md:gap-3"
                                variants={chipVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: '-40px' }}
                            >
                                {category.skills.map((skill, index) => (
                                    <motion.span
                                        key={index}
                                        variants={chipItem}
                                        whileHover={{ scale: 1.06, transition: { duration: 0.2 } }}
                                        className="px-4 py-2 md:px-5 md:py-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-primary hover:text-white dark:hover:bg-white dark:hover:text-primary transition-colors duration-200 cursor-default"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Skills
