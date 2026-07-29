import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header className="wrap header">
      <nav className="nav" aria-label="Primary">
        <Link className="nav__brand" to="/" aria-label="Ana Pereira — Home">
          <img
            className="nav__logo"
            src="/AnaGiLogo.png"
            alt="Ana Pereira"
            width={64}
            height={64}
          />
        </Link>

        <ul id="site-menu" className={`nav__links${menuOpen ? ' nav__links--open' : ''}`}>
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li className="nav__links-cta">
            <Link className="btn btn--primary" to="/contact" onClick={() => setMenuOpen(false)}>
              Contact me
            </Link>
          </li>
        </ul>

        <Link className="btn btn--primary nav__cta-desktop" to="/contact">
          Contact me
        </Link>

        <button
          type="button"
          className={`nav__toggle${menuOpen ? ' nav__toggle--open' : ''}`}
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {menuOpen && (
        <button
          type="button"
          className="nav__backdrop"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div>
            <p className="footer__label">Contact</p>
            <p>
              <a href="mailto:ana.she.po@gmail.com">ana.she.po@gmail.com</a>
            </p>
            <p>Berlin, Germany</p>
          </div>
          <div>
            <p className="footer__label">Site</p>
            <div className="footer__links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
          <div>
            <p className="footer__label">Social</p>
            <div className="footer__links">
              <a href="https://github.com/AAnaPereiraa" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/anapaulasantospereira"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div>
            <p className="footer__label">Now</p>
            <p>Looking for junior developer roles.</p>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Ana Pereira</span>
          <span>Built with TypeScript</span>
        </div>
      </div>
    </footer>
  )
}
