import { Inter } from "next/font/google";
import type { Viewport } from 'next'


import '@/styles/globals.css'
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
 
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
    <html lang="pt-br" suppressHydrationWarning>
      <body className={`transition-colors flex-col flex max-w-3xl mx-auto px-8 min-h-screen text-sm font-normal	text-copy bg-background	${inter.className}`}>
        <ThemeProvider>
          <Header className="flex-none"/>
          <main className="flex-1 container">
          {children}
          </main>
          <Footer className="flex-none"/>
        </ThemeProvider>
      </body>
    </html>
  )
}
