 import 'tailwindcss/tailwind.css'
import Footer from '../components/Footer'

export const metadata = {
  title: 'modulo-google-build',
  description: 'Google-nextjs-13',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}
      
        {/* Footer */}
        <Footer />
      </body>
    </html>
  )
}
