/** the nav pill: one clip-path that stretches from tab to tab */
export function slidePill(pill: HTMLElement, to: Edges) {
  const clip = (e: Edges) =>
    `inset(${e.t}px ${e.r}px ${e.b}px ${e.l}px round 99px)`;
  const st = { ...prev };
  const fwd = to.l > prev.l;
  // the leading edge runs ahead, the trailing edge catches up
  const [lead, trail] = fwd ? ['r', 'l'] : ['l', 'r'];
  const paint = () => gsap.set(pill, { clipPath: clip(st) });
  gsap.to(st, { [lead]: to[lead], duration: 0.36,
    ease: 'power3.out', onUpdate: paint });
  gsap.to(st, { [trail]: to[trail], duration: 0.55,
    ease: 'power3.inOut', onUpdate: paint });
}
