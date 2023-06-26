import { Link } from "react-router-dom";
import { RiShoppingCartLine, RiHeart2Line } from "react-icons/ri";

function Header() {

  return (
    <header className="h-[10vh] text-gray-400 py-4 px-10 flex items-center justify-between bg-[#181A20]">
      {/* Menu */}
      <ul className="flex items-center gap-6">
        <li>
          <Link to="/" className="hover:text-[#E58D27] transition-colors">Home</Link>
        </li>
        <li>
          <Link to="/" className="hover:text-[#E58D27] transition-colors">Streams</Link>
        </li>
        <li>
          <Link to="/" className="text-[#E58D27]">Game Store</Link>
        </li>
        <li>
          <Link to="/" className="hover:text-[#E58D27] transition-colors">News</Link>
        </li>
      </ul>
      {/* User menu */}
      <ul className="flex items-center gap-6 text-xl">
        <li>
          <button className="hover:text-[#E58D27] transition-colors"><RiShoppingCartLine/></button>
        </li>
        <li>
          <button className="hover:text-[#E58D27] transition-colors"><RiHeart2Line/></button>
        </li>
        <li>
          <button><img src="/src/assets/avatar194938.png" className="w-8 h-8 object-cover rounded-full hover:ring-2"/></button>
        </li>
      </ul>
    </header>
  );
}

export default Header;
