import { useState } from 'react'
import { Link } from 'react-router-dom'
import { paths } from '../data/paths'
import AuthLayout from '../components/signup/AuthLayout'
import FormField from '../components/signup/FormField'
import { isAuthConnected, registerAccount } from '../services/auth'

export default function SignUpForm({ t }) {
  const [form, setForm] = useState({ fullName: '', email: '', password: '', confirmPassword: '', updates: false })
  const [errors, setErrors] = useState({})
  const [notice, setNotice] = useState('')
  const [loading, setLoading] = useState(false)

  function update(event) {
    const { name, value, type, checked } = event.target
    setForm(previous => ({ ...previous, [name]: type === 'checkbox' ? checked : value }))
    setErrors(previous => ({ ...previous, [name]: undefined }))
    setNotice('')
  }

  async function submit(event) {
    event.preventDefault()
    const nextErrors = {}
    if (!form.fullName.trim()) nextErrors.fullName = t.errorName
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) nextErrors.email = t.errorEmail
    if (form.password.length < 12) nextErrors.password = t.errorPassword
    if (form.password !== form.confirmPassword) nextErrors.confirmPassword = t.errorConfirm
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return
    if (!isAuthConnected) {
      setNotice(t.notConnected)
      return
    }
    setLoading(true)
    try {
      await registerAccount({ name: form.fullName.trim(), email: form.email.trim(), password: form.password, subscribeToStories: form.updates })
      setNotice(t.requestSucceeded)
    } catch (error) {
      setNotice(error.response?.data?.message || t.requestFailed)
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthLayout t={t}>
      <section className="auth-form w-full" aria-labelledby="signup-heading">
        <div className="form-intro">
          <p className="intro-label">{t.collection}</p>
          <h1 id="signup-heading">{t.signupHeading}</h1>
          <p>{t.signupDescription}</p>
        </div>
        <form onSubmit={submit} noValidate>
          <div className="form-fields">
            <FormField id="name" name="fullName" label={t.name} placeholder={t.namePlaceholder} value={form.fullName} onChange={update} error={errors.fullName} t={t} autoComplete="name" />
            <FormField id="email" name="email" type="email" label={t.email} placeholder={t.emailPlaceholder} value={form.email} onChange={update} help={t.emailTip} error={errors.email} t={t} autoComplete="email" />
            <FormField id="password" name="password" type="password" label={t.password} placeholder={t.passwordPlaceholder} value={form.password} onChange={update} help={t.passwordTip} error={errors.password} t={t} autoComplete="new-password" />
            <FormField id="confirm" name="confirmPassword" type="password" label={t.confirmPassword} placeholder={t.confirmPlaceholder} value={form.confirmPassword} onChange={update} error={errors.confirmPassword} t={t} autoComplete="new-password" />
          </div>
          <label className="updates-option">
            <input type="checkbox" name="updates" checked={form.updates} onChange={update} />
            <span>{t.updates}</span>
          </label>
          <button type="submit" className="primary-button" disabled={loading}>{loading ? t.submitting : t.createAccount}</button>
          <div className="existing-account">
            <p>{t.already}</p>
            <Link className="outline-button" to={paths.login}>{t.signIn}</Link>
          </div>
          <p className="form-reassurance">{t.reassurance}</p>
          {notice && <p className="form-notice" role="status">{notice}</p>}
        </form>
      </section>
    </AuthLayout>
  )
}
