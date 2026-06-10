import { createWhatsAppLink } from "../../utils/whatsapp";
import "./FinalCTA.css";

export default function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="final-cta__container">
        <p className="final-cta__eyebrow">PRFCT10</p>
        <h2 className="final-cta__title">
          ¿LISTA PARA ELEVAR
          <br />
          TU ESTÁNDAR?
        </h2>
        <div className="final-cta__actions">
          <a className="final-cta__button" href={createWhatsAppLink()} target="_blank" rel="noreferrer">PEDIR POR WHATSAPP</a>
        </div>
      </div>
    </section>
  );
}
