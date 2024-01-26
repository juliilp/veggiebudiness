import MainHome from "../components/Home/MainHome";
import NewSletter from "../components/Home/NewSletter";
import Productos from "../components/Home/Producto";
import QuienesSomos from "../components/Home/QuienesSomos";
import Recetas from "../components/Home/Recetas";

export default function Home() {
  return (
    <>
      <MainHome />
      <QuienesSomos />
      <Productos />
      <Recetas />
      <NewSletter />
    </>
  );
}
