import mainFondo from "../../assets/Recipies/fondo-recipies.jpg";

export default function MainRecipes() {
  return (
    <main className="w-full h-screen flex justify-center items-center relative overflow-hidden">
      <div
        style={{
          backgroundImage: `url(${mainFondo})`,
        }}
        className="absolute w-full h-screen bg-cover bg-center bg-fixed"
      />
      <section className="text-center text-white relative z-10">
        <span className="block text-[#FFE500] font-bevan text-3xl lg:text-4xl">
          Disfruta (re)creando
        </span>
        <span className="block font-bevan text-5xl lg:text-6xl">
          Nuestras recetas
        </span>
        <span className="block font-playfairDisplay text-3xl lg:text-4xl">
          Deja volar tu imaginación y dale vida a deliciosas preparaciones
        </span>
      </section>
    </main>
  );
}
