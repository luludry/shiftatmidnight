import Link from 'next/link'
import type { Locale } from '@/lib/i18n'
import { withLocale } from '@/lib/i18n'
import { doppelgangers } from '@/lib/content'
import { guideNavigation, isNavigationCurrent, navigationLabel, primaryNavigation } from '@/lib/navigation'
import { NavigationIcon } from './NavigationIcon'

const iconNames = ['home', 'doppelgangers', 'guides', 'endings'] as const

export function Sidebar({ locale, pathname = '' }: { locale: Locale; pathname?: string }) {
  const zh = locale === 'zh'

  return (
    <aside className="sidebar">
      <nav aria-label="Wiki navigation">
        <p className="eyebrow">{zh ? '资料站导航' : 'WIKI NAVIGATION'}</p>
        <div className="sidebar-list">
          {primaryNavigation.map((item, index) => (
            <Link
              aria-current={isNavigationCurrent(pathname, item.href) ? 'page' : undefined}
              className={isNavigationCurrent(pathname, item.href) ? 'sidebar-item active' : 'sidebar-item'}
              key={item.href}
              href={withLocale(item.href, locale)}
            >
              <span className="side-icon"><NavigationIcon name={iconNames[index]} /></span>
              <span>{navigationLabel(item, locale)}</span>
            </Link>
          ))}
        </div>

        {pathname.startsWith('/doppelgangers') && (
          <div className="sidebar-subnav">
            <Link className={pathname === '/doppelgangers' ? 'current' : undefined} href={withLocale('/doppelgangers', locale)}>{zh ? '图鉴总览' : 'Overview'}</Link>
            {doppelgangers.map((item) => (
              <Link className={pathname === `/doppelgangers/${item.slug}` ? 'current' : undefined} href={withLocale(`/doppelgangers/${item.slug}`, locale)} key={item.slug}>{zh ? item.zh : item.name}</Link>
            ))}
          </div>
        )}

        {(pathname === '/guides' || (pathname.startsWith('/guides/') && pathname !== '/guides/all-endings')) && (
          <div className="sidebar-subnav">
            {guideNavigation.map((item) => (
              <Link className={pathname === item.href ? 'current' : undefined} href={withLocale(item.href, locale)} key={item.href}>{navigationLabel(item, locale)}</Link>
            ))}
          </div>
        )}

        <div className="field-card game-info-card">
          <span>{zh ? '游戏信息' : 'Game Info'}</span>
          <dl>
            <div><dt>{zh ? '平台' : 'Platforms'}</dt><dd>Steam / Xbox</dd></div>
            <div><dt>{zh ? '模式' : 'Mode'}</dt><dd>{zh ? '1-4 人在线合作' : '1-4 Player Online Co-op'}</dd></div>
          </dl>
        </div>
      </nav>
    </aside>
  )
}
