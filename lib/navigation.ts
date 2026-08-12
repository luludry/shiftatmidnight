import type { Locale } from './i18n'

export const primaryNavigation = [
  { href: '/', en: 'Home', zh: '首页' },
  { href: '/doppelgangers', en: 'Doppelgangers', zh: '替身怪图鉴' },
  { href: '/guides', en: 'Guides', zh: '攻略' },
  { href: '/guides/all-endings', en: 'Endings', zh: '结局' },
] as const

export const guideNavigation = [
  { href: '/guides/crossplay', en: 'Crossplay', zh: '跨平台联机' },
  { href: '/guides/save-mechanics', en: 'Save Mechanics', zh: '存档机制' },
] as const

export function navigationLabel(item: { en: string; zh: string }, locale: Locale) {
  return locale === 'zh' ? item.zh : item.en
}

export function isNavigationCurrent(pathname: string, href: string) {
  if (href === '/') return pathname === '/'
  if (href === '/guides/all-endings') return pathname === href
  if (href === '/guides') return pathname === href || (pathname.startsWith('/guides/') && pathname !== '/guides/all-endings')
  return pathname === href || pathname.startsWith(`${href}/`)
}
