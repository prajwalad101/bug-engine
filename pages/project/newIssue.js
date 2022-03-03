import { useState } from "react";
import TextEditor from "../../components/Project/TextEditor";

function NewIssuePage() {
  const [issueTitle, setIssueTitle] = useState("");
  const [issueType, setIssueType] = useState("");

  const onTitleChange = (event) => {
    setIssueTitle(event.target.value);
  };

  const onTypeChange = (event) => {
    setIssueType(event.target.value);
  };

  return (
    <div className="max-w-[900px] mx-5 flex justify-center flex-col gap-5 font-hindsiliguri">
      <div className="mt-3">
        <h3 className="text-gray-500">TITLE</h3>
        <input
          type="text"
          name="title"
          onChange={onTitleChange}
          value={issueTitle}
          className="border-b-2 text-xl rounded-sm pr-2 py-1 border-gray-200 focus:outline-none focus:border-gray-500 "
        />
      </div>

      <TextEditor />
    </div>
  );
}

export default NewIssuePage;
