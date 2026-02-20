import { useScrollReveal } from '../hooks'
import './Marketplace.css'

const benefits = [
    {
        title: 'Clear Positioning',
        desc: 'Listings optimized for clear positioning so buyers understand value instantly.',
        icon: 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12',
    },
    {
        title: 'Deal-Style Format',
        desc: 'Deal-style presentation designed to increase attention and conversion.',
        icon: 'M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z',
    },
    {
        title: 'Built-In Discovery',
        desc: 'Built-in discovery mechanisms for early traction without paid marketing.',
        icon: 'M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941',
    },
    {
        title: 'Perfect for Micro Tools',
        desc: 'Strong fit for micro tools, utilities, and SaaS products of all kinds.',
        icon: 'M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25',
    },
]

export default function Marketplace() {
    const ref = useScrollReveal<HTMLElement>()

    return (
        <section className="marketplace" id="marketplace" ref={ref}>
            <div className="container">
                <div className="marketplace__header reveal-up">
                    <h2 className="section-title">A marketplace built for micro products</h2>
                    <p className="section-body">SaaS Sandhai is designed to make small products easier to find, easier to evaluate, and easier to try. Your listing is structured for clarity — what it does, who it's for, what problem it solves — so buyers can decide quickly.</p>
                </div>

                <div className="marketplace__grid reveal-up">
                    {benefits.map((b, i) => (
                        <div key={i} className="m-card" style={{ animationDelay: `${i * 0.1}s` }}>
                            <div className="m-card__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" width="24" height="24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d={b.icon} />
                                </svg>
                            </div>
                            <h4>{b.title}</h4>
                            <p>{b.desc}</p>
                            {/* Mini decorative SVG */}
                            <svg className="m-card__deco" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d={`M0 35 Q ${20 + i * 5} ${10 - i * 2} 40 ${20 + i * 3} T 80 ${15 - i * 2}`} stroke="#B91C1C" strokeWidth="1" strokeOpacity="0.08" fill="none" />
                            </svg>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
