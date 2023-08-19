import {Acme, Itim} from 'next/font/google'

const acme = Acme({
  subsets: ['latin'],
  weight: '400'
})

const itim = Itim({
  subsets: ['latin'],
  weight: '400'
})

const LayoutXV = ({children}) => {
  return (
    <main className={itim.className}>{children}</main>
  )
}

export default LayoutXV