import { motion } from 'framer-motion'

const projects = [
    {
        number: '01',
        title: 'ReflectIQ',
        description: 'Real-time AI journal with goal tracking and team chat. Built responsive UI with React, TypeScript, and WebSocket integration.',
        tags: ['React', 'Typescript', 'Tailwind CSS'],
        image: '/images/reflectiq.png',
        github: 'https://github.com/riteshkrkarn/ai-journal',
        live: 'https://reflectiq.r2k.dev/'
    },
    {
        number: '02',
        title: 'Crust',
        description: 'A modern, single-page pizzeria website featuring smooth-scrolling, interactive glow effects, and beautiful animations with DaisyUI and Framer Motion.',
        tags: ['React', 'DaisyUI', 'Tailwind CSS', 'Framer Motion'],
        image: '/images/crust.png',
        github: 'https://github.com/Khushi256/Crust',
        live: null
    },
    {
        number: '03',
        title: 'GitSnap',
        description: 'GitHub Developer Analytics Dashboard featuring custom SVG heatmaps and language trend graphs. Built with React 19, TypeScript, and high-performance visualizations.',
        tags: ['React 19', 'TypeScript', 'Tailwind CSS 4', 'Radix UI', 'Recharts'],
        image: '/images/gitsnap.png',
        github: 'https://github.com/Khushi256/github-visualizer',
        live: 'https://git-snap-one.vercel.app/'
    }
]

function Projects() {
    return (
        <section
            className="relative bg-primary text-white transition-colors duration-300 py-20 md:py-32 px-6"
            id="projects"
            style={{ overflowX: 'clip' }}
        >
            {/* Section heading */}
            <div className="max-w-7xl mx-auto w-full mb-12 md:mb-20">
                <h2 className="font-display text-[11vw] md:text-[8vw] leading-none font-extrabold tracking-tighter uppercase">
                    Selected <br /> <span className="text-yellow-500">Works</span>
                </h2>
                <p className="text-base md:text-xl text-zinc-400 max-w-lg mt-4 md:mt-6">
                    A collection of projects that define my journey in digital product design and development.
                </p>
            </div>

            {/* Project cards */}
            <div className="max-w-7xl mx-auto w-full flex flex-col gap-16 md:gap-24">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center border-t border-zinc-800 pt-10 md:pt-12"
                    >
                        {/* Text side */}
                        <div className="space-y-4 order-2 md:order-1 min-w-0">
                            <div className="overflow-hidden">
                                <span className="font-display text-[15vw] md:text-[6rem] lg:text-[7rem] font-extrabold leading-none text-transparent stroke-text text-yellow-500 opacity-70 block">
                                    {project.number}
                                </span>
                            </div>
                            <h3 className="font-display text-3xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tighter">
                                {project.title}
                            </h3>
                            <p className="text-base md:text-lg text-zinc-400 max-w-md">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 md:gap-3">
                                {project.tags.map((tag, tagIndex) => (
                                    <span
                                        key={tagIndex}
                                        className="px-3 py-1.5 md:px-4 md:py-2 border border-zinc-700 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest hover:border-yellow-500 hover:text-yellow-500 transition-colors"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="flex flex-wrap gap-3 pt-2">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-5 py-2 text-xs bg-white text-primary rounded-full font-bold uppercase tracking-widest hover:scale-105 hover:shadow-xl transition-all flex items-center gap-2"
                                >
                                    GitHub
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                </a>
                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-5 py-2 text-xs border border-zinc-300 text-white rounded-full font-bold uppercase tracking-widest hover:scale-105 hover:bg-zinc-800 transition-all flex items-center gap-2"
                                    >
                                        Live Demo
                                        <span className="material-symbols-outlined text-sm">arrow_outward</span>
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Image side */}
                        <div className="h-[45vw] max-h-[320px] md:max-h-none md:h-[55vh] lg:h-[65vh] w-full flex items-center justify-center order-1 md:order-2">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="max-w-full max-h-full object-contain rounded-2xl md:rounded-3xl shadow-[0_0_40px_rgba(255,255,255,0.3)]"
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Projects
