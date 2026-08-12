import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Shell } from '@/components/Shell'
import { getLocale } from '@/lib/i18n'

const seoTitle = 'Shift at Midnight The Dentist: How to Survive The Dentist'
const seoDescription = 'Shift at Midnight The Dentist guide explains how to survive The Dentist: avoid eye contact over 3 seconds, refuse his fuel request, and press the silent alarm.'
const zhSeoDescription = 'Shift at Midnight The Dentist 攻略说明 how to survive The Dentist：不要直视他的眼睛超过 3 秒，立刻拒绝他的加油请求，并按下柜台下的无声报警器。牙医看起来像穿白大褂的普通人，但微笑时嘴里有两排极其尖锐的牙齿。应对时请依次完成这些步骤。'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const locale = getLocale((await searchParams).lang)

  return {
    title: { absolute: seoTitle },
    description: locale === 'zh' ? zhSeoDescription : seoDescription,
    keywords: ['shift at midnight the dentist', 'how to survive the dentist'],
  }
}

export default async function DentistPage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const locale = getLocale((await searchParams).lang)
  const zh = locale === 'zh'
  const Content = locale === 'zh'
    ? (await import('@/content/zh/the-dentist.mdx')).default
    : (await import('@/content/en/the-dentist.mdx')).default

  return (
    <Shell locale={locale} pathname="/doppelgangers/the-dentist">
      <article className="wiki-article detail-page">
        <Breadcrumbs locale={locale} detail={zh ? '牙医' : 'The Dentist'} />
        <h1>{zh ? 'Shift at Midnight 牙医生存攻略' : 'How to Survive The Dentist in Shift at Midnight'}</h1>
        <p className="dek">
          {zh
            ? '不要直视牙医的眼睛超过 3 秒。立刻拒绝他的加油请求。随后按下柜台下方的无声报警器。'
            : "To survive The Dentist, never look directly into his eyes for more than 3 seconds. Refuse his fuel request immediately. Then press the silent alarm beneath the counter."}
        </p>
        <div className="mdx-body"><Content /></div>
      </article>
    </Shell>
  )
}
