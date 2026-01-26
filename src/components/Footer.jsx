function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="mt-20 border-t border-zinc-100 dark:border-zinc-900 bg-background-light dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
                {/* Top Row */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
                    <div className="font-display font-extrabold text-3xl tracking-tighter">
                        Khushi<span className="text-zinc-400">.</span>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-xs font-bold uppercase tracking-[0.2em]">
                        <a className="hover:text-zinc-400 transition-colors" href="#about">About</a>
                        <a className="hover:text-zinc-400 transition-colors" href="#skills">Skills</a>
                        <a className="hover:text-zinc-400 transition-colors" href="#projects">Projects</a>
                        <a className="hover:text-zinc-400 transition-colors" href="#contact">Contact</a>
                    </div>

                    <div className="flex items-center space-x-8 text-[10px] font-bold uppercase tracking-[0.3em]">
                        <a className="text-zinc-400 hover:text-primary dark:hover:text-white transition-colors" href="#">
                            GITHUB
                        </a>
                        <a className="text-zinc-400 hover:text-primary dark:hover:text-white transition-colors" href="#">
                            LINKEDIN
                        </a>
                        <a className="text-zinc-400 hover:text-primary dark:hover:text-white transition-colors" href="#">
                            TWITTER
                        </a>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-zinc-50 dark:border-zinc-900 text-[10px] text-zinc-400 dark:text-zinc-600 font-bold uppercase tracking-widest">
                    <p>© {currentYear} Khushi. Built with precision.</p>

                    <div className="flex gap-8">
                        <a className="hover:text-primary dark:hover:text-white transition-colors" href="#">
                            Privacy Policy
                        </a>
                        <a className="hover:text-primary dark:hover:text-white transition-colors" href="#">
                            Terms of Service
                        </a>
                    </div>

                    <div className="flex items-center gap-3">
                        <span>Designed with</span>
                        <span className="material-symbols-outlined text-[14px] text-zinc-300 dark:text-zinc-700">
                            pentagon
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
