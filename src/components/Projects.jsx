import { useRef, useState, useEffect } from 'react'
import { motion, useTransform, useScroll } from 'framer-motion'

function Projects() {
    const [isDesktop, setIsDesktop] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsDesktop(window.innerWidth >= 768)
        }
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
    })

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"])

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
            title: 'Craft',
            description: 'A creative web application built with modern frontend technologies, showcasing advanced React patterns and elegant design principles.',
            tags: ['React', 'Tailwind CSS', 'JavaScript', 'UI'],
            image: '/images/craft.png',
            github: 'https://github.com/Khushi256/Craft',
            live: null
        }
    ]

    return (
        <section
            ref={targetRef}
            className="relative bg-primary dark:bg-background-light text-white dark:text-primary transition-colors duration-300 md:h-[400vh] h-auto"
            id="projects"
        >
            <div className="md:sticky md:top-0 md:flex md:h-screen md:items-center md:overflow-hidden">
                <motion.div
                    style={{ x: isDesktop ? x : 0 }}
                    className="flex flex-col md:flex-row"
                >
                    {/* Intro Slide */}
                    <div className="flex h-screen w-full md:w-screen items-center justify-center flex-shrink-0 px-6 md:px-16 py-20 md:py-0 border-b md:border-b-0 border-zinc-800 dark:border-zinc-200">
                        <div className="max-w-4xl w-full">
                            <h2 className="font-display text-[15vw] md:text-[8vw] leading-none font-extrabold tracking-tighter uppercase mb-6">
                                Selected <br /> <span className="text-yellow-500">Works</span>
                            </h2>
                            <p className="text-xl md:text-2xl text-zinc-400 dark:text-zinc-600 max-w-lg">
                                A collection of projects that define my journey in digital product design and development.
                            </p>
                            <div className="hidden md:flex items-center gap-4 mt-8 text-sm font-bold uppercase tracking-widest text-yellow-500">
                                <span className="material-symbols-outlined animate-bounce">arrow_forward</span>
                                Scroll to explore
                            </div>
                            <div className="md:hidden flex items-center gap-4 mt-8 text-sm font-bold uppercase tracking-widest text-yellow-500">
                                <span className="material-symbols-outlined animate-bounce">arrow_downward</span>
                                Scroll to explore
                            </div>
                        </div>
                    </div>

                    {projects.map((project, index) => (
                        <div key={index} className="flex min-h-screen md:h-screen w-full md:w-screen items-center justify-center flex-shrink-0 p-6 md:p-12 border-b md:border-b-0 border-zinc-800 dark:border-zinc-200 last:border-b-0 text-left">
                            <div className="w-full h-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center content-center">
                                <div className="space-y-6 order-2 md:order-1">
                                    <span className="font-display text-[20vw] md:text-[8rem] font-extrabold leading-none text-transparent stroke-text text-yellow-500 opacity-50 dark:opacity-30">
                                        {project.number}
                                    </span>
                                    <h3 className="font-display text-4xl md:text-6xl font-extrabold uppercase tracking-tighter">
                                        {project.title}
                                    </h3>
                                    <p className="text-lg md:text-xl text-zinc-400 dark:text-zinc-600 max-w-md">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="px-4 py-2 border border-zinc-700 dark:border-zinc-300 rounded-full text-sm font-bold uppercase tracking-widest hover:border-yellow-500 hover:text-yellow-500 transition-colors"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-4 mt-12 md:mt-32">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-5 py-2 text-xs bg-white dark:bg-primary text-primary dark:text-white rounded-full font-bold uppercase tracking-widest hover:scale-105 hover:shadow-xl transition-all flex items-center gap-2">
                                            GitHub
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                        </a>
                                        {project.live && (
                                            <a href={project.live} target="_blank" rel="noopener noreferrer" className="px-5 py-2 text-xs border border-zinc-300 dark:border-zinc-700 text-white dark:text-primary rounded-full font-bold uppercase tracking-widest hover:scale-105 hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all flex items-center gap-2">
                                                Live Demo
                                                <span className="material-symbols-outlined text-sm">arrow_outward</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <div className="h-[40vh] md:h-[75vh] w-full flex items-center justify-start order-1 md:order-2">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="max-w-full max-h-full object-contain rounded-3xl shadow-[0_0_40px_rgba(255,255,255,0.3)] dark:shadow-[0_0_40px_rgba(0,0,0,0.3)] transition-transform duration-700"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Projects
