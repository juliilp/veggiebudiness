import { Link } from "react-router-dom";

interface Props {
  nombre: string;
  imagen: string;
  id: number;
}
export default function CardRecetas({ nombre, imagen, id }: Props) {
  return (
    <Link to={`/recipies/${id}`}>
      <article className="flex flex-col gap-6">
        <h4 className="text-center font-inter">{nombre}</h4>
        <img
          src={imagen}
          alt="Imagen"
          className="w-full max-w-[450px] h-[350px] md:w-[450px] object-cover px-4"
          loading="lazy"
        />
      </article>
    </Link>
  );
}
