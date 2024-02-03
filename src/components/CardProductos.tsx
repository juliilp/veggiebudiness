import { Productos } from "../interfaces/IProductos";

export default function CardProductos({
  imagen,
  nombre,
  subnombre,
}: Productos) {
  return (
    <article className=" flex flex-col items-center justify-center gap-6 lg:h-[420px] ">
      <h2 className="font-aleo text-xl text-center">{nombre}</h2>
      <img
        src={imagen}
        alt="Imagen"
        className="w-[300px] h-[250px] px-4"
        loading="lazy"
      />
      <p className="font-aleo text-center max-w-[400px] ">{subnombre}</p>
    </article>
  );
}
