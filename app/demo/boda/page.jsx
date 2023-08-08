import Image from "next/image";
import Styles from "../../styles/Demoboda.module.css";
import CountDown from "@/app/components/demo/boda/CountDown";
import Timeline from "@/app/components/demo/boda/Timeline";
import Map from "@/app/components/demo/xv/Map";

export const metadata = {
  title: 'Boda Invitación'
}

const Page = () => {
  return (
    <>
      <header className={`${Styles.header} saturate-200 flex justify-center items-center`}>
        <div className="text-[#fff] relative flex flex-col gap-5">
          <p className="text-center mx-4 md:mx-0 text-xl md:text-4xl">La Boda de</p>
          <h1 className="text-center text-3xl md:text-6xl">Jaquelin & Gerardo</h1>
          <Image
            src="/img/decoration.svg"
            width={500}
            height={500}
            alt="Decoration"
            className="px-5 md:mx-auto"
          />
        </div>
      </header>
      <main>
        <section className="my-14 text-[#cbcbcb]">
          <h2 className="text-center text-2xl md:text-5xl">Cuenta Regresiva</h2>
          <CountDown />
        </section>
        <section className="my-14">
          <Map />
        </section>
        <section className={Styles.timeline} >
          <Timeline />
        </section>

      </main>
    </>
  )
}

export default Page