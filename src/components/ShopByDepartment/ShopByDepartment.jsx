import "./ShopByDepartment.css";
import Reveal from "../Motion/Reveal";
import OptimizedImage from "../OptimizedImage/OptimizedImage";
import { useI18n } from "../../i18n/I18nProvider";

const departments = [
  {
    id: "training",
    nameKey: "navigation.trainingGear",
    descriptionKey: "home.departments.training",
    image: "/images/department-training-gear.png"
  },
  {
    id: "coquette",
    nameKey: "navigation.accessories",
    descriptionKey: "home.departments.accessories",
    image: "/images/department-accessories-gymnast.jpg",
    imagePosition: "center center"
  },
  {
    id: "mind",
    nameKey: "navigation.mindGym",
    descriptionKey: "home.departments.mind",
    image: "/images/department-mind-gym.jpg"
  },
  {
    id: "wear",
    nameKey: "navigation.apparel",
    descriptionKey: "home.departments.apparel",
    image: "/images/department-apparel-campaign.png",
    imagePosition: "right center"
  }
];

export default function ShopByDepartment({ onOpenDepartment }) {
  const { t } = useI18n();
  return (
    <section className="department-shop" aria-labelledby="department-shop-title">
      <Reveal className="department-shop__header">
        <p>{t("home.departments.eyebrow")}</p>
        <h2 id="department-shop-title">{t("home.departments.title")}</h2>
        <span>{t("home.departments.text")}</span>
      </Reveal>

      <Reveal className="department-shop__grid" delay={90}>
        {departments.map((department) => (
          <button
            className={`department-shop__card department-shop__card--${department.id}`}
            key={department.id}
            onClick={() => onOpenDepartment?.(department.id)}
            type="button"
          >
            <OptimizedImage
              src={department.image}
              alt=""
              loading="lazy"
              width="900"
              height="680"
              style={{ objectPosition: department.imagePosition || undefined }}
            />
            <span className="department-shop__overlay" aria-hidden="true" />
            <span className="department-shop__body">
              <strong>{t(department.nameKey)}</strong>
              <span>{t(department.descriptionKey)}</span>
              <em>{t("home.departments.cta")}</em>
            </span>
          </button>
        ))}
      </Reveal>
    </section>
  );
}
