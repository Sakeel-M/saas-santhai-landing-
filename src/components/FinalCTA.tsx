import { useScrollReveal } from '../hooks'
import './FinalCTA.css'

export default function FinalCTA() {
    const ref = useScrollReveal<HTMLElement>()

    return (
        <section className="final-cta" id="final-cta" ref={ref}>
            {/* Decorative SVG background */}
            <svg className="final-cta__bg" viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <radialGradient id="ctaGlow" cx="50%" cy="40%" r="50%">
                        <stop offset="0%" stopColor="#B91C1C" stopOpacity="0.1" />
                        <stop offset="100%" stopColor="#B91C1C" stopOpacity="0" />
                    </radialGradient>
                </defs>
                <rect width="1440" height="400" fill="url(#ctaGlow)" />
                {/* Floating shapes */}
                <circle className="final-cta__shape" cx="200" cy="80" r="60" stroke="white" strokeWidth="0.5" strokeOpacity="0.06" fill="none" />
                <circle className="final-cta__shape final-cta__shape--2" cx="1250" cy="300" r="90" stroke="white" strokeWidth="0.5" strokeOpacity="0.04" fill="none" />
                <rect className="final-cta__shape final-cta__shape--3" x="1100" y="60" width="40" height="40" rx="6" stroke="white" strokeWidth="0.5" strokeOpacity="0.06" fill="none" transform="rotate(20 1120 80)" />
                {/* Dot pattern */}
                {Array.from({ length: 5 }).map((_, row) =>
                    Array.from({ length: 12 }).map((_, col) => (
                        <circle key={`${row}-${col}`} cx={140 + col * 110} cy={50 + row * 80} r="1" fill="white" fillOpacity="0.04" />
                    ))
                )}
            </svg>

            <div className="container final-cta__content">
                <h2 className="reveal-up">Ready to ship and launch with a real system?</h2>
                <p className="final-cta__sub reveal-up reveal-delay-1">Build with clarity. Publish for discovery. Improve with feedback. Grow with momentum.</p>
                <div className="final-cta__buttons reveal-up reveal-delay-2">
                    <a href="https://app.saassandhai.com/login" target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--lg">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                        Get Started
                    </a>
                    <a href="https://app.saassandhai.com/login" target="_blank" rel="noopener noreferrer" className="btn btn--ghost-light btn--lg">Publish Your Product</a>
                </div>
            </div>
        </section>
    )
}
