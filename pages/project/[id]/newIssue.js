import { useState, useEffect } from "react";
import TextEditor from "../../../components/Project/TextEditor";
import SubmitIssue from "../../../components/UI/Issues/SubmitIssue";

import IssueListbox from "../../../components/UI/NewIssue/IssueListBox";
import { useDevelopers } from "../../../hooks/useDevelopers";

function NewIssuePage() {
  const { isLoading, isError, data, error } = useDevelopers();

  const issueDevelopers = data?.data;

  // change set the initial developer when developers gets loaded
  useEffect(() => {
    if (issueDevelopers) {
      setIssueDeveloper(issueDevelopers[0]);
    }
  }, [issueDevelopers]);

  const issueTypes = [
    { _id: 1, name: "Development", unavailable: false },
    { _id: 2, name: "UIDesign", unavailable: false },
  ];

  const issuePriorites = [
    { _id: 1, name: "High", unavailable: false },
    { _id: 2, name: "Medium", unavailable: false },
    { _id: 3, name: "Low", unavailable: false },
  ];

  const [issueTitle, setIssueTitle] = useState("");
  const [issueType, setIssueType] = useState(issueTypes[0]);
  const [issuePriority, setIssuePriority] = useState(issuePriorites[0]);
  const [issueDeveloper, setIssueDeveloper] = useState("");
  const [issueDescription, setIssueDescription] = useState("");

  const onTitleChange = (event) => {
    setIssueTitle(event.target.value);
  };

  const getEditorState = (text) => {
    setIssueDescription(text);
  };

  if (!issueDevelopers) return null;

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
      <section className="flex justify-between">
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
        {/* Set Developers */}
        <div>
          <h3 className="text-gray-500 mb-3">DEVELOPERS</h3>
          <IssueListbox
            listTypes={issueDevelopers}
            listType={issueDeveloper}
            setListType={setIssueDeveloper}
          />
        </div>
      </section>

      {/* Issue Description */}
      <div className="mt-5">
        <h3 className="text-gray-500 mb-3">ISSUE DESCRIPTION</h3>
        <TextEditor getEditorState={getEditorState} />
      </div>
      <SubmitIssue
        issueTitle={issueTitle}
        issueType={issueType.name}
        issuePriority={issuePriority.name}
        issueDescription={issueDescription}
        issueDeveloper={issueDeveloper}
      />
    </div>
  );
}

export default NewIssuePage;
