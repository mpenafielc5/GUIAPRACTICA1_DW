export default function Hero() {
  return (
    <section id="inicio" className="hero-section position-relative overflow-hidden">
      <div className="container py-5 py-lg-6">
        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            <p className="eyebrow mb-3">DESARROLLO WEB · PRÁCTICA EXPERIMENTAL 2</p>
            <h1 className="display-3 fw-bold hero-title mb-4">Formularios modernos con <span>React + Bootstrap.</span></h1>
            <p className="lead hero-copy mb-4">La evolución de FormLab: una landing page responsive organizada en componentes, con formularios controlados por estado, eventos y validaciones dinámicas.</p>
            <div className="d-flex flex-column flex-sm-row gap-3 mb-4">
              <a className="btn btn-primary btn-lg rounded-pill px-4" href="#formulario">Probar formulario</a>
              <a className="btn btn-outline-secondary btn-lg rounded-pill px-4" href="#caracteristicas">Ver funcionalidades</a>
            </div>
            <div className="d-flex flex-wrap gap-2" aria-label="Tecnologías utilizadas">
              {['React', 'Bootstrap', 'JSX', 'useState', 'Eventos'].map((item) => <span key={item} className="tech-pill">{item}</span>)}
            </div>
          </div>

          <div className="col-lg-5">
            <div className="hero-visual-card mx-auto" aria-hidden="true">
              <div className="visual-window">
                <div className="visual-window-bar"><span/><span/><span/></div>
                <div className="visual-code-line long" />
                <div className="visual-code-line medium" />
                <div className="visual-form-grid">
                  <div /><div /><div className="wide" /><div className="button-mock" />
                </div>
              </div>
              <div className="floating-badge badge-react">⚛ React</div>
              <div className="floating-badge badge-bootstrap">B Bootstrap</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
