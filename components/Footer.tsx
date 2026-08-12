import Image from 'next/image'
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
          <div>
            <div className="footer-brand-title">
              <Image
                alt="Shift At Midnight"
                className="rounded-md"
                height={36}
                src="/logo.png"
                width={36}
              />
              <strong>{data.footer.aboutTitle}</strong>
            </div>
            <p>{data.meta.description}</p>
          </div>
        </div>
        <div>
          <h4>{zh ? '浏览资料站' : 'Explore'}</h4>
          <Link href={withLocale('/doppelgangers', locale)}>{zh ? '替身怪图鉴' : 'Doppelgangers'}</Link>
          <Link href={withLocale('/guides', locale)}>{zh ? '攻略' : 'Guides'}</Link>
          <Link href={withLocale('/guides/all-endings', locale)}>{zh ? '全部结局' : 'Endings'}</Link>
        </div>
        <div>
          <h4>{zh ? '官方链接' : 'Official Link'}</h4>
          <a href="https://store.steampowered.com/app/3722330/Shift_At_Midnight/" target="_blank" rel="noreferrer">{data.footer.playGame}</a>
        </div>
      </div>
      <div className="copyright">© 2026 Shift At Midnight Wiki. {data.hero.eyebrow}.</div>
    </footer>
  )
}
