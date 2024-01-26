import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function NewSletter() {
  const [input, setInput] = useState("");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(input);
  };
  return (
    <section className="flex items-center justify-center">
      <article className="flex flex-col gap-1 items-center">
        <span className="font-inriaSerif text-5xl">Newsletter</span>
        <span className="block font-inriaSerif text-2xl  ">
          Recibí todas las ofertas
        </span>
        <span className="font-aleo text-2xl ">
          ¡Registrate ya mismo y comenzá a disfrutarlas!
        </span>
        <form className="relative w-full" onSubmit={handlerSubmit}>
          <input
            type="text"
            placeholder="Email"
            className="bg-[#FAECE3] outline-none rounded-xl py-3 pl-4 placeholder:text-black font-aleo placeholder:font-aleo placeholder:font-semibold w-full max-w-[500px]"
            onChange={onChangeInput}
          />
          <FaArrowRight className="absolute top-2.5 right-3" size={25} />
        </form>
      </article>
    </section>
  );
}
