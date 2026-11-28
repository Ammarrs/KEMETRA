import { Link } from 'react-router-dom'
import BrandLogo from './BrandLogo'
import LanguageSwitcher from './LanguageSwitcher'
import { paths } from '../../data/paths'

export default function Footer({ t, language, setLanguage }) {
  const explore = [
    { label: t.home, path: paths.home },
    { label: t.exploreMap, path: paths.exploreMap },
    { label: t.timeline, path: paths.timeline },
    { label: t.stories, path: paths.stories }
  ]
  const heritage = [
    { label: t.pharaonic, path: paths.pharaonic },
    { label: t.coptic, path: paths.coptic },
    { label: t.islamic, path: paths.islamic },
    { label: t.about, path: paths.about }
  ]

  return (
    <footer className="site-footer w-full">
      <div className="footer-content">
        <div className="footer-brand">
          <BrandLogo />
          <p>{t.mission}</p>
          <p className="eyebrow">{t.slogan}</p>
        </div>
        <div className="footer-directories">
          <div className="footer-list">
            <h2 className="eyebrow">{t.explore}</h2>
            {explore.map(page => <Link to={page.path} key={page.label}>{page.label}</Link>)}
          </div>
          <div className="footer-list">
            <h2 className="eyebrow">{t.heritage}</h2>
            {heritage.map(page => <Link to={page.path} key={page.label}>{page.label}</Link>)}
          </div>
        </div>
        <div className="footer-social">
          <h2 className="eyebrow">{t.stayConnected}</h2>
          <Link to={paths.contact}>{t.contact}</Link>
          <LanguageSwitcher language={language} setLanguage={setLanguage} variant="footer" />
          <p className="social-details">{t.social}<br />{t.socialSoon}</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{t.copyright}</p>
        <p>{t.attribution}</p>
      </div>
    </footer>
  )
}
