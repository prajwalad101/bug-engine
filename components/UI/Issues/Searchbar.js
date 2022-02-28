import { AiOutlineSearch } from "react-icons/ai";

function Searchbar() {
  return (
    <div className="mt-7  h-10 flex items-center">
      <div className="text-[#898989] h-full px-3 bg-[#f3f3f3] flex items-center rounded-l hover:text-black ">
        <AiOutlineSearch size={20} />
      </div>
      <div className="w-[2.5px] h-full bg-[#e4e4e4]"></div>
      <input
        type="text"
        className="bg-[#f3f3f3] placeholder-[#898989] h-full w-[180px] px-3 rounded-r"
        placeholder="Search for issues..."
      />
    </div>
  );
}

export default Searchbar;
