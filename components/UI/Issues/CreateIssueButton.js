import { IoAddSharp } from "react-icons/io5";

function CreateIssueButton() {
  return (
    <div className="mr-[30px] bg-[#3197F5] rounded-[4px] w-9 h-8 flex items-center justify-center hover:shadow-md hover:cursor-pointer transition-shadow hover:bg-[#52a9fa]">
      <IoAddSharp size={25} className="text-white" />
    </div>
  );
}

export default CreateIssueButton;
