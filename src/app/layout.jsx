import Footer from '../components/Footer'
import './styles/globals.css'

export const metadata = {
  title: 'modulo-google-build',
  description: 'Google-nextjs-13',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='relative min-h-screen'>{children}
      
        {/* Footer */}
        <Footer />
      </body>
    </html>
  )
}
