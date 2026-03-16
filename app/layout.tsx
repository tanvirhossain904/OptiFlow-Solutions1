import type { Metadata } from 'next'
import '../styles/globals.css'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'EasySoft – Smart Software Solutions',
  description:
    'We build scalable, secure, and innovative tech solutions designed to accelerate your business growth and simplify complex challenges.',
  keywords:
    'software development, IT consulting, web development, mobile apps, cloud solutions',

  verification: {
    google: 'OtGHL1iMlD2n4QEdW1zZ5QVmj8TrKnOV4bLXQ1cbAvE',
  },

  icons: {
    icon: '/logos/icon.png',
    apple: '/logos/icon.png',
  },
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#f2f2f2] dark:bg-[#0c2501] text-[#131313] dark:text-white transition-colors duration-300">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}