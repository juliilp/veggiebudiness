import { useParams } from "react-router-dom";

import MainRecipesDetail from "../components/RecipesDetail/MainRecipesDetail";
import { recetas } from "../data/recetas";
import CardRecipesDetail from "../components/RecipesDetail/CardRecipesDetail";

export default function RecipesDetail() {
  const { id } = useParams();

  const card = recetas.find((c) => c.id === Number(id));

  if (!card) {
    return <h2>No hay card</h2>;
  }
  return (
    <>
      <MainRecipesDetail />
      <CardRecipesDetail
        dificultad={card.dificultad}
        imagen={card.imagen}
        ingredientes={card?.ingredientes}
        nombre={card.nombre}
        pasos={card.pasos}
        tiempo={card.tiempo}
      />
    </>
  );
}
