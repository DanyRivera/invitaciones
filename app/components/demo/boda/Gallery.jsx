import Image from "next/image"

const Gallery = () => {
    return (
        <div className="mx-12 md:mx-44 md:grid md:grid-cols-2 md:grid-rows-3">
            <div>
                <Image
                    src="https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/demo%2Fboda%2Fg-1.webp?alt=media&token=9240668d-ff95-4a5e-bcd9-7e0b475bb8ab"
                    width={350}
                    height={350}
                    alt="gallery"
                    className="w-full"
                />
            </div>
            <div>
                <Image
                    src="https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/demo%2Fboda%2Fg-2.webp?alt=media&token=15649dca-947b-40ea-b890-c8a540d60605"
                    width={350}
                    height={350}
                    alt="gallery"
                    className="w-full"
                />
            </div>
            <div>
                <Image
                    src="https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/demo%2Fboda%2Fg-4.webp?alt=media&token=264f9bd7-5bd5-40cf-8e36-76155bf1b58a"
                    width={350}
                    height={350}
                    alt="gallery"
                    className="w-full"
                />
            </div>
            <div>
                <Image
                    src="https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/demo%2Fboda%2Fg-3.webp?alt=media&token=5883f7c8-876f-4075-86c5-ee0865844fb6"
                    width={350}
                    height={350}
                    alt="gallery"
                    className="w-full"
                />
            </div>
        </div>
    )
}

export default Gallery