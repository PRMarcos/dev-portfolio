import { Inter } from "next/font/google";
import type { Viewport } from 'next'


import '@/styles/globals.css'
 
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}
export const metadata = {
  title: 'Meu Portfólio | Marcos',
  description: 'Aqui eu te conto sobre meu progresso nos estudos em programação',
}

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
