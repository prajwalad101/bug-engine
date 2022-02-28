import { IoIosArrowDown } from "react-icons/io";

function FilterIssues() {
  return (
    <div className="flex items-center gap-1 text-[#3197F5] hover:cursor-pointer">
      <h2 className="font-bold">Filters</h2>
      <IoIosArrowDown />
    </div>
  );
}

export default FilterIssues;
