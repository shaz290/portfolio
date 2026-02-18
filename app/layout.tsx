import type { Metadata } from 'next'
import '../styles/globals.css'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { PageLoader } from '@/components/ui/PageLoader'
import { ParticlesBackground } from '@/components/ui/ParticlesBackground'

export const metadata: Metadata = {
  title: 'MD Shaz Ahmed | Software Engineer (.NET / React.js)',
  description:
    '.NET Backend Developer with 4.5 years of professional experience delivering scalable and high-performance healthcare applications. Expert in C#, ASP.NET Core, SQL Server, Kafka, and microservices architecture.',
  keywords: [
    'MD Shaz Ahmed',
    '.NET Developer',
    'Software Engineer',
    'ASP.NET Core',
    'C# Developer',
    'React.js',
    'Backend Developer',
    'Bangalore',
    'Kafka',
    'Microservices',
    'Healthcare Applications',
  ],
  authors: [{ name: 'MD Shaz Ahmed', url: 'https://github.com/shaz290' }],
  creator: 'MD Shaz Ahmed',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'MD Shaz Ahmed | Software Engineer (.NET / React.js)',
    description:
      '.NET Backend Developer with 4.5 years of experience in scalable healthcare applications.',
    siteName: 'MD Shaz Ahmed Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MD Shaz Ahmed | Software Engineer (.NET / React.js)',
    description:
      '.NET Backend Developer with 4.5 years of experience in scalable healthcare applications.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-dark-base text-slate-200 font-body antialiased relative overflow-x-hidden">
        <PageLoader />
        <CustomCursor />
        <ParticlesBackground />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  )
}
