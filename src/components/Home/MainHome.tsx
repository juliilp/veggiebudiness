import fondoHome from "../../assets/home/fondo-home-desktop.jpg";

export default function MainHome() {
  return (
    <main className="relative w-full h-screen flex md:justify-center md:items-center ">
      <img
        src={fondoHome}
        alt="imagen-fondo"
        className="absolute w-full h-screen object-cover z-0 brightness-[0.5]"
      />
      <section className="my-8 md:my-0 text-center relative z-10 text-white  flex flex-col gap-2 items-center justify-center ">
        <span className="block text-[#FFE500] font-bevan text-3xl lg:text-4xl">
          The power of our
        </span>
        <span className="block font-bevan text-5xl lg:text-6xl">
          Vegan Cakes
        </span>
        <span className="block font-playfairDisplay text-3xl lg:text-4xl">
          Atrévete a probar nuestras osadas delicias que te van a sacar de lo
          conocido.
        </span>
      </section>
    </main>
  );
}
