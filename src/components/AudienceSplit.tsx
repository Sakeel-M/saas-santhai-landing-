import { useScrollReveal } from '../hooks'
import './AudienceSplit.css'

const builderPoints = [
    'Structured build path from start to deployment',
    'Templates to accelerate development',
    'Clear launch readiness checklist',
    'Publish when you\'re ready to get users',
]

const ownerPoints = [
    'Deal-style listing format',
    'Clean product positioning sections',
    'Better discovery than "posting and hoping"',
    'A channel built for micro products',
]

function CheckIcon({ color }: { color: string }) {
    return (
        <svg className="aud__check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
        </svg>
    )
}

export default function AudienceSplit() {
    const ref = useScrollReveal<HTMLElement>()

    return (
        <section className="audience section-alt" id="for-builders" ref={ref}>
            <div className="container">
                <h2 className="section-title section-title--center reveal-up">Built for two types of makers</h2>

                <div className="audience__grid reveal-up">
                    {/* Builders */}
                    <div className="aud-card aud-card--builders">
                        <div className="aud-card__header">
                            <span className="aud-card__badge aud-card__badge--red">For Builders</span>
                            {/* SVG illustration */}
                            <svg className="aud-card__illu" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="20" y="15" width="80" height="50" rx="6" stroke="#B91C1C" strokeWidth="1.5" strokeOpacity="0.3" />
                                <rect x="30" y="25" width="25" height="4" rx="2" fill="#B91C1C" fillOpacity="0.2" />
                                <rect x="30" y="33" width="40" height="3" rx="1.5" fill="#B91C1C" fillOpacity="0.12" />
                                <rect x="30" y="40" width="35" height="3" rx="1.5" fill="#B91C1C" fillOpacity="0.12" />
                                <circle cx="90" cy="35" r="8" stroke="#B91C1C" strokeWidth="1.5" strokeOpacity="0.25" />
                                <path d="M87 35l2 2 4-4" stroke="#B91C1C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" />
                                <path d="M15 55 L25 45 L35 50 L50 30 L65 40 L80 25 L95 35 L105 28" stroke="#B91C1C" strokeWidth="1" strokeOpacity="0.15" fill="none" />
                            </svg>
                        </div>
                        <h3>Build your first product with clarity and speed</h3>
                        <p>If you have an idea but feel blocked by the technical path, SaaS Sandhai gives you a practical workflow plus templates to move from concept to a working product.</p>
                        <ul className="aud-card__points">
                            {builderPoints.map((p, i) => (
                                <li key={i}><CheckIcon color="#B91C1C" /><span>{p}</span></li>
                            ))}
                        </ul>
                        <a href="https://app.saassandhai.com/login" target="_blank" rel="noopener noreferrer" className="btn btn--primary">Build Your First Product</a>
                    </div>

                    {/* Product Owners */}
                    <div className="aud-card aud-card--owners" id="for-owners">
                        <div className="aud-card__header">
                            <span className="aud-card__badge aud-card__badge--dark">For Product Owners</span>
                            <svg className="aud-card__illu" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="15" y="10" width="90" height="55" rx="6" stroke="#1F2937" strokeWidth="1.5" strokeOpacity="0.2" />
                                <rect x="25" y="22" width="50" height="6" rx="3" fill="#1F2937" fillOpacity="0.1" />
                                <rect x="25" y="34" width="35" height="4" rx="2" fill="#1F2937" fillOpacity="0.08" />
                                <rect x="25" y="42" width="42" height="4" rx="2" fill="#1F2937" fillOpacity="0.08" />
                                <circle cx="90" cy="30" r="12" stroke="#1F2937" strokeWidth="1.5" strokeOpacity="0.15" />
                                <path d="M86 30l3 3 5-6" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
                                <rect x="25" y="52" width="24" height="8" rx="4" fill="#1F2937" fillOpacity="0.08" />
                                <rect x="55" y="52" width="24" height="8" rx="4" fill="#1F2937" fillOpacity="0.08" />
                            </svg>
                        </div>
                        <h3>Publish your product and get discovered</h3>
                        <p>If your product is ready (or close), publishing is the fastest path to feedback, visibility, and early traction.</p>
                        <ul className="aud-card__points">
                            {ownerPoints.map((p, i) => (
                                <li key={i}><CheckIcon color="#1F2937" /><span>{p}</span></li>
                            ))}
                        </ul>
                        <a href="https://app.saassandhai.com/login" target="_blank" rel="noopener noreferrer" className="btn btn--outline-dark">Publish Your Product</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
