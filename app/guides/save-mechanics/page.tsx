import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Shell } from '@/components/Shell'
import { getLocale } from '@/lib/i18n'

const seoTitle = 'Shift at Midnight Save: How Autosave Works'
const seoDescription = 'How to save game in Shift at Midnight: there is no manual save. Progress saves after the full shift ends at 6:00 AM; dying or quitting restarts the shift.'
const zhSeoDescription = 'How to save game in Shift at Midnight？游戏没有手动存档，只有完成整个轮班并到达早晨 6:00 结算画面后才会自动保存。中途被击杀或强制退出会丢失当前夜晚进度；多人剧情与天数进度仅保存在房主本地，客机只保留个人成就和角色外观装饰，建议由网络最稳定的玩家担任房主。'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const locale = getLocale((await searchParams).lang)

  return {
    title: { absolute: seoTitle },
    description: locale === 'zh' ? zhSeoDescription : seoDescription,
    keywords: ['shift at midnight save', 'how to save game in shift at midnight'],
  }
}

export default async function SaveMechanicsPage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const locale = getLocale((await searchParams).lang)
  const zh = locale === 'zh'
  const Content = locale === 'zh'
    ? (await import('@/content/zh/save-mechanics.mdx')).default
    : (await import('@/content/en/save-mechanics.mdx')).default

  return (
    <Shell locale={locale} pathname="/guides/save-mechanics">
      <article className="wiki-article detail-page">
        <Breadcrumbs
          locale={locale}
          sectionHref="/guides"
          sectionLabel={zh ? '攻略' : 'Guides'}
          detail={zh ? '存档机制' : 'Save Mechanics'}
        />
        <h1>{zh ? 'Shift at Midnight 存档机制' : 'How to Save in Shift at Midnight'}</h1>
        <p className="dek">
          {zh
            ? 'Shift at Midnight 没有手动存档功能。只有完成当前整个轮班并到达早晨 6:00 的结算画面后，游戏才会自动保存进度。如果中途被击杀或强制退出，就必须从该轮班起点重新开始。'
            : 'Shift at Midnight has no manual save option. The game saves progress automatically only after you finish the entire current shift and reach the 6:00 AM results screen. If you die or force-quit before then, you must restart that shift from its beginning.'}
        </p>
        <div className="mdx-body"><Content /></div>
      </article>
    </Shell>
  )
}
