// GSAP animation and utils function to anime
import gsap from "gsap";

const addToRef = (el, ref) => {
  if (el && !ref.current.includes(el)) {
    ref.current.push(el);
  }
};

export const starAnimation = (target, stagger) => {
  return gsap.fromTo(
    target,
    { autoAlpha: 0, scale: 0.3 },
    { autoAlpha: 1, scale: 1.2, stagger }
  );
};

export const homeAnimation = (target, y, duration, autoAlpha, delay) => {
  return gsap.to(target, { y, autoAlpha, duration, delay });
};

export const fadeIn = (target) => {
  return gsap.to(target, {
    autoAlpha: 1,
    y: 0,
  });
};

export default addToRef;
