import { useState } from "react";
import useUsers from "../../../hooks/useUsers";

// components
import TextEditor from "../../../components/Project/TextEditor";
import SubmitIssue from "../../../components/UI/Issues/SubmitIssue";
import IssueListbox from "../../../components/UI/NewIssue/IssueListBox";
import SetAssignee from "../../../components/UI/NewIssue/SetAssignee";

// data
import { issueTypes } from "../../../data";
import { issuePriorites } from "../../../data";

function NewIssuePage() {
  const { data } = useUsers();

  const allAssignees = data?.data;

  const [issueTitle, setIssueTitle] = useState("");
  const [issueType, setIssueType] = useState(issueTypes[0]);
  const [issuePriority, setIssuePriority] = useState(issuePriorites[0]);
  const [selectedAssignees, setSelectedAssignees] = useState([]);
  const [issueDescription, setIssueDescription] = useState("");

  const onTitleChange = (event) => {
    setIssueTitle(event.target.value);
  };

  const getEditorState = (text) => {
    setIssueDescription(text);
  };

  if (!allAssignees) return null;

  return (
    <div className="max-w-[900px] mx-5 flex justify-center flex-col gap-5 font-hindsiliguri lg:mt-5">
      <div>
        <h3 className="text-2xl text-gray-800 font-sourcesans">
          Create new issue
        </h3>
      </div>
      <div className="mt-1">
        <h3 className="text-gray-500">TITLE</h3>
        <input
          type="text"
          name="title"
          onChange={onTitleChange}
          value={issueTitle}
          className="border-b-2 w-full text-xl rounded-sm pr-2 py-1 border-gray-200 focus:outline-none focus:border-gray-500 "
        />
      </div>
      {/* Listbox section */}
      <section className="flex flex-col gap-10">
        <div className="flex justify-between sm:justify-start sm:gap-64">
          {/* Set Type */}
          <div className="max-w-[150px]">
            <h3 className="text-gray-500 mb-3">TYPE</h3>
            <IssueListbox
              listTypes={issueTypes}
              listType={issueType}
              setListType={setIssueType}
            />
          </div>
          {/* Set Priority */}
          <div className="max-w-[150px]">
            <h3 className="text-gray-500 mb-3">PRIORITY</h3>
            <IssueListbox
              listTypes={issuePriorites}
              listType={issuePriority}
              setListType={setIssuePriority}
            />
          </div>
        </div>
        {/* Set Assignees */}
        <SetAssignee
          allAssignees={allAssignees}
          selectedAssignees={selectedAssignees}
          setSelectedAssignees={setSelectedAssignees}
        />
      </section>

      {/* Issue Description */}
      <div className="mt-5">
        <h3 className="text-gray-500 mb-3">ISSUE DESCRIPTION</h3>
        <TextEditor getEditorState={getEditorState} />
      </div>

      {/* Submit issue button */}
      <SubmitIssue
        issueTitle={issueTitle}
        issueType={issueType.name}
        issuePriority={issuePriority.name}
        issueDescription={issueDescription}
        selectedAssignees={selectedAssignees}
      />
    </div>
  );
}

export default NewIssuePage;
