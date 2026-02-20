import { useEffect, useRef, useState, type RefObject } from 'react'

export function useScrollReveal<T extends HTMLElement>(): RefObject<T | null> {
    const ref = useRef<T>(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('revealed')
                    observer.unobserve(el)
                }
            },
            { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return ref
}

export function useCountUp(end: number, duration: number = 2000, startOnView: boolean = true) {
    const [count, setCount] = useState(0)
    const [started, setStarted] = useState(!startOnView)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!startOnView) return
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStarted(true)
                    observer.unobserve(el)
                }
            },
            { threshold: 0.5 }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [startOnView])

    useEffect(() => {
        if (!started) return
        let startTime: number
        let animationFrame: number

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * end))

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate)
            }
        }

        animationFrame = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(animationFrame)
    }, [started, end, duration])

    return { count, ref }
}

export function useNavbarScroll() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return scrolled
}
