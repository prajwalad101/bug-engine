import { useState } from "react";
import { useRouter } from "next/router";
import { IoAddSharp } from "react-icons/io5";

import CreateIssueModal from "../../Modal/CreateIssueModal";

function CreateIssueButton({ projectId }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const createNewIssue = () => {
    setOpen(true);
    // router.push(`/project/${projectId}/newIssue`);
  };

  return (
    <div
      className="mr-[30px] lgphone:min-w-[105px] bg-[#3197F5] text-white rounded-[4px] flex items-center justify-center hover:shadow-md hover:cursor-pointer transition-shadow hover:bg-[#52a9fa] "
      onClick={createNewIssue}
    >
      <CreateIssueModal open={open} setOpen={setOpen} />
      <div className="px-[6px] py-[5px] lgphone:hidden">
        <IoAddSharp size={25} />
      </div>
      <p className="hidden lgphone:block px-5 py-[6px]">Add new</p>
    </div>
  );
}

export default CreateIssueButton;
