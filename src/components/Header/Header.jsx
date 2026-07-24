import { useEffect, useState } from "react";
import "./Header.css";
import OptimizedImage from "../OptimizedImage/OptimizedImage";
import { useI18n } from "../../i18n/I18nProvider";

const departmentLinks = [
  { labelKey: "navigation.trainingGear", view: "training", href: "/training-gear", tone: "training" },
  { labelKey: "navigation.accessories", view: "coquette", href: "/accessories", tone: "accessories" },
  { labelKey: "navigation.mindGym", view: "mind", href: "/mind-gym", tone: "mind" },
  { labelKey: "navigation.apparel", view: "wear", href: "/apparel", tone: "apparel" }
];

export default function Header({
  searchQuery = "",
  onSearchChange,
  activeView = "home",
  authUser,
  cartCount = 0,
  onOpenCart,
  onOpenLogin,
  onNavigateStore,
  onOpenBoutique,
  onOpenTeam
}) {
  const { locale, setLocale, t } = useI18n();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);

  useEffect(() => {
    const closeMenuOnEscape = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        setIsShopOpen(false);
      }
    };

    window.addEventListener("keydown", closeMenuOnEscape);
    return () => window.removeEventListener("keydown", closeMenuOnEscape);
  }, []);

  const goToStore = (event, target) => {
    event.preventDefault();
    setIsMenuOpen(false);
    setIsShopOpen(false);
    onNavigateStore?.(target);
  };

  const openBoutique = (event, view) => {
    event.preventDefault();
    setIsMenuOpen(false);
    setIsShopOpen(false);
    onOpenBoutique?.(view);
  };

  const openTeam = (event) => {
    event.preventDefault();
    setIsMenuOpen(false);
    setIsShopOpen(false);
    onOpenTeam?.("#team-page-title");
  };

  const linkClass = (view, tone = view) => [
    "header__link",
    `header__link--${tone}`,
    activeView === view ? "header__link--active" : ""
  ].filter(Boolean).join(" ");

  const shopIsActive = ["all", "search"].includes(activeView);

  return (
    <header className="header">
      <div className="header__container">
        <a className="header__brand" href="/" onClick={(event) => goToStore(event, "#inicio")} aria-label={`PRFCT10 ${t("navigation.home")}`}>
          <span className="header__logo" aria-hidden="true">
            <OptimizedImage src="/images/prfct10-logo-white.png" alt="" loading="eager" width="64" height="64" />
          </span>
          <span className="header__name">PRFCT10</span>
        </a>

        <button
          className="header__menu-toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => {
            setIsMenuOpen((current) => !current);
            setIsShopOpen(false);
          }}
        >
          {t("navigation.menu")}
        </button>

        <nav className={`header__nav${isMenuOpen ? " header__nav--open" : ""}`} id="primary-navigation" aria-label={t("navigation.main")}>
          <div className={`header__dropdown${isShopOpen ? " header__dropdown--open" : ""}`}>
            <button
              className={`header__link header__link--shop header__dropdown-trigger${shopIsActive ? " header__link--active" : ""}`}
              type="button"
              aria-haspopup="true"
              aria-expanded={isShopOpen}
              onClick={() => setIsShopOpen((current) => !current)}
            >
              {t("navigation.shop")}
            </button>
            <div className="header__dropdown-menu">
              <a href="/shop" onClick={(event) => openBoutique(event, "all")}>{t("navigation.shopAll")}</a>
              <a href="/#featured" onClick={(event) => goToStore(event, "#featured")}>{t("navigation.featured")}</a>
            </div>
          </div>
          {departmentLinks.map((link) => (
            <a
              className={linkClass(link.view, link.tone)}
              href={link.href}
              key={link.view}
              onClick={(event) => openBoutique(event, link.view)}
              aria-current={activeView === link.view ? "page" : undefined}
            >
              {t(link.labelKey)}
            </a>
          ))}
          <a
            className={linkClass("team", "team")}
            href="/team"
            onClick={openTeam}
            aria-current={activeView === "team" ? "page" : undefined}
          >
            {t("navigation.team")}
          </a>
        </nav>

        <label className="header__search" htmlFor="site-search">
          <span>{t("navigation.search")}</span>
          <input
            id="site-search"
            type="search"
            value={searchQuery}
            onChange={(event) => onSearchChange?.(event.target.value)}
            placeholder={t("navigation.searchPlaceholder")}
          />
        </label>

        <div className="header__actions">
          <div className="header__language" role="group" aria-label={t("language.label")}>
            <button type="button" aria-pressed={locale === "en"} onClick={() => setLocale("en")}>EN</button>
            <span aria-hidden="true">/</span>
            <button type="button" aria-pressed={locale === "es"} onClick={() => setLocale("es")}>ES</button>
          </div>
          <button className="header__login" type="button" onClick={onOpenLogin}>
            {authUser ? t("navigation.greeting", { name: authUser.name }) : t("navigation.account")}
          </button>
          <button className="header__cart" type="button" onClick={onOpenCart} aria-label={t("navigation.bagLabel", { count: cartCount })}>
            {t("navigation.bag")} <span>{cartCount}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
