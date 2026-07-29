import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

export function ProjectsPage() {
  return (
    <main>
      <section className="page-hero wrap">
        <p className="section__eyebrow">Selected work</p>
        <h1 className="page-hero__title">
          Featured <em>projects</em>
        </h1>
        <p className="page-hero__lead">
          Live multiplayer first — then backend and mobile builds that show how I learn and
          ship.
        </p>
      </section>

      <section className="section section--soft section--tight-top">
        <div className="wrap">
          <div className="project-grid">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                className={`project-tile${project.featured ? ' project-tile--featured' : ''}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: index * 0.05, duration: 0.45 }}
              >
                <div className="project-tile__tags">
                  {project.stack.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <h2 className="project-tile__title">{project.title}</h2>
                <p className="project-tile__meta">{project.tagline}</p>
                <p className="project-tile__desc">{project.description}</p>
                <div className="project-tile__actions">
                  {project.liveUrl && (
                    <a
                      className="btn btn--magenta"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live
                    </a>
                  )}
                  <a
                    className="btn btn--ghost"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="page-footer-cta">
            <p>Want to talk about a role or collaboration?</p>
            <Link className="btn btn--primary" to="/contact">
              Go to contact
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
