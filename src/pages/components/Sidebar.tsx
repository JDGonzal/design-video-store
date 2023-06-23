import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { darkBrown } from "./.";

function Sidebar() {
  const brownColor = "[#362C29]";
  // {"bg-"+brownColor+" rounded-md" }
  return (
    <div className="w-80 h-full overflow-y-scroll text-gray-400">
      {/* Search */}
      <div className={"bg-" + brownColor + " rounded-xl p-4"}>
        <h4 className="mb-4">Categories</h4>
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
        <h4 className="my-6">Platforms</h4>
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
        <h4 className="my-6">Price</h4>
        <form className="flex items-center justify-between gap-2">
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
        </form>
      </div>
      {/* Media */}
      <div></div>
    </div>
  );
}

export default Sidebar;
