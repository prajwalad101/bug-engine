import { useRouter } from "next/router";
import { useState } from "react";
import useProject from "../../../hooks/useProject";

// components
import Heading from "../../../components/Project/Heading";
import Issues from "../../../components/Project/Issues";
import StatusToggle from "../../../components/UI/Issues/StatusToggle";

function ProjectPage() {
  const [issueStatus, setIssueStatus] = useState("Open");

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

  // This component is rendered inside the heading section.
  const statusToggleComponent = (
    <StatusToggle issueStatus={issueStatus} setIssueStatus={setIssueStatus} />
  );

  return (
    <div className="mx-5 font-lato">
      <Heading
        project={project}
        statusToggleComponent={statusToggleComponent}
      />
      <Issues project={project} issueStatus={issueStatus} />
    </div>
  );
}

export default ProjectPage;
