export default function NavbarDesktop() {
  return (
    <header className="w-full">
      <nav>
        <ul className="px-4  justify-evenly  items-center hidden md:flex">
          <li>Home</li>
          <li>About us</li>
          <li>Products</li>
          <li className="hidden lg:block">Veggie budiness</li>
          <li>Recipies</li>
          <li>Contact us</li>
          <li>Follow us</li>
        </ul>
      </nav>
    </header>
  );
}
