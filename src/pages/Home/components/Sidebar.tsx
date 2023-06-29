import {
  RiMoneyDollarCircleLine,
  RiFacebookLine,
  RiYoutubeLine,
  RiInstagramLine,
  RiTwitterLine,
  RiFilterLine,
  RiCloseLine,
} from "react-icons/ri";
import { darkBrown } from "@/components";
import { useState } from "react";

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <div className={`w-[80%] md:w-[40%] fixed lg:static top-0 ${showSidebar?"left-0":"-left-full"} lg:w-80 h-full overflow-y-scroll lg:overflow-y-auto text-gray-400 bg-[#181A20] transition-all duration-200 p-3 lg:p-0`}>
        {/* Search */}
        <div className="bg-[#362C29] rounded-xl p-4 mb-3">
          <h4 className="mb-5 text-white text-lg">Categories</h4>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="indy" className="accent-[#E58D27]" />
              <label htmlFor="indy">Indy</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="adventure"
                className="accent-[#E58D27]"
              />
              <label htmlFor="adventure">Adventure</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="mmo" className="accent-[#E58D27]" />
              <label htmlFor="mmo">MMO</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="casualGame"
                className="accent-[#E58D27]"
              />
              <label htmlFor="casualGame">Casual Game</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="strategy"
                className="accent-[#E58D27]"
              />
              <label htmlFor="strategy">Strategy</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="simulator"
                className="accent-[#E58D27]"
              />
              <label htmlFor="simulator">Simulator</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="sportsGame"
                className="accent-[#E58D27]"
              />
              <label htmlFor="sportsGame">Sports Game</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="actionGame"
                className="accent-[#E58D27]"
              />
              <label htmlFor="actionGame">Action Game</label>
            </div>
          </div>
          <h4 className="my-5 text-white text-lg">Platforms</h4>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="pc" className="accent-[#E58D27]" />
              <label htmlFor="pc">PC</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="playStation5"
                className="accent-[#E58D27]"
              />
              <label htmlFor="playStation5">PlayStation 5</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="playStation4"
                className="accent-[#E58D27]"
              />
              <label htmlFor="playStation4">PlasyStation 4</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="xBoxSeries"
                className="accent-[#E58D27]"
              />
              <label htmlFor="xBoxSeries">Xbox Series</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="nintentoSwitch"
                className="accent-[#E58D27]"
              />
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

            <button
              type="submit"
              className="bg-[#E58D27] text-black rounded-full w-full p-2 hover:-translate-y-1 transition-all duration-200"
            >
              Apply Filters
            </button>
          </form>
        </div>
        {/* Social Media */}
        <ul className="flex items-center justify-between">
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              className="text-2xl"
            >
              <RiTwitterLine />
            </a>{" "}
          </li>
          <li>
            <a
              href="https://www.instagram.com"
              target="_blank"
              className="text-2xl"
            >
              <RiInstagramLine />
            </a>{" "}
          </li>
          <li>
            <a
              href="https://www.youtube.com"
              target="_blank"
              className="text-2xl"
            >
              <RiYoutubeLine />
            </a>{" "}
          </li>
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              className="text-2xl"
            >
              <RiFacebookLine />
            </a>{" "}
          </li>
        </ul>
      </div>
      {/* Mobile filter button */}
      <button className="text-lg md:text-2xl fixed bottom-4 right-4 bg-[#E58D27] rounded-full z-40 lg:hidden" onClick={() => setShowSidebar(!showSidebar)}>{showSidebar? <RiCloseLine/>:<RiFilterLine/>}</button>
    </>
  );
}

export default Sidebar;
