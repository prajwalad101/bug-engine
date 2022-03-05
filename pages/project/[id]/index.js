import { useRouter } from "next/router";
import { useState } from "react";

// components
import IssueModal from "../../../components/Modal/IssueModal";
import Heading from "../../../components/Project/Heading";
import Issues from "../../../components/Project/Issues";
import StatusToggle from "../../../components/UI/Issues/StatusToggle";

// hooks
import useProject from "../../../hooks/useProject";

function ProjectPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [issueStatus, setIssueStatus] = useState("open");

  const router = useRouter();
  const projectId = router.query.id;

  const { isLoading, isError, data, error } = useProject(projectId);

  const project = data?.data.project;

  const isEmpty = project ? Object.keys(project).length === 0 : true;
  if (isEmpty) return null;

  if (isEmpty) {
    return <div>404 Error. Page not found</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
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
      <Issues
        project={project}
        setIsModalOpen={setIsModalOpen}
        issueStatus={issueStatus}
      />
      <IssueModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
    </div>
  );
}

export default ProjectPage;
