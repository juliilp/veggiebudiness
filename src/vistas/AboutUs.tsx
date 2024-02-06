import CardAboutUs from "../components/AboutUs/CardAboutUs";
import { data } from "../data/about-us";

export default function AboutUs() {
  return (
    <main>
      <section className="w-full py-8 md:py-16 bg-[#D3E5BC] font-inter mt-8 md:mt-16 flex flex-col justify-center items-center gap-6">
        <h2 className="text-4xl font-bold text-center">
          ¿Cómo surgió Veggie Budiness?
        </h2>
        <p className="text-center max-w-[700px] ">
          El comienzo del emprendimiento surgió en 2016 cuando Alexia estaba en
          5º de secundaria y tenía que pagar el buzo de egresada. Desde ese
          momento comenzó a buscar recetas de budines en internet para vender.
          Con el tiempo, sus budines fueron ganando fama y ella fue modificando
          la receta y dándole el toque especial que hoy caracteriza nuestros
          productos artesanales. En 2018, Alexia se mudó a San Luis, donde
          actualmente reside nuestra sede, y allí comenzó a formar un equipo que
          se convertiría en una familia unida por la pasión de la alimentación
          vegana y consciente. Hoy, en plena mitad de 2023, estamos haciendo
          realidad nuestra propia página web en la cual podrán disfrutar de
          nuestras recetas y ver nuestros productos.
        </p>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 items-center justify-center md:justify-between  mt-8 md:mt-16 justify-self-center ">
        {data.map((c) => (
          <article className="flex justify-center items-center" key={c.id}>
            <CardAboutUs
              list={c.lista}
              text={c.parrafo}
              title={c.title}
              key={c.id}
            />
          </article>
        ))}
      </section>
    </main>
  );
}
