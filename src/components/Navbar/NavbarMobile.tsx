import { useState } from "react";
import { IoMdMenu } from "react-icons/io";

export default function NavbarMobile() {
  const [switchMenu, setSwitchMenu] = useState(false);

  const handlerSwitchMenu = () => setSwitchMenu((prev) => !prev);
  return (
    <header className="flex md:hidden items-center h-10 justify-between relative">
      <h2 className="ml-4">Logo</h2>
      <IoMdMenu onClick={handlerSwitchMenu} size={35} className="mr-4" />

      {switchMenu && (
        <ul className="absolute top-full w-full flex flex-col items-center gap-2 text-xl">
          <li>Home</li>
          <li>About us</li>
          <li>Products</li>
          <li>Recipies</li>
          <li>Contact us</li>
          <li>Follow us</li>
        </ul>
      )}
    </header>
  );
}
