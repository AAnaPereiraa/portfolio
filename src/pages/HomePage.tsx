import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { marqueeSkills } from '../data/projects'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export function HomePage() {
  const marqueeItems = [...marqueeSkills, ...marqueeSkills]

  return (
    <main>
      <div className="home-viewport">
        <section className="hero wrap">
          <motion.p
            className="hero__brand"
            initial="hidden"
            animate="show"
            custom={0}
            variants={fadeUp}
          >
            Ana Pereira
          </motion.p>
          <motion.h1
            className="hero__title"
            initial="hidden"
            animate="show"
            custom={1}
            variants={fadeUp}
          >
            Discover <em>the next stage</em> of a developer&apos;s story
          </motion.h1>
          <motion.p
            className="hero__lead"
            initial="hidden"
            animate="show"
            custom={2}
            variants={fadeUp}
          >
            Junior Developer based in Berlin — Python Backend, Software engineer at 42
            Berlin (in progress), also learning Android / Kotlin at DevSpace. Open to any junior
            role where I can keep shipping.
          </motion.p>
          <motion.div
            className="hero__cta"
            initial="hidden"
            animate="show"
            custom={3}
            variants={fadeUp}
          >
            <Link className="btn btn--magenta" to="/projects">
              View projects
            </Link>
            <Link className="btn btn--ghost" to="/about">
              About me
            </Link>
          </motion.div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="marquee__track">
            {marqueeItems.map((skill, i) => (
              <span key={`${skill}-${i}`}>{skill}</span>
            ))}
          </div>
        </div>
      </div>

      <section className="cta-band">
        <h2>Ready for the next breakthrough?</h2>
        <Link className="btn btn--primary" to="/contact">
          Get in touch
        </Link>
      </section>
    </main>
  )
}
