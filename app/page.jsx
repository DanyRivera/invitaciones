'use client'

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Home() {

  const router = useRouter();

  useEffect(() => {
    router.push('https://invitastu.vercel.app')
  }, [])

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-8xl tracking-widest font-bold text-[#7bdff2]">Byeeee!</h1>
    </div>
  )
}
