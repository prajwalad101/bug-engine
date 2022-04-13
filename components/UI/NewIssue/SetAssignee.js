import { useState } from "react";
import Image from "next/image";

import IssueListbox from "./IssueListBox";

function SetAssignee({
  allAssignees,
  selectedAssignees,
  setSelectedAssignees,
}) {
  const [listOption, setListOption] = useState(allAssignees[0]);

  const addNewAssignee = () => {
    const selectedAssigneesIds = selectedAssignees.map(
      (assignee) => assignee._id
    );

    // check if the listOption is already selected
    if (selectedAssigneesIds.indexOf(listOption._id) === -1) {
      selectedAssignees.push(listOption);
      setSelectedAssignees([...selectedAssignees]);
    }
  };

  const removeSelectedAssignee = (id) => {
    const filteredAssignees = selectedAssignees.filter(
      (assignee) => assignee._id !== id
    );
    console.log(filteredAssignees);
    setSelectedAssignees([...filteredAssignees]);
  };

  return (
    <div>
      <div className="flex gap-10">
        <IssueListbox
          listTypes={allAssignees}
          listType={listOption}
          setListType={setListOption}
        />
        {/* Add assignee button */}
        <div
          className="hover:cursor-pointer flex items-center py-[2px] px-4 bg-blue-400 text-white rounded-sm"
          onClick={addNewAssignee}
        >
          Add
        </div>
      </div>
    </div>
  );
}

export default SetAssignee;
