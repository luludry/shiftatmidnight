import Link from 'next/link'
import type { Locale } from '@/lib/i18n'
import { withLocale } from '@/lib/i18n'
import { siteData } from '@/lib/site-data'

export function Footer({ locale }: { locale: Locale }) {
  const zh = locale === 'zh'
  const data = siteData[locale]

  return (
    <footer className="footer">
      <div className="footer-note">{data.hero.eyebrow}</div>
      <div className="footer-grid">
        <div className="footer-brand">
          <span className="brand-mark" aria-hidden="true">SM</span>
          <div>
            <strong>{data.footer.aboutTitle}</strong>
            <p>{data.meta.description}</p>
          </div>
        </div>
        <div>
          <h4>{zh ? '官方链接' : 'Official Links'}</h4>
          <span className="pending-link">{data.footer.playGame} · {data.footer.pending}</span>
          <span className="pending-link">{data.footer.officialDiscord} · {data.footer.pending}</span>
        </div>
        <div>
          <h4>{zh ? '法律信息' : 'Legal'}</h4>
          <Link href={withLocale('/privacy-policy', locale)}>{zh ? '隐私政策' : 'Privacy Policy'}</Link>
          <Link href={withLocale('/terms-of-service', locale)}>{zh ? '服务条款' : 'Terms of Service'}</Link>
        </div>
      </div>
      <div className="copyright">© 2026 Shift At Midnight Wiki. {data.hero.eyebrow}.</div>
    </footer>
  )
}
