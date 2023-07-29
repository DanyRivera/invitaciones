import Image from "next/image";
import Link from "next/link";
import { FaHashtag, FaWhatsapp } from "react-icons/fa6";
import styles from "../../styles/Demoxv.module.css"
import GalleryXV from "../../components/demo/xv/GalleryXV";
import BarXV from "../../components/demo/xv/BarXV";
import CountDown from "../../components/demo/xv/CountDown";
import Map from "../../components/demo/xv/Map";
import Weather from "../../components/demo/xv/Weather";
import Video from "../../components/demo/xv/Video";
import Timeline from "../../components/demo/xv/Timeline";

//Fonts
import { Dancing_Script, Inconsolata } from 'next/font/google'

const dancingScript = Dancing_Script({
  subsets: ['latin'],
})

const inconsolata = Inconsolata({
  subsets: ['latin'],
  weight: '400'
})

export const metadata = {
  title: 'MI Invitación | VX Años Demo',
  description: 'WebSite for create invitations',
}

const Page = () => {

  const date = new Date();
  const currentDate = date.getFullYear();

  return (
    <>
      <BarXV />
      <header className={styles.header}>
        <div className="text-[#fff] relative flex flex-col text-center justify-end gap-6 md:gap-8 items-center h-full pb-16 md:pb-20 px-2 md:px-0">
          <h1 className="text-2xl md:text-5xl">Mis XV Años</h1>
          <h2 className={`${dancingScript.className} text-3xl md:text-6xl`}>Valeria González</h2>
          <h2 className={`${inconsolata.className} text-4xl md:text-7xl`}>09 Febrero 2024</h2>
        </div>
      </header>
      <main>
        <section className="my-10">
          <h1 className="text-center text-2xl md:text-5xl mb-10 text-[#5c009993] font-bold uppercase tracking-wider">Galería</h1>
          <GalleryXV />
        </section>

        <section id="regresiva" className="my-10">
          <h1 className="text-center text-2xl md:text-5xl mb-10 text-[#5c009993] font-bold uppercase tracking-wider">¿Estás listo?</h1>
          <CountDown />
        </section>

        <section id="ubicacion" className="my-10">
          <h1 className="text-center text-2xl md:text-5xl mb-10 text-[#5c009993] font-bold uppercase tracking-wider">¿Aún no sabes donde es?</h1>
          <div className="grid md:grid-cols-4 md:mx-10">
            <div className="md:col-start-1 md:col-end-4">
              <Map />
            </div>
            <div className="rounded-md">
              <Weather />
            </div>
          </div>
        </section>

        <section className="my-10">
          <h1 className="text-center text-2xl md:text-5xl mb-10 text-[#5c009993] font-bold uppercase tracking-wider">¿Ya Sabes Donde Hospedarte?</h1>
          <div className="flex justify-between items-center ">
            <Image
              className="rotate-90 hidden md:block"
              src="https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/demo%2Fxv-a%C3%B1os%2Fdecoration.svg?alt=media&token=1e1069c1-228b-44e3-8f9e-043a4123a5d5"
              width={400}
              height={250}
              alt="Decoration Gallery"
            />
            <div className="flex flex-col justify-center items-center text-center w-full">
              <Image
                className="md:rounded-md w-auto h-auto"
                src="https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/demo%2Fxv-a%C3%B1os%2Fhotel.webp?alt=media&token=a45feb05-a496-4e1c-9bfe-c93408be1525"
                width={500}
                height={500}
                alt="Image Hotel"
              />
              <h3 className="my-5 text-xl md:text-3xl font-bold text-[#5c0099]">Grand Fiesta Americana Puebla Angelópolis</h3>
              <div className="my-3 flex flex-col items-center gap-3">
                <p className="text-lg font-bold md:text-xl text-[#5c009993]">Direccion:</p>
                <p className="md:text-lg md:w-1/2 text-[#5c009993] mx-3 md:mx-0">
                  Osa Mayor 2507 Col, Reserva Territorial Atlixcáyotl, Centro Comercial Angelopolis, 72190 Puebla, Pue
                </p>
              </div>
              <div className="my-3 flex flex-col items-center gap-1">
                <p className="text-lg font-bold md:text-xl text-[#5c009993]">Teléfono:</p>
                <p className="md:text-lg text-[#5c009993]">
                  222 122 1500
                </p>
              </div>
              <Link
                target="_blank"
                rel="noreferrer"
                className="bg-[#5c0099] text-[#fff] px-6 py-2 mt-4 rounded-md md:text-xl md:px-8 md:py-3"
                href="https://goo.gl/maps/E7DpaedWVmikzV5s6"
              >Ver en Maps</Link>
            </div>
            <Image
              className="rotate-90 hidden md:block"
              src="https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/demo%2Fxv-a%C3%B1os%2Fdecoration.svg?alt=media&token=1e1069c1-228b-44e3-8f9e-043a4123a5d5"
              width={400}
              height={250}
              alt="Decoration Gallery"
            />
          </div>
        </section>

        <section id="regalos" className="my-10">
          <h1 className="text-center text-2xl md:text-5xl mb-10 text-[#5c009993] font-bold uppercase tracking-wider">Mesa de Regalos</h1>
          <div className="grid gap-10 justify-center text-center md:grid-cols-4 md:mx-24">
            <div className="flex flex-col justify-between bg-[#df0096] py-5 px-4 md:rounded-lg md:hover:scale-110 transition-all md:shadow-2xl">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/demo%2Fxv-a%C3%B1os%2Fliverpool.webp?alt=media&token=2a5e0a8a-5418-4243-b775-0f97b02bdd85"
                width={500}
                height={500}
                alt="Mesa de Regalos"
              />
              <p className="text-[#fff] "><span className="font-bold">Evento:</span> 789456123</p>
            </div>
            <div className="flex flex-col justify-between bg-[#ffc424] py-5 px-4 md:rounded-lg md:hover:scale-110 transition-all md:shadow-2xl">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/demo%2Fxv-a%C3%B1os%2Fpalacio.webp?alt=media&token=ec60bc74-2558-4d4e-aebc-c4ff41d02b5e"
                width={500}
                height={500}
                alt="Mesa de Regalos"
              />
              <p className="text-[#000] "><span className="font-bold">Evento:</span> 789456123</p>
            </div>
            <div className="flex flex-col justify-between bg-[#232f3e] py-5 px-4 md:rounded-lg md:hover:scale-110 transition-all md:shadow-2xl">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/demo%2Fxv-a%C3%B1os%2Famazon.webp?alt=media&token=efe5aecf-c8b7-47a9-bd17-246a044a8900"
                width={350}
                height={350}
                alt="Mesa de Regalos"
              />
              <p className="text-[#fff] "><span className="font-bold">Evento:</span> 789456123</p>
            </div>
            <div className="flex flex-col justify-between bg-[#cd092e] py-5 px-4 md:rounded-lg md:hover:scale-110 transition-all md:shadow-2xl">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/demo%2Fxv-a%C3%B1os%2Fsears.webp?alt=media&token=20d6c51b-a927-4d09-af42-bd0600580e39"
                width={500}
                height={500}
                alt="Mesa de Regalos"
              />
              <p className="text-[#fff] "><span className="font-bold">Evento:</span> 789456123</p>
            </div>
          </div>
        </section>

        <section id="vestimenta" className="my-10">
          <h1 className="text-center text-2xl md:text-5xl mb-10 text-[#5c009993] font-bold uppercase tracking-wider">Código de vestimenta</h1>
          <div className="flex flex-col md:flex-row md:justify-center md:items-center">
            <Image
              className="rotate-90 hidden md:block"
              src="https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/demo%2Fxv-a%C3%B1os%2Fdecoration.svg?alt=media&token=1e1069c1-228b-44e3-8f9e-043a4123a5d5"
              width={400}
              height={250}
              alt="Decoration Gallery"
            />
            <div>
              <p className="text-2xl font-bold text-center md:text-3xl text-[#5c0099]">Mujeres</p>
              <div className="mt-4 border-double border-8 rounded-md mx-auto w-2/3 md:w-1/2">
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/demo%2Fxv-a%C3%B1os%2Fwoman.png?alt=media&token=62260a66-190b-4f72-83f4-8f6156ff7541"
                  width={500}
                  height={500}
                  alt="Mesa de Regalos"
                />
                <p className="text-center text-xl uppercase my-3 text-[#5c009993]">Formal</p>
              </div>
            </div>
            <p className="text-center text-4xl my-7 md:text-6xl text-[#5c009993] font-bold">&</p>
            <div>
              <p className="text-2xl font-bold text-center md:text-3xl text-[#5c0099]">Hombres</p>
              <div className="mt-4 border-double border-8 rounded-md mx-auto w-2/3 md:w-1/2">
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/demo%2Fxv-a%C3%B1os%2Fmen.png?alt=media&token=61ba7589-9698-4d2f-8e5c-d114564437a6"
                  width={500}
                  height={500}
                  alt="Mesa de Regalos"
                />
                <p className="text-center text-xl uppercase my-3 text-[#5c009993]">Formal</p>
              </div>
            </div>
            <Image
              className="rotate-90 hidden md:block"
              src="https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/demo%2Fxv-a%C3%B1os%2Fdecoration.svg?alt=media&token=1e1069c1-228b-44e3-8f9e-043a4123a5d5"
              width={400}
              height={250}
              alt="Decoration Gallery"
            />
          </div>
        </section>

        <section id="itinerario" className="my-10">
          <h1 className="text-center text-2xl md:text-5xl mb-10 text-[#5c009993] font-bold uppercase tracking-wider">Itinerario</h1>
          <Timeline />
        </section>

        <section className="my-10">
          <h1 className="text-center text-2xl md:text-5xl mb-10 text-[#5c009993] font-bold uppercase tracking-wider">Padrinos</h1>

          <div className="grid gap-5 md:grid-cols-4 text-[#5c009993] md:mx-20">
            <div className="flex flex-col gap-5 items-center">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/demo%2Fxv-a%C3%B1os%2Fpadrino.webp?alt=media&token=4f619250-f1c7-4b92-a052-33688c47350c"
                width={300}
                height={300}
                alt="Padrin@"
                className="rounded-full w-2/3 shadow-2xl"
              />
              <div>
                <p className="text-center text-xl">Marcos Rivera</p>
                <p className="text-center text-lg">Padrino: <span className="font-bold">Vestido</span></p>
              </div>
            </div>
            <div className="flex flex-col gap-5 items-center">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/demo%2Fxv-a%C3%B1os%2Fmadrina.webp?alt=media&token=9b9ac456-fc5f-43b5-9355-e457cb129738"
                width={300}
                height={300}
                alt="Padrin@"
                className="rounded-full w-2/3 shadow-2xl"
              />
              <div>
                <p className="text-center text-xl">Regina González</p>
                <p className="text-center text-lg">Madrina: <span className="font-bold">Vestido</span></p>
              </div>
            </div>
            <div className="flex flex-col gap-5 items-center">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/demo%2Fxv-a%C3%B1os%2Fpadrino.webp?alt=media&token=4f619250-f1c7-4b92-a052-33688c47350c"
                width={300}
                height={300}
                alt="Padrin@"
                className="rounded-full w-2/3 shadow-2xl"
              />
              <div>
                <p className="text-center text-xl">Roberto Matinez</p>
                <p className="text-center text-lg">Padrino: <span className="font-bold">Pastel</span></p>
              </div>
            </div>
            <div className="flex flex-col gap-5 items-center">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/demo%2Fxv-a%C3%B1os%2Fmadrina.webp?alt=media&token=9b9ac456-fc5f-43b5-9355-e457cb129738"
                width={300}
                height={300}
                alt="Padrin@"
                className="rounded-full w-2/3 shadow-2xl"
              />
              <div>
                <p className="text-center text-xl">Valeria Arroyo</p>
                <p className="text-center text-lg">Madrina: <span className="font-bold">Pastel</span></p>
              </div>
            </div>
          </div>

        </section>

        <section className="my-10">
          <Video />
        </section>

        <section id="confirmacion" className="my-10 md:grid md:grid-cols-2">
          <div className="flex flex-col md:flex-row md:justify-center md:gap-5 md:items-center text-center md:text-left text-[#fff] bg-[#5c0099] md:py-16 py-10 md:px-10">
            <FaHashtag className="text-9xl mx-auto my-3 md:mx-0 md:my-0" />
            <div className="flex flex-col items-center md:items-start md:gap-5 gap-2 mx-3">
              <p className="text-2xl md:text-6xl">Hashtag del Evento</p>
              <p className="text-lg md:text-2xl">Comparte todas las fotografías del evento usando el hashtag:</p>
              <p className="text-xl md:text-4xl font-bold">#hashtag_evento</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:justify-center md:gap-5 md:items-center text-[#fff] bg-[#37dd55] md:py-16 py-10">
            <FaWhatsapp className="text-9xl mx-auto my-3 md:mx-0 md:my-0" />
            <div className="flex flex-col items-center text-center md:items-start md:gap-5 gap-2 mx-3">
              <p className="text-2xl md:text-6xl font-bold">Confirmación</p>
              <p className="text-lg md:text-2xl">Confrima tu asistencia mediante WhatsApp:</p>
              <button
                className="text-[#fff] bg-[#2fbd49] tracking-wide rounded-sm px-4 py-3 mt-4 md:w-full md:text-xl "
              >Confirmar</button>
            </div>
          </div>
        </section>

      </main>

      <footer className="bg-[#5c0099] text-[#fff] text-center py-8 px-2">
        <p>&copy; Copyright {currentDate} | Invitación Digital Creada por <span className="font-bold"><Link href="/">Invitacion</Link></span></p>
      </footer>
    </>
  )
}

export default Page
