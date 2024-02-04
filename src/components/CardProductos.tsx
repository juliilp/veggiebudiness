import { Productos } from "../interfaces/IProductos";

export default function CardProductos({
  imagen,
  nombre,
  subnombre,
}: Productos) {
  return (
    <article className=" flex flex-col items-center justify-center gap-6  ">
      <h2 className="font-aleo text-xl text-center md:text-2xl font-normal">
        {nombre}
      </h2>
      <img
        src={imagen}
        alt="Imagen"
        className="w-full max-w-[450px] h-[350px] px-4"
        loading="lazy"
      />
      <p className="font-aleo text-center max-w-[400px] text-lg ">
        {subnombre}
      </p>
    </article>
  );
}
