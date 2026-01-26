import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
    return (
        <main className="bg-background-light dark:bg-background-dark min-h-screen transition-colors duration-300">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </main>
    )
}

export default App
