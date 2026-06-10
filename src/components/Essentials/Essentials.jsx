import { createWhatsAppLink } from "../../utils/whatsapp";
import "./Essentials.css";

const essentialIds = ["bar-grips", "wrist-bands", "chalk"];

export default function Essentials({ products, onSelectProduct }) {
  const essentials = essentialIds
    .map((id) => products.find((product) => product.id === id))
    .filter(Boolean);

  return (
    <section className="essentials" aria-label="Los productos esenciales de PRFCT10">
      <div className="essentials__container">
        <div className="essentials__header">
          <p className="essentials__eyebrow">LOS ESENCIALES</p>
          <h2 className="essentials__title">Esenciales lindos para sostener tu entrenamiento.</h2>
          <p className="essentials__text">
            Tres piezas lindas, prácticas y fuertes para entrenar segura antes de cada rutina.
          </p>
        </div>

        <div className="essentials__grid">
          {essentials.map((product) => (
            <article className="essentials__card" key={product.id}>
              <button
                className={`essentials__media ${product.imageClass}`}
                onClick={() => onSelectProduct(product)}
                type="button"
                aria-label={`Ver detalles de ${product.name}`}
              />
              <div className="essentials__body">
                <p className="essentials__category">{product.category}</p>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="essentials__actions">
                  <button onClick={() => onSelectProduct(product)} type="button">
                    Ver detalles
                  </button>
                  <a href={createWhatsAppLink(product.name)} target="_blank" rel="noreferrer">
                    Pedir por WhatsApp
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
