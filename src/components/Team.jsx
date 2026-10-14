const members = [
  'Miguel Peñafiel',
  'Ricardo Landívar',
  'Mariana Reyes',
  'Carlos Llivisupa',
  'Jackson Reyes'
]

export default function Team() {
  return (
    <section id="equipo" className="section-space">
      <div className="container">
        <div className="team-panel">
          <div className="row align-items-center g-4">
            <div className="col-lg-5">
              <p className="eyebrow mb-2">EQUIPO DE TRABAJO</p>
              <h2 className="h1 fw-bold mb-3">Práctica experimental 2</h2>
              <p className="section-copy mb-0">Proyecto académico de Desarrollo Web enfocado en frameworks, componentes y diseño responsive.</p>
            </div>
            <div className="col-lg-7">
              <div className="row g-3">
                {members.map((member, index) => (
                  <div className="col-sm-6" key={member}>
                    <div className="team-member"><span>{String(index + 1).padStart(2, '0')}</span><strong>{member}</strong></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
