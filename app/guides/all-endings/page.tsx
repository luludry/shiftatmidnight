import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Shell } from '@/components/Shell'
import { getLocale } from '@/lib/i18n'

const seoTitle = 'Shift at Midnight Endings & True Ending Guide'
const seoDescription = 'Shift at Midnight endings include Bad, Normal, and True. See the Shift at Midnight true ending requirements: four VHS tapes and a manager confrontation.'
const zhSeoDescription = 'Shift at Midnight endings 包含 Bad、Normal 和 True Ending。Shift at Midnight true ending 要求在第 3、4、5、6 晚找到 4 卷 VHS 录音带，并在第 7 晚结束时不打卡下班，带着录音带与经理对峙，解锁地下室暗门。'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const locale = getLocale((await searchParams).lang)

  return {
    title: { absolute: seoTitle },
    description: locale === 'zh' ? zhSeoDescription : seoDescription,
    keywords: ['shift at midnight endings', 'shift at midnight true ending'],
  }
}

export default async function AllEndingsPage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const locale = getLocale((await searchParams).lang)
  const zh = locale === 'zh'
  const Content = locale === 'zh'
    ? (await import('@/content/zh/all-endings.mdx')).default
    : (await import('@/content/en/all-endings.mdx')).default

  return (
    <Shell locale={locale} pathname="/guides/all-endings">
      <article className="wiki-article detail-page">
        <Breadcrumbs
          locale={locale}
          sectionHref="/guides/all-endings"
          sectionLabel={zh ? '结局' : 'Endings'}
          detail={zh ? '全部结局' : 'All Endings'}
        />
        <h1>{zh ? 'Shift at Midnight 全部结局' : 'All Shift at Midnight Endings'}</h1>
        <p className="dek">
          {zh
            ? 'Shift at Midnight 共有 3 个结局：Bad Ending、Normal Ending 和 True Ending。被伪人击杀或连续 3 次放走伪人会触发坏结局。普通结局要求存活 7 个轮班并在最后一天正常打卡下班，真结局则需要 4 卷隐藏的 VHS 录音带并与经理对峙。'
            : 'Shift at Midnight has three endings: Bad Ending, Normal Ending, and True Ending. The Bad Ending follows being killed by a doppelganger or letting a doppelganger go three consecutive times. The Normal Ending requires surviving seven shifts and clocking out normally on the final day, while the True Ending requires four hidden VHS tapes and a confrontation with the manager.'}
        </p>
        <aside className="spoiler-warning" role="note" aria-label={zh ? '剧透警告' : 'Spoiler Warning'}>
          <strong>{zh ? '剧透警告' : 'Spoiler Warning'}</strong>
          <span>{zh ? '下方内容包含三个结局的完整触发条件。' : 'The guide below contains the complete requirements for all three endings.'}</span>
        </aside>
        <div className="mdx-body"><Content /></div>
      </article>
    </Shell>
  )
}
