import { useState } from 'react'

export default function FormField({ label, id, name, type = 'text', placeholder, value, onChange, help, error, t, autoComplete }) {
  const [isVisible, setIsVisible] = useState(false)
  const isPassword = type === 'password'
  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>
      <div className={`field-box ${error ? 'field-error' : ''}`}>
        <input
          id={id}
          name={name}
          type={isPassword && isVisible ? 'text' : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : help ? `${id}-help` : undefined}
          required
        />
        {isPassword && (
          <button type="button" className="password-toggle" onClick={() => setIsVisible(v => !v)} aria-label={`${isVisible ? t.hide : t.show} ${label.toLowerCase()}`}>
            {isVisible ? t.hide : t.show}
          </button>
        )}
      </div>
      {help && <p className="field-help" id={`${id}-help`}>{help}</p>}
      {error && <p className="field-error-message" id={`${id}-error`} role="alert">{error}</p>}
    </div>
  )
}
