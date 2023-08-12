import Image from "next/image";
import Styles from "../../styles/Demoboda.module.css";
import CountDown from "@/app/components/demo/boda/CountDown";
import Timeline from "@/app/components/demo/boda/Timeline";
import Map from "@/app/components/demo/boda/Map";
import Gallery from "@/app/components/demo/boda/Gallery";

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

        <section className={`${Styles.timeline} saturate-200`} >
          <Timeline />
        </section>

        <section>
          <Map />
        </section>

        <section className="my-14">
          <Gallery />
        </section>

        <section className="py-10 my-14 bg-[#cbcbcb] text-[#fff]">
          <h2 className="text-center text-3xl md:text-6xl my-8">Mesa de Regalos</h2>
          <div className="py-10 flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
            <div className="flex flex-col justify-center items-center gap-4 md:gap-10 mx-5 md:mx-0">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/demo%2Fboda%2Fliverpool.webp?alt=media&token=5babf714-7a72-4bbc-8697-9cf6982568c7"
                width={500}
                height={500}
                alt="Liverpool"
              />
              <p className="text-xl md:text-4xl font-bold">132123123</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 md:gap-10 mx-5 md:mx-0">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/demo%2Fboda%2Fpalacio.webp?alt=media&token=c6445e08-c1b1-4a30-875f-23b0da2944ec"
                width={500}
                height={500}
                alt="Liverpool"
              />
              <p className="text-xl md:text-4xl font-bold">132123123</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 md:gap-10 mx-5 md:mx-0">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/demo%2Fboda%2Fsears.webp?alt=media&token=66a2b8ac-0a62-495e-bf5c-fb806709b533"
                width={500}
                height={500}
                alt="Liverpool"
              />
              <p className="text-xl md:text-4xl font-bold">132123123</p>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}

export default Page