export function NavigationIcon({ name }: { name: 'home' | 'doppelgangers' | 'guides' | 'endings' }) {
  const paths = {
    home: <><path d="M4 10.5 12 4l8 6.5" /><path d="M6.5 9.5V20h11V9.5" /><path d="M10 20v-6h4v6" /></>,
    doppelgangers: <><circle cx="12" cy="8" r="3" /><path d="M6 20c.6-4 2.6-6 6-6s5.4 2 6 6" /><path d="M4 5.5 7 3M20 5.5 17 3" /></>,
    guides: <><path d="M4 5.5A3.5 3.5 0 0 1 7.5 2H11v17H7.5A3.5 3.5 0 0 0 4 22Z" /><path d="M20 5.5A3.5 3.5 0 0 0 16.5 2H13v17h3.5A3.5 3.5 0 0 1 20 22Z" /></>,
    endings: <><path d="M12 3v18M12 7l-5-3M12 11l5-3M12 15l-5 3" /><circle cx="12" cy="3" r="1" /></>,
  }

  return <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>
}
