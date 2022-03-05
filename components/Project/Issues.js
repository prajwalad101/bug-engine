import { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import CreateIssueButton from "../UI/Issues/CreateIssueButton";
import ListHeading from "../UI/Issues/ListHeading";
import NoIssues from "../UI/Issues/NoIssues";

import Issue from "./Issue";

function Issues({ project, issueStatus }) {
  const issues = project.issues.filter((el) => el.status === issueStatus);

  return (
    <div>
      <ListHeading />
      {issues.length !== 0 ? (
        issues.map((item) => <Issue key={item._id} issue={item} />)
      ) : (
        <NoIssues />
      )}
    </div>
  );
}

export default Issues;
