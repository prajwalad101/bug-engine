import { useSession } from "next-auth/react";
import { formatIssues } from "../../utils/issuesFunc.js";
import NoIssues from "../UI/Issues/NoIssues";

import Issue from "./Issue";

function Issues({ project, issueStatus, isAdmin }) {
  const { data: session, status } = useSession();

  let issues = project.issues.filter((el) => el.status === issueStatus);

  if (!isAdmin) {
    // only show issues assigned for that user
    issues = formatIssues(issues, session);
  }

  return (
    <div className="h-[68vh] overflow-auto">
      {issues.length !== 0 ? (
        issues.map((item) => (
          <Issue key={item._id} issue={item} pId={project._id} />
        ))
      ) : (
        <NoIssues />
      )}
    </div>
  );
}

export default Issues;
