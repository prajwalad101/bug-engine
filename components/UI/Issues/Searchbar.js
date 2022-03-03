import { AiOutlineSearch } from "react-icons/ai";

function Searchbar() {
  return (
    <div className="h-11 flex items-center grow min-w-[130px] max-w-[480px]">
      <div className="text-[rgb(137,137,137)] h-full px-3 bg-[#f3f3f3] flex items-center rounded-l hover:text-black ">
        <AiOutlineSearch size={20} />
      </div>
      <div className="w-[2.5px] h-full bg-[#e4e4e4]"></div>
      <input
        type="text"
        className="bg-[#f3f3f3] font-poppins placeholder-[#898989] w-full h-full px-3 rounded-r"
        placeholder="Search for issues..."
      />
    </div>
  );
}

export default Searchbar;
