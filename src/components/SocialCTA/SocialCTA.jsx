import "./SocialCTA.css";

const socialLinks = [
  {
    label: "Instagram",
    handle: "@ThePrfctX",
    href: "https://www.instagram.com/ThePrfctX"
  },
  {
    label: "TikTok",
    handle: "@ThePrfctX",
    href: "https://www.tiktok.com/@ThePrfctX"
  }
];

export default function SocialCTA() {
  return (
    <section className="social-cta" aria-label="Redes sociales PRFCT10">
      <div className="social-cta__shape social-cta__shape--left" aria-hidden="true" />
      <div className="social-cta__shape social-cta__shape--right" aria-hidden="true" />
      <div className="social-cta__dots" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="social-cta__content">
        <p className="social-cta__eyebrow">PRFCT10 EN REDES</p>
        <h2 className="social-cta__title">SIGUE EL BRILLO</h2>
        <p className="social-cta__text">
          Ideas, novedades y detalles lindos para acompanar cada practica, competencia y logro.
        </p>

        <div className="social-cta__links">
          {socialLinks.map((social) => (
            <a className="social-cta__link" href={social.href} key={social.label} target="_blank" rel="noreferrer">
              <span>{social.label}</span>
              <strong>{social.handle}</strong>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
