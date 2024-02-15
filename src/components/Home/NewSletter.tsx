import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import imagenFondo from "../../assets/home/fondo-newsletter.jpg";

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
    <section className="flex items-center justify-center relative h-[70vh]">
      <div className="w-full h-full absolute -z-10 ">
        <img
          src={imagenFondo}
          alt="imagen-fondo"
          className="w-full h-full object-cover"
        />
      </div>
      <article className="flex flex-col gap-1 items-center text-white relative py-12 sm:p-12 lg:p-32  w-[70%] justify-center">
        <div className="w-full h-full  absolute top-0 left-0 backdrop-blur-[8px]" />
        <span className="font-inriaSerif text-5xl z-10">Newsletter</span>
        <span className="block font-inriaSerif text-2xl z-20">
          Recibí todas las ofertas
        </span>
        <span
          className="font-aleo text-2xl z-20 text-center
        "
        >
          ¡Registrate ya mismo y comenzá a disfrutarlas!
        </span>
        <form
          className="relative flex items-center justify-center"
          onSubmit={handlerSubmit}
        >
          <input
            type="text"
            placeholder="Email"
            className="bg-[#FAECE3] outline-none rounded-xl py-3 pl-4 placeholder:text-black font-aleo placeholder:font-aleo placeholder:font-semibold w-full md:w-[550px] sm:py-4 "
            onChange={onChangeInput}
          />
          <FaArrowRight
            className="absolute top-2.5 sm:top-3.5 right-3"
            size={25}
            color="black"
          />
        </form>
      </article>
    </section>
  );
}
