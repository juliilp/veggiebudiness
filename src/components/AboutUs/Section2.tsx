import { data } from "../../data/about-us";
import CardAboutUs from "./CardAboutUs";

export default function Section2() {
  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-3 items-center justify-center md:justify-between  justify-self-center gap-32 md:gap-0 ">
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
  );
}
