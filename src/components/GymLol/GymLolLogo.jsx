import "./GymLolLogo.css";

export default function GymLolLogo({ variant = "default", labelled = false }) {
  return (
    <span
      className={`gym-lol-logo gym-lol-logo--${variant}`}
      aria-label={labelled ? "GYM LOL by PRFCT10 PLAY" : undefined}
      aria-hidden={labelled ? undefined : "true"}
    >
      <img src="/images/play/gym-lol-logo-white.png" alt="" />
    </span>
  );
}
