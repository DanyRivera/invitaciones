import Link from "next/link";

const Footer = ({ color, text }) => {

    const date = new Date();
    const currentDate = date.getFullYear();

    return (
        <footer className={`bg-[#${color}] text-[#${text}] text-center py-8 px-2`}>
            <p>&copy; Copyright {currentDate} | Invitación Digital Creada por <span className="font-bold"><Link target="_blank" rel="noreferrer" href="https://invitastu.vercel.app">InvitasTU</Link></span></p>
        </footer>
    )
}

export default Footer