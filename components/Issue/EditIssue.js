import { useState } from "react";
import IssueListbox from "../UI/NewIssue/IssueListBox";

// data
import {
  issueTypeOptions,
  issuePriorityOptions,
  issueStatusOptions,
} from "../../data";
import SetAssignee from "../UI/NewIssue/SetAssignee";
import Image from "next/image";
import SelectMenu from "./SelectMenu";

export default function EditIssue(props) {
  // const [issueStatus, setIssueStatus] = useState(issue.status);
  // const [issuePriority, setIssuePriority] = useState(issue.priority);
  // const [selectedAssignees, setSelectedAssignees] = useState(issue.assignees);

  const removeSelectedAssignee = (id) => {
    const filteredAssignees = props.selectedAssignees.filter(
      (assignee) => assignee._id !== id
    );
    props.setSelectedAssignees([...filteredAssignees]);
  };

  return (
    <div className="bg-white overflow-hidden sm:rounded-lg">
      <div className="border-t border-gray-200">
        <dl>
          {/* STATUS */}
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="flex items-center text-sm font-medium text-gray-500">
              Status
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <SelectMenu
                options={issueStatusOptions}
                selected={props.issueStatus}
                setSelected={props.setIssueStatus}
              />
            </dd>
          </div>
          {/* PRIORITY */}
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="flex items-center text-sm font-medium text-gray-500">
              Priority
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <SelectMenu
                options={issuePriorityOptions}
                selected={props.issuePriority}
                setSelected={props.setIssuePriority}
              />
            </dd>
          </div>
          {/* ASSIGNEES */}
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="flex items-center text-sm font-medium text-gray-500">
              Assignees
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {props.allAssignees.length !== 0 ? (
                <SetAssignee
                  allAssignees={props.allAssignees}
                  selectedAssignees={props.selectedAssignees}
                  setSelectedAssignees={props.setSelectedAssignees}
                />
              ) : (
                <p>No assignees to assign this issue</p>
              )}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {props.selectedAssignees.length === 0 ? (
                <div className="text-gray-500 ">Not assigned</div>
              ) : (
                <div>
                  {props.selectedAssignees.map((assignee) => (
                    <div key={assignee._id}>
                      <Image
                        alt="assignee"
                        src={assignee.image}
                        width={30}
                        height={30}
                        className="rounded-full hover:cursor-pointer"
                        onClick={() => removeSelectedAssignee(assignee._id)}
                      />
                    </div>
                  ))}
                </div>
              )}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
