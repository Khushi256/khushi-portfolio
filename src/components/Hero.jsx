function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center px-6 w-full max-w-7xl mx-auto pt-24 pb-12">
            <div className="space-y-2">
                <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-500 mb-4">
                    UI/UX Designer & Frontend Developer
                </h2>
                <h1 className="font-display text-[12vw] md:text-[10vw] font-extrabold leading-[0.85] tracking-tighter uppercase">
                    HI, I AM <br />
                    <span className="font-outline text-yellow-500 dark:text-yellow-500">KHUSHI</span>
                </h1>
            </div>

            <div className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                <p className="max-w-sm text-lg text-zinc-500 dark:text-zinc-400 font-medium">
                    Turning product ideas into thoughtful UI and responsive, production-ready web experiences.
                </p>

                <div className="w-full md:w-auto">
                    <a className="flex items-center gap-4 group" href="#projects">
                        <span className="font-bold uppercase tracking-widest text-sm">View Portfolio</span>
                        <div className="w-12 h-12 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center group-hover:bg-primary dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all">
                            <span className="material-symbols-outlined">arrow_downward</span>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero
