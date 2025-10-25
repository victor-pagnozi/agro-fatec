'use client'

import { ThemeProvider } from '@emotion/react'
import { theme } from '@/app/config/theme'

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
