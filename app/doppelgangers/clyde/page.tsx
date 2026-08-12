import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Shell } from '@/components/Shell'
import { getLocale } from '@/lib/i18n'

const seoTitle = 'Shift at Midnight Clyde: The Spider Survival Guide'
const seoDescription = 'Shift at Midnight Clyde guide covers The Spider Shift at Midnight: spray it with the fire extinguisher before it breaks the glass, then lock the back storeroom.'
const zhSeoDescription = 'Shift at Midnight Clyde 攻略说明 The Spider Shift at Midnight 的应对方法：伪装失败后它会露出蜘蛛般的多条手臂并试图砸碎玻璃。它是唯一需要玩家物理防御的怪物，必须及时用店里的灭火器将它喷退，然后立刻反锁并躲进后方仓库。请在玻璃被砸碎前完成防御。'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const locale = getLocale((await searchParams).lang)

  return {
    title: { absolute: seoTitle },
    description: locale === 'zh' ? zhSeoDescription : seoDescription,
    keywords: ['shift at midnight clyde', 'the spider shift at midnight'],
  }
}

export default async function ClydePage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const locale = getLocale((await searchParams).lang)
  const zh = locale === 'zh'
  const Content = locale === 'zh'
    ? (await import('@/content/zh/clyde.mdx')).default
    : (await import('@/content/en/clyde.mdx')).default

  return (
    <Shell locale={locale} pathname="/doppelgangers/clyde">
      <article className="wiki-article detail-page">
        <Breadcrumbs locale={locale} detail={zh ? '蜘蛛怪 / 克莱德' : 'Clyde / The Spider'} />
        <h1>{zh ? 'Shift at Midnight 蜘蛛怪克莱德生存攻略' : 'How to Survive Clyde in Shift at Midnight'}</h1>
        <p className="dek">
          {zh
            ? '在 Clyde 砸碎玻璃前，用店里的灭火器将它喷退。随后立刻反锁并躲进后方仓库。Clyde 是唯一需要玩家进行物理防御的怪物。'
            : 'Spray Clyde with the store fire extinguisher before it breaks the glass. Then immediately lock yourself inside the back storeroom. Clyde is the only monster that requires the player to defend physically.'}
        </p>
        <div className="mdx-body"><Content /></div>
      </article>
    </Shell>
  )
}
