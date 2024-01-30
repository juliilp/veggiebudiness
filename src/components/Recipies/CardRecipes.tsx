import { Link } from "react-router-dom";

interface Props {
  imagen: string;
  texto: string;
  url: number;
}
export default function CardRecipes({ imagen, texto, url }: Props) {
  return (
    <Link to={`/recipies/${url}`}>
      <article className="mx-8 md:px-0 flex flex-col md:flex-row ">
        <p className={`${url % 2 == 0 && "order-2"}`}>{texto}</p>
        <img src={imagen} alt="imagen" className="size-[200px]" />
      </article>
    </Link>
  );
}
