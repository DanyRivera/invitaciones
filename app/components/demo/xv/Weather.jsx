
import Image from "next/image";

const getData = async () => {

  // const res = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Puebla&appid=4b73bf2e9f63c1093cdc8ccb831afa34&units=metric&lang=sp");

  const res = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=18.8333&lon=-98&appid=4b73bf2e9f63c1093cdc8ccb831afa34&units=metric&lang=sp", { cache: 'no-store' });
  const response = await res.json();
  return response;
  
}

const Weather = async () => {

  let clima = await getData();

  return (
    <div className="flex flex-col justify-center items-center mt-5 md:mt-0 text-[#5c0099]">
      <h2 className="text-4xl md:text-5xl">Clima Ahora</h2>
      <p className="text-xl my-4 md:text-2xl">{clima.main.temp}°C - {clima.weather[0].description}</p>
      <Image
        src={`https://openweathermap.org/img/wn/${clima.weather[0].icon}@4x.png`}
        width={150}
        height={150}
        alt="Image Weather"
      />
      <p className="text-xl my-2 md:text-3xl">Mínima: <span className="font-bold">{clima.main.temp_min}°C</span></p>
      <p className="text-xl my-2 md:text-3xl">Máxima: <span className="font-bold">{clima.main.temp_max}°C</span></p>
    </div>
  )
}

export default Weather