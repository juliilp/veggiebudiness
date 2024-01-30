import { Link } from "react-router-dom";

interface Props {
  imagen: string;
  texto: string;
  url: number;
}
export default function CardRecipes({ imagen, texto, url }: Props) {
  return (
    <Link to={`/recipies/${url}`}>
      <article className="mx-8 md:px-0 flex flex-col items-center md:flex-row md:gap-8 lg:gap-24  ">
        <p
          className={`${
            url % 2 != 0 && "md:order-2 md:text-right "
          } max-w-[400px] text-center `}
        >
          {texto}
        </p>
        <Link
          to={`/recipies/${url}`}
          className="cursor-pointer transition-all duration-300 hover:scale-105 flex items-center justify-center"
        >
          <img
            src={imagen}
            alt="imagen"
            className=" w-full max-w-[500px] h-[400px] rounded-2xl"
            loading="lazy"
          />
        </Link>
      </article>
    </Link>
  );
}
