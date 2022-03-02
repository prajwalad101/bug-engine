import { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import CreateIssueButton from "../UI/Issues/CreateIssueButton";
import NoIssues from "../UI/Issues/NoIssues";

import Issue from "./Issue";

function Issues({ project }) {
  const [issueStatus, setIssueStatus] = useState("open");

  const issues = project.issues.filter((el) => el.status === issueStatus);

  return (
    <div>
      {issues.length !== 0 ? (
        issues.map((item) => <Issue key={item._id} issue={item} />)
      ) : (
        <NoIssues />
      )}
    </div>
  );
}

export default Issues;
