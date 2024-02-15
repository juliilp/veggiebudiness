import imagenQuienesSomos from "../../assets/home/fondo-quienes somos.jpg";

export default function QuienesSomos() {
  return (
    <section className="flex justify-center items-center w-full relative h-[70vh] my-64">
      <img
        src={imagenQuienesSomos}
        alt="imagen"
        className=" absolute top-0 left-0 w-full h-full "
      />
      <article className="p6 md:p-12 lg:p-24 flex flex-col justify-center items-center gap-8 relative text-white ">
        <div className="w-full h-full absolute top-0 left-0 bg-[#644517] opacity-40  " />
        <h2 className="text-3xl md:text-5xl text-center font-inter font-bold z-10 ">
          ¿Quienes somos?
        </h2>
        <p className="max-w-[650px] text-xl font-playfairDisplay text-center z-10 ">
          Somos un emprendimiento dedicado a romper las barreras dentro de la
          alimentación, probando que es posible comer libre de crueldad animal y
          rico. Mientras vos cuidas el mundo, nosotros te premiamos con nuestras
          delicias.
        </p>
        <button className="bg-[#FAECE3] rounded-xl py-3 px-28 font-inter font-semibold cursor-pointer z-10 text-black">
          Quiero saber más
        </button>
      </article>
    </section>
  );
}
