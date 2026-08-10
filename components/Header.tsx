'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import type { Locale } from '@/lib/i18n'
import { copy, withLocale } from '@/lib/i18n'
import { ThemeToggle } from './ThemeToggle'

export function Header({ locale, pathname }: { locale: Locale; pathname: string }) {
  const [open, setOpen] = useState(false)
  const t = copy[locale]

  useEffect(() => {
    document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en'
  }, [locale])
  const links = [
    ['/characters', t.nav[0]],
    ['/doppelgangers', t.nav[1]],
    ['/walkthrough', t.nav[2]],
    ['/doppelgangers/the-dentist', t.nav[3]],
    ['/endings', t.nav[4]],
    ['/guides', t.nav[5]],
  ]

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href={withLocale('/', locale)} className="brand" aria-label={t.brand}>
          <span className="brand-mark" aria-hidden="true">SM</span>
          <span>{t.brand}</span>
        </Link>
        <nav className={open ? 'top-nav open' : 'top-nav'} aria-label="Primary navigation">
          {links.map(([href, label]) => <Link key={href} href={withLocale(href, locale)}>{label}</Link>)}
        </nav>
        <div className="header-tools">
          <Link className="language-switch" href={`${pathname}?lang=${locale === 'en' ? 'zh' : 'en'}`}>{locale === 'en' ? '中' : 'EN'}</Link>
          <ThemeToggle />
          <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu"><span /><span /><span /></button>
        </div>
      </div>
    </header>
  )
}
