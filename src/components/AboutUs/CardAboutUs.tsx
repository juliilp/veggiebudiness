interface Props {
  title: string;
  text?: string;
  list?: string[];
}
export default function CardAboutUs({ title, text, list }: Props) {
  return (
    <article className="font-lobsterTwo  w-[320px] lg:w-[400px] h-[350px] flex flex-col gap-6 items-center ">
      <h3 className="text-4xl md:text-5xl font-bold mx-auto">{title}</h3>
      {text && <p className="text-center max-w-[350px] text-xl">{text}</p>}
      {list && (
        <ul className="flex flex-col items-center gap-1">
          {list.map((l) => (
            <li className="text-xl">{l}</li>
          ))}
        </ul>
      )}
    </article>
  );
}
