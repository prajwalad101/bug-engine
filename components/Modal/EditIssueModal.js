import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import useDeleteIssue from "../../hooks/useDeleteIssue";

// components
import IssueListbox from "../UI/NewIssue/IssueListBox";
import { AiOutlineDelete } from "react-icons/ai";

// data
import { issueTypes, issuePriorites, issueStatuses } from "../../data";
import UpdateIssueButton from "../UI/NewIssue/UpdateIssueButton";
import { useRouter } from "next/router";

export default function EditIssueModal({
  setIsModalOpen,
  isModalOpen,
  issue,
  projectId,
  isAdmin,
}) {
  const router = useRouter();
  const deleteMutation = useDeleteIssue(projectId, issue._id);

  deleteMutation.isSuccess ? router.push(`/project/${projectId}`) : null;

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
    <>
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => setIsModalOpen(false)}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {/* Issue Information */}
              <div className="inline-block w-full max-w-2xl p-6 my-8 lg:ml-[270px] overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-sm side-transition font-lato">
                <div className="flex items-center gap-10">
                  {/* Name */}
                  <h3 className="text-2xl font-lato  leading-6 text-gray-900">
                    {issue.name}
                  </h3>
                  {isAdmin && (
                    <AiOutlineDelete
                      size={20}
                      className="hover:text-red-900 hover:cursor-pointer"
                      onClick={() => deleteMutation.mutate()}
                    />
                  )}
                </div>
                {/* Status */}
                <div className="flex gap-3 mt-5">
                  <span className="text-gray-500">Status:</span>
                  <IssueListbox
                    listType={issueStatus}
                    listTypes={issueStatuses}
                    setListType={setIssueStatus}
                  />
                </div>
                {/* Priority */}
                {isAdmin && (
                  <div className="flex gap-3 mt-3">
                    <span className="text-gray-500">Priority:</span>
                    <IssueListbox
                      listType={issuePriority}
                      listTypes={issuePriorites}
                      setListType={setIssuePriority}
                    />
                  </div>
                )}

                <UpdateIssueButton
                  issue={{
                    type: issueType.name,
                    status: issueStatus.name,
                    assignees: selectedAssignees,
                    priority: issuePriority.name,
                  }}
                  issueId={issue._id}
                  projectId={projectId}
                />
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
