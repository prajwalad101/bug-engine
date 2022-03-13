import { useRouter } from "next/router";
import useCreateIssue from "../../../hooks/useCreateIssue";

function SubmitIssue({
  issueTitle,
  issueType,
  issuePriority,
  issueDescription,
  selectedAssignees,
}) {
  const router = useRouter();
  const projectId = router.query.id;

  const addIssue = useCreateIssue(projectId);

  const submit = () => {
    const newIssue = {
      name: issueTitle,
      type: issueType,
      priority: issuePriority,
      description: issueDescription,
      developers: selectedAssignees,
      submitter: "Prajwal Adhikari",
    };
    addIssue.mutate(newIssue);
  };

  if (addIssue.isSuccess) {
    router.push(`/project/${projectId}`);
  }

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
