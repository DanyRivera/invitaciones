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

            <section className="my-14 md:my-24 md:mx-20 grid gap-5 md:grid-cols-4 w-full">
                <div className="md:col-span-2">
                    <Image
                        src="/img/baby.jpg"
                        width={500}
                        height={500}
                        alt="Maylu"
                        className="w-full md:rounded-md"
                    />
                </div>
                <div className="md:col-span-4">
                    <h2 className="text-center my-5 md:mb-5 text-2xl text-[#F8B3A8] font-bold">Mis Padrinos</h2>
                    <div className="flex flex-col gap-10 md:flex-row md:justify-between">
                        <div>
                            <Image
                                src="/img/padrino.jpg"
                                width={500}
                                height={500}
                                alt="Padrino"
                                className="w-2/3 mx-auto rounded-md md:w-full md:h-full"
                            />
                            <p className="text-center mt-5 text-2xl text-[#7d7d7d]">Padrino</p>
                        </div>
                        <div>
                            <Image
                                src="/img/madrina.jpg"
                                width={500}
                                height={500}
                                alt="Madrina"
                                className="w-2/3 mx-auto rounded-md md:w-full md:h-full"
                            />
                            <p className="text-center mt-5 text-2xl text-[#7d7d7d]">Madrina</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <p>Padrinos</p>
                <p>Ubicación</p>
                <p>Hospedaje</p>
                <p>Itinerario</p>
                <p>Confirmación</p>
            </section>
        </>
    )
}

export default Page