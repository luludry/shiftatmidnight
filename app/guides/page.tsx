import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Shell } from '@/components/Shell'
import { getLocale, withLocale } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Shift At Midnight Guides',
  description: 'Browse Shift At Midnight guides for crossplay, multiplayer player counts, autosave behavior, quitting penalties, and host progression.',
}

const guides = [
  {
    href: '/guides/crossplay',
    en: 'Crossplay & Multiplayer',
    zh: '跨平台与多人联机',
    enDescription: 'Platforms, player counts, crossplay limits, proximity chat, and split-screen support.',
    zhDescription: '查看支持平台、联机人数、跨平台限制、局域语音与本地分屏信息。',
  },
  {
    href: '/guides/save-mechanics',
    en: 'Save Mechanics',
    zh: '存档机制',
    enDescription: 'How autosave works, what happens after quitting, and which progress belongs to the host.',
    zhDescription: '了解自动存档、中途退出后果，以及多人游戏中房主与客机保存的进度。',
  },
] as const

export default async function GuidesPage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const locale = getLocale((await searchParams).lang)
  const zh = locale === 'zh'

  return (
    <Shell locale={locale} pathname="/guides">
      <article className="wiki-article list-page">
        <Breadcrumbs locale={locale} sectionHref="/guides" sectionLabel={zh ? '攻略' : 'Guides'} />
        <h1>{zh ? 'Shift At Midnight 攻略' : 'Shift At Midnight Guides'}</h1>
        <p className="dek">{zh ? '选择已有完整内容的攻略，了解多人联机与存档机制。' : 'Choose a complete guide for multiplayer or save mechanics.'}</p>
        <div className="guide-grid">
          {guides.map((guide) => (
            <Link className="guide-card featured" href={withLocale(guide.href, locale)} key={guide.href}>
              <div><h2>{zh ? guide.zh : guide.en}</h2></div>
              <p>{zh ? guide.zhDescription : guide.enDescription}</p>
              <b>{zh ? '查看攻略' : 'View guide'} →</b>
            </Link>
          ))}
        </div>
      </article>
    </Shell>
  )
}
