import IssueModal from "../Modal/IssueModal";
import ListHeading from "../UI/Issues/ListHeading";
import NoIssues from "../UI/Issues/NoIssues";

import { useState } from "react";

import Issue from "./Issue";

function Issues({ project, issueStatus }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIssue, setSelectedIssue] = useState(null);

  const issues = project.issues.filter((el) => el.status === issueStatus);

  return (
    <div className="h-[68vh] overflow-auto">
      {/* send the specific issue to the modal */}
      {/* <IssueModal
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        issue={selectedIssue}
      /> */}
      {issues.length !== 0 ? (
        issues.map((item) => (
          <Issue
            key={item._id}
            issue={item}
            setIsModalOpen={setIsModalOpen}
            setSelectedIssue={setSelectedIssue}
            pId={project._id}
          />
        ))
      ) : (
        <NoIssues />
      )}
    </div>
  );
}

export default Issues;
