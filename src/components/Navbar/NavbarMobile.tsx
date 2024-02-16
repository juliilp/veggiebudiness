import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";

export default function NavbarMobile() {
  const [switchMenu, setSwitchMenu] = useState(false);

  const handlerSwitchMenu = () => setSwitchMenu((prev) => !prev);
  return (
    <header className="flex md:hidden items-center h-10 justify-between relative">
      <h2 className="ml-4">Logo</h2>
      <IoMdMenu onClick={handlerSwitchMenu} size={35} className="mr-4" />

      {switchMenu && (
        <ul className="absolute top-full w-full flex flex-col items-center gap-2 text-xl z-[999] bg-white  font-lato ">
          <li>
            <Link to="/" onClick={handlerSwitchMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/sobre-nosotros" onClick={handlerSwitchMenu}>
              About us
            </Link>
          </li>
          <li>
            <a href="#producto" onClick={handlerSwitchMenu}>
              Products
            </a>
          </li>
          <li>
            <Link to="/recipies" onClick={handlerSwitchMenu}>
              Recipies
            </Link>
          </li>
          <a href="#contacto" onClick={handlerSwitchMenu}>
            Contact us
          </a>
          <li>
            <a href="#contacto" onClick={handlerSwitchMenu}>
              Follow us
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
