"use client"

import { useState } from 'react'
import styles from "../../../styles/Demoxv.module.css"

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
        <section className={styles.bg_countdown}>
            <div className='flex flex-col md:flex-row justify-center items-center gap-10 md:gap-24 relative text-[#fff] h-full'>
                <div className='flex flex-col md:gap-5 text-xl md:text-6xl items-center'>
                    <p className='font-bold'>{left.seconds}</p>
                    <p>Seconds</p>
                </div>
                <div className='flex flex-col md:gap-5 text-xl md:text-6xl items-center'>
                    <p className='font-bold'>{left.minutes}</p>
                    <p>Minutes</p>
                </div>
                <div className='flex flex-col md:gap-5 text-xl md:text-6xl items-center'>
                    <p className='font-bold'>{left.hours}</p>
                    <p>Hours</p>
                </div>
                <div className='flex flex-col md:gap-5 text-xl md:text-6xl items-center'>
                    <p className='font-bold'>{left.days}</p>
                    <p>Days</p>
                </div>
            </div>
        </section>
    )
}

export default CountDown