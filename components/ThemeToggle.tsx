'use client'

export function ThemeToggle() {
  function toggle() {
    const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', next)
    document.documentElement.dataset.theme = next
  }

  return <button className="icon-button" onClick={toggle} aria-label="Toggle theme">◔</button>
}
