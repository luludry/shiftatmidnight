'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import type { Locale } from '@/lib/i18n'
import { copy, withLocale } from '@/lib/i18n'
import { isNavigationCurrent, navigationLabel, primaryNavigation } from '@/lib/navigation'
import { ThemeToggle } from './ThemeToggle'

export function Header({ locale, pathname }: { locale: Locale; pathname: string }) {
  const [open, setOpen] = useState(false)
  const t = copy[locale]

  useEffect(() => {
    document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en'
  }, [locale])
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href={withLocale('/', locale)} className="brand" aria-label={t.brand}>
          <Image
            alt="Shift At Midnight"
            className="rounded-md"
            height={36}
            src="/logo.png"
            width={36}
          />
          <span className="brand-title">{t.brand}</span>
        </Link>
        <nav className={open ? 'top-nav open' : 'top-nav'} aria-label="Primary navigation">
          {primaryNavigation.map((item) => (
            <Link
              aria-current={isNavigationCurrent(pathname, item.href) ? 'page' : undefined}
              className={isNavigationCurrent(pathname, item.href) ? 'current' : undefined}
              key={item.href}
              href={withLocale(item.href, locale)}
              onClick={() => setOpen(false)}
            >
              {navigationLabel(item, locale)}
            </Link>
          ))}
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
