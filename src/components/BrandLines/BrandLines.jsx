import "./BrandLines.css";

const tags = ["DISEÑO A MEDIDA", "LYCRAS & MESH", "SUBLIMADOS", "HOLOGRÁFICOS", "CRISTALES PREMIUM", "LOOK DE EQUIPO"];

export default function BrandLines() {
  return (
    <section className="brand-lines" id="brillo-equipo" aria-label="Línea de mallas personalizadas PRFCT10">
      <div className="brand-lines__stars" aria-hidden="true">
        {Array.from({ length: 14 }).map((_, index) => (
          <span key={index} style={{ "--star-index": index }} />
        ))}
      </div>

      <div className="brand-lines__container">
        <div className="team-shine">
          <div className="team-shine__content">
            <p className="brand-lines__eyebrow">MALLAS PRFCT10</p>
            <h2 className="brand-lines__title">BRILLO DE EQUIPO</h2>
            <p className="brand-lines__subtitle">
              Mallas personalizadas para equipos que quieren verse altamente competitivos desde el primer saludo.
              Diseño, telas, cristales y producción coordinada para equipos que quieren verse más profesionales, más unidos y más competitivos.
            </p>
            <div className="team-shine__tags">
              {tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <a className="team-shine__button" href="#redes">SOLICITAR PROPUESTA</a>
          </div>
          <div className="team-shine__media">
            <img src="/images/collection-mallas.png" alt="Diseñadora creando una malla de gimnasia artística pastel" />
          </div>
        </div>
      </div>
    </section>
  );
}
