import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import BrandLogo from './BrandLogo'
import LanguageSwitcher from './LanguageSwitcher'
import AmbientButton from './AmbientButton'
import { paths } from '../../data/paths'

export default function Navbar({ t, language, setLanguage, soundOn, toggleSound }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const pages = [
    { label: t.home, path: paths.home },
    { label: t.exploreMap, path: paths.exploreMap },
    { label: t.timeline, path: paths.timeline },
    { label: t.stories, path: paths.stories }
  ]

  return (
    <header className={`site-header ${menuOpen ? 'menu-open' : ''}`}>
      <div className="nav-top">
        <BrandLogo />
        <nav className="desktop-nav" aria-label="Main navigation">
          {pages.map(page => <NavLink key={page.path} to={page.path}>{page.label}</NavLink>)}
        </nav>
        <div className="header-actions">
          <LanguageSwitcher language={language} setLanguage={setLanguage} />
          <AmbientButton t={t} playing={soundOn} onClick={toggleSound} />
          <NavLink to={paths.login} className="header-signin">{t.signIn}</NavLink>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? t.closeMenu : t.openMenu} aria-expanded={menuOpen} aria-controls="mobile-nav" onClick={() => setMenuOpen(value => !value)}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
      <div className="nav-bottom">
        <div className="compact-actions">
          <LanguageSwitcher language={language} setLanguage={setLanguage} variant="compact" />
          <AmbientButton t={t} playing={soundOn} onClick={toggleSound} />
        </div>
        <nav className="tablet-nav" aria-label="Tablet navigation">
          {pages.map(page => <NavLink key={page.path} to={page.path}>{page.label}</NavLink>)}
        </nav>
      </div>
      {menuOpen && (
        <nav id="mobile-nav" className="mobile-dropdown" aria-label="Mobile navigation">
          {pages.map(page => <NavLink key={page.path} to={page.path} onClick={() => setMenuOpen(false)}>{page.label}</NavLink>)}
          <NavLink to={paths.login} onClick={() => setMenuOpen(false)}>{t.signIn}</NavLink>
        </nav>
      )}
    </header>
  )
}
