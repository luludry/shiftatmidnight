import type { Metadata } from 'next'
import Link from 'next/link'
import { Shell } from '@/components/Shell'
import { getLocale, withLocale } from '@/lib/i18n'
import { siteData } from '@/lib/site-data'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const locale = getLocale((await searchParams).lang)
  const data = siteData[locale]

  return {
    title: { absolute: data.meta.title },
    description: data.meta.description,
    keywords: [...data.meta.keywords],
  }
}

export default async function Home({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const locale = getLocale((await searchParams).lang)
  const data = siteData[locale]
  const zh = locale === 'zh'
  const cardLinks = ['/guides', '/doppelgangers', '/guides', '/endings']

  return (
    <Shell locale={locale} pathname="/" active="Getting Started">
      <section className="home-hero">
        <div className="title-row">
          <h1>{data.hero.title}</h1>
          <span>{data.hero.eyebrow}</span>
        </div>

        <div className="video-frame trailer-placeholder" aria-label={data.hero.videoLabel}>
          <div className="trailer-monogram" aria-hidden="true">SM</div>
          <strong className="video-label">{data.hero.videoLabel}</strong>
          <small>{zh ? '链接待确认' : 'Link pending confirmation'}</small>
        </div>

        <p className="hero-copy">{data.hero.description}</p>
        <div className="stat-chips">
          {data.hero.stats.map((stat) => <span key={stat}>{stat}</span>)}
        </div>
        <div className="hero-actions hero-actions-two">
          <Link href={withLocale('/guides', locale)}>{data.hero.primaryCta}<b>→</b></Link>
          <Link href={withLocale('/doppelgangers', locale)}>{data.hero.secondaryCta}<b>→</b></Link>
        </div>
      </section>

      <section className="home-section">
        <p className="eyebrow">{data.start.eyebrow}</p>
        <h2>{data.start.title}</h2>
        <div className="journey-grid">
          {data.start.cards.map((card, index) => (
            <Link className="journey-card" key={card.number} href={withLocale(cardLinks[index], locale)}>
              <b>{card.number}</b>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-section game-intro">
        <p className="eyebrow">{data.intro.eyebrow}</p>
        <h2>{data.intro.title}</h2>
        <p>{data.intro.description}</p>
        <p>{data.intro.detail}</p>
        <dl className="intro-facts">
          <div><dt>{zh ? '上线时间' : 'Launch'}</dt><dd>{data.hero.stats[0]}</dd></div>
          <div><dt>{zh ? '剧情夜班' : 'Story'}</dt><dd>{data.hero.stats[1]}</dd></div>
          <div><dt>{zh ? '合作人数' : 'Co-op'}</dt><dd>{data.hero.stats[2]}</dd></div>
        </dl>
      </section>

      <section className="home-section codes-section">
        <p className="eyebrow">{data.codes.eyebrow}</p>
        <div className="codes-panel">
          <div><h2>{data.codes.title}</h2><p>{data.codes.empty}</p></div>
          <span>{data.codes.empty}</span>
        </div>
      </section>

      <section className="home-section bottom-cta">
        <p className="eyebrow">{data.hero.eyebrow}</p>
        <h2>{data.hero.title}</h2>
        <p>{data.hero.description}</p>
        <div className="hero-actions hero-actions-two">
          <Link href={withLocale('/guides', locale)}>{data.hero.primaryCta}<b>→</b></Link>
          <Link href={withLocale('/doppelgangers', locale)}>{data.hero.secondaryCta}<b>→</b></Link>
        </div>
      </section>
    </Shell>
  )
}
