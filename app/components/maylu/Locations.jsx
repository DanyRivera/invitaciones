import Image from "next/image"
import Link from "next/link"

const Locations = () => {
    return (
        <>
            <div className="text-[#F98E1B] flex flex-col md:flex-row gap-5 md:items-center md:mx-20">
                <div className="flex flex-col gap-5 text-center justify-center items-center md:mx-auto">
                    <p className="text-xl px-2 md:text-5xl">Parroquia de San Pedro <br /> y San Pablo</p>
                    <p className="text-xl md:text-4xl font-bold">Hora: 1:00 PM</p>
                    <p className="px-2 md:px-0 md:text-2xl">Lic. Luis Cabrera Lobato, Centro, 73310 Zacatlán, Pue.</p>
                    <Link
                        href="https://maps.app.goo.gl/SpsUBLHXmZdaVZSx5"
                        target="_blank"
                        rel="noreferrer"
                        className="text-white bg-[#06AFF1] py-3 w-1/2 md:w-full mx-auto rounded md:px-10"
                    >Ver en Maps</Link>
                </div>
                <div>
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/maylu%2Figlesia.webp?alt=media&token=d17411c2-6b02-4249-ac7c-268c7d33b375"
                        width={600}
                        height={500}
                        alt="Padrinos"
                        className="w-full px-3 rounded"
                    />
                </div>
            </div>

            <div className="text-[#F98E1B] flex flex-col md:flex-row gap-5 md:items-center md:mx-20">
                <div className="order-last md:-order-none">
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/maylu%2Fsalon.webp?alt=media&token=cd311ae3-fab1-4f03-866c-0f652bcdc0ad"
                        width={600}
                        height={500}
                        alt="Padrinos"
                        className="w-full px-3 rounded"
                    />
                </div>
                <div className="flex flex-col gap-5 text-center md:mx-auto">
                    <p className="text-xl px-2 md:text-6xl">Cabañas "El Pajar"</p>
                    <p className="text-xl md:text-5xl font-bold">Hora: 3:00 PM</p>
                    <p className="md:text-3xl px-2 md:px-0">20 de Noviembre, 73310 Zacatlán, Pue.</p>
                    <Link
                        href="https://maps.app.goo.gl/3TFVpiqHyCxsXNhm7"
                        target="_blank"
                        rel="noreferrer"
                        className="text-white bg-[#06AFF1] py-3 w-1/2 md:w-full mx-auto rounded md:px-10"
                    >Ver en Maps</Link>
                </div>

            </div>
        </>
    )
}

export default Locations