import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Preloader from './components/Preloader'
import { useState, useEffect } from 'react'

function App() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Wait for the counter animation to finish (approx 2000ms)
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 2200)

        return () => clearTimeout(timer)
    }, [])

    return (
        <main className="bg-background-light dark:bg-background-dark min-h-screen transition-colors duration-300">
            {isLoading ? (
                <Preloader />
            ) : (
                <>
                    <Navbar />
                    <Hero />
                    <About />
                    <Skills />
                    <Projects />
                    <Contact />
                </>
            )}
        </main>
    )
}

export default App
