import styles from "../../../styles/Demoxv.module.css"
import { GiChurch, GiPartyPopper, GiFoodTruck, GiTicket } from "react-icons/gi"

const Timeline = () => {
    return (
        <div className={`${styles.timeline} grid gap-5 md:grid-cols-4  md:mx-20`}>
            <div className="flex flex-col gap-2 items-center justify-center">
                <div className="text-[#fff] bg-[#5c0099] text-7xl md:text-8xl rounded-full" >
                    <GiChurch className="mx-6 my-6 md:my-10 md:mx-10" />
                </div>
                <div className="flex flex-col gap-2 justify-center items-end px-12 w-full md:items-center">
                    <p className="text-right text-xl ng text-[#5c009993]">Misa</p>
                    <p className="text-right text-lg font-bold text-[#5c0099]">14:00</p>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center">
                <div className="text-[#fff] bg-[#5c0099] text-7xl md:text-8xl rounded-full" >
                    <GiTicket className="mx-6 my-6 md:my-10 md:mx-10" />
                </div>
                <div className="flex flex-col gap-2 justify-center items-start px-12 w-full md:items-center">
                    <p className="text-right text-xl ng text-[#5c009993]">Entrada</p>
                    <p className="text-right text-lg font-bold text-[#5c0099]">15:30</p>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center">
                <div className="text-[#fff] bg-[#5c0099] text-7xl md:text-8xl rounded-full" >
                    <GiFoodTruck className="mx-6 my-6 md:my-10 md:mx-10" />
                </div>
                <div className="flex flex-col gap-2 justify-center items-end px-12 w-full md:items-center">
                    <p className="text-right text-xl ng text-[#5c009993]">Comida</p>
                    <p className="text-right text-lg font-bold text-[#5c0099]">16:30</p>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center">
                <div className="text-[#fff] bg-[#5c0099] text-7xl md:text-8xl rounded-full" >
                    <GiPartyPopper className="mx-6 my-6 md:my-10 md:mx-10" />
                </div>
                <div className="flex flex-col gap-2 justify-center items-start px-12 w-full md:items-center">
                    <p className="text-right text-xl ng text-[#5c009993]">Baile</p>
                    <p className="text-right text-lg font-bold text-[#5c0099]">20:00</p>
                </div>
            </div>
        </div>

    )
}

export default Timeline