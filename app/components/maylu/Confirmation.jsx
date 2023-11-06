import Image from "next/image"
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

const Confirmation = () => {
    return (
        <>
            <Image
                src="https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/maylu%2Fdecoracion-2-ok.svg?alt=media&token=3155b5f6-e983-4467-95c4-21d9465ecb02"
                width={200}
                height={200}
                alt="Decoration"
                className="hidden md:block"
            />
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col md:flex-row md:justify-center md:gap-5 md:items-center text-[#fff] bg-[#ED058D] md:py-16 py-10 md:px-10 rounded">
                    <FaWhatsapp className="text-9xl mx-auto my-3 md:mx-0 md:my-0" />
                    <div className="flex flex-col items-center text-center md:items-start md:gap-5 gap-2 mx-3">
                        <p className="text-2xl md:text-6xl font-bold">Confirmación</p>
                        <p className="text-lg md:text-2xl">Confirma tu asistencia mediante WhatsApp:</p>
                        <Link
                            target="_blank"
                            rel="noreferrer"
                            href="https://api.whatsapp.com/send?phone=2227593096"
                            className="text-[#fff] bg-[#b8307f] tracking-wide rounded-sm px-4 py-3 mt-4 md:w-full md:text-xl "
                        >Confirmar</Link>
                    </div>
                </div>
            </div>
            <Image
                src="https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/maylu%2Fdecoracion-2-ok.svg?alt=media&token=3155b5f6-e983-4467-95c4-21d9465ecb02"
                width={200}
                height={200}
                alt="Decoration"
                className="hidden md:block"
            />
        </>
    )
}

export default Confirmation