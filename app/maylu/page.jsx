import Image from "next/image"
import CountDown from "../components/maylu/CountDown";
import Padrinos from "../components/maylu/Padrinos";
import Gallery from "../components/maylu/Gallery";
import Locations from "../components/maylu/Locations";
import Confirmation from "../components/maylu/Confirmation";
import Footer from "../components/Footer";

//MetaData
export const metadata = {
    title: 'Maylu Bautizo'
}

//Fonts
import { Great_Vibes } from 'next/font/google'

const greatVibes = Great_Vibes({
    subsets: ['latin'],
    weight: '400'
})


/*
    COLORS:
    #ED058D - Pink
    #00BF63 - Green
    #06AFF1 - Blue
    #F98E1B - Orange
    #FEDE03 - Yellow
*/

const Page = () => {
    return (
        <>
            <header className="flex flex-col justify-between w-full h-screen md:h-auto">
                <div
                    className="flex justify-between"
                >
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/maylu%2Fbg-top-left.webp?alt=media&token=0c709f8b-8ce1-4cf7-8c7e-912dc324db8c"
                        width={300}
                        height={300}
                        alt="Flowers"
                        className="w-2/3 md:w-1/5"
                    />
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/maylu%2Fbg-top-rigth.webp?alt=media&token=f5c8bf84-0f3a-4299-901d-d3e6c4215377"
                        width={300}
                        height={300}
                        alt="Flowers"
                        className="w-2/3 md:w-1/5 hidden md:block"
                    />
                </div>

                <div className="flex flex-col justify-center items-center -mt-20 md:-mt-48 gap-5 md:gap-16 text-[#ED058D]">
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/maylu%2Fcruz.svg?alt=media&token=a5d0d783-4c72-403f-ac84-55be77b03799"
                        width={120}
                        height={120}
                        alt="Cruz"
                    />
                    <p className="mx-5 text-center text-xl md:text-5xl">Acompañanos al Bautizo <br /> de Nuestra Hija</p>
                    <p className={`text-4xl md:text-8xl font-bold text-center mx-2 ${greatVibes.className}`}>Mayerly Guadalupe</p>
                    <p className={`text-xl md:text-4xl text-center mx-3`}>6 de Enero del 2024</p>
                </div>

                <div
                    className="flex justify-end md:justify-between"
                >
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/maylu%2Fbg-bottom-left.webp?alt=media&token=682fbdb9-63ec-4cfc-8f0b-ca4caee12466"
                        width={300}
                        height={300}
                        alt="Flowers"
                        className="w-2/3 md:w-1/5 hidden md:block"
                    />
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/maylu%2Fbg-bottom-rigth.webp?alt=media&token=8846fd95-82f7-441f-b3e1-40ff4e2b6772"
                        width={300}
                        height={300}
                        alt="Flowers"
                        className="w-2/3 md:w-1/5"
                    />
                </div>
            </header>

            <section className="flex justify-center mt-24 mx-5 md:-mt-28">
                <div className="text-center text-xl  text-[#ED058D] md:text-2xl md:leading-loose">
                    <p>&quot; Doy gracias a Dios Nuestro Señor por darme el don de la vida.</p>
                    <p>A mis padres por esperarme con amor y recibirme con alegria.</p>
                    <p>A mis padrinos por guiarme en el camino de la luz.</p>
                    <p>Y a tí por acompañarme en el día más importante de mi vida.</p>
                    <p>Hoy Dios me ha llamado por mi nombre &quot;</p>
                </div>
            </section>

            {/* Papás y Padrinos */}
            <section className="my-14 md:my-20 md:mx-20 flex flex-col md:flex-row gap-5 md:gap-10 justify-center items-center text-[#00BF63]">
                <Padrinos />
            </section>

            {/* Maylu */}
            <section className="my-14 md:my-24 md:mx-20 flex flex-col md:flex-row gap-5 md:gap-10 justify-center items-center text-[#ED058D]">
                <Gallery />
            </section>

            <section className="flex flex-col gap-12 md:gap-20">
                <Locations />
            </section>

            <section className="flex flex-col md:flex-row justify-between my-24 md:m-24">
                <Confirmation />
            </section>

            <section className="text-[#ED058D] my-32 md:mt-0">
                <h2 className="text-center my-10 md:my-20 text-xl md:text-4xl">¿Están Listos?</h2>
                <CountDown />
            </section>

            <Footer
                color="ED058D"
                text="fff"
            />

        </>
    )
}

export default Page