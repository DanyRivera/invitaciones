import React from 'react'

import {Acme, Itim} from 'next/font/google'

const acme = Acme({
  subsets: ['latin'],
  weight: '400'
})

const itim = Itim({
  subsets: ['latin'],
  weight: '400'
})

export const metadata = {
    title: 'MI Invitación | Demo | XV Años',
    description: 'WebSite for create invitations',
}

const LayoutXV = ({children}) => {
  return (
    <main className={itim.className}>{children}</main>
  )
}

export default LayoutXV