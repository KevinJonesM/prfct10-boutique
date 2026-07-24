import { useCallback, useEffect, useState } from "react";
import NewsletterModal from "./NewsletterModal";
import { newsletterIntegration } from "../../services/newsletter";
import "./Newsletter.css";

const SESSION_KEY = "prfct10-newsletter-shown";
const DISMISSED_KEY = "prfct10-newsletter-dismissed-at";
const DISMISSAL_DURATION = 7 * 24 * 60 * 60 * 1000;
const TIME_TRIGGER = 12000;
const SCROLL_TRIGGER = 0.4;

const readStorage = (storage, key) => {
  try {
    return storage.getItem(key);
  } catch {
    return null;
  }
};

const writeStorage = (storage, key, value) => {
  try {
    storage.setItem(key, value);
  } catch {
    // Storage may be unavailable in privacy modes; the modal remains session-safe in memory.
  }
};

export default function NewsletterExperience({ enabled = true }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  const openModal = useCallback(() => {
    if (hasTriggered) return;
    setHasTriggered(true);
    setIsOpen(true);
    writeStorage(window.sessionStorage, SESSION_KEY, "true");
  }, [hasTriggered]);

  const dismissModal = useCallback(() => {
    setIsOpen(false);
    writeStorage(window.localStorage, DISMISSED_KEY, String(Date.now()));
  }, []);

  useEffect(() => {
    const canShowPopup = enabled && (newsletterIntegration.configured || import.meta.env.DEV);
    if (!canShowPopup || hasTriggered) return undefined;
    if (readStorage(window.sessionStorage, SESSION_KEY)) return undefined;

    const dismissedAt = Number(readStorage(window.localStorage, DISMISSED_KEY) || 0);
    if (dismissedAt && Date.now() - dismissedAt < DISMISSAL_DURATION) return undefined;

    const timer = window.setTimeout(openModal, TIME_TRIGGER);
    const handleScroll = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollableHeight <= 0) return;
      if (window.scrollY / scrollableHeight >= SCROLL_TRIGGER) openModal();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [enabled, hasTriggered, openModal]);

  return <NewsletterModal isOpen={isOpen} onClose={dismissModal} onSuccess={dismissModal} />;
}
