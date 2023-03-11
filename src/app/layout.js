 import 'tailwindcss/tailwind.css'

export const metadata = {
  title: 'modulo-google-build',
  description: 'Google-nextjs-13',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
