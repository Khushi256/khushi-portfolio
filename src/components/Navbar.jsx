import { useState, useEffect } from 'react'

function Navbar() {
    const [darkMode, setDarkMode] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        // Only respect explicit user preference stored in localStorage
        // Default is always light mode (no system preference fallback)
        const isDark = localStorage.getItem('theme') === 'dark'
        setDarkMode(isDark)
        if (isDark) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [])

    const toggleDarkMode = () => {
        const newMode = !darkMode

        // Toggle theme immediately without animation
        setDarkMode(newMode)
        if (newMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }

    return (
        <header className="fixed top-0 w-full z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-zinc-100 dark:border-zinc-900">
            <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="font-display font-extrabold text-2xl tracking-tighter">
                    Khushi<span className="text-yellow-500">.</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8 text-sm font-bold uppercase tracking-widest">
                    <a className="hover:text-zinc-500 transition-colors" href="#about">About</a>
                    <a className="hover:text-zinc-500 transition-colors" href="#skills">Skills</a>
                    <a className="hover:text-zinc-500 transition-colors" href="#projects">Projects</a>
                    <a className="hover:text-zinc-500 transition-colors" href="#contact">Contact</a>
                    <button
                        className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center hover:scale-110 transition-transform"
                        onClick={toggleDarkMode}
                        aria-label="Toggle dark mode"
                    >
                        <span className="material-symbols-outlined text-[20px]">
                            {darkMode ? 'light_mode' : 'dark_mode'}
                        </span>
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className="material-symbols-outlined">
                        {mobileMenuOpen ? 'close' : 'menu'}
                    </span>
                </button>
            </nav>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-background-light dark:bg-background-dark border-b border-zinc-100 dark:border-zinc-900 animate-slide-down">
                    <div className="px-6 py-4 space-y-4">
                        <a
                            className="block text-sm font-bold uppercase tracking-widest hover:text-zinc-500 transition-colors"
                            href="#about"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            About
                        </a>
                        <a
                            className="block text-sm font-bold uppercase tracking-widest hover:text-zinc-500 transition-colors"
                            href="#skills"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Skills
                        </a>
                        <a
                            className="block text-sm font-bold uppercase tracking-widest hover:text-zinc-500 transition-colors"
                            href="#projects"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Projects
                        </a>
                        <a
                            className="block text-sm font-bold uppercase tracking-widest hover:text-zinc-500 transition-colors"
                            href="#contact"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Contact
                        </a>
                        <button
                            className="w-full p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center gap-2 font-bold uppercase tracking-widest text-sm"
                            onClick={toggleDarkMode}
                        >
                            <span className="material-symbols-outlined text-[20px]">
                                {darkMode ? 'light_mode' : 'dark_mode'}
                            </span>
                            {darkMode ? 'Light Mode' : 'Dark Mode'}
                        </button>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Navbar
