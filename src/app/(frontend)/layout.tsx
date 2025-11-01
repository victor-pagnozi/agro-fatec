import React from 'react'
import './styles.css'

export const metadata = {
  description: 'Projeto para a disciplina de Desenvolvimento de Aplicações Web',
  title: 'AgroConsult - Consultoria em Agronegócio',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
