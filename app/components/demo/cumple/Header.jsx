import Image from "next/image"

const Header = () => {
    return (
        <header className="relative">
            <div className="grid md:grid-cols-2 w-full h-full">
                <Image
                    src="https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/demo%2Fcumple%2Fh-1.webp?alt=media&token=5af6ee5c-2112-405b-b0ef-b679142a222c"
                    width={500}
                    height={600}
                    alt="Image Header"
                    className="w-full"
                />
                <Image
                    src="https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/demo%2Fcumple%2Fh-3.webp?alt=media&token=3de993d1-045f-45e1-9ce6-43000e80d1bf"
                    width={500}
                    height={600}
                    alt="Image Header"
                    className="w-full"
                />
                <Image
                    src="https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/demo%2Fcumple%2Fh-4.webp?alt=media&token=62d1f4ad-75c8-40d4-9d6d-f5dcaf7c1ff1"
                    width={500}
                    height={600}
                    alt="Image Header"
                    className="w-full"
                />
                <Image
                    src="https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/demo%2Fcumple%2Fh-2.webp?alt=media&token=5b3c0a79-b81c-45b0-b9f5-78eead283953"
                    width={500}
                    height={600}
                    alt="Image Header"
                    className="w-full"
                />
            </div>
            <div className="absolute top-0 flex justify-center items-center w-full h-full px-5">
                <div className="bg-[#fff] text-[#0077b6] px-10 py-5 md:py-16 md:px-20 rounded">
                    <h1 className="text-2xl md:text-6xl text-center">Te invito a mi cumpleaños!</h1>
                    <h2 className="text-xl md:text-5xl text-center mt-3 md:mt-5">Carlos González</h2>
                </div>
            </div>
        </header>
    )
}

export default Header