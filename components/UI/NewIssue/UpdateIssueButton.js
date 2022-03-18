import useUpdateIssue from "../../../hooks/useUpdateIssue";

import { IoAddSharp } from "react-icons/io5";
import { useRouter } from "next/router";

function UpdateIssueButton({ issue, issueId, projectId }) {
  const router = useRouter();
  const mutation = useUpdateIssue(projectId, issueId);

  const updateIssue = () => {
    mutation.mutate(issue, {
      onSuccess: () => router.push(`/project/${projectId}`),
    });
  };

  return (
    <div
      className="mr-[30px] mt-5 w-[100px] bg-[#3197F5] text-white rounded-[4px] flex items-center justify-center hover:shadow-md hover:cursor-pointer transition-shadow hover:bg-[#52a9fa] "
      onClick={updateIssue}
    >
      <div className="px-[6px] py-[5px] lgphone:hidden">
        <IoAddSharp size={25} />
      </div>
      <p className="hidden lgphone:block px-5 py-[6px]">Update</p>
    </div>
  );
}

export default UpdateIssueButton;
