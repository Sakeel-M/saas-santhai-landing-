import { useScrollReveal } from '../hooks'
import './TrustStrip.css'

const audiences = ['Indie founders', 'First-time builders', 'Small teams', 'Solo makers']

export default function TrustStrip() {
    const ref = useScrollReveal<HTMLElement>()

    return (
        <section className="trust" ref={ref}>
            <div className="container">
                <p className="trust__label">Built for</p>
                <div className="trust__tags">
                    {audiences.map((a) => (
                        <span key={a} className="trust__tag">
                            <span className="trust__dot" />
                            {a}
                        </span>
                    ))}
                </div>
                <p className="trust__note">Designed to reduce build friction and increase launch visibility.</p>
            </div>
        </section>
    )
}
