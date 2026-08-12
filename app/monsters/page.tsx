import { redirect } from 'next/navigation'

export default async function MonstersRedirect({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const { lang } = await searchParams
  redirect(lang === 'zh' ? '/doppelgangers?lang=zh' : '/doppelgangers')
}
