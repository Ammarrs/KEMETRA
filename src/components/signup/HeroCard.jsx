import { Link } from 'react-router-dom'
import { paths } from '../../data/paths'

export default function HeroCard({ t }) {
  return (
    <section className="hero-card relative overflow-hidden" aria-label={t.nextChapter}>
      <div className="hero-picture">
        <img draggable={false} src="/images/karnak-original.jpg" alt="The columns of Karnak Temple in Luxor" />
      </div>
      <div className="hero-shade" />
      <div className="hero-copy">
        <p className="eyebrow hero-eyebrow">{t.nextChapter}</p>
        <h2 className="hero-desktop-title">{t.curiosity}<br />{t.discover}</h2>
        <h2 className="hero-tablet-title">{t.tabletHero}</h2>
        <p className="hero-description">{t.heroDescription}</p>
        <Link className="hero-annotation" to={paths.exploreMap} aria-label={`${t.location} — ${t.exploreMap}`}>
          <span>{t.location}</span>
          <img draggable={false} src="/images/map-pin.svg" alt="" aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
