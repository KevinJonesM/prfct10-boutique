import { useEffect, useRef, useState } from "react";
import "./PrfctCode.css";
import OptimizedImage from "../OptimizedImage/OptimizedImage";
import { useI18n } from "../../i18n/I18nProvider";

const principleNumbers = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

export default function PrfctCode() {
  const { t } = useI18n();
  const localizedPrinciples = t("story.principles");
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
        <OptimizedImage
          className="prfct-code__hero-image"
          src="/images/girl-code-background.png"
          alt={`${t("story.standardTitle1")} ${t("story.standardTitle2")}`}
          loading="lazy"
          width="1600"
          height="1000"
        />
        <div className="prfct-code__hero-overlay" aria-hidden="true" />
        <div className="prfct-code__hero-fade" aria-hidden="true" />
        <div className="prfct-code__intro">
          <p className="prfct-code__eyebrow">{t("story.standardEyebrow")}</p>
          <h2 className="prfct-code__title">
            {t("story.standardTitle1")}
            <br />
            {t("story.standardTitle2")}
          </h2>
          <p className="prfct-code__text">
            {t("story.standardText")}
          </p>
        </div>
      </div>

      <div className="prfct-code__list">
        {principleNumbers.map((number, index) => (
          <article
            className={`prfct-code__item ${visibleItems.includes(index) ? "prfct-code__item--visible" : ""}`}
            data-index={index}
            key={number}
            ref={(element) => {
              itemRefs.current[index] = element;
            }}
          >
            <span className={`prfct-code__number ${index % 2 ? "prfct-code__number--mint" : ""}`}>
              {number}
            </span>
            <div className="prfct-code__copy">
              <h3>{localizedPrinciples[index]?.title}</h3>
              <p>{localizedPrinciples[index]?.text}</p>
            </div>
            <span className={`prfct-code__dot ${index % 2 ? "prfct-code__dot--mint" : ""}`} />
          </article>
        ))}
      </div>
    </section>
  );
}
