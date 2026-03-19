import { useState } from 'react'

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        // Add your form submission logic here
        console.log('Form submitted:', formData)
        alert('Thank you for your message! I\'ll get back to you soon.')
        setFormData({ name: '', email: '', message: '' })
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <section className="py-16 md:py-24 px-6 border-t border-zinc-100 dark:border-zinc-900" id="contact">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start lg:items-center">
                {/* Left Column */}
                <div className="flex flex-col justify-center h-full">
                    <div className="mb-8">
                        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-4 leading-none">
                            Let's <br />Connect<span className="text-yellow-500">.</span>
                        </h2>
                        <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-md leading-relaxed mb-8">
                            I'm currently open for new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>
                    </div>

                    <div className="mb-8">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-yellow-500">Email me at</p>
                        <a href="mailto:khushim1109@gmail.com" className="text-lg font-body font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors">
                            khushim1109@gmail.com
                        </a>
                    </div>

                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-yellow-500">Find me on</p>
                        <div className="flex flex-wrap gap-3">
                            <a
                                className="group flex items-center justify-center w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 hover:border-zinc-900 dark:hover:border-zinc-100 hover:text-zinc-900 dark:hover:text-zinc-100 hover:-translate-y-1 transition-all duration-300"
                                href="https://github.com/Khushi256"
                                aria-label="GitHub"
                            >
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                            </a>
                            <a
                                className="group flex items-center justify-center w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 hover:border-zinc-900 dark:hover:border-zinc-100 hover:text-zinc-900 dark:hover:text-zinc-100 hover:-translate-y-1 transition-all duration-300"
                                href="https://www.linkedin.com/in/khushi-mishra-06815931b"
                                aria-label="LinkedIn"
                            >
                                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                            </a>
                            <a
                                className="group flex items-center justify-center w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 hover:border-zinc-900 dark:hover:border-zinc-100 hover:text-zinc-900 dark:hover:text-zinc-100 hover:-translate-y-1 transition-all duration-300"
                                href="https://x.com/Khushim1109"
                                aria-label="X (formerly Twitter)"
                            >
                                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Column - Contact Form */}
                <div className="bg-zinc-50 dark:bg-zinc-900/50 p-6 md:p-10 rounded-[2rem]">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-1">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400" htmlFor="name">
                                Your Name
                            </label>
                            <input
                                className="w-full bg-transparent border-0 border-b border-zinc-200 dark:border-zinc-800 focus:ring-0 focus:border-yellow-500 dark:focus:border-yellow-500 px-0 py-2 transition-colors text-base placeholder:text-zinc-300 dark:placeholder:text-zinc-700 font-medium"
                                id="name"
                                name="name"
                                placeholder="John Doe"
                                required
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400" htmlFor="email">
                                Email Address
                            </label>
                            <input
                                className="w-full bg-transparent border-0 border-b border-zinc-200 dark:border-zinc-800 focus:ring-0 focus:border-yellow-500 dark:focus:border-yellow-500 px-0 py-2 transition-colors text-base placeholder:text-zinc-300 dark:placeholder:text-zinc-700 font-medium"
                                id="email"
                                name="email"
                                placeholder="hello@example.com"
                                required
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                className="w-full bg-transparent border-0 border-b border-zinc-200 dark:border-zinc-800 focus:ring-0 focus:border-yellow-500 dark:focus:border-yellow-500 px-0 py-2 transition-colors text-base placeholder:text-zinc-300 dark:placeholder:text-zinc-700 resize-none font-medium"
                                id="message"
                                name="message"
                                placeholder="Tell me about your project..."
                                required
                                rows="3"
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </div>

                        <button
                            className="w-full mt-4 bg-yellow-500 dark:bg-yellow-500 text-white dark:text-black py-4 rounded-full font-bold uppercase tracking-[0.2em] text-xs hover:bg-yellow-500 hover:text-white dark:hover:bg-yellow-500 dark:hover:text-white transition-all shadow-none hover:shadow-lg flex items-center justify-center gap-3 group"
                            type="submit"
                        >
                            Send Message
                            <span className="material-symbols-outlined text-sm group-hover:translate-x-2 transition-transform">
                                arrow_forward
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
