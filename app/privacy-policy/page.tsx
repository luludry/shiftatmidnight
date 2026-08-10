import { Shell } from '@/components/Shell'
import { getLocale } from '@/lib/i18n'

export const metadata = { title: 'Privacy Policy' }

export default async function PrivacyPolicyPage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const locale = getLocale((await searchParams).lang)
  const zh = locale === 'zh'

  return (
    <Shell locale={locale} pathname="/privacy-policy">
      <article className="wiki-article generic-page legal-page">
        <p className="eyebrow">Shift At Midnight Wiki</p>
        <h1>{zh ? '隐私政策' : 'Privacy Policy'}</h1>
        <p className="dek">{zh ? '隐私政策内容待确认。' : 'Privacy policy details are pending confirmation.'}</p>
      </article>
    </Shell>
  )
}
