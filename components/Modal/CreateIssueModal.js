import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import SelectMenu from "../Issue/SelectMenu";

// functions
import useAssignees from "../../hooks/useAssignees";
import useCreateIssue from "../../hooks/useCreateIssue";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

// Components / Data
import TextEditor from "../Project/TextEditor";
import { issuePriorityOptions, issueTypeOptions } from "../../data";

export default function CreateIssueModal({ open, setOpen }) {
  const { data: session } = useSession();
  const cancelButtonRef = useRef(null);

  const router = useRouter();
  const projectId = router.query.id;

  const formatOption = (option) => {
    return {
      name: option,
    };
  };

  const data = useAssignees();
  const allAssignees = data?.data;

  const [issueTitle, setIssueTitle] = useState("");
  const [issueDescription, setIssueDescription] = useState("");
  const [issueType, setIssueType] = useState(issueTypeOptions[0].name);
  const [issuePriority, setIssuePriority] = useState(
    issuePriorityOptions[0].name
  );

  const mutation = useCreateIssue(projectId); // mutate function for new issue

  const submit = () => {
    const newIssue = {
      name: issueTitle,
      type: issueType,
      priority: issuePriority,
      description: issueDescription,
      submitter: session.user,
    };
    mutation.mutate(newIssue, {
      onSuccess: () => {
        router.push(`/project/${projectId}`);
        setOpen(false);
      },
    });
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
            <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium text-gray-900"
                    >
                      Create new issue
                    </Dialog.Title>
                    {/* Issue Title */}
                    <div className="mt-5 mb-5">
                      <label className="block mb-2 text-sm font-medium text-gray-900 ">
                        Title
                      </label>
                      <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        required
                        value={issueTitle}
                        onChange={(e) => setIssueTitle(e.target.value)}
                      />
                    </div>
                    <div className="mb-10">
                      {/* Issue Type */}
                      <div className="flex flex-col gap-2 mb-5 max-w-[200px]">
                        <p className="text-sm">Type:</p>
                        <SelectMenu
                          options={issueTypeOptions}
                          selected={formatOption(issueType)}
                          setSelected={setIssueType}
                        />
                      </div>
                      <div className="flex flex-col gap-2 max-w-[200px]">
                        <p className="text-sm">Priority</p>
                        <SelectMenu
                          options={issuePriorityOptions}
                          selected={formatOption(issuePriority)}
                          setSelected={setIssuePriority}
                        />
                      </div>
                    </div>
                    {/* Issue Description */}
                    <div className="mt-5">
                      <h3 className="text-gray-500 mb-3">ISSUE DESCRIPTION</h3>
                      <TextEditor
                        getEditorState={(text) => setIssueDescription(text)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={submit}
                >
                  Create
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
