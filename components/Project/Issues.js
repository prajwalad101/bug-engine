import { IoIosAddCircleOutline } from "react-icons/io";
import CreateIssueButton from "../UI/Issues/CreateIssueButton";
import NoIssues from "../UI/Issues/NoIssues";

import Issue from "./Issue";

function Issues({ project, setIsModalOpen }) {
  const issues = project.issues;

  const noStatusIssues = issues.filter((el) => el.status === "no status");
  const completedIssues = issues.filter((el) => el.status === "completed");
  const inProgressIssues = issues.filter((el) => el.status === "in progress");

  return (
    <div className="mt-6">
      <hr className="hr-line border-blue-300" />
      {issues.length !== 0 ? (
        <div>issues</div>
      ) : (
        <NoIssues setIsModalOpen={setIsModalOpen} />
      )}
    </div>
  );
}

export default Issues;
