export const APPARATUS_ASSETS = Object.freeze({
  vault: "/images/play/apparatus-vault.png",
  bars: "/images/play/apparatus-bars.png",
  beam: "/images/play/apparatus-beam.png",
  floor: "/images/play/apparatus-floor.png",
  allAround: "/images/play/gymnast-flight.png"
});

export const POWER_PLAY_ASSETS = Object.freeze({
  gymnast: "/images/play/gymnast-flight.png",
  bolt: "/images/play/power-bolt.png",
  logo: "/images/play/prfct10-logo-exact.svg",
  mark: "/images/play/prfct10-imagotype.svg",
  y2kLogo: "/images/play/prfct10-logo-y2k.png"
});

export const PLAY_STICKERS = Object.freeze({
  gymnastBeamHandstand: "/images/play/stickers/gymnast-beam-handstand.png",
  gymnastLegHold: "/images/play/stickers/gymnast-leg-hold.png",
  gymnastSplit: "/images/play/stickers/gymnast-split.png",
  gymnastFloorPose: "/images/play/stickers/gymnast-floor-pose.png",
  gymnastRingPose: "/images/play/stickers/gymnast-ring-pose.png",
  gymnastLeap: "/images/play/stickers/gymnast-leap.png",
  gymnastFinish: "/images/play/stickers/gymnast-finish.png",
  gymnastTuck: "/images/play/stickers/gymnast-tuck.png",
  gymnastOrange: "/images/play/stickers/gymnast-orange.png",
  flowerSmile: "/images/play/stickers/flower-smile.png",
  flowerLime: "/images/play/stickers/flower-lime.png",
  bowPink: "/images/play/stickers/bow-pink.png",
  bowDashboard: "/images/play/stickers/bow-lab-dashboard.svg",
  pomBow: "/images/play/stickers/pom-bow.png",
  shootingStar: "/images/play/stickers/shooting-star.png",
  crown: "/images/play/stickers/crown.png",
  grips: "/images/play/stickers/grips.png",
  pixelCheck: "/images/play/stickers/pixel-check.png",
  boltBlue: "/images/play/stickers/bolt-blue.png",
  vault: "/images/play/stickers/vault.png",
  rings: "/images/play/stickers/rings.png"
});

export function getApparatusAsset(apparatusId) {
  return APPARATUS_ASSETS[apparatusId] || APPARATUS_ASSETS.allAround;
}
