import '@/styles/globals.css'
import type { Viewport } from 'next'
 
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}
export const metadata = {
  title: 'Meu Portfólio | Marcos',
  description: 'Aqui eu te conto sobre meu progresso nos estudos em programação',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
