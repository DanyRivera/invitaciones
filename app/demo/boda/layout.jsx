import {Poppins} from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400'
})


const LayoutBoda = ({children}) => {
  return (
    <main className={poppins.className}>{children}</main>
  )
}

export default LayoutBoda