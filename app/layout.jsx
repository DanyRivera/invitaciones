import './styles/globals.css'

export const metadata = {
  title: 'MI Invitación | Modelos',
  description: 'WebSite for create invitations',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
