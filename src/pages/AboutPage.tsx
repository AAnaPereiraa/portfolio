import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { capabilities } from '../data/projects'

const stack = [
  'Python',
  'Django',
  'C',
  'C++',
  'SQL',
  'Kotlin',
  'TypeScript',
  'Git',
]

export function AboutPage() {
  return (
    <main>
      <section className="page-hero wrap">
        <p className="section__eyebrow">About</p>
        <h1 className="page-hero__title">
          Who I am &amp; how I <em>work</em>
        </h1>
        <p className="page-hero__lead">
          Career switcher in Berlin — Python Backend, Software engineer at 42 Berlin (in
          progress), and Android / Kotlin at DevSpace. Open to junior roles across software.
        </p>
      </section>

      <section id="who" className="section section--tight-top">
        <div className="wrap about">
          <div>
            <p className="section__eyebrow">Who am I?</p>
            <h2 className="section__title">
              A career switcher who <em>ships</em>
            </h2>
            <div className="about__copy">
              <p>
                I&apos;m Ana — based in Berlin. I completed a one-year Python Backend course
                (Django, Flask, SQL, APIs), I&apos;m a Software engineer in progress at 42
                Berlin, and I&apos;m learning Android / Kotlin at DevSpace.
              </p>
              <p>
                I care about solid fundamentals, products people can use, and growing into any
                junior role where I can keep shipping. Seasons of Floripa — our 42 Transcendence
                MVP — is where I led Social &amp; Profiles on a live multiplayer game.
              </p>
            </div>
          </div>
          <aside className="about__panel">
            <h3>Programming</h3>
            <ul>
              {stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section id="focus" className="section section--soft">
        <div className="wrap">
          <div className="section__head">
            <p className="section__eyebrow">Focus</p>
            <h2 className="section__title">
              Capabilities I bring to <em>the team</em>
            </h2>
            <p className="section__lead">
              Not a consultancy pitch — a clear map of how I contribute as I grow into backend
              and fullstack roles.
            </p>
          </div>
          <div className="cap-grid">
            {capabilities.map((item, index) => (
              <motion.article
                key={item.num}
                className="cap"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
              >
                <p className="cap__num">{item.num}</p>
                <h3 className="cap__title">{item.title}</h3>
                <p className="cap__body">{item.body}</p>
              </motion.article>
            ))}
          </div>

          <div className="page-footer-cta">
            <p>See the work, or get in touch.</p>
            <div className="hero__cta">
              <Link className="btn btn--ghost" to="/projects">
                Projects
              </Link>
              <Link className="btn btn--ghost" to="/contact">
                Contact
              </Link>
              <a
                className="btn btn--magenta"
                href="/Ana-Pereira-CV.pdf"
                download="Ana-Pereira-CV.pdf"
              >
                My CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
