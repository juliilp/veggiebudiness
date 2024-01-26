import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center flex-col gap-12 font-inriaSerif mt-12 mb-4">
      <article className="flex flex-col items-center">
        <p className=" text-center text-xl md:text-2xl">
          Escribinos por Whats App y te contactaremos apenas <br /> veamos tu
          mensaje!
        </p>
        <span className="font-bold text-xl">+54 9 1230 456789</span>
      </article>
      <article className="flex gap-8 items-center">
        <span className="font-inriaSerif font-bold text-2xl">Seguinos</span>
        <div className="flex gap-4">
          <ImFacebook size={30} />
          <FaTwitter size={30} />
          <BsInstagram size={30} />
        </div>
      </article>

      <article className="flex flex-col items-center font-bold font-inter">
        <span>Hecho con ♥</span>

        <span>© 2023 Julian Lopez Padua™. All Rights Reserved.</span>
      </article>
    </footer>
  );
}
