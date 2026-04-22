function About() {
    return (
        <section className="py-20 md:py-32 px-6 max-w-7xl mx-auto border-t border-zinc-100 dark:border-zinc-900" id="about">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-4">
                    <h2 className="font-display text-4xl font-extrabold tracking-tighter uppercase">About Me</h2>
                </div>

                <div className="lg:col-span-8">
                    <p className="text-lg md:text-xl font-display font-medium leading-relaxed text-zinc-900 dark:text-zinc-100">
                        Hi, I’m Khushi — a <span className="text-yellow-500 font-syne font-bold" style={{ fontFamily: '"Syne", sans-serif' }}>Frontend Developer</span> skilled in <span className="text-yellow-500 font-syne font-bold" style={{ fontFamily: '"Syne", sans-serif' }}>React</span>, TypeScript, and Tailwind CSS, focused on building performant and user-centric web applications.
                        <br /><br />
                        I’ve built and deployed projects with API integrations and am currently exploring <span className="text-yellow-500 font-syne font-bold" style={{ fontFamily: '"Syne", sans-serif' }}>AI/ML</span> to develop intelligent, data-driven applications. I’m also an <span className="text-yellow-500 font-syne font-bold" style={{ fontFamily: '"Syne", sans-serif' }}>ADK-TS Hackathon Winner</span>, recognized for building scalable multi-agent solutions.
                    </p>

                    <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8 text-sm uppercase tracking-widest font-bold text-zinc-400">
                        <div>
                            <p className="text-primary dark:text-white mb-2">Location</p>
                            <p>Remote / India</p>
                        </div>
                        <div>
                            <p className="text-primary dark:text-white mb-2">Education</p>
                            <p>Computer Science</p>
                        </div>
                        <div>
                            <p className="text-primary dark:text-white mb-2">Interests</p>
                            <p>AI, ML, Design</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
