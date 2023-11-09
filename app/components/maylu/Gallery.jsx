'use client'

import { useState } from "react"
import Image from "next/image"
import ReactModal from "react-modal"
import { FaXmark } from "react-icons/fa6"
import styles from "../../styles/Maylu.module.css"

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'transparent',
        border: 'none',
    },
    overlay: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
};

ReactModal.setAppElement('body');

const Gallery = () => {

    const [open, setOpen] = useState(false);
    const [activeImage, setActiveImage] = useState('');

    const images = [
        'https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/maylu%2Fmaylu-1.webp?alt=media&token=6e8bca7b-923c-403c-81a8-2b5f3b7b01c0',
        'https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/maylu%2Fmaylu-2.webp?alt=media&token=91eefa49-57a8-408b-b545-fdb4d9479385',
        'https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/maylu%2Fmaylu-3.webp?alt=media&token=323e0891-efa0-4a8c-bff0-18f4ab78a627',
    ]

    return (
        <>
            <div className="flex justify-center items-center gap-20 ">

                <div className="grid md:grid-cols-5 gap-5 items-center">
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/maylu%2Fdecoracion-1-ok.svg?alt=media&token=12752e89-9341-45c1-b19d-33741a5c6f06"
                        width={200}
                        height={200}
                        alt="Decoration"
                        className="mx-auto"
                    />
                    {images.map((image, index) => (
                        <Image
                            onClick={() => {
                                setOpen(true)
                                setActiveImage(image)
                            }}
                            className="rounded-md hover:md:scale-95 transition-all md:shadow-xl cursor-pointer hover:md:brightness-75 px-3 md:px-0 md:h-full"
                            key={index}
                            src={image}
                            width={400}
                            height={400}
                            alt="Gallery Picture"
                        />
                    ))}
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/maylu%2Fdecoracion-1-ok.svg?alt=media&token=12752e89-9341-45c1-b19d-33741a5c6f06"
                        width={200}
                        height={200}
                        alt="Decoration"
                        className="mx-auto"
                    />
                </div>

            </div>

            <ReactModal
                isOpen={open}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="flex flex-col items-center justify-center">
                    <button
                        onClick={() => {
                            setOpen(false)
                            setActiveImage('')
                        }}
                        className="text-4xl text-[#fff]"
                    >
                        <FaXmark />
                    </button>
                    <Image
                        className={`${open && styles.image_animation} mt-14 rounded-md`}
                        src={activeImage}
                        width={400}
                        height={250}
                        alt="Image Gallery"
                    />
                </div>
            </ReactModal>
        </>
    )
}

export default Gallery