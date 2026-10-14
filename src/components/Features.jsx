const features = [
  {
    icon: '⚛',
    title: 'Componentes React',
    text: 'Navbar, Hero, características, formulario, equipo y footer separados en componentes funcionales reutilizables.'
  },
  {
    icon: '▦',
    title: 'Bootstrap responsive',
    text: 'Grid, utilidades, botones, cards, formularios y navegación Bootstrap adaptados a móvil, tablet y escritorio.'
  },
  {
    icon: '✓',
    title: 'Validación dinámica',
    text: 'useState controla los datos, los eventos actualizan el formulario y los mensajes explican errores o confirman el envío.'
  }
]

export default function Features() {
  return (
    <section id="caracteristicas" className="section-space">
      <div className="container">
        <div className="section-heading text-center mx-auto mb-5">
          <p className="eyebrow">REACT + CSS FRAMEWORK</p>
          <h2 className="display-6 fw-bold">Una landing construida por componentes</h2>
          <p className="section-copy">La estructura conserva la lógica del formulario de la práctica 1, pero ahora utiliza JSX, estado de React y clases de Bootstrap.</p>
        </div>
        <div className="row g-4">
          {features.map((feature, index) => (
            <div className="col-md-6 col-lg-4" key={feature.title}>
              <article className="card feature-card h-100 border-0">
                <div className="card-body p-4 p-xl-5">
                  <div className="feature-icon mb-4"><span>{feature.icon}</span><small>0{index + 1}</small></div>
                  <h3 className="h4 fw-bold">{feature.title}</h3>
                  <p className="mb-0 text-secondary-emphasis">{feature.text}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
