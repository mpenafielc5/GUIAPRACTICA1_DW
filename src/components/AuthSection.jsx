import { useState } from 'react'
import RegisterForm from './RegisterForm.jsx'
import LoginForm from './LoginForm.jsx'

export default function AuthSection() {
  const [activeTab, setActiveTab] = useState('register')
  const [registeredUser, setRegisteredUser] = useState(null)

  function handleRegistered(user) {
    setRegisteredUser(user)
    window.setTimeout(() => setActiveTab('login'), 700)
  }

  return (
    <section id="formulario" className="section-space form-section">
      <div className="container">
        <div className="row g-4 g-xl-5 align-items-stretch">
          <div className="col-lg-5">
            <aside className="form-info-panel h-100">
              <p className="eyebrow">FORMULARIO INTEGRADO</p>
              <h2 className="display-6 fw-bold">La práctica 1, ahora controlada por React.</h2>
              <p className="section-copy">El formulario mantiene los campos y validaciones esenciales de la guía anterior, pero los datos se gestionan con <code>useState</code> y cada interacción actualiza la interfaz sin manipular manualmente el DOM.</p>

              <div className="requirement-stack mt-4">
                <div><span>01</span><p><strong>Estado</strong><br/>Cada campo se enlaza con el estado del componente.</p></div>
                <div><span>02</span><p><strong>Eventos</strong><br/><code>onChange</code>, <code>onBlur</code> y <code>onSubmit</code> controlan la interacción.</p></div>
                <div><span>03</span><p><strong>Bootstrap</strong><br/>Grid, forms, alerts y botones construyen una interfaz adaptable.</p></div>
              </div>

              <div className="code-note mt-4">
                <span className="dot" />
                <code>const [form, setForm] = useState(...)</code>
              </div>
            </aside>
          </div>

          <div className="col-lg-7">
            <div className="auth-card h-100">
              <div className="nav nav-pills auth-tabs mb-4" role="tablist" aria-label="Cambiar formulario">
                <button type="button" className={`nav-link flex-fill ${activeTab === 'register' ? 'active' : ''}`} onClick={() => setActiveTab('register')} aria-selected={activeTab === 'register'}>Registro</button>
                <button type="button" className={`nav-link flex-fill ${activeTab === 'login' ? 'active' : ''}`} onClick={() => setActiveTab('login')} aria-selected={activeTab === 'login'}>Iniciar sesión</button>
              </div>

              {activeTab === 'register'
                ? <RegisterForm onRegistered={handleRegistered} />
                : <LoginForm registeredUser={registeredUser} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
