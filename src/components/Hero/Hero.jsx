import { useCallback, useEffect, useRef, useState } from "react";
import "./Hero.css";
import SignatureText from "../SignatureText/SignatureText";
import OptimizedImage from "../OptimizedImage/OptimizedImage";
import { useI18n } from "../../i18n/I18nProvider";

const campaignSlides = [
  {
    id: "training",
    image: "/images/hero-gymnast-pastel-bar.jpeg",
    position: "right center",
    label: "Training campaign"
  },
  {
    id: "accessories",
    image: "/images/hero-campaign-beam-v2.jpg",
    position: "center center",
    label: "Accessories campaign"
  },
  {
    id: "mind-gym",
    image: "/images/hero-campaign-ribbon-v2.jpg",
    position: "center center",
    label: "Mind Gym campaign"
  },
  {
    id: "apparel",
    image: "/images/hero-campaign-movement-v2.jpg",
    position: "center center",
    label: "Apparel campaign"
  }
];

const AUTOPLAY_DELAY = 6500;
const SWIPE_THRESHOLD = 48;

export default function Hero({ onOpenBoutique }) {
  const { t } = useI18n();
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocusWithin, setIsFocusWithin] = useState(false);
  const [isDocumentHidden, setIsDocumentHidden] = useState(false);
  const [timerVersion, setTimerVersion] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isPausedByUser, setIsPausedByUser] = useState(false);
  const [loadedSlideIndexes, setLoadedSlideIndexes] = useState([0]);
  const heroRef = useRef(null);
  const touchStartX = useRef(null);

  const selectSlide = useCallback((nextIndex) => {
    const normalizedIndex = (nextIndex + campaignSlides.length) % campaignSlides.length;
    setLoadedSlideIndexes((current) => current.includes(normalizedIndex) ? current : [...current, normalizedIndex]);
    setActiveSlide(normalizedIndex);
    setTimerVersion((version) => version + 1);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setPrefersReducedMotion(mediaQuery.matches);
    updateMotionPreference();
    mediaQuery.addEventListener?.("change", updateMotionPreference);
    return () => mediaQuery.removeEventListener?.("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    const updateVisibility = () => setIsDocumentHidden(document.hidden);
    updateVisibility();
    document.addEventListener("visibilitychange", updateVisibility);
    return () => document.removeEventListener("visibilitychange", updateVisibility);
  }, []);

  useEffect(() => {
    if (isHovered || isFocusWithin || isDocumentHidden || prefersReducedMotion || isPausedByUser) return undefined;

    const timer = window.setTimeout(() => {
      selectSlide(activeSlide + 1);
    }, AUTOPLAY_DELAY);

    return () => window.clearTimeout(timer);
  }, [activeSlide, isDocumentHidden, isFocusWithin, isHovered, isPausedByUser, prefersReducedMotion, selectSlide, timerVersion]);

  useEffect(() => {
    const nextIndex = (activeSlide + 1) % campaignSlides.length;
    const preloadTimer = window.setTimeout(() => {
      setLoadedSlideIndexes((current) => current.includes(nextIndex) ? current : [...current, nextIndex]);
    }, 1800);

    return () => window.clearTimeout(preloadTimer);
  }, [activeSlide]);

  const handleFocusOut = (event) => {
    if (!heroRef.current?.contains(event.relatedTarget)) setIsFocusWithin(false);
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;
    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const distance = endX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(distance) < SWIPE_THRESHOLD) return;
    selectSlide(activeSlide + (distance < 0 ? 1 : -1));
  };

  return (
    <section
      className="hero"
      id="inicio"
      ref={heroRef}
      aria-label={t("home.hero.label")}
      aria-roledescription="carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsFocusWithin(true)}
      onBlurCapture={handleFocusOut}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="hero__slides" aria-hidden="true">
        {campaignSlides.map((slide, index) => loadedSlideIndexes.includes(index) ? (
          <OptimizedImage
            className={`hero__slide${index === activeSlide ? " hero__slide--active" : ""}`}
            key={slide.id}
            src={slide.image}
            alt=""
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "low"}
            width="1800"
            height="1200"
            style={{ "--hero-slide-position": slide.position }}
          />
        ) : null)}
      </div>
      <div className="hero__overlay" />
      <div className="hero__content">
        <div className="hero__mark" aria-hidden="true">
          <OptimizedImage src="/images/prfct10-logo-white.png" alt="" loading="eager" width="120" height="120" />
        </div>
        <p className="hero__eyebrow">{t("home.hero.eyebrow")}</p>
        <SignatureText as="h1" className="hero__title" variant="hero">
          <span className="hero__title-line">{t("home.hero.title1")}</span>
          <span className="hero__title-line">{t("home.hero.title2")}</span>
        </SignatureText>
        <p className="hero__text">
          {t("home.hero.text")}
        </p>
        <div className="hero__actions">
          <button className="hero__button" type="button" onClick={onOpenBoutique}>{t("home.hero.shop")}</button>
          <a className="hero__button hero__button--secondary" href="#standard">{t("home.hero.standard")}</a>
        </div>
      </div>
      <div className="hero__pagination" role="group" aria-label={t("home.hero.images")}>
        {campaignSlides.map((slide, index) => (
          <button
            className={`hero__pagination-button${index === activeSlide ? " hero__pagination-button--active" : ""}`}
            key={slide.id}
            type="button"
            onClick={() => selectSlide(index)}
            aria-label={t("home.hero.imageLabel", { name: t({ training: "navigation.trainingGear", accessories: "navigation.accessories", "mind-gym": "navigation.mindGym", apparel: "navigation.apparel" }[slide.id]) })}
            aria-current={index === activeSlide ? "true" : undefined}
          >
            <span aria-hidden="true" />
          </button>
        ))}
        <button
          className="hero__pause"
          type="button"
          aria-label={t(isPausedByUser ? "home.hero.resume" : "home.hero.pause")}
          aria-pressed={isPausedByUser}
          onClick={() => setIsPausedByUser((current) => !current)}
        >
          {t(isPausedByUser ? "home.hero.play" : "home.hero.paused")}
        </button>
      </div>
      <span className="hero__scroll">{t("home.hero.scroll")}</span>
    </section>
  );
}
