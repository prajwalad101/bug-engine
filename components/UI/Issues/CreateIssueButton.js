import { IoIosAddCircleOutline } from "react-icons/io";

function CreateIssueButton() {
  return (
    <div
      className="flex items-center gap-3 w-fit mt-5 py-3 px-3 bg-slate-100 hover:bg-slate-200 hover:shadow-sm transition-all hover:cursor-pointer rounded-md"
      onClick={() => setIsModalOpen(true)}
    >
      <IoIosAddCircleOutline size={22} />
      <p>Create new issue</p>
    </div>
  );
}

export default CreateIssueButton;
