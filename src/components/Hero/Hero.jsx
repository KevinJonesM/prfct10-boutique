import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__overlay" />
      <div className="hero__content">
        <div className="hero__mark" aria-hidden="true">
          <img src="/images/prfct10-logo-white.png" alt="" />
        </div>
        <p className="hero__eyebrow">HECHO PARA GIMNASTAS</p>
        <h1 className="hero__title">
          ENTRENA CON CONFIANZA,
          <br />
          BRILLA CON ESTILO
        </h1>
        <p className="hero__text">
          Accesorios, equipos y detalles pensados para acompañar cada práctica con seguridad, estilo y confianza.
        </p>
        <div className="hero__actions">
          <a className="hero__button" href="#productos">VER PRODUCTOS</a>
          <a className="hero__button hero__button--secondary" href="#standard">EL ESTÁNDAR</a>
        </div>
      </div>
      <span className="hero__scroll">DESLIZA</span>
    </section>
  );
}
