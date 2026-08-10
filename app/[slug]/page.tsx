import Link from 'next/link'
import { Shell } from '@/components/Shell'
import { getLocale, withLocale } from '@/lib/i18n'

export default async function GenericPage({ params, searchParams }: { params: Promise<{ slug: string }>, searchParams: Promise<{ lang?: string }> }) {
  const { slug } = await params
  const locale = getLocale((await searchParams).lang)
  const zh = locale === 'zh'

  return (
    <Shell locale={locale} pathname={`/${slug}`}>
      <article className="wiki-article generic-page">
        <p className="eyebrow">Shift At Midnight Wiki</p>
        <h1>{slug.replaceAll('-', ' ')}</h1>
        <p className="dek">{zh ? '此页面内容待确认。' : 'Page content is pending confirmation.'}</p>
        <div className="hero-actions hero-actions-two">
          <Link href={withLocale('/', locale)}>{zh ? '返回首页' : 'Back to home'} →</Link>
          <Link href={withLocale('/doppelgangers', locale)}>{zh ? '替身怪图鉴' : 'Doppelgangers'} →</Link>
        </div>
      </article>
    </Shell>
  )
}
