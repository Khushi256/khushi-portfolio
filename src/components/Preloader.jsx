import { useEffect, useState } from 'react'

function Preloader() {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prev) => {
                if (prev < 100) {
                    return prev + 1
                } else {
                    clearInterval(interval)
                    return 100
                }
            })
        }, 20) // Adjust speed here (20ms * 100 = 2000ms duration approx)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-zinc-950 text-white overflow-hidden">
            <div className="relative flex flex-col items-center">
                {/* Counter */}
                <span className="font-display text-8xl md:text-9xl font-bold text-yellow-500 loading-counter">
                    {counter}%
                </span>

                {/* Loading Text */}
                <div className="mt-4 overflow-hidden">
                    <p className="font-sans text-sm md:text-base uppercase tracking-[0.2em] text-zinc-400 animate-pulse">
                        Loading Experience
                    </p>
                </div>

                {/* Optional: Gold Progress Line */}
                <div className="absolute bottom-[-20px] left-0 w-full h-[2px] bg-zinc-800 rounded-full overflow-hidden mt-8">
                    <div
                        className="h-full bg-yellow-500 transition-all duration-100 ease-out"
                        style={{ width: `${counter}%` }}
                    />
                </div>
            </div>

            {/* Corner Accents for Premium Feel */}
            <div className="absolute top-8 left-8 w-4 h-4 border-l-2 border-t-2 border-yellow-500/50"></div>
            <div className="absolute top-8 right-8 w-4 h-4 border-r-2 border-t-2 border-yellow-500/50"></div>
            <div className="absolute bottom-8 left-8 w-4 h-4 border-l-2 border-b-2 border-yellow-500/50"></div>
            <div className="absolute bottom-8 right-8 w-4 h-4 border-r-2 border-b-2 border-yellow-500/50"></div>
        </div>
    )
}

export default Preloader
