import { useState } from "react";
import SelectMenu from "../../Issue/SelectMenu";

function SetAssignee({
  allAssignees,
  selectedAssignees,
  setSelectedAssignees,
  isAdmin,
}) {
  const [listOption, setListOption] = useState(allAssignees[0]);

  const addNewAssignee = () => {
    if (!isAdmin) {
      return null;
    }
    const selectedAssigneesIds = selectedAssignees.map(
      (assignee) => assignee._id
    );

    // check if the listOption is already selected
    if (selectedAssigneesIds.indexOf(listOption._id) === -1) {
      selectedAssignees.push(listOption);
      setSelectedAssignees([...selectedAssignees]);
    }
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-5 sm:justify-between sm:items-center">
        <div className="grow">
          <SelectMenu
            options={allAssignees}
            selected={listOption}
            setSelected={setListOption}
          />
        </div>

        {/* Add assignee button */}
        <button
          type="button"
          className={`max-w-[100px] w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-6 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm ${
            !isAdmin && "hover:cursor-not-allowed"
          }`}
          onClick={addNewAssignee}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default SetAssignee;
