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
      <body className={`flex-col flex max-w-3xl mx-auto px-8 min-h-screen text-sm font-normal	text-black	${inter.className}`}>
        <Menu className="flex-none"/>
        <main className="flex-1 container">
        {children}
        </main>
        <Footer className="flex-none"/>
      </body>
    </html>
  )
}
