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
          <div className="header__dropdown">
            <a className="header__link header__dropdown-trigger" href="#productos" aria-haspopup="true">
              Boutique
            </a>
            <div className="header__dropdown-menu" aria-label="Departamentos de boutique">
              <a href="#product-grid">Productos de entrenamiento</a>
              <a href="#coqueteria">CoqueterÃ­a</a>
              <a href="#gimnasia-mental">Gimnasia Mental</a>
              <a href="#ropa-mallas">Ropa y Mallas</a>
              <a href="#brillo-equipo">Brillo de Equipo</a>
            </div>
          </div>
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
