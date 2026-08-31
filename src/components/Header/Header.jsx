import { useEffect, useRef, useState } from "react";
import "./Header.css";
import OptimizedImage from "../OptimizedImage/OptimizedImage";
import { useI18n } from "../../i18n/I18nProvider";
import { customerAccountsVisible } from "../../config/commercePrototype";

const departmentLinks = [
  { labelKey: "navigation.trainingGear", view: "training", href: "/training-gear", tone: "training" },
  { labelKey: "navigation.accessories", view: "coquette", href: "/accessories", tone: "accessories" },
  { labelKey: "navigation.mindGym", view: "mind", href: "/mind-gym", tone: "mind" },
  { labelKey: "navigation.apparel", view: "wear", href: "/apparel", tone: "apparel" }
];

const mobileShopLinks = [
  { labelKey: "navigation.shopAll", view: "all", href: "/shop" },
  { labelKey: "navigation.trainingGear", view: "training", href: "/training-gear" },
  { labelKey: "navigation.accessories", view: "coquette", href: "/accessories" },
  { labelKey: "navigation.apparel", view: "wear", href: "/apparel" },
  { labelKey: "navigation.mindGym", view: "mind", href: "/mind-gym" },
  { labelKey: "navigation.bundles", view: "bundles", href: "/bundles" }
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
  onOpenTeam,
  onOpenPlay,
  onOpenShipping,
  overlayOpen = false
}) {
  const { locale, setLocale, t } = useI18n();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const drawerRef = useRef(null);

  const closeMenu = (restoreFocus = false) => {
    setIsMenuOpen(false);
    setIsShopOpen(false);
    if (restoreFocus) {
      window.requestAnimationFrame(() => menuButtonRef.current?.focus());
    }
  };

  useEffect(() => {
    if (!overlayOpen) return;
    closeMenu(false);
  }, [overlayOpen]);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;

    const focusableSelector = [
      "a[href]",
      "button:not([disabled])",
      "input:not([disabled])",
      "select:not([disabled])",
      "[tabindex]:not([tabindex='-1'])"
    ].join(",");

    const focusFirstControl = () => {
      drawerRef.current?.querySelector(focusableSelector)?.focus();
    };
    window.requestAnimationFrame(focusFirstControl);

    const handleDrawerKeys = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu(true);
        return;
      }
      if (event.key !== "Tab" || !drawerRef.current) return;

      const controls = [...drawerRef.current.querySelectorAll(focusableSelector)]
        .filter((element) => !element.hasAttribute("disabled"));
      if (!controls.length) return;
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleDrawerKeys);
    return () => {
      window.removeEventListener("keydown", handleDrawerKeys);
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
    };
  }, [isMenuOpen]);

  const goToStore = (event, target) => {
    event.preventDefault();
    closeMenu(false);
    onNavigateStore?.(target);
  };

  const openBoutique = (event, view) => {
    event.preventDefault();
    closeMenu(false);
    onOpenBoutique?.(view);
  };

  const openTeam = (event) => {
    event.preventDefault();
    closeMenu(false);
    onOpenTeam?.();
  };

  const openPlay = (event) => {
    event.preventDefault();
    closeMenu(false);
    onOpenPlay?.();
  };

  const openShipping = (event) => {
    event.preventDefault();
    closeMenu(false);
    onOpenShipping?.();
  };

  const openCart = () => {
    closeMenu(false);
    onOpenCart?.();
  };

  const linkClass = (view, tone = view) => [
    "header__link",
    `header__link--${tone}`,
    activeView === view ? "header__link--active" : ""
  ].filter(Boolean).join(" ");

  const shopIsActive = ["all", "bundles", "search"].includes(activeView);

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
          aria-label={isMenuOpen ? t("common.close") : t("navigation.menu")}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation-drawer"
          ref={menuButtonRef}
          onClick={() => {
            if (isMenuOpen) {
              closeMenu(false);
            } else {
              setIsMenuOpen(true);
              setIsShopOpen(false);
            }
          }}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>

        <nav className="header__nav" id="primary-navigation" aria-label={t("navigation.main")}>
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
              <a href="/bundles" onClick={(event) => openBoutique(event, "bundles")}>{t("navigation.bundles")}</a>
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
          <a
            className={`${linkClass("play", "play")}${["powerCheck", "code10", "bowracle"].includes(activeView) ? " header__link--active" : ""}`}
            href="/play"
            onClick={openPlay}
            aria-current={["play", "powerCheck", "code10", "bowracle"].includes(activeView) ? "page" : undefined}
          >
            {t("navigation.play")}
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
          {customerAccountsVisible ? (
            <button className="header__login" type="button" onClick={onOpenLogin}>
              {authUser ? t("navigation.greeting", { name: authUser.name }) : t("navigation.account")}
            </button>
          ) : null}
          <button className="header__cart" type="button" onClick={openCart} aria-label={t("navigation.bagLabel", { count: cartCount })}>
            {t("navigation.bag")} <span>{cartCount}</span>
          </button>
        </div>
      </div>

      <div
        className={`header__drawer-layer${isMenuOpen ? " header__drawer-layer--open" : ""}`}
        aria-hidden={!isMenuOpen}
      >
        <button
          className="header__drawer-backdrop"
          type="button"
          aria-label={t("common.close")}
          tabIndex={isMenuOpen ? 0 : -1}
          onClick={() => closeMenu(true)}
        />
        <aside
          className="header__drawer"
          id="mobile-navigation-drawer"
          role="dialog"
          aria-modal="true"
          aria-label={t("navigation.main")}
          ref={drawerRef}
        >
          <div className="header__drawer-top">
            <strong>PRFCT10</strong>
            <button type="button" onClick={() => closeMenu(true)} aria-label={t("common.close")}>×</button>
          </div>

          <form className="header__drawer-search" role="search" onSubmit={(event) => {
            event.preventDefault();
            closeMenu(false);
          }}>
            <label htmlFor="mobile-site-search">{t("navigation.search")}</label>
            <input
              id="mobile-site-search"
              type="search"
              value={searchQuery}
              onChange={(event) => onSearchChange?.(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") closeMenu(false);
              }}
              placeholder={t("navigation.searchPlaceholder")}
            />
          </form>

          <nav className="header__drawer-nav" aria-label={t("navigation.main")}>
            <section>
              <h2>{t("navigation.shop")}</h2>
              {mobileShopLinks.map((link) => (
                <a
                  href={link.href}
                  key={link.view}
                  aria-current={activeView === link.view ? "page" : undefined}
                  onClick={(event) => openBoutique(event, link.view)}
                >
                  {t(link.labelKey)}
                </a>
              ))}
              <a href="/team" onClick={openTeam}>{t("navigation.team")}</a>
              <a href="/play" onClick={openPlay}>{t("navigation.play")}</a>
            </section>

            <section>
              <h2>{t("footer.explore")}</h2>
              <a href="/#standard" onClick={(event) => goToStore(event, "#standard")}>{t("footer.standard")}</a>
              <a href="/shop#shipping-info" onClick={openShipping}>{t("footer.usShipping")}</a>
            </section>

            {customerAccountsVisible ? (
              <section>
                <h2>{t("navigation.account")}</h2>
                <button type="button" onClick={() => {
                  closeMenu(false);
                  onOpenLogin?.();
                }}>
                  {authUser ? t("navigation.greeting", { name: authUser.name }) : t("navigation.account")}
                </button>
              </section>
            ) : null}
          </nav>

          <div className="header__drawer-language" role="group" aria-label={t("language.label")}>
            <span>{t("language.label")}</span>
            <div>
              <button type="button" aria-pressed={locale === "en"} onClick={() => setLocale("en")}>EN</button>
              <button type="button" aria-pressed={locale === "es"} onClick={() => setLocale("es")}>ES</button>
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}
