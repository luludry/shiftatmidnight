import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Shell } from '@/components/Shell'
import { getLocale } from '@/lib/i18n'

const seoTitle = 'Marionette Shift at Midnight: How to Survive'
const seoDescription = 'Marionette Shift at Midnight guide explains how to survive Marionette: listen for wood creaking, lock the Security Shutters, and wait for it to leave.'
const zhSeoDescription = 'Marionette Shift at Midnight 攻略说明 how to survive Marionette：它行走僵硬，靠近窗口时会发出明显的木头摩擦嘎吱声，证件照通常没有表情。听到木头声后应立即锁死防弹玻璃防风卷帘 Security Shutters，它会在几分钟后自行离开。'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const locale = getLocale((await searchParams).lang)

  return {
    title: { absolute: seoTitle },
    description: locale === 'zh' ? zhSeoDescription : seoDescription,
    keywords: ['marionette shift at midnight', 'how to survive marionette'],
  }
}

export default async function MarionettePage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const locale = getLocale((await searchParams).lang)
  const zh = locale === 'zh'
  const Content = locale === 'zh'
    ? (await import('@/content/zh/marionette.mdx')).default
    : (await import('@/content/en/marionette.mdx')).default

  return (
    <Shell locale={locale} pathname="/doppelgangers/marionette">
      <article className="wiki-article detail-page">
        <Breadcrumbs locale={locale} detail={zh ? '提线木偶' : 'Marionette'} />
        <h1>{zh ? 'Shift at Midnight 提线木偶生存攻略' : 'How to Survive Marionette in Shift at Midnight'}</h1>
        <p className="dek">
          {zh
            ? '提线木偶靠近窗口时会发出明显的木头摩擦嘎吱声。听到木头声后，立即锁死防弹玻璃防风卷帘。它会在几分钟后自行离开。'
            : 'To survive Marionette, listen for the distinct wood-creaking sound as it approaches the window. Lock the bulletproof-glass Security Shutters as soon as you hear it. Marionette will leave on its own after a few minutes.'}
        </p>
        <div className="mdx-body"><Content /></div>
      </article>
    </Shell>
  )
}
