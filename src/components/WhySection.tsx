import { useScrollReveal } from '../hooks'
import './WhySection.css'

const reasons = [
    'No proven structure for what to build first',
    'No reusable foundation to move fast',
    'No clear launch checklist',
    'No distribution channel built into the journey',
]

export default function WhySection() {
    const ref = useScrollReveal<HTMLElement>()

    return (
        <section className="why section-alt" id="why" ref={ref}>
            <div className="container">
                <div className="why__layout">
                    <div className="why__text reveal-up">
                        <h2 className="section-title">Builders don't need more motivation. They need a repeatable system.</h2>
                        <p className="section-body">Most people don't get stuck because they're lazy. They get stuck because the path is unclear:</p>
                        <div className="why__list">
                            {reasons.map((r, i) => (
                                <div key={i} className="why__item" style={{ animationDelay: `${0.1 + i * 0.1}s` }}>
                                    <div className="why__item-icon">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="18" y1="6" x2="6" y2="18" />
                                            <line x1="6" y1="6" x2="18" y2="18" />
                                        </svg>
                                    </div>
                                    <p>{r}</p>
                                </div>
                            ))}
                        </div>
                        <p className="why__closing">SaaS Sandhai turns "I'll build someday" into a practical, step-by-step process — then helps you publish where real buyers explore new tools.</p>
                    </div>

                    {/* Redesigned SVG illustration */}
                    <div className="why__visual reveal-up reveal-delay-1">
                        <svg viewBox="0 0 420 460" className="why__svg" xmlns="http://www.w3.org/2000/svg">

                            {/* Card background */}
                            <rect width="420" height="460" rx="20" fill="#F9FAFB" />

                            {/* Subtle dot grid */}
                            {Array.from({ length: 7 }).map((_, row) =>
                                Array.from({ length: 8 }).map((_, col) => (
                                    <circle
                                        key={`dot-${row}-${col}`}
                                        cx={26 + col * 54}
                                        cy={26 + row * 62}
                                        r="1.4"
                                        fill="#94A3B8"
                                        fillOpacity="0.18"
                                    />
                                ))
                            )}

                            {/* ── CLEAR PATH ZONE ── */}

                            {/* Zone eyebrow label */}
                            <text x="24" y="38" fontSize="9.5" fontWeight="700" fill="#B91C1C" fontFamily="Outfit" fillOpacity="0.65" letterSpacing="1">SAAS SANDHAI PATH</text>

                            {/* "Clear system" badge — top right */}
                            <rect x="292" y="17" width="112" height="30" rx="15" fill="#FEF2F2" />
                            <circle cx="309" cy="32" r="5" fill="#B91C1C" fillOpacity="0.18" />
                            <circle cx="309" cy="32" r="2.5" fill="#B91C1C" />
                            <text x="321" y="37" fontSize="11" fontWeight="600" fill="#B91C1C" fontFamily="Outfit">Clear system</text>

                            {/* Main smooth path — animated draw */}
                            <path
                                d="M 72 96 Q 143 180 214 180 Q 285 180 356 96"
                                stroke="#B91C1C"
                                strokeWidth="2.5"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="why__path-line"
                            />

                            {/* Directional arrows at path midpoints */}
                            <g transform="translate(143 158) rotate(31)" className="why__arrow">
                                <polygon points="-7,-4 7,0 -7,4" fill="#B91C1C" />
                            </g>
                            <g transform="translate(285 158) rotate(-31)" className="why__arrow">
                                <polygon points="-7,-4 7,0 -7,4" fill="#B91C1C" />
                            </g>

                            {/* ─ Node 1: Learn ─ */}
                            <circle cx="72" cy="96" r="23" fill="white" stroke="#B91C1C" strokeWidth="2.5" />
                            <text x="72" y="103" textAnchor="middle" fontSize="14" fontWeight="800" fill="#B91C1C" fontFamily="Outfit">1</text>
                            <text x="72" y="136" textAnchor="middle" fontSize="12" fontWeight="700" fill="#1F2937" fontFamily="Outfit">Learn</text>
                            <text x="72" y="152" textAnchor="middle" fontSize="10" fill="#9CA3AF" fontFamily="Inter">Foundations</text>

                            {/* ─ Node 2: Build ─ */}
                            <circle cx="214" cy="180" r="23" fill="white" stroke="#B91C1C" strokeWidth="2.5" />
                            <text x="214" y="187" textAnchor="middle" fontSize="14" fontWeight="800" fill="#B91C1C" fontFamily="Outfit">2</text>
                            <text x="214" y="220" textAnchor="middle" fontSize="12" fontWeight="700" fill="#1F2937" fontFamily="Outfit">Build</text>
                            <text x="214" y="236" textAnchor="middle" fontSize="10" fill="#9CA3AF" fontFamily="Inter">Ship fast</text>

                            {/* ─ Node 3: Publish — filled success ─ */}
                            {/* Outer glow ring */}
                            <circle cx="356" cy="96" r="33" fill="none" stroke="#B91C1C" strokeWidth="1" strokeOpacity="0.18" />
                            <circle cx="356" cy="96" r="23" fill="#B91C1C" />
                            <text x="356" y="103" textAnchor="middle" fontSize="14" fontWeight="800" fill="white" fontFamily="Outfit">3</text>
                            <text x="356" y="136" textAnchor="middle" fontSize="12" fontWeight="700" fill="#1F2937" fontFamily="Outfit">Publish</text>
                            <text x="356" y="152" textAnchor="middle" fontSize="10" fill="#9CA3AF" fontFamily="Inter">Earn revenue</text>

                            {/* ── DIVIDER ── */}
                            <line x1="24" y1="272" x2="396" y2="272" stroke="#E5E7EB" strokeWidth="1" />
                            <rect x="176" y="263" width="68" height="18" rx="9" fill="#E5E7EB" />
                            <text x="210" y="276" textAnchor="middle" fontSize="10" fontWeight="600" fill="#9CA3AF" fontFamily="Inter">vs. chaos</text>

                            {/* ── CHAOS ZONE ── */}
                            <g opacity="0.45">
                                {/* Wandering dashed paths */}
                                <path d="M 40 312 Q 76 288 110 310 T 168 296 T 212 320" stroke="#9CA3AF" strokeWidth="1.5" fill="none" strokeDasharray="5 4" />
                                <path d="M 50 368 Q 88 342 124 364 T 186 350" stroke="#C4CADA" strokeWidth="1.2" fill="none" strokeDasharray="4 5" />
                                <path d="M 230 302 Q 266 322 298 310 T 356 326" stroke="#9CA3AF" strokeWidth="1.5" fill="none" strokeDasharray="5 4" />
                                <path d="M 240 364 Q 274 342 308 360 T 372 348" stroke="#C4CADA" strokeWidth="1.2" fill="none" strokeDasharray="4 5" />

                                {/* Dead-end X markers */}
                                <circle cx="212" cy="320" r="7" fill="none" stroke="#9CA3AF" strokeWidth="1.5" />
                                <line x1="208" y1="316" x2="216" y2="324" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" />
                                <line x1="216" y1="316" x2="208" y2="324" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" />

                                <circle cx="186" cy="350" r="6" fill="none" stroke="#C4CADA" strokeWidth="1.2" />
                                <line x1="182.5" y1="346.5" x2="189.5" y2="353.5" stroke="#C4CADA" strokeWidth="1.2" strokeLinecap="round" />
                                <line x1="189.5" y1="346.5" x2="182.5" y2="353.5" stroke="#C4CADA" strokeWidth="1.2" strokeLinecap="round" />

                                <circle cx="356" cy="326" r="7" fill="none" stroke="#9CA3AF" strokeWidth="1.5" />
                                <line x1="352" y1="322" x2="360" y2="330" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" />
                                <line x1="360" y1="322" x2="352" y2="330" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" />

                                <circle cx="372" cy="348" r="6" fill="none" stroke="#C4CADA" strokeWidth="1.2" />
                                <line x1="368.5" y1="344.5" x2="375.5" y2="351.5" stroke="#C4CADA" strokeWidth="1.2" strokeLinecap="round" />
                                <line x1="375.5" y1="344.5" x2="368.5" y2="351.5" stroke="#C4CADA" strokeWidth="1.2" strokeLinecap="round" />

                                {/* Scattered confused hollow circles */}
                                <circle cx="96" cy="402" r="8" fill="none" stroke="#D1D5DB" strokeWidth="1.2" strokeDasharray="3 3" />
                                <circle cx="292" cy="406" r="8" fill="none" stroke="#D1D5DB" strokeWidth="1.2" strokeDasharray="3 3" />
                                <circle cx="168" cy="418" r="6" fill="none" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="2 3" />

                                {/* Question marks */}
                                <text x="130" y="402" fontSize="14" fill="#D1D5DB" fontFamily="Inter" fontWeight="700" textAnchor="middle">?</text>
                                <text x="250" y="420" fontSize="14" fill="#E5E7EB" fontFamily="Inter" fontWeight="700" textAnchor="middle">?</text>

                                {/* Zone label */}
                                <text x="28" y="448" fontSize="9.5" fontWeight="700" fill="#9CA3AF" fontFamily="Inter" letterSpacing="0.8">NO SYSTEM — every launch starts from zero</text>
                            </g>

                        </svg>
                    </div>
                </div>
            </div>
        </section>
    )
}
