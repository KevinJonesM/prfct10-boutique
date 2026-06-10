import { createWhatsAppLink } from "../../utils/whatsapp";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <a className="header__brand" href="#inicio" aria-label="PRFCT10 inicio">
          <span className="header__logo" aria-hidden="true">
            <img src="/images/prfct10-logo-white.png" alt="" />
          </span>
          <span className="header__name">PRFCT10</span>
        </a>

        <nav className="header__nav" aria-label="Navegación principal">
          <a className="header__link" href="#inicio">Inicio</a>
          <a className="header__link" href="#productos">Productos</a>
          <a className="header__link" href="#standard">El estándar</a>
          <a className="header__link" href="#nosotros">Nosotros</a>
        </nav>

        <a className="header__whatsapp" href={createWhatsAppLink()} target="_blank" rel="noreferrer">
          Pedir por WhatsApp
        </a>
      </div>
    </header>
  );
}
