import { Link } from "react-router-dom";

export default function NavbarDesktop() {
  return (
    <header className="w-full">
      <nav>
        <ul className="px-4 justify-evenly  items-center hidden md:flex absolute left-0 top-0 z-[999] w-full text-white text-xl pt-6 font-lato">
          <li>
            <Link to="/" className="focus:text-[#F1E14C]">
              Home
            </Link>
          </li>
          <li>
            <Link to="/sobre-nosotros" className="focus:text-[#F1E14C]">
              About us
            </Link>
          </li>
          <li>
            <a href="#producto" className="focus:text-[#F1E14C]">
              Products
            </a>
          </li>
          <li className="hidden lg:block">Veggie budiness</li>
          <li>
            <Link to="/recipies" className="focus:text-[#F1E14C]">
              Recipies
            </Link>
          </li>
          <li>
            <a href="#contacto" className="focus:text-[#F1E14C]">
              Contact us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
