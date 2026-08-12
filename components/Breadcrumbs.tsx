import Link from 'next/link'
import type { Locale } from '@/lib/i18n'
import { withLocale } from '@/lib/i18n'

export function Breadcrumbs({ locale, detail, sectionHref = '/doppelgangers', sectionLabel }: { locale: Locale; detail?: string; sectionHref?: string; sectionLabel?: string }) {
  const defaultLabel = locale === 'zh' ? '替身怪' : 'Doppelgangers'
  return <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href={withLocale('/', locale)}>⌂</Link><span>›</span><Link href={withLocale(sectionHref, locale)}>{sectionLabel ?? defaultLabel}</Link>{detail && <><span>›</span><b>{detail}</b></>}</nav>
}
