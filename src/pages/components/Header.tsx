import { Link } from "react-router-dom";
import { RiShoppingCartLine, RiHeart2Line } from "react-icons/ri";
import { darkBrown, midOrange } from "./colors";

function Header() {
  const orangeColor = 'text-'+midOrange+' transition-colors';
  const hoverColor = "hover:"+orangeColor;
  return (
    <header className={"h-[10vh] text-gray-400 py-4 px-10 flex items-center justify-between bg-"+darkBrown}>
      {/* Menu */}
      <ul className="flex items-center gap-6">
        <li>
          <Link to="/" className={hoverColor}>Home</Link>
        </li>
        <li>
          <Link to="/" className={hoverColor}>Streams</Link>
        </li>
        <li>
          <Link to="/" className={orangeColor}>Game Store</Link>
        </li>
        <li>
          <Link to="/" className={hoverColor}>News</Link>
        </li>
      </ul>
      {/* User menu */}
      <ul className="flex items-center gap-6 text-xl">
        <li>
          <button className={hoverColor}><RiShoppingCartLine/></button>
        </li>
        <li>
          <button className={hoverColor}><RiHeart2Line/></button>
        </li>
        <li>
          <button><img src="/src/assets/avatar194938.png" className="w-8 h-8 object-cover rounded-full"/></button>
        </li>
      </ul>
    </header>
  );
}

export default Header;
