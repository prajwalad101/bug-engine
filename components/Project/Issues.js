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
      <hr className="h-0 border-0 border-t-2 border-blue-300" />
      <div className="flex overflow-x-scroll">
        {/* No status issues */}
        <div className="mt-2 shrink-0 w-[360px]">
          <p>No Status ({noStatusIssues.length})</p>
          {noStatusIssues.map((issue) => {
            return <Issue issue={issue} key={issue.id} />;
          })}
        </div>
        {/* In progress issues */}
        <div className="mt-2 shrink-0 w-[360px]">
          <p>In Progress</p>
          {inProgressIssues.map((issue) => {
            return <Issue issue={issue} key={issue.id} />;
          })}
        </div>
        {/* Completed issues */}
        <div className="mt-2 shrink-0 w-[360px]">
          <p>Completed</p>
          {completedIssues.map((issue) => {
            return <Issue issue={issue} key={issue.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Issues;
