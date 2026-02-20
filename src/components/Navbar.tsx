import { useState } from 'react'
import { useNavbarScroll } from '../hooks'
import './Navbar.css'

export default function Navbar() {
    const scrolled = useNavbarScroll()
    const [menuOpen, setMenuOpen] = useState(false)

    const handleClick = () => {
        setMenuOpen(false)
    }

    return (
        <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
            <div className="container navbar__inner">
                <a href="#" className="navbar__brand">
                    SaaS <span>Sandhai</span>
                </a>

                <div className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}>
                    <a href="#how-it-works" onClick={handleClick}>How it works</a>
                    <a href="#for-builders" onClick={handleClick}>For Builders</a>
                    <a href="#for-owners" onClick={handleClick}>For Product Owners</a>
                    <a href="#marketplace" onClick={handleClick}>Marketplace</a>
                    <a href="#faq" onClick={handleClick}>FAQ</a>
                </div>

                <div className="navbar__actions">
                    <a href="https://app.saassandhai.com/login" target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--sm">Get Started</a>
                    <button
                        className={`hamburger${menuOpen ? ' hamburger--active' : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span /><span /><span />
                    </button>
                </div>
            </div>
        </nav>
    )
}
