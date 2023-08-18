"use client"

import { useState } from "react";

const nextYearFromNow = () => {
    const nextYear = new Date();
    nextYear.setFullYear(nextYear.getFullYear() + 1);
    return nextYear.getFullYear();
}

const endTime = new Date(nextYearFromNow(), 0, 1, 0, 0).getTime()

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
        <section className='flex flex-col md:flex-row justify-center items-center gap-10 md:gap-24 text-[#000] h-full my-10'>
            <div className='flex flex-col md:gap-5 text-xl md:text-6xl items-center'>
                <p className='font-bold'>{left.seconds}</p>
                <p>Segundos</p>
            </div>
            <div className='flex flex-col md:gap-5 text-xl md:text-6xl items-center'>
                <p className='font-bold'>{left.minutes}</p>
                <p>Minutos</p>
            </div>
            <div className='flex flex-col md:gap-5 text-xl md:text-6xl items-center'>
                <p className='font-bold'>{left.hours}</p>
                <p>Horas</p>
            </div>
            <div className='flex flex-col md:gap-5 text-xl md:text-6xl items-center'>
                <p className='font-bold'>{left.days}</p>
                <p>Días</p>
            </div>
        </section>
    )
}

export default CountDown