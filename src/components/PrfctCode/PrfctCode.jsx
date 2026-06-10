import { useEffect, useRef, useState } from "react";
import "./PrfctCode.css";

const principles = [
  {
    number: "I",
    title: "Entrena con intención",
    text: "Cada práctica cuenta más cuando sabes qué estás construyendo."
  },
  {
    number: "II",
    title: "Cuida lo que te sostiene",
    text: "Manos, muñecas, rodillas, talones y energía también merecen atención."
  },
  {
    number: "III",
    title: "Verte linda también suma",
    text: "Sentirte bien puede hacer que entrenes con más seguridad y alegría."
  },
  {
    number: "IV",
    title: "La técnica siempre va primero",
    text: "Lo bonito brilla más cuando está hecho con control, paciencia y cuidado."
  },
  {
    number: "V",
    title: "La confianza se practica",
    text: "No aparece de la nada: se repite, se cuida y se celebra."
  },
  {
    number: "VI",
    title: "El detalle importa",
    text: "El agarre, el soporte, el look y la preparación forman parte del estándar."
  }
];

export default function PrfctCode() {
  const [visibleItems, setVisibleItems] = useState([]);
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const index = Number(entry.target.dataset.index);
          setVisibleItems((current) => (current.includes(index) ? current : [...current, index]));
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -18% 0px",
        threshold: 0.18
      }
    );

    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="prfct-code" id="standard">
      <div className="prfct-code__hero">
        <img
          className="prfct-code__hero-image"
          src="/images/girl-code-background.png"
          alt="Gimnasta sobre barra de equilibrio"
        />
        <div className="prfct-code__hero-overlay" aria-hidden="true" />
        <div className="prfct-code__hero-fade" aria-hidden="true" />
        <div className="prfct-code__intro">
          <p className="prfct-code__eyebrow">EL ESTÁNDAR PRFCT10</p>
          <h2 className="prfct-code__title">
            PREPÁRATE CON ESTILO.
            <br />
            ENTRENA CON CONFIANZA.
          </h2>
          <p className="prfct-code__text">
            PRFCT10 acompaña a gimnastas que se cuidan, se preparan y vuelven a intentarlo con más seguridad cada día.
          </p>
        </div>
      </div>

      <div className="prfct-code__list">
        {principles.map((principle, index) => (
          <article
            className={`prfct-code__item ${visibleItems.includes(index) ? "prfct-code__item--visible" : ""}`}
            data-index={index}
            key={principle.number}
            ref={(element) => {
              itemRefs.current[index] = element;
            }}
          >
            <span className={`prfct-code__number ${index % 2 ? "prfct-code__number--mint" : ""}`}>
              {principle.number}
            </span>
            <div className="prfct-code__copy">
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </div>
            <span className={`prfct-code__dot ${index % 2 ? "prfct-code__dot--mint" : ""}`} />
          </article>
        ))}
      </div>
    </section>
  );
}
