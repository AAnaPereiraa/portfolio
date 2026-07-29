import { motion } from 'framer-motion'

export function ContactPage() {
  return (
    <main>
      <section className="page-hero wrap">
        <p className="section__eyebrow">Contact</p>
        <h1 className="page-hero__title">
          Let&apos;s <em>talk</em>
        </h1>
      </section>

      <section className="section section--tight-top">
        <div className="wrap contact-page">
          <motion.div
            className="contact-card"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <p className="contact-card__label">Email</p>
            <a className="contact-card__value" href="mailto:ana.she.po@gmail.com">
              ana.she.po@gmail.com
            </a>
            <a className="btn btn--magenta" href="mailto:ana.she.po@gmail.com">
              Send an email
            </a>
          </motion.div>

          <motion.div
            className="contact-card"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.45 }}
          >
            <p className="contact-card__label">Based in</p>
            <p className="contact-card__value">Berlin, Germany</p>
            <p className="contact-card__note">Available to work.</p>
          </motion.div>

          <motion.div
            className="contact-card"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.45 }}
          >
            <p className="contact-card__label">Social</p>
            <div className="contact-card__links">
              <a
                href="https://github.com/s2-AnaPereira-s2"
                target="_blank"
                rel="noreferrer"
              >
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
          </motion.div>
        </div>
      </section>
    </main>
  )
}
