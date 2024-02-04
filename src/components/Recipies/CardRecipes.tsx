import { Link } from "react-router-dom";

interface Props {
  imagen: string;
  texto: string;
  url: number;
}

export default function CardRecipes({ imagen, texto, url }: Props) {
  return (
    <Link to={`/recipies/${url}`}>
      <article className="flex flex-col items-center md:flex-row gap-4 md:gap-8 lg:gap-24 shadow-2xl py-8 px-8 rounded-md  ">
        <Link
          to={`/recipies/${url}`}
          className="cursor-pointer transition-all duration-300 hover:scale-105 flex items-center justify-center"
        >
          <img
            src={imagen}
            alt="imagen"
            className="w-[350px] h-[350px] md:w-[400px] object-cover rounded-2xl "
            loading="lazy"
          />
        </Link>
        <p
          className={`${
            url % 2 != 0 && "md:-order-2 md:text-right "
          } max-w-[400px] text-left text-sm  p-4 md:p-0 `}
        >
          {texto}
        </p>
      </article>
    </Link>
  );
}
