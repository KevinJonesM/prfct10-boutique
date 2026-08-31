import { useEffect } from "react";

// Progressive enhancement: cards remain usable without IntersectionObserver.
export default function usePortalEntrance(ref) {
  useEffect(() => {
    if (!ref.current || !window.IntersectionObserver || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const cards = [...ref.current.children];
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.dataset.reveal = "visible";
        observer.unobserve(entry.target);
      });
    }, { threshold: .12 });
    cards.forEach(card => { card.dataset.reveal = "pending"; observer.observe(card); });
    return () => { observer.disconnect(); cards.forEach(card => delete card.dataset.reveal); };
  }, [ref]);
}
