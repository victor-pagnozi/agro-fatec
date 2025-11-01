'use client'

import { ThemeProvider } from '@emotion/react'
import { theme } from '@/app/config/theme'
import { Header } from '../components/Header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <Header />

      {children}
    </ThemeProvider>
  )
}
