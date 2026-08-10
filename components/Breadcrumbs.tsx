import Link from 'next/link'
import type { Locale } from '@/lib/i18n'
import { withLocale } from '@/lib/i18n'

export function Breadcrumbs({ locale, detail }: { locale: Locale; detail?: string }) {
  return <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href={withLocale('/', locale)}>⌂</Link><span>›</span><Link href={withLocale('/doppelgangers', locale)}>{locale === 'zh' ? '替身怪' : 'Doppelgangers'}</Link>{detail && <><span>›</span><b>{detail}</b></>}</nav>
}
