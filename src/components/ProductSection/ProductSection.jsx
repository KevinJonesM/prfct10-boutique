import { useEffect, useMemo, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { createWhatsAppMessageLink } from "../../utils/whatsapp";
import "./ProductSection.css";

const trainingProductIds = [
  "bar-grips",
  "chalk",
  "gel-heel-guards",
  "kinesio-tape",
  "wrist-bands",
  "tiger-paws",
  "flex-strap-12",
  "resistance-handles",
  "core-sliders",
  "grip-loop",
  "power-weights",
  "patella-band"
];

const trainingCards = {
  "bar-grips": {
    displayName: "Power Grips",
    description: "Grips de cuero para mejorar el agarre en barras, proteger las manos y entrenar con más control cuando la exigencia sube."
  },
  chalk: {
    displayName: "Magnesio",
    description: "Bloque de magnesio para mantener las manos secas, mejorar el control y dar más seguridad antes de cada turno."
  },
  "wrist-bands": {
    displayName: "Wrist Support",
    description: "Soporte estructurado para muñecas durante ejercicios de impacto, fuerza o repetición. Ayuda a entrenar con más estabilidad."
  },
  "tiger-paws": {
    displayName: "Wrist Guards",
    description: "Protectores premium para muñecas en apoyos, acrobacias e impactos repetitivos. Ideales para cuidar lo que sostiene."
  },
  "kinesio-tape": {
    displayName: "Kinesio Tape",
    description: "Cinta flexible para acompañar zonas sensibles y dar sensación de soporte sin limitar el movimiento de la gimnasta."
  },
  "flex-strap-12": {
    displayName: "Flex Band",
    description: "Liga de niveles para activación, flexibilidad, fuerza específica y preparación antes de entrenar."
  },
  "resistance-handles": {
    displayName: "Power Band",
    description: "Liga con agarre para activar hombros, brazos y piernas o reforzar fuerza con control antes de la práctica."
  },
  "core-sliders": {
    displayName: "Core Sliders",
    description: "Discos deslizantes para trabajar abdomen, control corporal, hombros y estabilidad de forma divertida y retadora."
  },
  "grip-loop": {
    displayName: "Grip Trainer",
    description: "Ejercitador de dedos para fortalecer manos, agarre y antebrazos; un apoyo pequeño para rutinas de barras."
  },
  "power-weights": {
    displayName: "Power Weights",
    description: "Pesas ligeras para fortalecer brazos, piernas y preparación física sin perder movilidad ni control."
  },
  "patella-band": {
    displayName: "Patella Strap",
    description: "Banda de soporte bajo la rodilla para días de saltos, impacto y preparación física con más comodidad."
  },
  "gel-heel-guards": {
    displayName: "Heel Guards",
    description: "Protectores suaves para talones que ayudan a reducir molestias durante entrenamientos repetitivos o de impacto."
  }
};

const trainingExtraProducts = [
  {
    id: "sweat-wristbands",
    name: "Muñequeras para sudor",
    brandName: "PRFCT10 Muñequeras para sudor",
    category: "Comodidad y control",
    group: "Soporte",
    price: "Consultar",
    description: "Muñequeras suaves para absorber sudor durante entrenamientos largos.",
    details:
      "Absorben el sudor durante entrenamientos largos y ayudan a mantener las manos más secas antes de usar grips, magnesio o trabajar barras. Ideales para comodidad, control y un look deportivo cute.",
    benefits: ["Sudor bajo control", "Manos más secas", "Look deportivo", "Uso diario"],
    accordionBenefits: [
      "Ayudan a absorber sudor durante rutinas largas.",
      "Acompañan el uso de grips y magnesio.",
      "Aportan comodidad antes de barras o preparación física.",
      "Suman un detalle deportivo cute al uniforme de entrenamiento."
    ],
    modeOfUse: [
      "Colocar en la muñeca antes del entrenamiento.",
      "Usar debajo o cerca de los grips según comodidad.",
      "Retirar si se siente demasiada presión.",
      "Lavar y dejar secar entre usos."
    ],
    contraindications: ["No usar demasiado apretadas.", "Suspender si causan irritación o incomodidad."],
    specifications: ["Par de muñequeras.", "Material textil suave.", "Uso deportivo.", "Lavables."],
    sportsUses: ["Gimnasia artística.", "Barras.", "Preparación física.", "Entrenamientos largos."],
    imageClass: "product-card__image--sweat-wristbands"
  },
  {
    id: "hand-balm",
    name: "Bálsamo de Manos",
    brandName: "PRFCT10 Bálsamo de Manos",
    category: "Cuidado post-entreno",
    group: "Recuperación",
    price: "Consultar",
    description: "Bálsamo hidratante para manos y zonas resecas después del entrenamiento.",
    details:
      "Bálsamo hidratante para manos y zonas resecas después del entrenamiento. Ayuda a suavizar la piel castigada por magnesio, barras, callos y fricción.",
    benefits: ["Hidrata", "Suaviza", "Post-entreno", "Cuidado de manos"],
    accordionBenefits: [
      "Ayuda a suavizar manos resecas por magnesio y barras.",
      "Acompaña la rutina de cuidado después de entrenar.",
      "Ideal para zonas con fricción o resequedad.",
      "Suma un momento de cuidado personal a la práctica."
    ],
    modeOfUse: [
      "Aplicar una pequeña cantidad sobre manos limpias.",
      "Masajear en zonas resecas o con fricción.",
      "Usar después del entrenamiento o antes de dormir.",
      "Evitar contacto con ojos."
    ],
    contraindications: ["No aplicar sobre heridas abiertas.", "Suspender si causa irritación o reacción."],
    specifications: ["Bálsamo hidratante.", "Uso en manos y zonas resecas.", "Formato práctico.", "Cuidado post-entreno."],
    sportsUses: ["Gimnasia artística.", "Barras.", "Cuidado de manos.", "Rutina post-entreno."],
    imageClass: "product-card__image--hand-balm"
  }
];

const shopLines = [
  {
    title: "Entrenamiento",
    text: "Agarre, soporte y herramientas para practicar con más confianza.",
    button: "Ver productos",
    href: "#product-grid",
    image: "/images/training-boutique.jpg",
    alt: "Grips y productos de entrenamiento PRFCT10",
    tone: "training"
  },
  {
    title: "Coquetería",
    text: "Lazos, dijes, bolsitos y detalles para completar su look.",
    button: "Ver colección",
    href: "#coqueteria",
    image: "/images/collection-coqueteria.png",
    alt: "Accesorios pastel para gimnastas",
    tone: "cute"
  },
  {
    title: "Ropa y mallas",
    text: "Piezas cómodas y mallas para entrenar con estilo.",
    button: "Ver línea",
    href: "#brillo-equipo",
    image: "/images/collection-ropa.png",
    alt: "Ropa deportiva pastel para gimnastas",
    tone: "wear"
  },
  {
    title: "Gimnasia mental",
    text: "Fidgets, puzzles y squishies para pensar, enfocarse y jugar mientras entrena su mente.",
    button: "Descubrir línea",
    href: "#gimnasia-mental",
    image: "/images/mental-gymnastics.jpg",
    alt: "Recurso sensorial pastel para concentración y motricidad fina",
    tone: "mind"
  }
];

const coquetteItems = [
    {
      name: "Medalleros",
      image: "/images/coquet-medalleros.png",
      gallery: ["/images/coquet-medalleros.png"],
    description: "Piezas decorativas para ordenar medallas y celebrar cada logro con estilo.",
    idealFor: "Habitaciones, regalos, competencias y recuerdos especiales.",
    why: "Convierte cada medalla en parte de su historia y mantiene sus logros visibles."
  },
    {
      name: "Bisutería",
      image: "/images/coquet-bisuteria.png",
      gallery: ["/images/coquet-bisuteria.png", "/images/coquet-collares.png"],
    description: "Detalles delicados para sumar brillo al look de entrenamiento o competencia.",
    idealFor: "Regalos, kits personalizados y accesorios de uso diario.",
    why: "Son piezas pequeñas, lindas y fáciles de combinar con su mood PRFCT10."
  },
    {
      name: "Collares",
      image: "/images/coquet-collares.png",
      gallery: ["/images/coquet-collares.png", "/images/coquet-bisuteria.png"],
    description: "Collares inspirados en gimnasia para llevar su pasión dentro y fuera del gym.",
    idealFor: "Cumpleaños, detalles de equipo y looks de competencia.",
    why: "Hacen que su estilo se sienta personal, cute y muy de gimnasta."
  },
    {
      name: "Toallas de Playa",
      image: "/images/coquet-toalla-playa.png",
      gallery: ["/images/coquet-toalla-playa.png"],
    description: "Toallas con estética gimnástica para viajes, piscina, playa o días de descanso.",
    idealFor: "Vacaciones, campamentos, competencias y regalos.",
    why: "Son prácticas, coloridas y mantienen la energía PRFCT10 fuera del gimnasio."
  },
    {
      name: "Spray de escarcha",
      image: "/images/coquet-glitter-spray.png",
      gallery: ["/images/coquet-glitter-spray.png"],
    description: "Brillo en spray para cabello y cuerpo en presentaciones, fotos y competencia.",
    idealFor: "Competencias, exhibiciones, peinados y momentos especiales.",
    why: "Da ese toque final de brillo sin perder una estética limpia y bonita."
  },
    {
      name: "Lazos de tul",
      image: "/images/coquet-lazos-tul.png",
      gallery: ["/images/coquet-lazos-tul.png"],
    description: "Lazos suaves y brillantes para completar peinados con un acabado delicado.",
    idealFor: "Competencias, entrenamientos, fotos y regalos.",
    why: "Son fáciles de combinar y hacen que el look se sienta más pulido."
  },
    {
      name: "Peluflores",
      image: "/images/coquet-peluflores.png",
      gallery: ["/images/coquet-peluflores.png"],
    description: "Flores de peluche alegres para regalar, decorar o acompañar un kit PRFCT10.",
    idealFor: "Celebrar logros, decorar habitaciones y armar detalles cute.",
    why: "Son tiernas, coloridas y perfectas para reconocer cada avance."
  },
    {
      name: "Bolsos de Silicón",
      image: "/images/coquet-bolsos-silicon-portada.png",
      gallery: [
        "/images/coquet-bolsos-silicon-portada.png",
        "/images/coquet-bolsos-silicon-carrusel-1.png",
        "/images/coquet-bolsos-silicon-carrusel-2.png",
        "/images/coquet-bolsos-silicon-carrusel-3.png",
        "/images/coquet-bolsos-silicon-carrusel-4.png",
        "/images/coquet-bolsos-silicon-carrusel-5.png",
        "/images/coquet-bolsos-silicon-carrusel-6.png",
      ],
    description: "Bolsitos suaves, prácticos y fáciles de limpiar para llevar accesorios, grips, ligas, lazos o pequeños esenciales de entrenamiento.",
    idealFor: "Competencias, entrenamientos, regalos y kits personalizados.",
    why: "Son coloridos, resistentes, combinables con charms y perfectos para que cada gimnasta lleve sus cosas con estilo."
  },
    {
      name: "Charms de Gimnasia",
      image: "/images/coquet-bisuteria.png",
      gallery: ["/images/coquet-bisuteria.png", "/images/coquet-collares.png"],
    description: "Dijes decorativos inspirados en gimnasia para personalizar bolsos, termos, llaveros o accesorios.",
    idealFor: "Agregar un detalle especial al look de competencia o entrenamiento.",
    why: "Cada charm hace que sus accesorios se sientan únicos, cute y muy de gimnasta."
  },
    {
      name: "Termos de Gimnasia",
      image: "/images/collection-coqueteria.png",
      gallery: ["/images/collection-coqueteria.png"],
    description: "Termos prácticos y lindos para acompañar a la gimnasta durante entrenamientos, competencias y días largos en el gym.",
    idealFor: "Hidratación diaria, campamentos, competencias y entrenamientos.",
    why: "Son funcionales, combinan con su estilo y hacen que mantenerse hidratada también se vea cute."
  }
];

const mentalItems = [
  {
    name: "Bolita Puzzle",
    image: "/images/mental-gymnastics.jpg",
    description: "Una pelota tipo puzzle con botones de colores que se presionan, mueven y combinan. Ideal para manos inquietas y momentos donde la gimnasta necesita enfocar su atención.",
    howToUse: "Presiona las bolitas de colores y muévelas de un espacio a otro hasta organizarlas por color. También puede usarse simplemente como fidget de mano.",
    age: "Desde 6 años en adelante.",
    purpose: "Trabaja concentración, paciencia, coordinación mano-ojo y resolución de problemas.",
    gymnastics: "En gimnasia, la mente también entrena. Este puzzle ayuda a practicar enfoque, calma y precisión, habilidades necesarias antes de competir o aprender elementos nuevos.",
    chips: ["Enfoque", "Paciencia", "Coordinación"]
  },
  {
    name: "Rueda Mental",
    image: "/images/mental-gymnastics.jpg",
    description: "Puzzle circular de doble cara con bolitas de colores y piezas giratorias. Un reto visual y táctil para mantener la mente activa.",
    howToUse: "Gira las secciones, mueve las bolitas por los canales y busca organizarlas por color o patrón.",
    age: "Desde 7 años en adelante.",
    purpose: "Estimula pensamiento lógico, coordinación, memoria visual y tolerancia a la frustración.",
    gymnastics: "Perfecto para gimnastas que necesitan aprender a respirar, pensar y resolver sin desesperarse. Ayuda a entrenar paciencia y control mental.",
    chips: ["Lógica", "Memoria visual", "Control"]
  },
  {
    name: "Giro Puzzle",
    image: "/images/mental-gymnastics.jpg",
    gallery: ["/images/mental-gymnastics.jpg", "/images/mental-gymnastics.jpg", "/images/mental-gymnastics.jpg"],
    description: "Puzzle redondo con sistema giratorio y bolitas internas. Es divertido, colorido y retador sin sentirse complicado.",
    howToUse: "Gira las partes del puzzle, desliza las bolitas y busca completar combinaciones de color.",
    age: "Desde 6 años en adelante.",
    purpose: "Favorece concentración, coordinación fina y enfoque sostenido.",
    gymnastics: "Antes de una rutina, muchas niñas necesitan ocupar sus manos para calmar nervios. Este tipo de fidget ayuda a canalizar energía y mantener la mente enfocada.",
    chips: ["Calma", "Foco", "Motricidad fina"]
  },
  {
    name: "Squishy Dumpling",
    image: "/images/mental-gymnastics.jpg",
    description: "Un squishy suave, brillante y adorable con forma de dumpling. Perfecto para apretar, soltar y sentir alivio.",
    howToUse: "Se aprieta suavemente con la mano y vuelve poco a poco a su forma original.",
    age: "Desde 5 años en adelante.",
    purpose: "Apoya la relajación, la regulación emocional y la sensación de calma.",
    gymnastics: "Después de entrenamientos intensos o antes de competir, puede ayudar a liberar tensión en las manos y bajar la ansiedad de una forma cute y divertida.",
    chips: ["Calma", "Ansiedad", "Sensorial"]
  },
  {
    name: "Pulseras Unicornio",
    image: "/images/mental-gymnastics.jpg",
    description: "Pulseras elásticas sensoriales con textura de puntitos y diseño de unicornio. Cada pulsera tiene una cabeza de unicornio y una cola, manteniendo su forma correcta.",
    howToUse: "Se usan en la muñeca, se estiran suavemente, se enrollan y se manipulan con las manos como fidget.",
    age: "Desde 5 años en adelante.",
    purpose: "Estimulan el tacto, ayudan a canalizar inquietud y funcionan como accesorio sensorial.",
    gymnastics: "Son ideales para niñas que necesitan mover las manos entre rotaciones, esperar turnos o manejar nervios sin distraerse demasiado.",
    chips: ["Tacto", "Espera", "Inquietud"]
  },
  {
    name: "Pelota Squishy",
    image: "/images/mental-gymnastics.jpg",
    description: "Pelota transparente con bolitas de colores en su interior. Suave, llamativa y perfecta para apretar.",
    howToUse: "Se toma con una o dos manos y se aprieta para mover las bolitas internas y sentir la textura.",
    age: "Desde 5 años en adelante.",
    purpose: "Relajación, estimulación sensorial, fuerza ligera de manos y descarga de tensión.",
    gymnastics: "Las manos de una gimnasta trabajan muchísimo. Este squishy ayuda a liberar tensión, mejorar conciencia táctil y acompañar momentos de pausa o espera.",
    chips: ["Relajación", "Manos", "Pausa"]
  },
  {
    name: "Puzzle Mágico",
    image: "/images/mental-puzzle-magico-portada.png",
    gallery: [
      "/images/mental-puzzle-magico-carrusel-1.png",
      "/images/mental-puzzle-magico-carrusel-2.png",
      "/images/mental-puzzle-magico-carrusel-3.png"
    ],
    description: "Puzzle sensorial de colores para mover, ordenar y resolver con calma. Una pieza divertida para manos inquietas y mente enfocada.",
    howToUse: "Mueve las piezas, busca patrones de color y vuelve a empezar como reto de enfoque o fidget de pausa.",
    age: "Desde 6 años en adelante.",
    purpose: "Estimula lógica, paciencia, coordinación fina y control de la frustración.",
    gymnastics: "Ayuda a practicar calma y concentración entre turnos, antes de competir o después de una práctica intensa.",
    chips: ["Lógica", "Calma", "Precisión"]
  }
];

function BoutiqueModal({ item, type, onClose }) {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (!item) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [item, onClose]);

  useEffect(() => {
    setActiveImage(0);
  }, [item]);

  if (!item) return null;

  const isMental = type === "mind";
  const gallery = item.gallery?.length ? item.gallery : isMental ? [item.image, item.image, item.image] : [item.image];
  const whatsappLabel = `Hola, quiero información sobre ${item.name} PRFCT10.`;

  return (
    <div className="boutique-modal" role="dialog" aria-modal="true" aria-labelledby="boutique-modal-title">
      <button className="boutique-modal__overlay" onClick={onClose} type="button" aria-label="Cerrar detalles" />
      <div className="boutique-modal__dialog">
        <button className="boutique-modal__close" onClick={onClose} type="button" aria-label="Cerrar">
          X
        </button>
        <div className="boutique-modal__media">
          <div className="boutique-modal__image-stage">
            <img src={gallery[activeImage]} alt={item.name} />
          </div>
          {gallery.length > 1 ? (
            <div className="boutique-modal__thumbs" aria-label={`Modelos de ${item.name}`}>
              {gallery.map((image, index) => (
                <button
                  aria-label={`Ver modelo ${index + 1} de ${item.name}`}
                  className={activeImage === index ? "boutique-modal__thumb boutique-modal__thumb--active" : "boutique-modal__thumb"}
                  key={`${image}-${index}`}
                  onClick={() => setActiveImage(index)}
                  type="button"
                >
                  <img src={image} alt="" />
                </button>
              ))}
            </div>
          ) : null}
        </div>
        <div className="boutique-modal__content">
          <p className="boutique-modal__eyebrow">{isMental ? "Gimnasia Mental" : "Coquetería PRFCT10"}</p>
          <h3 id="boutique-modal-title">{item.name}</h3>
          <p className="boutique-modal__description">{item.description}</p>

          {item.chips ? (
            <div className="boutique-modal__chips">
              {item.chips.map((chip) => (
                <span key={chip}>{chip}</span>
              ))}
            </div>
          ) : null}

          <div className="boutique-modal__details">
            {isMental ? (
              <>
                <section>
                  <strong>Cómo se usa</strong>
                  <p>{item.howToUse}</p>
                </section>
                <section>
                  <strong>Edad sugerida</strong>
                  <p>{item.age}</p>
                </section>
                <section>
                  <strong>Finalidad</strong>
                  <p>{item.purpose}</p>
                </section>
                <section>
                  <strong>Por qué ayuda en gimnasia</strong>
                  <p>{item.gymnastics}</p>
                </section>
              </>
            ) : (
              <>
                <section>
                  <strong>Ideal para</strong>
                  <p>{item.idealFor}</p>
                </section>
                <section>
                  <strong>Por qué les encanta</strong>
                  <p>{item.why}</p>
                </section>
              </>
            )}
          </div>

          <a className="boutique-modal__cta" href={createWhatsAppMessageLink(whatsappLabel)} rel="noreferrer" target="_blank">
            Pedir por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

function CollectionGrid({ id, eyebrow, title, text, items, modifier, onSelectItem }) {
  return (
    <section className={`collection-strip collection-strip--${modifier}`} id={id}>
      <div className="collection-strip__header">
        <p>{eyebrow}</p>
        <h3>{title}</h3>
        <span>{text}</span>
      </div>
      <div className="collection-strip__grid">
        {items.map((item) => (
          <button
            className="collection-strip__card"
            key={item.name}
            onClick={() => onSelectItem(item, modifier)}
            type="button"
          >
            <img src={item.image} alt={item.name} />
            <span className="collection-strip__card-body">
              <span className="collection-strip__card-kicker">{modifier === "mind" ? "Foco cute" : "Cute pick"}</span>
              <strong>{item.name}</strong>
              <em>Ver detalles</em>
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default function ProductSection({ products, onSelectProduct }) {
  const [selectedCollectionItem, setSelectedCollectionItem] = useState(null);

  const trainingProducts = useMemo(
    () => [
      ...trainingProductIds.map((id) => products.find((product) => product.id === id)).filter(Boolean),
      ...trainingExtraProducts
    ],
    [products]
  );

  return (
    <section className="products" id="productos">
      <div className="products__particles" aria-hidden="true">
        {Array.from({ length: 28 }).map((_, index) => (
          <span key={index} style={{ "--i": index }} />
        ))}
      </div>
      <div className="products__hero">
        <img className="products__hero-image" src="/images/products-drop-hero.jpg" alt="Gimnasta saltando en gimnasio pastel" />
        <div className="products__hero-overlay" aria-hidden="true" />
        <div className="products__hero-fade" aria-hidden="true" />
        <div className="products__hero-content">
          <p className="products__eyebrow">PRODUCTOS PRFCT10</p>
          <h2 className="products__title">Bienvenidos a la Boutique</h2>
          <p className="products__subtitle">
            Agarre, soporte, resistencia y control: todo para entrenar fuerte sin perder el estilo.
          </p>
        </div>
      </div>

      <div className="products__container">
        <div className="shop-lines" aria-label="Categorías de productos PRFCT10">
          {shopLines.map((line, index) => (
            <article className={`shop-line shop-line--${line.tone}`} key={line.title}>
              <div className="shop-line__media">
                <img src={line.image} alt={line.alt} />
              </div>
              <div className="shop-line__body">
                <span className="shop-line__label">{`Linea ${String(index + 1).padStart(2, "0")}`}</span>
                <h3>{line.title}</h3>
                <a href={line.href}>Ver detalles</a>
              </div>
            </article>
          ))}
        </div>

        <aside className="shipping-cta" aria-label="Envíos nacionales PRFCT10">
          <div className="shipping-cta__panel">
            <div className="shipping-cta__copy">
              <p>Envíos Nacionales</p>
              <h3>PRFCT10 llega a toda Venezuela.</h3>
              <span>Recibe tus productos en tu ciudad con cobro a destino.</span>
              <small>Aceptamos dólares, euros, transferencia, Zelle y Pago Móvil.</small>
            </div>
            <a
              className="shipping-cta__button"
              href={createWhatsAppMessageLink("Hola, quiero hacer un pedido PRFCT10 con envío nacional.")}
              rel="noreferrer"
              target="_blank"
            >
              Pedir por WhatsApp
            </a>
          </div>
        </aside>

        <div className="products__catalog" id="product-grid">
          <p className="products__catalog-eyebrow">Entrenamiento PRFCT10</p>
          <h3 className="products__catalog-title">Artículos de Entrenamiento</h3>
          <p className="products__catalog-description">
            Todo para entrenar mejor, cuidarse más y avanzar con confianza: agarre, soporte, fuerza, recuperación y
            detalles pensados para gimnastas que van por más.
          </p>
        </div>

        <div className="products__grid">
          {trainingProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              displayName={trainingCards[product.id]?.displayName}
              trainingDescription={trainingCards[product.id]?.description || product.details}
              onSelectProduct={onSelectProduct}
            />
          ))}
        </div>

        <CollectionGrid
          id="coqueteria"
          eyebrow="Detalles PRFCT10"
          title="Coquetería"
          text="Detalles lindos para completar su look, celebrar logros y acompañar la vida de gimnasio con estilo."
          items={coquetteItems}
          modifier="coquette"
          onSelectItem={(item, type) => setSelectedCollectionItem({ item, type })}
        />

        <CollectionGrid
          id="gimnasia-mental"
          eyebrow="Juego y enfoque"
          title="Gimnasia Mental"
          text="Fidgets, puzzles y squishies pensados para acompañar a la gimnasta fuera del aparato: concentración, paciencia, calma, coordinación y enfoque antes o después de entrenar."
          items={mentalItems}
          modifier="mind"
          onSelectItem={(item, type) => setSelectedCollectionItem({ item, type })}
        />
      </div>

      <BoutiqueModal
        item={selectedCollectionItem?.item}
        type={selectedCollectionItem?.type}
        onClose={() => setSelectedCollectionItem(null)}
      />
    </section>
  );
}
