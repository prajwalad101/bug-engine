import NoIssues from "../UI/Issues/NoIssues";

import Issue from "./Issue";

function Issues({ project, issueStatus }) {
  const issues = project.issues.filter((el) => el.status === issueStatus);

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
