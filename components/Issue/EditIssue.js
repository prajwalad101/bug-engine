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

export default function EditIssue({ projectId, issue, allAssignees }) {
  const createIssueObject = (name) => {
    return { _id: 0, name, unavailable: false };
  };

  const [issuePriority, setIssuePriority] = useState(
    createIssueObject(issue.priority)
  );
  const [issueType, setIssueType] = useState(createIssueObject(issue.type));
  const [selectedAssignees, setSelectedAssignees] = useState(issue.assignees);

  const [issueStatus, setIssueStatus] = useState(
    createIssueObject(issue.status)
  );

  return (
    <div className="bg-white overflow-hidden sm:rounded-lg">
      <div className="border-t border-gray-200">
        <dl>
          {/* STATUS */}
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Status</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <IssueListbox
                listType={issueStatus}
                listTypes={issueStatusOptions}
                setListType={setIssueStatus}
              />
            </dd>
          </div>
          {/* PRIORITY */}
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Priority</dt>
            <IssueListbox
              listType={issuePriority}
              listTypes={issuePriorityOptions}
              setListType={setIssuePriority}
            />
          </div>
          {/* ASSIGNEES */}
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Assignees</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {allAssignees.length !== 0 ? (
                <SetAssignee
                  allAssignees={allAssignees}
                  selectedAssignees={selectedAssignees}
                  setSelectedAssignees={setSelectedAssignees}
                />
              ) : (
                <p>No assignees to assign this issue</p>
              )}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {selectedAssignees.length === 0 ? (
                <div>NA</div>
              ) : (
                <div>
                  {selectedAssignees.map((assignee) => (
                    <div key={assignee._id}>
                      <Image
                        alt="assignee"
                        src={assignee.image}
                        width={30}
                        height={30}
                        className="rounded-full"
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
