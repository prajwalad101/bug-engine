/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { useRouter } from "next/router";
import EditIssue from "../Issue/EditIssue";

// functions
import useAssignees from "../../hooks/useAssignees";
import useDeleteIssue from "../../hooks/useDeleteIssue";
import useUpdateIssue from "../../hooks/useUpdateIssue";

export default function EditIssueModal({
  open,
  setOpen,
  issue,
  projectId,
  isAdmin,
}) {
  const [issueStatus, setIssueStatus] = useState(issue.status);
  const [issuePriority, setIssuePriority] = useState(issue.priority);
  const [selectedAssignees, setSelectedAssignees] = useState(issue.assignees);

  const router = useRouter();
  const cancelButtonRef = useRef(null);
  const { data } = useAssignees();
  const allAssignees = data?.data;

  const updateMutation = useUpdateIssue(projectId);
  const deleteMutation = useDeleteIssue(projectId, issue._id);

  deleteMutation.isSuccess ? router.push(`/project/${projectId}`) : null;

  const updateIssue = () => {
    const newIssue = {
      status: issueStatus,
      priority: issuePriority,
      assignees: selectedAssignees,
    };

    updateMutation.mutate(
      { issue: newIssue, issueId: issue._id },

      {
        onSuccess: () => setOpen(false),
      }
    );
  };

  if (!allAssignees) return null;

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 w-full text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium text-gray-900 mb-5"
                    >
                      Edit Issue
                    </Dialog.Title>
                    <EditIssue
                      allAssignees={allAssignees}
                      issueStatus={issueStatus}
                      setIssueStatus={setIssueStatus}
                      issuePriority={issuePriority}
                      setIssuePriority={setIssuePriority}
                      selectedAssignees={selectedAssignees}
                      setSelectedAssignees={setSelectedAssignees}
                    />
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={updateIssue}
                >
                  Update
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => deleteMutation.mutate()}
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setOpen(false)}
                  ref={cancelButtonRef}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
