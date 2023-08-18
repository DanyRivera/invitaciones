import Header from "@/app/components/demo/cumple/Header";
import Map from "@/app/components/demo/cumple/Map";
import CountDown from "@/app/components/demo/cumple/CountDown";
import Gallery from "@/app/components/demo/cumple/Gallery";
import Gifts from "@/app/components/demo/cumple/Gifts";

export const Page = () => {
    return (
        <>
            <Header />
            <main>
                <section>
                    <h2 className="text-center text-3xl md:text-6xl mt-10 font-bold">Te Esperamos!!!</h2>
                    <Map />
                </section>
                <section>
                    <h2 className="text-center text-3xl md:text-6xl mt-10 font-bold">Ya Casi!!!</h2>
                    <CountDown />
                </section>
                <section className="my-20">
                    <Gallery />
                </section>
                <section id="regalos" className="my-10">
                    <h2 className="text-center text-3xl md:text-6xl mt-10 font-bold mb-10">Mesa de Regalos</h2>
                    <Gifts />
                </section>
                <section id="regalos" className="my-10">
                    <h2 className="text-center text-3xl md:text-6xl mt-10 font-bold mb-10">Mesa de Regalos</h2>
                    <div>
                        confirmacion
                    </div>
                </section>
            </main>
        </>
    )
}


export default Page;