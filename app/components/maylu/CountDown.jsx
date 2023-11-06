"use client"

import { useState } from "react";
import Image from "next/image";

import { Great_Vibes } from 'next/font/google'

const greatVibes = Great_Vibes({
    subsets: ['latin'],
    weight: '400'
})

const nextYearFromNow = () => {
    const nextYear = new Date();
    nextYear.setFullYear(nextYear.getFullYear() + 1);
    return nextYear.getFullYear();
}

const endTime = new Date(nextYearFromNow(), 0, 6, 13, 0).getTime()

const timeLeft = () => {
    const now = new Date();
    const remainigTime = endTime - now.getTime()

    const seconds = Math.floor((remainigTime / 1000) % 60);
    const minutes = Math.floor((remainigTime / 1000 / 60) % 60);
    const hours = Math.floor((remainigTime / (1000 * 60 * 60)) % 24);
    const days = Math.floor(remainigTime / (1000 * 60 * 60 * 24));

    return {
        seconds,
        minutes,
        hours,
        days
    }
}

const CountDown = () => {

    const [left, setLeft] = useState({})

    setInterval(() => {
        setLeft(timeLeft())
    }, 1000);

    return (
        <section className={`${greatVibes.className} flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 h-full`}>
            <Image 
                src="https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/maylu%2Fcolibri.svg?alt=media&token=423a13e9-4fda-45fe-a43e-df8ff5c64429"
                width={150}
                height={150}
                alt="Colibrí"
            />
            <div className='flex flex-col md:gap-5 text-3xl md:text-6xl items-center'>
                <p className='font-bold'>{left.seconds}</p>
                <p>Segundos</p>
            </div>
            <div className='flex flex-col md:gap-5 text-3xl md:text-6xl items-center'>
                <p className='font-bold'>{left.minutes}</p>
                <p>Minutos</p>
            </div>
            <div className='flex flex-col md:gap-5 text-3xl md:text-6xl items-center'>
                <p className='font-bold'>{left.hours}</p>
                <p>Horas</p>
            </div>
            <div className='flex flex-col md:gap-5 text-3xl md:text-6xl items-center'>
                <p className='font-bold'>{left.days}</p>
                <p>Días</p>
            </div>
            <Image 
                src="https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/maylu%2Fcolibri.svg?alt=media&token=423a13e9-4fda-45fe-a43e-df8ff5c64429"
                width={150}
                height={150}
                alt="Colibrí"
            />
        </section>
    )
}

export default CountDown