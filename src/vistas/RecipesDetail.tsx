import { useParams } from "react-router-dom";
import { recetas } from "../data/recetas";

import { ImFacebook } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import Comentarios from "../components/RecipesDetail/Comentarios";

export default function RecipesDetail() {
  const { id } = useParams();

  const card = recetas.find((c) => c.id === Number(id));

  if (!card) {
    return <h2>No hay card</h2>;
  }
  return (
    <section className="flex flex-col gap-12 font-playfairDisplay mt-12">
      <h2 className="text-center text-3xl md:text-5xl font-lobsterTwo">
        {card.nombre}
      </h2>
      <img
        src={card.imagen}
        alt="imagen"
        className=" w-full max-w-[450px]  h-[300px] mx-auto  object-cover rounded-xl object-cover"
      />

      <div className="w-[90%] h-[1px] border border-[#868383] bg-[#868383] mx-auto" />
      <article className="flex items-center justify-around px-8">
        <article className="flex flex-col justify-center  font-bold text-xl text-center">
          <span>Tiempo de preparacion</span>
          <h5>{card.tiempo}</h5>
        </article>

        <article className="flex flex-col  justify-center">
          <h5 className=" text-xl font-bold">Nivel de dificultad</h5>
          <span>{card.dificultad}</span>
        </article>
      </article>
      <div className="w-[90%] h-[1px] border border-[#868383] bg-[#868383] mx-auto" />

      <section className="ml-6 md:ml-24">
        <article>
          <div className="flex items-center gap-6">
            <h3 className="text-2xl font-bold ">Ingredientes</h3>
            <div className="w-[86%] h-[1px] border border-[#868383] bg-[#868383]  hidden md:block " />
          </div>

          <ul className="flex flex-col my-6 list-disc ml-6">
            {card.ingredientes.map((i, key) => {
              return <li key={key}>{i}</li>;
            })}
          </ul>
        </article>

        <article>
          <div className="flex items-center gap-6">
            <h3 className="text-2xl font-bold ">Elaboración</h3>
            <div className="w-[86%] h-[1px] border border-[#868383] bg-[#868383]  hidden md:block " />
          </div>
          <p className="max-w-[1000px] mt-4">{card.pasos}</p>
        </article>

        <article className="flex gap-8 items-center my-12">
          <span className="font-bold text-2xl">Compartir</span>
          <div className="flex gap-4">
            <ImFacebook size={30} />
            <FaTwitter size={30} />
            <BsInstagram size={30} />
          </div>
        </article>
      </section>
      <Comentarios nombreReceta={card.nombre} />
    </section>
  );
}
