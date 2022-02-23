import { useRouter } from "next/router";
import { useState } from "react";

import IssueModal from "../../components/Modal/IssueModal";
import Heading from "../../components/Project/Heading";
import Issues from "../../components/Project/Issues";
import { getProjectById } from "../../utils/projectFunc";

function ProjectPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();
  const projectId = router.query.id;

  const project = getProjectById(projectId);

  if (!project) return null;

  return (
    <div className="ml-5 mt-5 mr-5 font-lato">
      <Heading project={project} />
      <Issues project={project} setIsModalOpen={setIsModalOpen} />
      <IssueModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
    </div>
  );
}

export default ProjectPage;
