import { useMemo, useState } from 'react'
import StatusAlert from './StatusAlert.jsx'

const initialForm = {
  fullName: '',
  email: '',
  age: '',
  phone: '',
  profile: '',
  password: '',
  confirmPassword: '',
  terms: false
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const namePattern = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ' -]{3,70}$/

function passwordScore(value) {
  let score = 0
  if (value.length >= 8) score += 1
  if (/[a-z]/.test(value)) score += 1
  if (/[A-Z]/.test(value)) score += 1
  if (/\d/.test(value)) score += 1
  if (/[^A-Za-z0-9]/.test(value)) score += 1
  return score
}

function validate(values) {
  const errors = {}
  const name = values.fullName.trim()
  if (!name) errors.fullName = 'El nombre es obligatorio.'
  else if (!namePattern.test(name) || name.split(/\s+/).length < 2) errors.fullName = 'Escribe al menos nombre y apellido usando letras.'

  if (!values.email.trim()) errors.email = 'El correo es obligatorio.'
  else if (!emailPattern.test(values.email.trim())) errors.email = 'Ingresa un correo válido.'

  const age = Number(values.age)
  if (!values.age) errors.age = 'La edad es obligatoria.'
  else if (!Number.isInteger(age) || age < 18 || age > 99) errors.age = 'La edad debe estar entre 18 y 99 años.'

  const phone = values.phone.replace(/[\s()+-]/g, '')
  if (!values.phone.trim()) errors.phone = 'El teléfono es obligatorio.'
  else if (!/^\d{7,15}$/.test(phone)) errors.phone = 'Usa entre 7 y 15 dígitos.'

  if (!['estudiante', 'docente', 'invitado'].includes(values.profile)) errors.profile = 'Selecciona un perfil.'

  if (passwordScore(values.password) < 3 || values.password.length < 8) errors.password = 'Usa 8+ caracteres, mayúscula, minúscula y número.'
  if (!values.confirmPassword) errors.confirmPassword = 'Confirma la contraseña.'
  else if (values.confirmPassword !== values.password) errors.confirmPassword = 'Las contraseñas no coinciden.'
  if (!values.terms) errors.terms = 'Debes aceptar los términos de la demostración.'
  return errors
}

export default function RegisterForm({ onRegistered }) {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState(null)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  const score = useMemo(() => passwordScore(form.password), [form.password])

  function handleChange(event) {
    const { name, value, type, checked } = event.target
    const next = { ...form, [name]: type === 'checkbox' ? checked : value }
    setForm(next)
    if (touched[name]) setErrors(validate(next))
    setStatus(null)
  }

  function handleBlur(event) {
    setTouched((current) => ({ ...current, [event.target.name]: true }))
    setErrors(validate(form))
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validate(form)
    setTouched(Object.fromEntries(Object.keys(initialForm).map((key) => [key, true])))
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length) {
      setStatus({ type: 'error', message: 'Revisa los campos marcados antes de crear la cuenta.' })
      return
    }

    const user = {
      name: form.fullName.trim(),
      email: form.email.trim().toLowerCase(),
      password: form.password,
      profile: form.profile
    }
    onRegistered(user)
    setStatus({ type: 'success', message: `Cuenta de demostración creada para ${user.name}. Ya puedes probar el inicio de sesión.` })
  }

  const fieldClass = (name) => `form-control form-control-lg ${touched[name] ? (errors[name] ? 'is-invalid' : 'is-valid') : ''}`
  const selectClass = (name) => `form-select form-select-lg ${touched[name] ? (errors[name] ? 'is-invalid' : 'is-valid') : ''}`

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="d-flex align-items-start justify-content-between gap-3 mb-4">
        <div><p className="form-kicker mb-1">PASO 01</p><h3 className="h4 fw-bold mb-1">Crear cuenta</h3><p className="form-subtitle mb-0">Completa los datos y observa las validaciones en tiempo real.</p></div>
        <span className="form-number">01</span>
      </div>

      <StatusAlert status={status} />

      <div className="row g-3">
        <div className="col-12">
          <label className="form-label" htmlFor="fullName">Nombre completo</label>
          <input id="fullName" name="fullName" className={fieldClass('fullName')} value={form.fullName} onChange={handleChange} onBlur={handleBlur} placeholder="Ej. Ricardo Landívar" autoComplete="name" required />
          {touched.fullName && errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
        </div>

        <div className="col-12">
          <label className="form-label" htmlFor="email">Correo electrónico</label>
          <input id="email" name="email" type="email" className={fieldClass('email')} value={form.email} onChange={handleChange} onBlur={handleBlur} placeholder="nombre@correo.com" autoComplete="email" required />
          {touched.email && errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        <div className="col-md-6">
          <label className="form-label" htmlFor="age">Edad</label>
          <input id="age" name="age" type="number" min="18" max="99" className={fieldClass('age')} value={form.age} onChange={handleChange} onBlur={handleBlur} placeholder="18" required />
          {touched.age && errors.age && <div className="invalid-feedback">{errors.age}</div>}
        </div>

        <div className="col-md-6">
          <label className="form-label" htmlFor="phone">Teléfono</label>
          <input id="phone" name="phone" type="tel" className={fieldClass('phone')} value={form.phone} onChange={handleChange} onBlur={handleBlur} placeholder="0991234567" autoComplete="tel" required />
          {touched.phone && errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
        </div>

        <div className="col-12">
          <label className="form-label" htmlFor="profile">Perfil</label>
          <select id="profile" name="profile" className={selectClass('profile')} value={form.profile} onChange={handleChange} onBlur={handleBlur} required>
            <option value="">Selecciona una opción</option>
            <option value="estudiante">Estudiante</option>
            <option value="docente">Docente</option>
            <option value="invitado">Invitado</option>
          </select>
          {touched.profile && errors.profile && <div className="invalid-feedback">{errors.profile}</div>}
        </div>

        <div className="col-md-6">
          <label className="form-label" htmlFor="password">Contraseña</label>
          <div className="input-group has-validation">
            <input id="password" name="password" type={showPassword ? 'text' : 'password'} className={fieldClass('password')} value={form.password} onChange={handleChange} onBlur={handleBlur} placeholder="Mínimo 8 caracteres" autoComplete="new-password" required />
            <button className="btn btn-outline-secondary" type="button" onClick={() => setShowPassword((value) => !value)}>{showPassword ? 'Ocultar' : 'Ver'}</button>
            {touched.password && errors.password && <div className="invalid-feedback">{errors.password}</div>}
          </div>
          <div className="password-meter mt-2"><span style={{ width: `${score * 20}%` }} className={`score-${score}`} /></div>
        </div>

        <div className="col-md-6">
          <label className="form-label" htmlFor="confirmPassword">Confirmar contraseña</label>
          <div className="input-group has-validation">
            <input id="confirmPassword" name="confirmPassword" type={showConfirm ? 'text' : 'password'} className={fieldClass('confirmPassword')} value={form.confirmPassword} onChange={handleChange} onBlur={handleBlur} placeholder="Repite la contraseña" autoComplete="new-password" required />
            <button className="btn btn-outline-secondary" type="button" onClick={() => setShowConfirm((value) => !value)}>{showConfirm ? 'Ocultar' : 'Ver'}</button>
            {touched.confirmPassword && errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
          </div>
        </div>

        <div className="col-12">
          <div className={`form-check ${touched.terms && errors.terms ? 'is-invalid' : ''}`}>
            <input id="terms" name="terms" type="checkbox" className="form-check-input" checked={form.terms} onChange={handleChange} onBlur={handleBlur} />
            <label className="form-check-label" htmlFor="terms">Acepto los términos de esta demostración académica.</label>
          </div>
          {touched.terms && errors.terms && <div className="text-danger small mt-1">{errors.terms}</div>}
        </div>
      </div>

      <button className="btn btn-primary btn-lg w-100 rounded-pill mt-4" type="submit">Crear cuenta <span aria-hidden="true">→</span></button>
      <p className="demo-caption mt-3 mb-0">La cuenta se conserva únicamente mientras la aplicación permanece abierta. No existe autenticación real ni backend.</p>
    </form>
  )
}
