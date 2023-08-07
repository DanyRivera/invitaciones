import './styles/globals.css'

export const metadata = {
  title: {
    template: '%s | Mi Invitación',
    default: 'Modelos | Mi Invitación'
  },
  description: 'WebSite for create invitations',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
