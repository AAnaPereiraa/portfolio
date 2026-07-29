import { Link, NavLink } from 'react-router-dom'

export function Header() {
  return (
    <header className="wrap">
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
        <ul className="nav__links">
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
        </ul>
        <Link className="btn btn--primary" to="/contact">
          Work with me
        </Link>
      </nav>
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
              <a href="https://github.com/s2-AnaPereira-s2" target="_blank" rel="noreferrer">
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
