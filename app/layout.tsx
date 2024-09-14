import { Inter } from "next/font/google";
import type { Viewport } from 'next'


import '@/styles/globals.css'
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
 
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
    <html lang="pt-br" className={""}>
      <body className={`max-w-3xl mr-auto ml-auto px-8 min-h-screen text-sm font-normal	text-black	${inter.className}`}>
        <Menu />
        {children}
        <Footer className="h-20" />
      </body>
    </html>
  )
}
