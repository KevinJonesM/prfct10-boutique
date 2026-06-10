import "./BrandIntro.css";

export default function BrandIntro() {
  return (
    <section className="brand-intro">
      <div className="brand-intro__container">
        <span className="brand-intro__dot brand-intro__dot--magenta" />
        <span className="brand-intro__dot brand-intro__dot--mint" />
        <p className="brand-intro__eyebrow">PRFCT10 CLUB</p>
        <h2 className="brand-intro__title">FUERTE, LINDA Y LISTA</h2>
        <p className="brand-intro__text">
          Para cada práctica, cada competencia y cada logro que viene
        </p>
      </div>
    </section>
  );
}
