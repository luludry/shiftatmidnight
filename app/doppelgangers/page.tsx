import Link from 'next/link'
import { Breadcrumbs } from '@/components/Breadcrumbs'
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
    <Shell locale={locale} pathname="/doppelgangers" active="Doppelgangers">
      <article className="wiki-article list-page">
        <Breadcrumbs locale={locale} />
        <figure className="article-cover article-cover-placeholder">
          <div className="cover-monogram" aria-hidden="true">SM</div>
          <figcaption>{zh ? '资料待确认' : 'Details pending confirmation'}</figcaption>
        </figure>
        <h1>{zh ? '替身怪图鉴' : 'Doppelgangers'}</h1>
        <p className="dek">
          {zh
            ? '学习识别 Marionette、Dentist、Norbert 以及其他冒名者。'
            : 'Learn to identify Marionette, Dentist, Norbert, and other impostors.'}
        </p>
        <div className="mdx-body"><Intro /></div>
        <h2>{zh ? '替身怪列表' : 'Doppelgangers List'}</h2>
        <div className="guide-grid">
          {doppelgangers.map((item) => (
            <Link
              className={item.slug === 'the-dentist' ? 'guide-card featured' : 'guide-card'}
              key={item.slug}
              href={item.slug === 'the-dentist' ? withLocale('/doppelgangers/the-dentist', locale) : withLocale('/doppelgangers', locale)}
            >
              <div><h3>{zh ? item.zh : item.name}</h3></div>
              <p>{zh ? item.zhNote : item.note}</p>
              <b>{item.slug === 'the-dentist' ? (zh ? '查看页面' : 'View page') : (zh ? '待确认' : 'Pending confirmation')} →</b>
            </Link>
          ))}
        </div>
      </article>
    </Shell>
  )
}
