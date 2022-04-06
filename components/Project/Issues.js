import { useSession } from "next-auth/react";
import NoIssues from "../UI/Issues/NoIssues";

import Issue from "./Issue";

function Issues({ project, issueStatus, isAdmin }) {
  const { data: session, status } = useSession();

  let issues = project.issues.filter((el) => el.status === issueStatus);

  if (!isAdmin) {
    // only show issues assigned for that user
    issues = issues.filter((issue) => {
      let assigneeIds = issue.assignees.map((assignee) => assignee._id);
      if (assigneeIds.includes(session.user.id)) {
        return true;
      } else {
        return false;
      }
    });
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
