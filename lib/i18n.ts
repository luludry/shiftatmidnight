export type Locale = 'en' | 'zh'

export function getLocale(value?: string | string[]): Locale {
  return value === 'zh' ? 'zh' : 'en'
}

export function withLocale(path: string, locale: Locale) {
  return locale === 'zh' ? `${path}?lang=zh` : path
}

export const copy = {
  en: {
    brand: 'Shift At Midnight',
  },
  zh: {
    brand: 'Shift At Midnight',
  },
} as const
