import { useState } from "react";
import { IoAddSharp } from "react-icons/io5";

import CreateIssueModal from "../../Modal/CreateIssueModal";

function CreateIssueButton() {
  const [open, setOpen] = useState(false);

  const createNewIssue = () => {
    setOpen(true);
  };

  return (
    <div
      className="mr-[30px] lgphone:min-w-[105px] bg-blue-500 text-white rounded-[4px] flex items-center justify-center hover:shadow-md hover:cursor-pointer transition-shadow hover:bg-blue-600 "
      onClick={createNewIssue}
    >
      <CreateIssueModal open={open} setOpen={setOpen} />
      <div className="px-[6px] py-[5px] lgphone:hidden">
        <IoAddSharp size={25} />
      </div>
      <p className="hidden lgphone:block py-2">Add new</p>
    </div>
  );
}

export default CreateIssueButton;
