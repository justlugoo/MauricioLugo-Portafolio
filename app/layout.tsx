import type React from "react"
import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import { ThemeProvider } from "@/components/layout/ThemeProvider"
import { Toaster } from "sonner"
import { SpeedInsights } from "@vercel/speed-insights/next"
import config from "@/data/config.json"
import "./globals.css"

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-google",
})

export const metadata: Metadata = {
  metadataBase: new URL(config.site.url),
  title: config.site.title,
  description: config.site.description,
  keywords: config.seo.keywords,
  authors: [{ name: config.site.author }],
  openGraph: {
    title: config.site.title,
    description: config.site.description,
    url: config.site.url,
    siteName: config.site.name,
    images: [
      {
        url: config.seo.ogImage,
        width: 1200,
        height: 630,
        alt: config.site.title,
      },
    ],
    locale: config.site.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: config.site.title,
    description: config.site.description,
    images: [config.seo.ogImage],
    creator: config.seo.twitterHandle,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning className={outfit.variable}>
      <body className={outfit.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme={config.theme.defaultMode}
          enableSystem={config.features.darkMode}
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-right" richColors closeButton />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
