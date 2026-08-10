import { Shell } from '@/components/Shell'
import { getLocale } from '@/lib/i18n'

export const metadata = { title: 'Terms of Service' }

export default async function TermsOfServicePage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const locale = getLocale((await searchParams).lang)
  const zh = locale === 'zh'

  return (
    <Shell locale={locale} pathname="/terms-of-service">
      <article className="wiki-article generic-page legal-page">
        <p className="eyebrow">Shift At Midnight Wiki</p>
        <h1>{zh ? '服务条款' : 'Terms of Service'}</h1>
        <p className="dek">{zh ? '服务条款内容待确认。' : 'Terms of service details are pending confirmation.'}</p>
      </article>
    </Shell>
  )
}
