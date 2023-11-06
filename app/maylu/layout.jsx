import { Sriracha } from 'next/font/google'

const sriracha = Sriracha({
  subsets: ['latin'],
  weight: '400'
})



const LayoutMaylu = ({ children }) => {
  return (
    <main className={`bg-[#fffbe8] ${sriracha.className}`}>{children}</main>
  )
}

export default LayoutMaylu