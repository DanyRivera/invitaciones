'use client'

import { useState } from "react"
import Image from "next/image"
import ReactModal from "react-modal"
import { FaXmark } from "react-icons/fa6"
import styles from "../../../styles/Demoxv.module.css"

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
        'https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/demo%2Fcumple%2Fg-1.webp?alt=media&token=129c4b63-8fc0-4ad1-a66c-39ed6ad8ea1f',
        'https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/demo%2Fcumple%2Fg-2.webp?alt=media&token=eb2f041c-47f5-4ab8-86d2-5747027ba7b5',
        'https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/demo%2Fcumple%2Fg-3.webp?alt=media&token=a37d3a98-cd24-4cb3-b81e-0f73ba6ce038',
        'https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/demo%2Fcumple%2Fg-4.webp?alt=media&token=ac434904-cfd1-45df-b96b-df243881a2fc'
    ]

    return (
        <>
            <div className="flex justify-center items-center gap-20 ">

                <div className="grid md:grid-cols-4 gap-5 md:mx-14">
                    {images.map((image, index) => (
                        <Image
                            onClick={() => {
                                setOpen(true)
                                setActiveImage(image)
                            }}
                            className="md:rounded-md hover:md:scale-95 transition-all md:shadow-xl cursor-pointer hover:md:brightness-75"
                            key={index}
                            src={image}
                            width={400}
                            height={400}
                            alt="Gallery Picture"
                        />
                    ))}
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