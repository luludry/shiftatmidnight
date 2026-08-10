export type Locale = 'en' | 'zh'

export function getLocale(value?: string | string[]): Locale {
  return value === 'zh' ? 'zh' : 'en'
}

export function withLocale(path: string, locale: Locale) {
  return locale === 'zh' ? `${path}?lang=zh` : path
}

export const copy = {
  en: {
    brand: 'SHIFT AT MIDNIGHT',
    nav: ['Characters', 'Doppelgangers', 'Walkthrough', 'Monsters', 'Endings', 'Guides'],
  },
  zh: {
    brand: 'SHIFT AT MIDNIGHT',
    nav: ['角色', '替身怪', '完整流程', '怪物', '结局', '攻略'],
  },
} as const
