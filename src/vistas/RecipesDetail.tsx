import { useParams } from "react-router-dom";

import MainRecipesDetail from "../components/RecipesDetail/MainRecipesDetail";
import { recetas } from "../data/recetas";

export default function RecipesDetail() {
  const { id } = useParams();

  const card = recetas.find((c) => c.id === Number(id));
  console.log(card);
  return (
    <>
      <MainRecipesDetail />
    </>
  );
}
