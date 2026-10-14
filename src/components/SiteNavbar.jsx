export default function SiteNavbar({ theme, onToggleTheme }) {
  const isDark = theme === 'dark'

  return (
    <header className="sticky-top site-header">
      <nav className="navbar navbar-expand-lg container py-3" aria-label="Navegación principal">
        <a className="navbar-brand brand" href="#inicio">FormLab<span>.</span></a>

        <div className="d-flex align-items-center gap-2 order-lg-3">
          <button
            className="theme-toggle"
            type="button"
            onClick={onToggleTheme}
            aria-pressed={isDark}
            aria-label={isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
          >
            <span aria-hidden="true">☀</span>
            <span className="theme-track"><span className="theme-thumb" /></span>
            <span aria-hidden="true">☾</span>
          </button>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Mostrar navegación">
            <span className="navbar-toggler-icon" />
          </button>
        </div>

        <div className="collapse navbar-collapse order-lg-2" id="mainNav">
          <ul className="navbar-nav ms-lg-auto me-lg-3 mt-3 mt-lg-0 gap-lg-1">
            <li className="nav-item"><a className="nav-link" href="#inicio">Inicio</a></li>
            <li className="nav-item"><a className="nav-link" href="#caracteristicas">Características</a></li>
            <li className="nav-item"><a className="nav-link" href="#formulario">Formulario</a></li>
            <li className="nav-item"><a className="nav-link" href="#equipo">Equipo</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
