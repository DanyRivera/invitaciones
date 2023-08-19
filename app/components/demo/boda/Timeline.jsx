import Image from "next/image"

const Timeline = () => {
    return (
        <div className="relative flex flex-col md:flex-row gap-10 justify-center mx-12  py-32">
            <div className="flex flex-col gap-2 items-center justify-center text-[#cbcbcb] bg-[#fff] pb-5 rounded-2xl shadow-2xl">
                <div className="text-7xl md:text-8xl" >
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/demo%2Fboda%2Fchurch.webp?alt=media&token=d695595f-05e0-417a-8c8b-aaa491821a86"
                        width={500}
                        height={500}
                        alt="Church"
                        className="w-full rounded-t-2xl saturate-50"
                    />
                </div>
                <div className="flex flex-col gap-4 justify-center items-center w-full my-2">
                    <p className="text-xl md:text-4xl">Ceremonia</p>
                    <p className="text-lg md:text-2xl font-bold">14:00</p>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center text-[#cbcbcb] bg-[#fff] pb-5 rounded-2xl shadow-2xl">
                <div className="text-7xl md:text-8xl" >
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/demo%2Fboda%2Fevent.webp?alt=media&token=9f58222f-ab42-4623-936a-f49cca1824c4"
                        width={500}
                        height={500}
                        alt="event"
                        className="w-full rounded-t-2xl saturate-50"
                    />
                </div>
                <div className="flex flex-col gap-4 justify-center items-center w-full my-2">
                    <p className="text-xl md:text-4xl">Evento</p>
                    <p className="text-lg md:text-2xl font-bold">12:00</p>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center text-[#cbcbcb] bg-[#fff] pb-5 rounded-2xl shadow-2xl">
                <div className="text-7xl md:text-8xl" >
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/demo%2Fboda%2Fdance.webp?alt=media&token=23d3ed6b-24a3-49ac-a527-db0d32505550"
                        width={500}
                        height={500}
                        alt="dance"
                        className="w-full rounded-t-2xl saturate-50"
                    />
                </div>
                <div className="flex flex-col gap-4 justify-center items-center w-full my-2">
                    <p className="text-xl md:text-4xl">Baile</p>
                    <p className="text-lg md:text-2xl font-bold">20:00</p>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center text-[#cbcbcb] bg-[#fff] pb-5 rounded-2xl shadow-2xl">
                <div className="text-7xl md:text-8xl" >
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/demo%2Fboda%2Fformal.webp?alt=media&token=dfa11942-3fef-415b-9712-b32a651842e4"
                        width={500}
                        height={500}
                        alt="dress"
                        className="w-full rounded-t-2xl saturate-50"
                    />
                </div>
                <div className="flex flex-col gap-4 justify-center items-center w-full my-2">
                    <p className="text-xl md:text-2xl text-center">Código de Vestimenta</p>
                    <p className="text-lg md:text-2xl font-bold">Formal</p>
                </div>
            </div>
        </div>
    )
}

export default Timeline