import { useRouter } from "next/router";
import { IoAddSharp } from "react-icons/io5";

function CreateIssueButton({ projectId }) {
  const router = useRouter();

  const createNewIssue = () => {
    router.push(`/project/${projectId}/newIssue`);
  };

  return (
    <div
      className="mr-[30px] lgphone:min-w-[105px] bg-[#3197F5] text-white rounded-[4px] flex items-center justify-center hover:shadow-md hover:cursor-pointer transition-shadow hover:bg-[#52a9fa] "
      onClick={createNewIssue}
    >
      <div className="px-[6px] py-[5px] lgphone:hidden">
        <IoAddSharp size={25} />
      </div>
      <p className="hidden lgphone:block px-5 py-[6px]">Add new</p>
    </div>
  );
}

export default CreateIssueButton;
