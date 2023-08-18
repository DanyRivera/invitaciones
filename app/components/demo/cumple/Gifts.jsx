import Image from "next/image"

const Gifts = () => {
    return (
        <div className="grid gap-10 justify-center text-center md:grid-cols-4 md:mx-24">
            <div className="flex flex-col justify-between bg-[#df0096] py-5 px-4 md:rounded-lg md:hover:scale-110 transition-all md:shadow-2xl">
                <Image
                    src="https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/demo%2Fxv-a%C3%B1os%2Fliverpool.webp?alt=media&token=2a5e0a8a-5418-4243-b775-0f97b02bdd85"
                    width={500}
                    height={500}
                    alt="Mesa de Regalos"
                />
                <p className="text-[#fff] "><span className="font-bold">Evento:</span> 789456123</p>
            </div>
            <div className="flex flex-col justify-between bg-[#ffc424] py-5 px-4 md:rounded-lg md:hover:scale-110 transition-all md:shadow-2xl">
                <Image
                    src="https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/demo%2Fxv-a%C3%B1os%2Fpalacio.webp?alt=media&token=ec60bc74-2558-4d4e-aebc-c4ff41d02b5e"
                    width={500}
                    height={500}
                    alt="Mesa de Regalos"
                />
                <p className="text-[#000] "><span className="font-bold">Evento:</span> 789456123</p>
            </div>
            <div className="flex flex-col justify-between bg-[#232f3e] py-5 px-4 md:rounded-lg md:hover:scale-110 transition-all md:shadow-2xl">
                <Image
                    src="https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/demo%2Fxv-a%C3%B1os%2Famazon.webp?alt=media&token=efe5aecf-c8b7-47a9-bd17-246a044a8900"
                    width={350}
                    height={350}
                    alt="Mesa de Regalos"
                />
                <p className="text-[#fff] "><span className="font-bold">Evento:</span> 789456123</p>
            </div>
            <div className="flex flex-col justify-between bg-[#cd092e] py-5 px-4 md:rounded-lg md:hover:scale-110 transition-all md:shadow-2xl">
                <Image
                    src="https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/demo%2Fxv-a%C3%B1os%2Fsears.webp?alt=media&token=20d6c51b-a927-4d09-af42-bd0600580e39"
                    width={500}
                    height={500}
                    alt="Mesa de Regalos"
                />
                <p className="text-[#fff] "><span className="font-bold">Evento:</span> 789456123</p>
            </div>
        </div>
    )
}

export default Gifts