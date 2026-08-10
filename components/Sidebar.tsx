import Link from 'next/link'
import type { Locale } from '@/lib/i18n'
import { withLocale } from '@/lib/i18n'
import { siteData } from '@/lib/site-data'

const items = [
  ['▣', 'Getting Started', '入门指南', '/'],
  ['◎', 'Characters', '角色', '/characters'],
  ['◈', 'Doppelgangers', '替身怪', '/doppelgangers'],
  ['⌖', 'Walkthrough', '完整流程', '/walkthrough'],
  ['◇', 'Monsters & Entities', '怪物与实体', '/doppelgangers/the-dentist'],
  ['⌁', 'Multiplayer & Crossplay', '多人模式与跨平台', '/guides'],
  ['☆', 'Endings & Achievements', '结局与成就', '/endings'],
]

export function Sidebar({ locale, active = 'Doppelgangers' }: { locale: Locale; active?: string }) {
  const zh = locale === 'zh'
  const data = siteData[locale]

  return (
    <aside className="sidebar">
      <nav aria-label="Wiki navigation">
        <p className="eyebrow">{zh ? '资料站导航' : 'WIKI NAVIGATION'}</p>
        <div className="sidebar-list">
          {items.map(([icon, en, labelZh, href]) => (
            <Link className={active === en ? 'sidebar-item active' : 'sidebar-item'} key={en} href={withLocale(href, locale)}>
              <span className="side-icon">{icon}</span>
              <span>{zh ? labelZh : en}</span>
              <i>⌄</i>
            </Link>
          ))}
        </div>

        {active === 'Doppelgangers' && (
          <div className="sidebar-subnav">
            <Link className="current" href={withLocale('/doppelgangers', locale)}>{zh ? '图鉴总览' : 'Overview'}</Link>
            <Link href={withLocale('/doppelgangers/the-dentist', locale)}>Dentist</Link>
            <Link href={withLocale('/doppelgangers', locale)}>Marionette</Link>
            <Link href={withLocale('/doppelgangers', locale)}>Norbert</Link>
          </div>
        )}

        <div className="field-card codes-card">
          <span>{data.codes.eyebrow}</span>
          <strong>{data.codes.title}</strong>
          <p>{data.codes.empty}</p>
        </div>
      </nav>
    </aside>
  )
}
