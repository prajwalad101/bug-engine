import { useRouter } from "next/router";
import { useState } from "react";
import useProject from "../../../hooks/useProject";

// components
import Heading from "../../../components/Project/Heading";
import Issues from "../../../components/Project/Issues";
import StatusToggle from "../../../components/UI/Issues/StatusToggle";
import Pagination from "../../../components/Project/Pagination";
import { formatPagination } from "../../../utils/issuesFunc";

function ProjectPage({ admin }) {
  const isAdmin = admin.current;

  const [issueStatus, setIssueStatus] = useState("Open");
  const [pageNum, setPageNum] = useState(1);
  let totalIssues = 0;

  // get project id
  const router = useRouter();
  const projectId = router.query.id;

  // fetch individual project from id
  const { isLoading, isError, data, error } = useProject(projectId);
  const project = data?.data.project;

  // Check project statues
  if (isLoading) {
    return <div>project page loading...</div>;
  }

  if (!project) {
    return <div>404 Error. Project not found</div>;
  }

  if (isError) {
    return <div>Error: {error}</div>;
  }

  let issues = project.issues.filter((el) => el.status === issueStatus); // issue status
  // sets the total issue number
  totalIssues = issues.length;
  issues = formatPagination(issues, pageNum, 10); // limit issues

  // This component is rendered inside the heading section.
  const statusToggleComponent = (
    <StatusToggle
      issueStatus={issueStatus}
      setIssueStatus={setIssueStatus}
      project={project}
    />
  );

  return (
    <div className="mx-5 font-lato">
      <Heading
        project={project}
        statusToggleComponent={statusToggleComponent}
        isAdmin={isAdmin}
      />
      <Issues project={project} issues={issues} isAdmin={isAdmin} />
      <Pagination
        pageNum={pageNum}
        setPageNum={setPageNum}
        currentIssues={issues}
        totalIssues={totalIssues}
      />
    </div>
  );
}

export default ProjectPage;
