import type { Metadata } from 'next'
import './globals.css'
import { siteData } from '@/lib/site-data'

export const metadata: Metadata = {
  title: {
    default: siteData.en.meta.title,
    template: '%s | Shift At Midnight Wiki',
  },
  description: siteData.en.meta.description,
  keywords: [...siteData.en.meta.keywords],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "try{document.documentElement.dataset.theme=localStorage.getItem('theme')||'dark'}catch(e){}" }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
