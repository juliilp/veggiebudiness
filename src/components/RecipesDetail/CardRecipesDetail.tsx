interface Props {
  nombre: string;
  tiempo: string;
  ingredientes: string[];
  pasos: string;
  dificultad: number;
  imagen: string;
}

export default function CardRecipesDetail({
  dificultad,
  imagen,
  ingredientes,
  nombre,
  pasos,
  tiempo,
}: Props) {
  return (
    <section>
      <h2 className="text-center text-2xl">{nombre}</h2>
      <img src={imagen} alt="imagen" className="max-w-[400px]" />

      <article className="flex items-center justify-around px-8">
        <article className="flex flex-col justify-center">
          <span>Tiempo de preparacion</span>
          <h5>{tiempo}</h5>
        </article>

        <article className="flex flex-col  justify-center">
          <h5>Nivel de dificultad</h5>
          <span>{dificultad}</span>
        </article>
      </article>

      <article>
        <h3>Ingredientes</h3>
        <ul className="flex flex-col my-12 list-disc ml-6">
          {ingredientes.map((i, key) => {
            return <li key={key}>{i}</li>;
          })}
        </ul>
      </article>

      <article>
        <h3 className="font-bold">Elaboracion</h3>
        <p>{pasos}</p>
      </article>
    </section>
  );
}
