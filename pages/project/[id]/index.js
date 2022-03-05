import { useRouter } from "next/router";
import { useState } from "react";

// components
import IssueModal from "../../../components/Modal/IssueModal";
import Heading from "../../../components/Project/Heading";
import Issues from "../../../components/Project/Issues";

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

  return (
    <div className="mx-5 font-lato">
      <Heading
        project={project}
        issueStatus={issueStatus}
        setIssueStatus={setIssueStatus}
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
