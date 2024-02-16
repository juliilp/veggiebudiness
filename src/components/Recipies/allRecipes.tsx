import { recetas } from "../../data/recetas";
import CardRecipes from "./CardRecipes";

export default function AllRecipes() {
  return (
    <section>
      <h2 className="text-center text-4xl my-24 font-paprika">
        “Cocinar con amor te alimenta el alma”
      </h2>

      <div className="md:flex justify-center items-center ml-20">
        <div className="md:w-[850px] flex">
          <h3 className="font-aleo font-bold text-xl  md:ml-8 text-center">
            All our recipes
          </h3>
        </div>
      </div>

      <article className="flex items-center justify-center flex-col gap-16 md:gap-24 lg:gap-32 my-24">
        {recetas.map((r, key) => {
          return (
            <CardRecipes
              imagen={r.imagen}
              texto={r.pasos}
              url={r.id}
              key={key}
            />
          );
        })}
      </article>
    </section>
  );
}
