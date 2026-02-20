import { useScrollReveal } from '../hooks'
import './Outcomes.css'

const outcomes = [
    'You ship more products because you reuse proven foundations',
    'You launch sooner because the "launch-ready" checklist is clear',
    'You get early users because you publish where buyers browse micro tools',
    'You improve faster because feedback comes earlier',
]

export default function Outcomes() {
    const ref = useScrollReveal<HTMLElement>()

    return (
        <section className="outcomes" id="outcomes" ref={ref}>
            <div className="container">
                <div className="outcomes__layout">
                    <div className="outcomes__text reveal-up">
                        <h2 className="section-title">What success looks like with SaaS Sandhai</h2>
                        <div className="outcomes__list">
                            {outcomes.map((o, i) => (
                                <div key={i} className="outcome-item" style={{ animationDelay: `${i * 0.1}s` }}>
                                    <div className="outcome-item__icon">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </div>
                                    <p>{o}</p>
                                </div>
                            ))}
                        </div>
                        <p className="outcomes__strong">Most people never reach version one. We help you reach version one — then help you get seen.</p>
                    </div>

                    {/* SVG Radial Progress Illustration */}
                    <div className="outcomes__visual reveal-up reveal-delay-1">
                        <svg viewBox="0 0 300 300" className="outcomes__svg" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
                                    <stop offset="0%" stopColor="#B91C1C" />
                                    <stop offset="100%" stopColor="#EF4444" />
                                </linearGradient>
                            </defs>

                            {/* Background circle */}
                            <circle cx="150" cy="150" r="120" fill="none" stroke="#E5E7EB" strokeWidth="8" />
                            {/* Progress ring */}
                            <circle cx="150" cy="150" r="120" fill="none" stroke="url(#ringGrad)" strokeWidth="8"
                                strokeLinecap="round" strokeDasharray="754" strokeDashoffset="188"
                                className="outcomes__ring" transform="rotate(-90 150 150)" />

                            {/* Inner circle */}
                            <circle cx="150" cy="150" r="90" fill="none" stroke="#F3F4F6" strokeWidth="4" />
                            <circle cx="150" cy="150" r="90" fill="none" stroke="#B91C1C" strokeWidth="4" strokeOpacity="0.2"
                                strokeLinecap="round" strokeDasharray="565" strokeDashoffset="170"
                                className="outcomes__ring-inner" transform="rotate(-90 150 150)" />

                            {/* Center text */}
                            <text x="150" y="140" textAnchor="middle" fontSize="36" fontWeight="800" fill="#B91C1C" fontFamily="Outfit">V1</text>
                            <text x="150" y="165" textAnchor="middle" fontSize="12" fill="#6B7280" fontFamily="Inter">Ship. Launch. Grow.</text>

                            {/* Orbiting dots */}
                            {[0, 90, 180, 270].map((angle, i) => {
                                const rad = (angle * Math.PI) / 180
                                const cx = 150 + 120 * Math.cos(rad - Math.PI / 2)
                                const cy = 150 + 120 * Math.sin(rad - Math.PI / 2)
                                return (
                                    <g key={i}>
                                        <circle cx={cx} cy={cy} r="8" fill="white" stroke="#B91C1C" strokeWidth="2" />
                                        <text x={cx} y={cy + 4} textAnchor="middle" fontSize="8" fontWeight="700" fill="#B91C1C" fontFamily="Outfit">
                                            {i + 1}
                                        </text>
                                    </g>
                                )
                            })}
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    )
}
