import { RiMoneyDollarCircleLine, RiFacebookLine, RiYoutubeLine, RiInstagramLine, RiTwitchLine, RiTwitterLine } from "react-icons/ri";
import { darkBrown } from "./.";

function Sidebar() {
  return (
    <div className="w-80 h-full overflow-y-scroll text-gray-400">
      {/* Search */}
      <div className="bg-[#362C29] rounded-xl p-4 mb-3">
        <h4 className="mb-5 text-white text-lg">Categories</h4>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <input type="checkbox" id="indy" />
            <label htmlFor="indy">Indy</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="adventure" />
            <label htmlFor="adventure">Adventure</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="mmo" />
            <label htmlFor="mmo">MMO</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="casualGame" />
            <label htmlFor="casualGame">Casual Game</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="strategy" />
            <label htmlFor="strategy">Strategy</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="simulator" />
            <label htmlFor="simulator">Simulator</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="sportsGame" />
            <label htmlFor="sportsGame">Sports Game</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="actionGame" />
            <label htmlFor="actionGame">Action Game</label>
          </div>
        </div>
        <h4 className="my-5 text-white text-lg">Platforms</h4>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <input type="checkbox" id="pc" />
            <label htmlFor="pc">PC</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="playStation5" />
            <label htmlFor="playStation5">PlayStation 5</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="playStation4" />
            <label htmlFor="playStation4">PlasyStation 4</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="xBoxSeries" />
            <label htmlFor="xBoxSeries">Xbox Series</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="nintentoSwitch" />
            <label htmlFor="nintentoSwitch">Nintendo Switch</label>
          </div>
        </div>
        <h4 className="my-4 text-white text-lg">Price</h4>
        <form className="flex flex-col gap-6">
          <div className="flex items-center justify-between gap-2">
            <div className="relative">
              <RiMoneyDollarCircleLine className="absolute left-2 top-1/2 -translate-y-1/2 text-xl" />
              <input
                type="number"
                className={
                  "bg-" + darkBrown + " py-2 pl-8 pr-4 rounded-xl w-full"
                }
              />
            </div>
            <span>-</span>
            <div className="relative">
              <RiMoneyDollarCircleLine className="absolute left-2 top-1/2 -translate-y-1/2 text-xl" />
              <input
                type="number"
                className={
                  "bg-" + darkBrown + " py-2 pl-8 pr-4 rounded-xl w-full"
                }
              />
            </div>
          </div>

          <button type="submit" className="bg-[#E58D27] text-black rounded-full w-full p-2 hover:-translate-y-1 transition-all duration-200">Apply Filters</button>
        </form>
      </div>
      {/* Social Media */}
      <ul className="flex items-center justify-between">
        <li><a href="https://www.twitter.com" target="_blank" className="text-2xl"><RiTwitterLine/></a> </li>
        <li><a href="https://www.instagram.com" target="_blank" className="text-2xl"><RiInstagramLine/></a> </li>
        <li><a href="https://www.youtube.com" target="_blank" className="text-2xl"><RiYoutubeLine/></a> </li>
        <li><a href="https://www.facebook.com" target="_blank" className="text-2xl"><RiFacebookLine/></a> </li>
      </ul>
    </div>
  );
}

export default Sidebar;
