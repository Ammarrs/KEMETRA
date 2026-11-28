import { Link } from 'react-router-dom'

export default function BrandLogo() {
  return (
    <Link to="/" className="brand-logo" aria-label="KEMETRA Home">
      <img draggable={false} src="/images/kemetra-identity.svg" alt="KEMETRA" className="brand-lockup" />
    </Link>
  )
}
