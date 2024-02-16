import { Link } from "react-router-dom";

export default function NavbarDesktop() {
  return (
    <header className="w-full">
      <nav>
        <ul className="px-4 justify-evenly  items-center hidden md:flex absolute left-0 top-0 z-[999] w-full text-white text-xl pt-6 font-lato">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sobre-nosotros">About us</Link>
          </li>
          <li>
            <a href="#producto">Products</a>
          </li>
          <li className="hidden lg:block">Veggie budiness</li>
          <li>
            <Link to="/recipies">Recipies</Link>
          </li>
          <li>
            <a href="#contacto">Contact us</a>
          </li>
          <li>
            <a href="#contacto">Follow us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
