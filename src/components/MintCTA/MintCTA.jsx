import { createWhatsAppMessageLink } from "../../utils/whatsapp";
import "./MintCTA.css";

const helpMessage = "Hola, quiero ayuda para elegir el producto indicado para mi gimnasta.";

export default function MintCTA() {
  return (
    <section className="mint-cta" aria-label="Ayuda para elegir productos PRFCT10">
      <div className="mint-cta__shape mint-cta__shape--left" aria-hidden="true" />
      <div className="mint-cta__shape mint-cta__shape--right" aria-hidden="true" />
      <div className="mint-cta__dots" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="mint-cta__content">
        <p className="mint-cta__eyebrow">PRFCT10</p>
        <h2 className="mint-cta__title">¿NO SABES CUÁL ELEGIR?</h2>
        <p className="mint-cta__text">
          Te ayudamos a encontrar el producto ideal según la edad, nivel y necesidades de tu gimnasta.
        </p>

        <div className="mint-cta__actions">
          <a
            className="mint-cta__button mint-cta__button--primary"
            href={createWhatsAppMessageLink(helpMessage)}
            target="_blank"
            rel="noreferrer"
          >
            PEDIR POR WHATSAPP
          </a>
          <a className="mint-cta__button mint-cta__button--secondary" href="#redes">
            SÍGUENOS EN REDES
          </a>
        </div>
      </div>
    </section>
  );
}
