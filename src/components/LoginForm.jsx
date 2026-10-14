import { useState } from 'react'
import StatusAlert from './StatusAlert.jsx'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export default function LoginForm({ registeredUser }) {
  const [form, setForm] = useState({ email: registeredUser?.email ?? '', password: '', remember: false })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)
  const [showPassword, setShowPassword] = useState(false)

  function handleChange(event) {
    const { name, value, type, checked } = event.target
    setForm((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }))
    setStatus(null)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = {}
    if (!emailPattern.test(form.email.trim())) nextErrors.email = 'Ingresa un correo válido.'
    if (form.password.length < 8) nextErrors.password = 'La contraseña debe tener mínimo 8 caracteres.'
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length) {
      setStatus({ type: 'error', message: 'Completa correctamente el correo y la contraseña.' })
      return
    }

    if (!registeredUser) {
      setStatus({ type: 'error', message: 'Primero crea una cuenta en la pestaña Registro para probar el inicio de sesión.' })
      return
    }

    const matches = form.email.trim().toLowerCase() === registeredUser.email && form.password === registeredUser.password
    if (!matches) {
      setStatus({ type: 'error', message: 'El correo o la contraseña no coinciden con la cuenta registrada.' })
      return
    }

    setStatus({ type: 'success', message: `Inicio de sesión correcto. Bienvenido/a, ${registeredUser.name}.` })
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="d-flex align-items-start justify-content-between gap-3 mb-4">
        <div><p className="form-kicker mb-1">PASO 02</p><h3 className="h4 fw-bold mb-1">Iniciar sesión</h3><p className="form-subtitle mb-0">Utiliza la cuenta creada durante esta misma sesión.</p></div>
        <span className="form-number">02</span>
      </div>

      <StatusAlert status={status} />

      <div className="mb-3">
        <label className="form-label" htmlFor="loginEmail">Correo electrónico</label>
        <input id="loginEmail" name="email" type="email" className={`form-control form-control-lg ${errors.email ? 'is-invalid' : ''}`} value={form.email} onChange={handleChange} placeholder="nombre@correo.com" autoComplete="email" />
        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="loginPassword">Contraseña</label>
        <div className="input-group has-validation">
          <input id="loginPassword" name="password" type={showPassword ? 'text' : 'password'} className={`form-control form-control-lg ${errors.password ? 'is-invalid' : ''}`} value={form.password} onChange={handleChange} placeholder="Tu contraseña" autoComplete="current-password" />
          <button className="btn btn-outline-secondary" type="button" onClick={() => setShowPassword((value) => !value)}>{showPassword ? 'Ocultar' : 'Ver'}</button>
          {errors.password && <div className="invalid-feedback">{errors.password}</div>}
        </div>
      </div>

      <div className="form-check mb-4">
        <input id="remember" name="remember" type="checkbox" className="form-check-input" checked={form.remember} onChange={handleChange} />
        <label className="form-check-label" htmlFor="remember">Recordar esta selección durante la sesión</label>
      </div>

      <button className="btn btn-primary btn-lg w-100 rounded-pill" type="submit">Iniciar sesión</button>
      <p className="demo-caption mt-3 mb-0">Demostración front-end. Los datos no se envían a un servidor.</p>
    </form>
  )
}
