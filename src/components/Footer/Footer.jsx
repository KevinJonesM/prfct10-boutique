import { createWhatsAppLink } from "../../utils/whatsapp";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="redes">
      <div className="footer__panel footer__container">
        <div className="footer__brand">
          <span className="footer__logo" aria-hidden="true">
            <img src="/images/prfct10-logo.png" alt="" />
          </span>
          <h2>PRFCT10</h2>
          <p className="footer__tagline">El poder está en tus manos.</p>
          <p>
            Un club de detalles lindos para gimnastas que entrenan, se cuidan y celebran juntas cada logro.
          </p>
          <p className="footer__note">
            Disponible en alianza con{" "}
            <a href="https://www.gimnasiaofk.com" target="_blank" rel="noreferrer">
              Only For Kids Fitness Center
            </a>
            .
          </p>
        </div>

        <div className="footer__group">
          <h3>Explora</h3>
          <a href="#product-grid">Entrenamiento</a>
          <a href="#coqueteria">Coquetería</a>
          <a href="#ropa-mallas">Ropa y mallas</a>
          <a href="#gimnasia-mental">Gimnasia mental</a>
          <a href="#brillo-equipo">Brillo de equipo</a>
        </div>

        <div className="footer__group">
          <h3>Comunidad</h3>
          <a href="#nosotros">Nosotros</a>
          <a href="#standard">El estándar</a>
          <a href={createWhatsAppLink()} target="_blank" rel="noreferrer">Contacto</a>
          <span className="footer__pill">Envíos nacionales a toda Venezuela</span>
        </div>

        <div className="footer__group footer__group--social">
          <h3>Síguenos</h3>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://tiktok.com" target="_blank" rel="noreferrer">TikTok</a>
          <a href={createWhatsAppLink()} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© 2026 PRFCT10. Todos los derechos reservados.</span>
        <strong>Envíos nacionales a toda Venezuela</strong>
        <a href={createWhatsAppLink()} target="_blank" rel="noreferrer">Pedir por WhatsApp</a>
      </div>
    </footer>
  );
}
