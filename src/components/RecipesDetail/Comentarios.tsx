import { useState } from "react";

interface Props {
  nombreReceta: string;
}
export default function Comentarios({ nombreReceta }: Props) {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    comentario: "",
    nombreReceta: nombreReceta,
  });

  const handlerOnChangeForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <section className="flex flex-col justify-center  items-center">
      <div>
        <span className="text-left">Leave a comment</span>
      </div>

      <form className="w-full max-w-[600px]" onSubmit={handlerSubmit}>
        <div className="flex justify-between gap-8">
          <input
            type="text"
            placeholder="Nombre*"
            onChange={handlerOnChangeForm}
            className="border border-[#868383] outline-none rounded-md  py-2 pl-4 w-full"
            name="nombre"
          />
          <input
            type="email"
            placeholder="Email*"
            onChange={handlerOnChangeForm}
            className="border border-[#868383] outline-none rounded-md py-2 pl-4 w-full"
            name="email"
          />
        </div>
        <textarea
          placeholder="Comment.."
          onChange={handlerOnChangeForm}
          className="border border-[#868383] outline-none rounded-md w-full h-[150px] mt-8 pt-2 pl-4"
          name="comentario"
        />
        <button className="border border-black p-3 mt-6">Enviar</button>
      </form>
    </section>
  );
}
