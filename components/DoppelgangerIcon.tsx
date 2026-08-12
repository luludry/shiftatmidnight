export function DoppelgangerIcon({ slug }: { slug: string }) {
  if (slug === 'the-dentist') {
    return <svg viewBox="0 0 80 80" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2"><path d="M25 20c4-8 26-8 30 0v20c0 14-7 24-15 24S25 54 25 40Z" /><path d="M30 41h20M32 41l3 7 5-7 5 7 3-7" /><path d="M32 28h2M46 28h2" /></svg>
  }
  if (slug === 'marionette') {
    return <svg viewBox="0 0 80 80" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="40" cy="25" r="8" /><path d="M40 33v16M40 38 26 48M40 38l14 10M40 49 30 64M40 49l10 15M24 10l2 38M56 10l-2 38" /><circle cx="26" cy="48" r="2" /><circle cx="54" cy="48" r="2" /></svg>
  }
  if (slug === 'norbert') {
    return <svg viewBox="0 0 80 80" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2"><path d="M25 31c2-11 28-11 30 0v13c0 11-7 19-15 19s-15-8-15-19Z" /><path d="M24 29c4-13 28-13 32 0M20 31h26" /><circle cx="33" cy="40" r="2" /><circle cx="47" cy="40" r="2" /><path d="M35 51h10" /></svg>
  }
  return <svg viewBox="0 0 80 80" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="40" cy="38" rx="11" ry="15" /><path d="M29 31 17 20M28 38H13M29 45 17 57M51 31l12-11M52 38h15M51 45l12 12M36 24l-4-10M44 24l4-10M36 53l-4 12M44 53l4 12" /><circle cx="36" cy="35" r="1.5" /><circle cx="44" cy="35" r="1.5" /></svg>
}
