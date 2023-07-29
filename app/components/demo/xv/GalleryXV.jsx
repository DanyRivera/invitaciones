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

const GalleryXV = () => {

    const [open, setOpen] = useState(false);
    const [activeImage, setActiveImage] = useState('');

    const images = [
        'https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/demo%2Fxv-a%C3%B1os%2Fg-1.webp?alt=media&token=b7d9b95d-c36e-4f50-89be-3b773b351fbf',
        'https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/demo%2Fxv-a%C3%B1os%2Fg-2.webp?alt=media&token=7cc0a3ff-32a0-4707-9f38-bc106f64d276',
        'https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/demo%2Fxv-a%C3%B1os%2Fg-3.webp?alt=media&token=421addda-2f12-405f-a0fc-1270e60de5fb',
        'https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/demo%2Fxv-a%C3%B1os%2Fg-4.webp?alt=media&token=01b8037e-88a0-4ea1-8d56-b8cbe95510a3'
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

export default GalleryXV