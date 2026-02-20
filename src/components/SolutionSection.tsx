import { useScrollReveal } from '../hooks'
import './SolutionSection.css'

const steps = [
    {
        num: 1,
        title: 'Learn',
        desc: 'A guided, practical workflow designed to help you build like a product maker — not like a student.',
        icon: 'M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25',
    },
    {
        num: 2,
        title: 'Build',
        desc: 'Start from templates and proven structures so you don\'t build from a blank screen.',
        icon: 'M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085',
    },
    {
        num: 3,
        title: 'Publish',
        desc: 'Launch your product through a deal-style marketplace listing designed for discovery, early traction, and feedback.',
        icon: 'M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 0 1-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z',
    },
    {
        num: 4,
        title: 'Earn',
        desc: 'Convert your published product into real revenue through SaaS Sandhai\'s buyer community and deal-style discovery feed.',
        icon: 'M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
        goal: true,
    },
]

export default function SolutionSection() {
    const ref = useScrollReveal<HTMLElement>()

    return (
        <section className="solution" id="how-it-works" ref={ref}>
            <div className="container">
                <h2 className="section-title section-title--center reveal-up">A simple workflow: Learn, Build, Publish, Earn</h2>

                <div className="solution__steps reveal-up">
                    {/* Connecting line — solid stroke, no gradient */}
                    <svg className="solution__connector" viewBox="0 0 100 8" preserveAspectRatio="none">
                        <line x1="0" y1="4" x2="100" y2="4" stroke="#B91C1C" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="4 3" className="solution__connector-line" />
                        {/* Animated traveling dot */}
                        <circle r="3" fill="#B91C1C" className="solution__connector-dot">
                            <animateMotion dur="3s" repeatCount="indefinite" path="M0,4 L100,4" />
                        </circle>
                    </svg>

                    {steps.map((s, i) => (
                        <div key={i} className={`step-card${s.goal ? ' step-card--goal' : ''}`} style={{ animationDelay: `${i * 0.2}s` }}>
                            <div className="step-card__number">{s.num}</div>
                            <div className="step-card__icon-wrap">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="28" height="28">
                                    <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                                </svg>
                            </div>
                            <h3>{s.title}</h3>
                            <p>{s.desc}</p>
                        </div>
                    ))}
                </div>

                <p className="solution__closing reveal-up">One ecosystem. Four steps. From idea to income — without starting from scratch.</p>
            </div>
        </section>
    )
}
