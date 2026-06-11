import "./About.css";

export default function About() {
  return (
    <section className="about" id="nosotros">
      <div className="about__container">
        <div className="about__content">
          <p className="about__eyebrow">NOSOTROS</p>
          <h2 className="about__title">
            HECHO PARA GIMNASTAS
            <br />
            QUE AMAN CUIDARSE.
          </h2>
          <p>
            PRFCT10 nace para acompañar a gimnastas dentro y fuera del gimnasio: en la práctica, la competencia,
            los viajes y esos días donde toca volver a intentarlo.
          </p>
          <p>
            Cada detalle suma: el agarre que da confianza, el soporte que acompaña, el accesorio que completa el
            look y el recuerdo que celebra cada logro.
          </p>
          <strong>Entrena para ganar</strong>
        </div>
      </div>
    </section>
  );
}
