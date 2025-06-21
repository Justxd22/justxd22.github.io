import type { Metadata } from 'next'
import { Open_Sans, Source_Code_Pro } from 'next/font/google'
import localFont from "next/font/local";
import './globals.css'


const openSans = Open_Sans({ 
  subsets: ['latin'], 
  variable: '--font-open-sans',
  weight: ['300', '400', '700']
})

const sourceCodePro = Source_Code_Pro({ 
  subsets: ['latin'], 
  variable: '--font-source-code-pro',
  weight: ['300', '400', '600', '700','800', '900']
})

const dmSerif = localFont({
  src: "./fonts/dmSerif.woff2",
  variable: "--font-dmserif",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: '.xD22',
  description: 'Personal portfolio of xD22',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${sourceCodePro.variable} ${dmSerif.variable}`}>
        {children}
      </body>
    </html>
  )
}