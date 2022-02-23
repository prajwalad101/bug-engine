import { useState } from "react";

import IssueModal from "../../components/Modal/IssueModal";
import Heading from "../../components/Project/Heading";
import Issues from "../../components/Project/Issues";

function ProjectPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="ml-5 mt-5 mr-5 font-lato">
      <Heading />
      <Issues setIsModalOpen={setIsModalOpen} />
      <IssueModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
    </div>
  );
}

export default ProjectPage;
