import type { Locale } from '@/lib/i18n'
import { Header } from './Header'
import { Sidebar } from './Sidebar'
import { Footer } from './Footer'

export function Shell({ children, locale, pathname }: { children: React.ReactNode; locale: Locale; pathname: string }) {
  return (
    <>
      <Header locale={locale} pathname={pathname} />
      <div className="site-shell">
        <main>{children}</main>
        <Sidebar locale={locale} pathname={pathname} />
      </div>
      <Footer locale={locale} />
    </>
  )
}
