import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'KM Khalid Saifullah | Software Engineer',
  description: 'Portfolio of KM Khalid Saifullah - Software Engineer specializing in full-stack development, system architecture, and AI/ML integration.',
  keywords: ['Software Engineer', 'Full Stack Developer', 'TypeScript', 'React', 'Next.js', 'NestJS', 'Kubernetes', 'System Design'],
  authors: [{ name: 'KM Khalid Saifullah' }],
  openGraph: {
    title: 'KM Khalid Saifullah | Software Engineer',
    description: 'Portfolio showcasing enterprise-grade software engineering projects',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
