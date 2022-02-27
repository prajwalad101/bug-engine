import { IoIosAddCircleOutline } from "react-icons/io";

function NoIssues({ setIsModalOpen }) {
  return (
    <div className="mt-7 flex flex-col items-center">
      <div className="text-xl text-blue-300">No Issues Found</div>
      <div
        className="flex items-center gap-3 w-fit mt-5 py-3 px-3 text-[#040C24] bg-slate-100 hover:bg-slate-200 hover:cursor-pointer rounded-md"
        onClick={() => setIsModalOpen(true)}
      >
        <IoIosAddCircleOutline size={22} />
        <p>Create new issue</p>
      </div>
    </div>
  );
}

export default NoIssues;
