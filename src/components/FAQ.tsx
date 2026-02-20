import { useState } from 'react'
import { useScrollReveal } from '../hooks'
import './FAQ.css'

const faqs = [
    { q: 'Is this for beginners?', a: 'Yes. The workflow is designed to reduce overwhelm and help you ship a working product faster.' },
    { q: 'Can I publish if I already have a product?', a: 'Yes. You can publish directly and focus on discovery and traction.' },
    { q: 'What kind of products fit best?', a: 'Micro SaaS, AI tools, small utilities, productivity tools, and niche solutions.' },
    { q: 'How long does it take to get listed?', a: 'Your listing can be created quickly once your product details are ready.' },
    { q: 'Do you provide templates?', a: 'Yes. Templates and structured workflows are part of the system to help you move faster.' },
]

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)
    const ref = useScrollReveal<HTMLElement>()

    return (
        <section className="faq section-alt" id="faq" ref={ref}>
            <div className="container">
                <h2 className="section-title section-title--center reveal-up">Frequently asked questions</h2>

                <div className="faq__list reveal-up">
                    {faqs.map((f, i) => (
                        <div key={i} className={`faq__item${openIndex === i ? ' faq__item--active' : ''}`}>
                            <button
                                className="faq__question"
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                aria-expanded={openIndex === i}
                            >
                                <span>{f.q}</span>
                                <svg className="faq__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            <div className="faq__answer" style={{ maxHeight: openIndex === i ? '200px' : '0' }}>
                                <div className="faq__answer-inner">{f.a}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
