import { useRouter } from "next/router";
import { useState } from "react";
import useProject from "../../../hooks/useProject";

// components
import Heading from "../../../components/Project/Heading";
import StatusToggle from "../../../components/UI/Issues/StatusToggle";
import Pagination from "../../../components/Project/Pagination";
import { formatIssues, formatPagination } from "../../../utils/issuesFunc";
import { useSession } from "next-auth/react";
import SearchIssues from "../../../components/Project/SearchIssues";
import LoadingSpinner from "../../../components/LoadingSpinner";

function ProjectPage({ admin }) {
  const isAdmin = admin.current;
  const { data: session } = useSession();

  const [issueStatus, setIssueStatus] = useState("Open");
  const [pageNum, setPageNum] = useState(1);
  const [searchField, setSearchField] = useState("");

  let totalIssues = 0;

  // get project id
  const router = useRouter();
  const projectId = router.query.id;

  // fetch individual project from id
  const { isLoading, isError, data, error } = useProject(projectId);
  const project = data?.data.project;

  // Check project statues
  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!project) {
    return <div>404 Error. Project not found</div>;
  }

  if (isError) {
    return <div>Error: {error}</div>;
  }

  let issues = project.issues.filter((el) => el.status === issueStatus); // issue status

  if (
    !isAdmin &&
    session.user.role !== "demo" &&
    session.user.role !== "submitter"
  ) {
    // only show issues assigned for that user
    issues = formatIssues(issues, session);
  }

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
        setSearchField={setSearchField}
        searchField={searchField}
      />
      <SearchIssues
        project={project}
        issues={issues}
        searchField={searchField}
      />
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
