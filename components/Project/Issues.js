import { useRouter } from "next/router";

import { getProjectById } from "../../utils/projectFunc";
import Issue from "./Issue";

function Issues() {
  const router = useRouter();

  const id = router.query.id;

  const project = getProjectById(id);
  if (!project) return null;

  const issues = project.issues;

  const noStatusIssues = issues.filter((el) => el.status === "no status");
  const completedIssues = issues.filter((el) => el.status === "completed");
  const inProgressIssues = issues.filter((el) => el.status === "in progress");

  return (
    <div className="mt-6">
      <hr className="h-0 border-0 border-t-2 " />
      {/* No status issues */}
      <div>
        <p>No Status</p>
        {noStatusIssues.map((issue) => {
          return <Issue issue={issue} key={issue.id} />;
        })}
      </div>
      <div>
        {/* In progress issues */}
        <p>In Progress</p>
        {inProgressIssues.map((issue) => {
          return <Issue issue={issue} key={issue.id} />;
        })}
      </div>
      {/* Completed issues */}
      <div>
        <p>Completed</p>
        {completedIssues.map((issue) => {
          return <Issue issue={issue} key={issue.id} />;
        })}
      </div>
    </div>
  );
}

export default Issues;
