import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Shell } from '@/components/Shell'
import { getLocale } from '@/lib/i18n'

const seoTitle = 'Norbert Shift at Midnight: Impostor Identification'
const seoDescription = 'Norbert Shift at Midnight guide explains the Norbert impostor: check his red baseball cap and blue eyes, then refuse service and press the silent alarm.'
const zhSeoDescription = 'Norbert Shift at Midnight 攻略说明 shift at midnight Norbert impostor 的识别方法：真正的 Norbert 每天来买咖啡，会戴标志性红色棒球帽并拥有蓝色眼睛。如果他没戴帽子或眼睛变黑，应立即拒绝服务并按下无声报警器。请牢记真正 Norbert 的档案特征。'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const locale = getLocale((await searchParams).lang)

  return {
    title: { absolute: seoTitle },
    description: locale === 'zh' ? zhSeoDescription : seoDescription,
    keywords: ['norbert shift at midnight', 'shift at midnight norbert impostor'],
  }
}

export default async function NorbertPage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const locale = getLocale((await searchParams).lang)
  const zh = locale === 'zh'
  const Content = locale === 'zh'
    ? (await import('@/content/zh/norbert.mdx')).default
    : (await import('@/content/en/norbert.mdx')).default

  return (
    <Shell locale={locale} pathname="/doppelgangers/norbert">
      <article className="wiki-article detail-page">
        <Breadcrumbs locale={locale} detail={zh ? '诺伯特' : 'Norbert'} />
        <h1>{zh ? 'Shift at Midnight 诺伯特伪人识别攻略' : 'Norbert Impostor in Shift at Midnight'}</h1>
        <p className="dek">
          {zh
            ? '如果 Norbert 没戴标志性的红色棒球帽，或者眼睛从蓝色变成黑色，他就是伪人假扮的。发现任意异常后立刻拒绝服务。随后按下无声报警器。'
            : 'Norbert is an impostor if he is missing his signature red baseball cap or if his eyes have changed from blue to black. Refuse service immediately when either detail is wrong. Then press the silent alarm.'}
        </p>
        <div className="mdx-body"><Content /></div>
      </article>
    </Shell>
  )
}
