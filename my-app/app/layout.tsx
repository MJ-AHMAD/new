import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TRUSTED-ALLY Umrah & Hajj Services",
  description:
    "Experience a spiritually fulfilling Umrah and Hajj journey with TRUSTED-ALLY's comprehensive packages and services.",
  icons: {
    icon: "https://mj-ahmad.github.io/mja2025/img/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

