import Header from "@/app/components/demo/cumple/Header";
import Map from "@/app/components/demo/cumple/Map";
import CountDown from "@/app/components/demo/cumple/CountDown";
import Gallery from "@/app/components/demo/cumple/Gallery";
import Gifts from "@/app/components/demo/cumple/Gifts";
import Footer from "@/app/components/Footer";
import { FaHashtag, FaWhatsapp } from "react-icons/fa6";

export const metadata = {
    title: 'Cumpleaños Invitación'
}

export const Page = () => {

    return (
        <>
            <Header />
            <main>
                <section>
                    <h2 className="text-center text-3xl md:text-6xl mt-10 font-bold tracking-wider text-[#0077b6]">Te Esperamos!!!</h2>
                    <Map />
                </section>
                <section>
                    <h2 className="text-center text-3xl md:text-6xl my-10 font-bold tracking-wider text-[#0077b6]">Ya Casi!!!</h2>
                    <CountDown />
                </section>
                <section className="my-20">
                    <Gallery />
                </section>
                <section id="regalos" className="my-10">
                    <h2 className="text-center text-3xl md:text-6xl mt-10 font-bold mb-10 text-[#0077b6]">Mesa de Regalos</h2>
                    <Gifts />
                </section>
                <section id="confirmacion" className="my-20 md:grid md:grid-cols-2">
                    <div className="flex flex-col md:flex-row md:justify-center md:gap-5 md:items-center text-center md:text-left text-[#fff] bg-[#0077b6] md:py-16 py-10 md:px-10">
                        <FaHashtag className="text-9xl mx-auto my-3 md:mx-0 md:my-0" />
                        <div className="flex flex-col items-center md:items-start md:gap-5 gap-2 mx-3">
                            <p className="text-2xl md:text-6xl">Hashtag del Evento</p>
                            <p className="text-lg md:text-2xl">Comparte todas las fotografías del evento usando el hashtag:</p>
                            <p className="text-xl md:text-4xl font-bold">#hashtag_evento</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-center md:gap-5 md:items-center text-[#fff] bg-[#00b4d8] md:py-16 py-10">
                        <FaWhatsapp className="text-9xl mx-auto my-3 md:mx-0 md:my-0" />
                        <div className="flex flex-col items-center text-center md:items-start md:gap-5 gap-2 mx-3">
                            <p className="text-2xl md:text-6xl font-bold">Confirmación</p>
                            <p className="text-lg md:text-2xl">Confrima tu asistencia mediante WhatsApp:</p>
                            <button
                                className="text-[#fff] bg-[#0077b6] tracking-wide rounded-sm px-4 py-3 mt-4 md:w-full md:text-xl "
                            >Confirmar</button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer
                color="0077b6"
                text="fff"
            />
        </>
    )
}


export default Page;