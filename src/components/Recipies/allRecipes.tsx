import { recetas } from "../../data/recetas";
import CardRecipes from "./CardRecipes";

export default function AllRecipes() {
  console.log(recetas);
  return (
    <section>
      <h2 className="text-center text-4xl my-24">
        “Cocinar con amor te alimenta el alma”
      </h2>
      <h3 className="font-aleo font-bold text-xl ml-4 md:ml-8">
        All our recipes
      </h3>

      <article className="flex items-center justify-center flex-col gap-16 my-24">
        {recetas.map((r, key) => {
          return (
            <CardRecipes imagen={r.imagen} texto={r.pasos} url={key + 1} />
          );
        })}
      </article>
    </section>
  );
}
