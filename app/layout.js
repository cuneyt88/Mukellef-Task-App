import './globals.css'
import AuthProvider from '@/api/auth/AuthContext'

export const Metadata = {
  title: 'Mukellef Cat',
  description: 'Click button and discover the cats',
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className="relative">
        <AuthProvider>
          {children} 
        </AuthProvider>
      </body>
    </html>
  )
}
