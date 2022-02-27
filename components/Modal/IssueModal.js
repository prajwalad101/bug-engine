import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useRouter } from "next/router";

import useCreateIssue from "../../hooks/useCreateIssue";

export default function IssueModal({ setIsModalOpen, isModalOpen }) {
  const router = useRouter();

  const projectId = router.query.id;

  const [issue, setIssue] = useState("");

  const handleChange = (event) => {
    setIssue(event.target.value);
  };

  const newIssue = {
    name: issue,
    submitter: "Prajwal Adhikari",
    type: "Development",
    status: "no status",
  };

  function closeModal() {
    setIssue("");
    setIsModalOpen(false);
  }

  const mutation = useCreateIssue(projectId, closeModal);

  return (
    <>
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
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
              <div className="inline-block w-full max-w-md p-6 my-8 lg:ml-[270px] overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-md side-transition">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Create new issue
                </Dialog.Title>
                <div className="mt-5">
                  <form className="flex flex-col gap-5">
                    {/* Issue Name */}
                    <label className="flex gap-3 items-center text-gray-500">
                      Name:
                      <input
                        type="text"
                        className="bg-slate-200 rounded-sm p-1"
                        value={issue}
                        onChange={handleChange}
                      />
                    </label>
                    {/* Issue type */}
                  </form>
                </div>

                <div className="mt-6">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={() => mutation.mutate(newIssue)}
                  >
                    Create
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
