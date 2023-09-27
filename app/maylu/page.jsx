import Image from "next/image"
import CountDown from "../components/maylu/CountDown";
import Styles from "../styles/Maylu.module.css";

const Page = () => {
    return (
        <>
            <header className="flex flex-col justify-between w-full h-screen md:h-auto">
                <div
                    className="flex justify-between"
                >
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/maylu%2Fmaylu_flowers.svg?alt=media&token=c2ca92dd-2a40-43ff-adde-f4cf842d906c"
                        width={300}
                        height={300}
                        alt="Flowers"
                        className=" w-2/3 md:w-1/5"
                    />
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/maylu%2Fmaylu_flowers.svg?alt=media&token=c2ca92dd-2a40-43ff-adde-f4cf842d906c"
                        width={300}
                        height={300}
                        alt="Flowers"
                        className=" rotate-90 w-2/3 md:w-1/5 hidden md:block"
                    />
                </div>

                <div className="flex flex-col justify-center items-center md:-mt-36 gap-8">
                    <Image
                        src="/img/cruz.svg"
                        width={120}
                        height={120}
                        alt="Cruz"
                    />
                    <p className="mx-5 text-center text-xl md:text-3xl">Acompañanos al Bautizo de Nuestra Hija</p>
                    <p className="text-3xl md:text-5xl">Maylu</p>
                    <p className="text-2xl md:text-4xl mx-2">6 de Enero del 2024</p>
                </div>

                <div
                    className="flex justify-end md:justify-between"
                >
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/maylu%2Fmaylu_flowers.svg?alt=media&token=c2ca92dd-2a40-43ff-adde-f4cf842d906c"
                        width={300}
                        height={300}
                        alt="Flowers"
                        className="-rotate-90 w-2/3 md:w-1/5 hidden md:block"
                    />
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/maylu%2Fmaylu_flowers.svg?alt=media&token=c2ca92dd-2a40-43ff-adde-f4cf842d906c"
                        width={300}
                        height={300}
                        alt="Flowers"
                        className="rotate-180 w-2/3 md:w-1/5"
                    />
                </div>
            </header>

            <section className="text-[#F8B3A8]">
                <h2 className="text-center my-10 md:my-20 text-xl md:text-4xl">¿Están Listos?</h2>
                <CountDown />
            </section>

            <section>
                <p>Galeria</p>
                <p>Ubicación</p>
                <p>Hospedaje</p>
                <p>Padrinos</p>
                <p>Itinerario</p>
                <p>Confirmación</p>
            </section>
        </>
    )
}

export default Page