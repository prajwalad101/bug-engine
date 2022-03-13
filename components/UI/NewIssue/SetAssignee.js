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
    if (selectedAssignees.indexOf(listOption) === -1) {
      selectedAssignees.push(listOption);
      setSelectedAssignees([...selectedAssignees]);
    }
  };

  console.log("Set assignee component rendered");

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
        {console.log(selectedAssignees)}
        {selectedAssignees.length === 0 ? (
          <div className="text-gray-500">NA</div>
        ) : (
          <div>
            {selectedAssignees.map((assignee) => (
              <div key={assignee._id}>
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
