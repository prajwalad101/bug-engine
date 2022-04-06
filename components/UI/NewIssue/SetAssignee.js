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
    <div className="mb-8">
      <h3 className="text-gray-500 mb-3">ASSIGNEES</h3>
      <div className="flex gap-10 mb-5">
        <div>
          <IssueListbox
            listTypes={allAssignees}
            listType={listOption}
            setListType={setListOption}
          />
        </div>
        {/* Add assignee button */}
        <div
          className="hover:cursor-pointer flex items-center py-[2px] px-4 bg-blue-400 text-white rounded-sm"
          onClick={addNewAssignee}
        >
          Add
        </div>
      </div>
      {/* Assignees to be added */}
      <div className="flex">
        {selectedAssignees.length === 0 ? (
          <div className="text-gray-500">NA</div>
        ) : (
          <div>
            {selectedAssignees.map((assignee) => (
              <div
                key={assignee._id}
                onClick={() => removeSelectedAssignee(assignee._id)}
              >
                <Image
                  alt="assignee"
                  src={assignee.image}
                  width={33}
                  height={33}
                  className="rounded-full"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SetAssignee;
