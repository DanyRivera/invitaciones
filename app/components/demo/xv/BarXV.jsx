'use client'

import { useState, useEffect } from "react"
import { Link } from "react-scroll"
import { AiOutlineMenu } from "react-icons/ai"
import { FaXmark } from "react-icons/fa6"
import styles from "../../../styles/Demoxv.module.css"

const BarXV = () => {

    const [showMenu, setShowMenu] = useState(false);
    const [showBar, setShowBar] = useState(false);

    useEffect(() => {

        const handleScroll = () => {

            const y = window.scrollY;

            if (y > 100) {
                setShowBar(true);
            } else {
                setShowBar(false);
            }
        };

        // Agregar el event listener cuando el componente se monta
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <>
            <section className={`${showBar ? styles.bar_animation : styles.bar_animation_out} flex justify-between p-5 md:px-16 fixed w-full z-10`}>
                <h2 className="font-bold text-[#fff] md:text-lg">Mis XV</h2>
                <button
                    onClick={() => setShowMenu(true)}
                    className="text-[#fff] text-xl md:hidden"
                ><AiOutlineMenu /></button>

                <ul className="hidden md:flex gap-20 items-center ">
                    <li>
                        <Link
                            to="ubicacion"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={1000}
                            className="text-lg md:text-base text-[#fff] hover:text-secondary transition-all font-bold w-full text-start cursor-pointer"
                        >Ubicación</Link>
                    </li>
                    <li>
                        <Link
                            to="regresiva"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={1000}
                            className="text-lg md:text-base text-[#fff] hover:text-secondary transition-all font-bold w-full text-start cursor-pointer"
                        >Cuenta Regresiva</Link>
                    </li>
                    <li>
                        <Link
                            to="regalos"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={1000}
                            className="text-lg md:text-base text-[#fff] hover:text-secondary transition-all font-bold w-full text-start cursor-pointer"
                        >Mesa de Regalos</Link>
                    </li>
                    <li>
                        <Link
                            to="vestimenta"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={1000}
                            className="text-lg md:text-base text-[#fff] hover:text-secondary transition-all font-bold w-full text-start cursor-pointer"
                        >Código de Vestimenta</Link>
                    </li>
                    <li>
                        <Link
                            to="itinerario"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={1000}
                            className="text-lg md:text-base text-[#fff] hover:text-secondary transition-all font-bold w-full text-start cursor-pointer"
                        >Itinerario</Link>
                    </li>
                    <li>
                        <Link
                            to="confirmacion"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={1000}
                            className="text-lg md:text-base text-[#fff] hover:text-secondary transition-all font-bold w-full text-start cursor-pointer"
                        >Confirmación</Link>
                    </li>

                </ul>
            </section>

            <section className={`${showMenu ? styles.menu_animation : styles.menu_animation_out} z-20 w-full h-full fixed md:hidden`}>
                <div className="flex justify-end">
                    <button
                        onClick={() => setShowMenu(false)}
                        className="m-7 text-3xl text-[#fff]"
                    ><FaXmark /></button>
                </div>
                <ul className="flex-col justify-center flex  m-5">
                    <li className="py-4">
                        <Link
                            onClick={() => setShowMenu(false)}
                            to="ubicacion"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={1000}
                            className="text-lg text-[#fff] font-bold w-full text-start"
                        >Ubicación</Link>
                    </li>
                    <li className="py-4">
                        <Link
                            onClick={() => setShowMenu(false)}
                            to="regresiva"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={1000}
                            className="text-lg text-[#fff] font-bold w-full text-start"
                        >Cuenta Regresiva</Link>
                    </li>
                    <li className="py-4">
                        <Link
                            onClick={() => setShowMenu(false)}
                            to="regalos"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={1000}
                            className="text-lg text-[#fff] font-bold w-full text-start"
                        >Mesa de Regalos</Link>
                    </li>
                    <li className="py-4">
                        <Link
                            onClick={() => setShowMenu(false)}
                            to="vestimenta"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={1000}
                            className="text-lg text-[#fff] font-bold w-full text-start"
                        >Código de Vestimenta</Link>
                    </li>
                    <li className="py-4">
                        <Link
                            onClick={() => setShowMenu(false)}
                            to="itinerario"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={1000}
                            className="text-lg text-[#fff] font-bold w-full text-start"
                        >Itinerario</Link>
                    </li>
                    <li className="py-4">
                        <Link
                            onClick={() => setShowMenu(false)}
                            to="confirmacion"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={1000}
                            className="text-lg text-[#fff] font-bold w-full text-start"
                        >Confirmación</Link>
                    </li>

                </ul>
            </section>
        </>
    )
}

export default BarXV