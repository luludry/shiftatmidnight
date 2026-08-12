import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Shell } from '@/components/Shell'
import { getLocale } from '@/lib/i18n'

const seoTitle = 'Shift at Midnight Crossplay: Platforms & Player Count'
const seoDescription = 'Is Shift at Midnight crossplay, and how many players can join? It supports 1-4 players; Xbox works with PC Game Pass, but Steam does not support Xbox crossplay.'
const zhSeoDescription = 'Is Shift at Midnight crossplay，how many players？当前游戏支持 1-4 人联机。Xbox 主机可与 PC Game Pass 跨平台，Steam 不能与 Xbox 互通；支持局域语音，不支持本地分屏，未登陆 PS5 和 Switch。'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const locale = getLocale((await searchParams).lang)

  return {
    title: { absolute: seoTitle },
    description: locale === 'zh' ? zhSeoDescription : seoDescription,
    keywords: ['shift at midnight crossplay', 'is shift at midnight crossplay', 'how many players'],
  }
}

export default async function CrossplayPage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const locale = getLocale((await searchParams).lang)
  const zh = locale === 'zh'
  const Content = locale === 'zh'
    ? (await import('@/content/zh/crossplay.mdx')).default
    : (await import('@/content/en/crossplay.mdx')).default

  return (
    <Shell locale={locale} pathname="/guides/crossplay">
      <article className="wiki-article detail-page">
        <Breadcrumbs
          locale={locale}
          sectionHref="/guides"
          sectionLabel={zh ? '攻略' : 'Guides'}
          detail={zh ? '跨平台指南' : 'Crossplay Guide'}
        />
        <h1>{zh ? 'Shift at Midnight 跨平台与玩家人数' : 'Shift at Midnight Crossplay and Player Count'}</h1>
        <p className="dek">
          {zh
            ? 'Shift at Midnight 支持 1-4 人在线联机，由 1 名房主邀请最多 3 名好友。Xbox 主机玩家可以与 PC Game Pass 玩家跨平台联机。Steam 当前不能与 Xbox 跨平台互通，游戏也不支持本地分屏。'
            : 'Shift at Midnight supports online multiplayer for 1-4 players: one host and up to three friends. Xbox console players can play with PC Game Pass players. Steam players cannot currently crossplay with Xbox, and local split-screen is not supported.'}
        </p>
        <div className="mdx-body"><Content /></div>
      </article>
    </Shell>
  )
}
