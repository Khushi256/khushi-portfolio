import { motion } from 'framer-motion'

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }
    })
}

function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center px-6 w-full max-w-7xl mx-auto pt-24 pb-12">
            <div className="space-y-2">
                <motion.h2
                    className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-500 mb-4"
                    variants={fadeUp}
                    custom={0.1}
                    initial="hidden"
                    animate="visible"
                >
                    UI/UX Designer &amp; Frontend Developer
                </motion.h2>

                <div className="overflow-hidden">
                    <motion.h1
                        className="font-display text-[12vw] md:text-[10vw] font-extrabold leading-[0.85] tracking-tighter uppercase"
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
                    >
                        HI, I AM <br />
                        <span className="font-outline text-yellow-500 dark:text-yellow-500">KHUSHI</span>
                    </motion.h1>
                </div>
            </div>

            <motion.div
                className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-8"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
            >
                <p className="max-w-sm text-lg text-zinc-500 dark:text-zinc-400 font-medium">
                    Turning product ideas into thoughtful UI and responsive, production-ready web experiences.
                </p>

                <div className="w-full md:w-auto">
                    <a className="flex items-center gap-4 group" href="#projects">
                        <span className="font-bold uppercase tracking-widest text-sm">View Portfolio</span>
                        <div className="w-12 h-12 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center group-hover:bg-primary dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all duration-300">
                            <motion.span
                                className="material-symbols-outlined"
                                animate={{ y: [0, 4, 0] }}
                                transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                            >
                                arrow_downward
                            </motion.span>
                        </div>
                    </a>
                </div>
            </motion.div>
        </section>
    )
}

export default Hero
