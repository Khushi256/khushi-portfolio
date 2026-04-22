function Skills() {
    const skillCategories = [
        {
            title: "Languages",
            skills: ['C++', 'Java', 'JavaScript', 'TypeScript', 'Python', 'C']
        },
        {
            title: "Frontend",
            skills: ['React', 'Redux', 'Framer', 'HTML5', 'CSS3', 'Tailwind', 'Shadcn UI', 'Radix UI', 'Zod']
        },
        {
            title: "Tools",
            skills: ['Git', 'Figma', 'Postman', 'Vercel', 'Antigravity', 'Stitch', 'Web Sockets']
        },
        {
            title: "Cloud & ML",
            skills: ['Google Cloud Platform (GCP)', 'ML Fundamentals', 'scikit-learn', 'NumPy', 'Pandas', 'Matplotlib']
        }
    ]

    return (
        <section className="min-h-0 md:min-h-screen flex flex-col justify-center py-20 bg-zinc-50 dark:bg-zinc-900/20" id="skills">
            <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="mb-10 text-center md:text-left">
                    <h2 className="font-display text-4xl md:text-6xl font-extrabold tracking-tighter uppercase">Skills</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {skillCategories.map((category, catIndex) => (
                        <div key={catIndex}>
                            <h3 className="font-display text-lg font-bold uppercase tracking-widest mb-4 text-yellow-500">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2 md:gap-3">
                                {category.skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 md:px-5 md:py-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-primary hover:text-white dark:hover:bg-white dark:hover:text-primary transition-all cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
