import {Josefin_Sans} from 'next/font/google'

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: '400'
})


const LayoutCumple = ({children}) => {
  return (
    <main className={josefinSans.className}>{children}</main>
  )
}

export default LayoutCumple