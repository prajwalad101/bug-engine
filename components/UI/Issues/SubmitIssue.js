import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import useCreateIssue from "../../../hooks/useCreateIssue";

function SubmitIssue({
  issueTitle,
  issueType,
  issuePriority,
  issueDescription,
  selectedAssignees,
}) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const projectId = router.query.id;

  const addIssue = useCreateIssue(projectId); // mutate function for new issue

  const submit = () => {
    const newIssue = {
      name: issueTitle,
      type: issueType,
      priority: issuePriority,
      description: issueDescription,
      assignees: selectedAssignees,
      submitter: session.user,
    };
    addIssue.mutate(newIssue, {
      onSuccess: () => router.push(`/project/${projectId}`),
    });
  };

  return (
    <div>
      <div
        className={`w-[130px] bg-[#3197F5] text-white rounded-[4px] flex items-center justify-center hover:shadow-md hover:cursor-pointer transition-shadow ${
          addIssue.isLoading ? "bg-gray-700" : ""
        }   text-white`}
      >
        <p className="px-5 py-[6px]" onClick={submit}>
          Create issue
        </p>
      </div>
      {addIssue.isError && (
        <p>Could not add issue to the project. Please try again later</p>
      )}
    </div>
  );
}

export default SubmitIssue;
