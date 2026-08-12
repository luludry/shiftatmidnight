import Link from 'next/link'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { DoppelgangerIcon } from '@/components/DoppelgangerIcon'
import { Shell } from '@/components/Shell'
import { doppelgangers } from '@/lib/content'
import { getLocale, withLocale } from '@/lib/i18n'

export const metadata = { title: 'Doppelgangers' }

export default async function DoppelgangersPage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const locale = getLocale((await searchParams).lang)
  const zh = locale === 'zh'
  const Intro = locale === 'zh'
    ? (await import('@/content/zh/doppelgangers.mdx')).default
    : (await import('@/content/en/doppelgangers.mdx')).default

  return (
    <Shell locale={locale} pathname="/doppelgangers">
      <article className="wiki-article list-page">
        <Breadcrumbs locale={locale} />
        <h1>{zh ? '替身怪图鉴' : 'Doppelgangers'}</h1>
        <p className="dek">
          {zh
            ? '浏览 The Dentist、Marionette、Norbert 与 Clyde / The Spider 的完整识别和生存攻略。'
            : 'Browse identification and survival guides for The Dentist, Marionette, Norbert, and Clyde / The Spider.'}
        </p>
        <div className="mdx-body"><Intro /></div>
        <div className="guide-grid">
          {doppelgangers.map((item) => (
            <Link className="guide-card doppelganger-card" key={item.slug} href={withLocale(`/doppelgangers/${item.slug}`, locale)}>
              <div className="doppelganger-card-icon"><DoppelgangerIcon slug={item.slug} /></div>
              <div><h2>{zh ? item.zh : item.name}</h2></div>
              <p>{zh ? item.zhNote : item.note}</p>
              <b>{zh ? '查看图鉴' : 'View profile'} →</b>
            </Link>
          ))}
        </div>
      </article>
    </Shell>
  )
}
