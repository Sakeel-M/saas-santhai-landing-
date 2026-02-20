import { useScrollReveal } from '../hooks'
import './Hero.css'

export default function Hero() {
    const r1 = useScrollReveal<HTMLDivElement>()
    const r2 = useScrollReveal<HTMLDivElement>()
    const r3 = useScrollReveal<HTMLDivElement>()

    return (
        <section className="hero" id="hero">
            {/* Clean SVG background — no gradients, no glow */}
            <div className="hero__bg">
                <svg className="hero__bg-svg" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Subtle flat tint */}
                    <rect width="1440" height="600" fill="#FAFAFA" />

                    {/* Floating geometric shapes — solid strokes */}
                    <circle className="hero__shape hero__shape--1" cx="200" cy="100" r="80" stroke="#B91C1C" strokeWidth="1" strokeOpacity="0.08" fill="none" />
                    <circle className="hero__shape hero__shape--2" cx="1200" cy="150" r="120" stroke="#B91C1C" strokeWidth="1" strokeOpacity="0.06" fill="none" />
                    <rect className="hero__shape hero__shape--3" x="100" y="400" width="60" height="60" rx="8" stroke="#B91C1C" strokeWidth="1" strokeOpacity="0.07" fill="none" transform="rotate(15 130 430)" />
                    <polygon className="hero__shape hero__shape--4" points="1300,400 1340,320 1380,400" stroke="#B91C1C" strokeWidth="1" strokeOpacity="0.06" fill="none" />

                    {/* Dot grid — fixed opacity, no Math.random */}
                    {Array.from({ length: 8 }).map((_, row) =>
                        Array.from({ length: 14 }).map((_, col) => (
                            <circle
                                key={`${row}-${col}`}
                                cx={120 + col * 100}
                                cy={60 + row * 70}
                                r="1.2"
                                fill="#B91C1C"
                                fillOpacity="0.07"
                            />
                        ))
                    )}

                    {/* Connection lines — animate on load */}
                    <path d="M300 200 Q 500 100 700 250 T 1100 200" stroke="#B91C1C" strokeWidth="0.8" strokeOpacity="0.1" fill="none" className="hero__line" />
                    <path d="M200 350 Q 450 250 700 350 T 1200 300" stroke="#B91C1C" strokeWidth="0.5" strokeOpacity="0.07" fill="none" className="hero__line hero__line--2" />
                </svg>
            </div>

            <div className="container hero__content">
                <div ref={r1} className="reveal-up">
                    <h1 className="hero__headline">
                        Ship Micro-SaaS products faster.
                        <br />
                        <span className="hero__headline-accent">Launch where buyers are already looking.</span>
                    </h1>
                </div>

                <div ref={r2} className="reveal-up reveal-delay-1">
                    <p className="hero__sub">
                        SaaS Sandhai is an end-to-end ecosystem for micro products — helping new builders go from idea to working product, and helping product owners publish and get discovered through deal-style listings.
                    </p>
                </div>

                <div ref={r3} className="reveal-up reveal-delay-2">
                    <div className="hero__ctas">
                        <a href="http://app.saassanthai.com/" target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--lg">
                            Start Building &amp; Publishing
                        </a>
                        <a href="#how-it-works" className="btn btn--ghost btn--lg">
                            See How It Works
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
                        </a>
                    </div>
                    <p className="hero__supporting">
                        Templates, guided build workflows, and a launch marketplace designed for micro products.
                    </p>
                </div>
            </div>
        </section>
    )
}
