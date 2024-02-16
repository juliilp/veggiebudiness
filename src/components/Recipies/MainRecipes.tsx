import mainFondo from "../../assets/Recipies/fondo-recipies.jpg";

export default function MainRecipes() {
  return (
    <main className="w-full h-screen flex justify-center items-center relative">
      <img
        src={mainFondo}
        alt="imagen-fondo"
        className="absolute w-full h-screen object-cover -z-10 brightness-[0.5]"
      />
      <section className="text-center text-white">
        <span className="block text-[#FFE500] font-bevan text-3xl lg:text-4xl">
          Disfruta (re)creando
        </span>
        <span className="block font-bevan text-5xl lg:text-6xl ">
          Nuestras recetas
        </span>
        <span className="block font-playfairDisplay text-3xl lg:text-4xll">
          Deja volar tu imaginación y dale vida a deliciosas preparaciones
        </span>
      </section>
    </main>
  );
}
