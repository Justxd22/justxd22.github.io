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
  title: {
    default: '.xD22 – Software & Mechanical Engineer',
    template: '%s | .xD22'
  },
  description: "Personal portfolio of xD22 – a Software and Mechanical Engineer passionate about system-level programming, web development, and embedded systems.",
  keywords: [
    "xD22", "xd22 portfolio", "software engineer", "mechanical engineer", 
    "full stack developer", "embedded systems", "Web3", "DevOps", 
    "Next.js", "React", "Tailwind", "Mansoura University"
  ],
  metadataBase: new URL("https://0x22.me"),
  authors: [{ name: ".xD22", url: "https://0x22.me" }],
  creator: ".xD22",
  publisher: ".xD22",
  openGraph: {
    title: ".xD22 – Engineer & Developer",
    description: "Portfolio of a Software and Mechanical Engineer – showcasing work in web development, embedded systems, and open source.",
    url: "https://0x22.me",
    siteName: ".xD22",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://0x22.me/XD.jpg",
        width: 1200,
        height: 630,
        alt: ".xD22 – Engineer & Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: ".xD22 – Engineer & Developer",
    description: "Explore the personal portfolio of xD22 – developer, engineer.",
    creator: "@_.xd22",
    images: ["https://0x22.me/XD.jpg"],
  },
  themeColor: "#000000",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
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