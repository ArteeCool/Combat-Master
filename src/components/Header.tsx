import { Link } from "react-router";
import { globalAssets } from "../assets/assets";
import Navbar from "./Navbar";
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import Menu from "./Menu";

const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const toggleFunction = () => {
    setIsMenuOpened((prev) => !prev);
  };

  return (
    <>
      <div className="absolute top-0 right-0 left-0 h-20 px-6 text-neutral-300 shadow-[0px_0px_8px_black]">
        <div className="mx-auto max-w-[1280px] flex items-center  h-full justify-between">
          <Link to={"/"}>
            <img
              className="aspect-square w-20"
              src={globalAssets.alfaBravoLogo}
              alt="Logo of Alfa Bravo"
            />
          </Link>
          <Navbar className="hidden sm:flex" />
          <MdMenu
            className="sm:hidden text-4xl select-none"
            onClick={() => toggleFunction()}
          />
        </div>
        <Menu
          className={`${isMenuOpened ? "w-full" : "w-0"}`}
          toggleFunction={toggleFunction}
        />
      </div>
    </>
  );
};
export default Header;
