import type React from "react"
import { Poppins, Roboto } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

const roboto = Roboto({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-roboto",
})

export const metadata = {
  title: "GEN 47 INITIATIVE FOUNDATION",
  description: "Empowering Kenyan Youth Across 47 Counties - One Nation. Every County. Every Youth.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${roboto.variable}`}>
      <body>{children}</body>
    </html>
  )
}
