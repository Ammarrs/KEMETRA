import HeroCard from './HeroCard'

export default function AuthLayout({ t, children }) {
  return (
    <main className="auth-main">
      <div className="auth-layout w-full">
        <HeroCard t={t} />
        {children}
      </div>
    </main>
  )
}
