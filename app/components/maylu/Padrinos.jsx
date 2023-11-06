import Image from "next/image"

import { Great_Vibes } from 'next/font/google'

const greatVibes = Great_Vibes({
    subsets: ['latin'],
    weight: '400'
})


const Padrinos = () => {
    return (
        <>
            <div>
                <p className="text-center text-2xl mb-5 uppercase">Mis Padrinos:</p>
                <p className={`text-center text-3xl mb-5 text-[#ED058D] ${greatVibes.className}`}>Anita Reyes Silva</p>
                <p className={`text-center text-3xl mb-5 text-[#ED058D] ${greatVibes.className}`}>Eleazar López Juárez</p>
                <Image
                    src="https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/maylu%2Fpadrinos.webp?alt=media&token=7c1135f9-fb16-4fe5-b499-8dafd8aa4cac"
                    width={500}
                    height={500}
                    alt="Padrinos"
                    className="w-full px-3 md:px-0 rounded-xl"
                />
            </div>
            <div>
                <Image
                    src="https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/maylu%2Fdecoracion-2-ok.svg?alt=media&token=3155b5f6-e983-4467-95c4-21d9465ecb02"
                    width={200}
                    height={200}
                    alt="Decoration"
                    className="hidden md:block"
                />
            </div>
            <div className="">
                <p className="text-center text-2xl mb-5 uppercase">Mis Papás:</p>
                <p className={`text-center text-3xl mb-5 text-[#ED058D] ${greatVibes.className}`}>Mariela Ciriaco Sosa</p>
                <p className={`text-center text-3xl mb-5 text-[#ED058D] ${greatVibes.className}`}>Alfonso González Arroyo</p>
                <Image
                    src="https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/maylu%2Fpapas.webp?alt=media&token=9f6fb4ce-72cd-4591-92f9-f8aa2bff0b76"
                    width={500}
                    height={500}
                    alt="Papás"
                    className="w-full px-3 md:px-0 rounded-xl"
                />
            </div>
        </>
    )
}

export default Padrinos