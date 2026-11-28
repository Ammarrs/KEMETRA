export default function LanguageSwitcher({ language, setLanguage, variant = 'header' }) {
  const isHeader = variant === 'header'
  const englishLabel = variant === 'footer' ? 'English' : 'EN'
  const english = (
    <button type="button" lang="en" aria-pressed={language === 'en'} className={language === 'en' ? 'selected' : ''} onClick={() => setLanguage('en')}>
      {englishLabel}
    </button>
  )
  const arabic = (
    <button type="button" lang="ar" aria-pressed={language === 'ar'} className={language === 'ar' ? 'selected' : ''} onClick={() => setLanguage('ar')}>
      العربية
    </button>
  )

  return (
    <div className={`language-switch language-switch-${variant}`} role="group" aria-label="Language">
      {isHeader ? arabic : english}
      <span aria-hidden="true">/</span>
      {isHeader ? english : arabic}
    </div>
  )
}
