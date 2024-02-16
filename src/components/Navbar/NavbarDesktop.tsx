import { Link } from "react-router-dom";

export default function NavbarDesktop() {
  return (
    <header className="w-full">
      <nav>
        <ul className="px-4 justify-evenly  items-center hidden md:flex absolute left-0 top-0 z-[999] w-full text-white text-xl pt-6 font-lato">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>About us</li>
          <li>Products</li>
          <li className="hidden lg:block">Veggie budiness</li>
          <li>
            <Link to="/recipies">Recipies</Link>
          </li>
          <li>Contact us</li>
          <li>Follow us</li>
        </ul>
      </nav>
    </header>
  );
}
