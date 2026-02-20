import { useScrollReveal } from '../hooks'
import './ProblemSection.css'

// ── Pie chart helpers ────────────────────────────────────────
const CX = 110, CY = 110, R = 90

function polar(pct: number) {
    const a = (pct * 360 - 90) * (Math.PI / 180)
    return { x: +(CX + R * Math.cos(a)).toFixed(2), y: +(CY + R * Math.sin(a)).toFixed(2) }
}

function arc(start: number, end: number) {
    const s = polar(start), e = polar(end)
    const large = end - start > 0.5 ? 1 : 0
    return `M ${CX} ${CY} L ${s.x} ${s.y} A ${R} ${R} 0 ${large} 1 ${e.x} ${e.y} Z`
}

const rawSlices = [
    { pct: 0.35, color: '#B91C1C', label: 'Never reach a launch-ready product',            value: '35%' },
    { pct: 0.25, color: '#EF4444', label: 'Launch, but don\'t reach first paying customer', value: '25%' },
    { pct: 0.20, color: '#9CA3AF', label: 'Build, but struggle with distribution',          value: '20%' },
    { pct: 0.15, color: '#6B7280', label: 'No repeatable system — stop after one try',      value: '15%' },
    { pct: 0.05, color: '#16A34A', label: 'Successfully publish and earn revenue',          value: '5%'  },
]

const slices = (() => {
    let acc = 0
    return rawSlices.map(s => { const st = acc; acc += s.pct; return { ...s, start: st, end: acc } })
})()

// ── Pain cards ────────────────────────────────────────────────
const painCards = [
    {
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
        ),
        title: 'No validated starting point',
        desc: 'Builders spend weeks deciding what to build. Without structure, decision fatigue kills momentum before a single line of code is written.',
        barWidth: '75%',
    },
    {
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
        ),
        title: 'Reinventing the stack every time',
        desc: 'Without reusable templates or boilerplate, each product starts from scratch. Hours disappear into setup, not shipping.',
        barWidth: '68%',
    },
    {
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
        title: 'Zero built-in distribution',
        desc: "Most builders launch into silence. There's no existing channel pointing buyers toward micro-SaaS tools — so products die in obscurity.",
        barWidth: '81%',
    },
    {
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
        ),
        title: 'No feedback loop to improve',
        desc: "Without real users and structured feedback, it's impossible to know if you're building the right thing — or burning time on the wrong one.",
        barWidth: '60%',
    },
]

export default function ProblemSection() {
    const headerRef = useScrollReveal<HTMLDivElement>()
    const graphRef  = useScrollReveal<HTMLDivElement>()
    const cardsRef  = useScrollReveal<HTMLDivElement>()

    return (
        <section className="problem" id="problem">
            <div className="container">

                {/* Full-width header */}
                <div ref={headerRef} className="problem__header">
                    <div className="reveal-up">
                        <h2 className="section-title">Most micro-SaaS builders never reach their first paying customer.</h2>
                        <p className="section-body">It's not a talent problem. It's a system problem — and the data backs it up.</p>
                    </div>
                </div>

                <div className="problem__layout">

                    {/* Left: Pie chart */}
                    <div ref={graphRef} className="problem__graph-wrap">
                        <p className="problem__graph-title reveal-up">What happens when builders try to ship</p>

                        <div className="problem__pie reveal-up">
                            {/* SVG Pie */}
                            <svg viewBox="0 0 220 220" className="pie__svg" aria-hidden="true">
                                {slices.map((s, i) => (
                                    <path
                                        key={i}
                                        d={arc(s.start, s.end)}
                                        fill={s.color}
                                        stroke="white"
                                        strokeWidth="2.5"
                                        className="pie__slice"
                                    />
                                ))}
                                {/* Center label */}
                                <circle cx={CX} cy={CY} r="34" fill="white" />
                                <text x={CX} y={CY - 5} textAnchor="middle" className="pie__center-pct">100%</text>
                                <text x={CX} y={CY + 12} textAnchor="middle" className="pie__center-label">of builders</text>
                            </svg>

                            {/* Legend */}
                            <div className="pie__legend">
                                {slices.map((s, i) => (
                                    <div
                                        key={i}
                                        className="pie__legend-item"
                                        style={{ transitionDelay: `${0.15 + i * 0.07}s` }}
                                    >
                                        <span className="pie__legend-dot" style={{ background: s.color }} />
                                        <span className="pie__legend-pct">{s.value}</span>
                                        <span className="pie__legend-label">{s.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Pain cards */}
                    <div ref={cardsRef} className="problem__right">
                        <div className="problem__cards">
                            {painCards.map((card) => (
                                <div key={card.title} className="pain-card">
                                    <div className="pain-card__icon">{card.icon}</div>
                                    <div className="pain-card__content">
                                        <h4>{card.title}</h4>
                                        <p>{card.desc}</p>
                                    </div>
                                    <div className="pain-card__bar">
                                        <div
                                            className="pain-card__bar-fill"
                                            style={{ '--bar-width': card.barWidth } as React.CSSProperties}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <p className="problem__closing">
                            SaaS Sandhai exists to solve all four of these problems — in one connected ecosystem built specifically for micro-product builders.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}
