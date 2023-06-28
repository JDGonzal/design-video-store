import { useState } from "react";
import { Link } from "react-router-dom";
import {
  RiShoppingCartLine,
  RiHeart2Line,
  RiMenu2Line,
  RiCloseLine,
} from "react-icons/ri";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const menuMobile ='block text-center p-4 text-4xl';
  const MenuBar = () => {
    return (
      <>
        <li>
          <Link to="/" className={`hover:text-[#E58D27] transition-colors ${showMenu?menuMobile:""} `}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/" className={`hover:text-[#E58D27] transition-colors ${showMenu?menuMobile:""}`}>
            Streams
          </Link>
        </li>
        <li>
          <Link to="/" className={` ${showMenu?"hover:text-[#E58D27] transition-colors "+menuMobile:"text-[#E58D27]"}`}>
            Game Store
          </Link>
        </li>
        <li>
          <Link to="/" className={`hover:text-[#E58D27] transition-colors ${showMenu?menuMobile:""}`}>
            News
          </Link>
        </li>
      </>
    );
  };

  return (
    <header className="h-[10vh] text-gray-400 py-4 px-10 flex items-center justify-between bg-[#181A20]">
      {/* Menu Mobile */}
      <button onClick={() => setShowMenu(!showMenu)} className="lg:hidden">
        <RiMenu2Line />
      </button>
      <div
        className={`fixed left-0 w-full h-full z-50 bg-[#181A20] ${
          showMenu ? "top-0" : "-top-full"
        } transition-all`}
      >
        <button className="text-3xl p-4" onClick={() => setShowMenu(!showMenu)}>
          <RiCloseLine />
        </button>
        <ul className=" w-full mt-20">
          <MenuBar />
        </ul>
      </div>
      {/* Menu PC*/}
      <ul className="hidden lg:flex items-center gap-6">
        <MenuBar />
      </ul>
      {/* User menu */}
      <ul className="flex items-center gap-6 text-xl">
        <li>
          <button className={`hover:text-[#E58D27] transition-colors`}>
            <RiShoppingCartLine />
          </button>
        </li>
        <li>
          <button className={`hover:text-[#E58D27] transition-colors`}>
            <RiHeart2Line />
          </button>
        </li>
        <li>
          <button>
            <img
              src="/src/assets/avatar194938.png"
              className="w-8 h-8 object-cover rounded-full hover:ring-2"
            />
          </button>
        </li>
      </ul>
    </header>
  );
}

export default Header;
