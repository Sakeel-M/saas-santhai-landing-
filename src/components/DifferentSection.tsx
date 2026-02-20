import { useScrollReveal } from '../hooks'
import './DifferentSection.css'

const columns = [
    {
        label: 'Approach A',
        title: 'Learning Only',
        desc: 'You gain knowledge, but struggle to ship and distribute. Great for skills, not for launches.',
        highlight: false,
    },
    {
        label: 'SaaS Sandhai',
        title: 'Build + Publish',
        desc: 'You build faster with a system, then publish with a marketplace designed for discovery. The full journey, one ecosystem.',
        highlight: true,
    },
    {
        label: 'Approach B',
        title: 'Marketplace Only',
        desc: 'You can publish, but only if you already have momentum. No help getting from idea to product.',
        highlight: false,
    },
]

export default function DifferentSection() {
    const ref = useScrollReveal<HTMLElement>()

    return (
        <section className="different section-alt" id="different" ref={ref}>
            <div className="container">
                <h2 className="section-title section-title--center reveal-up">Most platforms solve one side. We solve the full journey.</h2>

                <div className="different__grid reveal-up">
                    {columns.map((c, i) => (
                        <div key={i} className={`diff-card${c.highlight ? ' diff-card--highlight' : ''}`}>
                            <span className="diff-card__label">{c.label}</span>
                            {c.highlight && (
                                <svg className="diff-card__star" width="24" height="24" viewBox="0 0 24 24" fill="#B91C1C" fillOpacity="0.15" stroke="#B91C1C" strokeWidth="1">
                                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                                </svg>
                            )}
                            <h3>{c.title}</h3>
                            <p>{c.desc}</p>

                            {/* Visual indicator */}
                            <div className="diff-card__meter">
                                <div className="diff-card__meter-track">
                                    <div
                                        className="diff-card__meter-fill"
                                        style={{ width: c.highlight ? '100%' : '45%' }}
                                    />
                                </div>
                                <span className="diff-card__meter-label">
                                    {c.highlight ? 'Full journey coverage' : 'Partial coverage'}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="different__closing reveal-up">The goal isn't just to build. The goal is to launch, learn from users, and grow.</p>
            </div>
        </section>
    )
}
