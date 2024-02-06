import { useState } from "react";

export default function Section3() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    cv: "",
  });

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };

  const handlerOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="grid md:grid-cols-2  font-inter gap-16 md:gap-0 my-12">
      <article className="flex flex-col gap-3  ">
        <article className="mx-auto flex flex-col justify-center gap-4">
          <h3 className="text-3xl md:text-4xl font-bold text-center">
            ¿Queres unirte a nuestro equipo?
          </h3>
          <span className="text-xl text-center">
            Déjanos tus datos y nos <br /> contactaremos con vos!
          </span>
        </article>
      </article>

      <form
        className="flex items-center justify-center"
        onSubmit={handlerSubmit}
      >
        <article className="flex flex-col gap-6 md:w-[600px]">
          <input
            type="text"
            placeholder="Nombre"
            className="bg-[#D9D9D9] w-full max-w-[400px]   rounded-xl py-3 pl-3 placeholder:text-black "
            name="nombre"
            onChange={handlerOnChange}
          />
          <input
            type="text"
            placeholder="Email"
            className="bg-[#D9D9D9] w-full max-w-[400px]   rounded-xl py-3 pl-3 placeholder:text-black "
            name="email"
            onChange={handlerOnChange}
          />
          <input
            type="file"
            id="cvInput"
            hidden
            name="cv"
            onChange={handlerOnChange}
          />
          <label
            htmlFor="cvInput"
            className="bg-[#D9D9D9] w-full max-w-[400px]   rounded-xl py-3 pl-3 placeholder:text-black"
          >
            Adjuntar CV
          </label>
          <button className="bg-[#d9d9d9] w-max p-3 rounded-xl">Enviar</button>
        </article>
      </form>
    </section>
  );
}
