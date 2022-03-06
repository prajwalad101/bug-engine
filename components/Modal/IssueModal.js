import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

import DOMPurify from "dompurify";

export default function IssueModal({ setIsModalOpen, isModalOpen, issue }) {
  if (!issue) return null;

  const sanitizedData = () => ({
    __html: DOMPurify.sanitize(issue.description),
  });

  console.log(sanitizedData());

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
                {/* Name */}
                <h3 className="text-2xl font-lato  leading-6 text-gray-900">
                  {issue.name}
                </h3>
                {/* Submitter */}
                <div className="mt-2">
                  <span className="text-gray-500">Submitted by: </span>
                  {issue.submitter}
                </div>
                {/* Type */}
                <div className="">
                  <span className="text-gray-500">In {issue.type}</span>
                </div>
                {/* Status */}
                <div className="flex gap-3 mt-5">
                  <span className="text-gray-500">Status:</span>
                  <div className="bg-green-400 px-2 rounded-sm text-white">
                    <span className="uppercase">{issue.status}</span>
                  </div>
                </div>
                {/* Priority */}
                <div className="flex gap-3 mt-3">
                  <span className="text-gray-500">Priority:</span>
                  <span className="uppercase text-red-500">
                    {issue.priority}
                  </span>
                </div>
                {/* Description */}
                <div className="mt-5">
                  <p className="text-gray-500 ">Description</p>
                  <div dangerouslySetInnerHTML={sanitizedData()} />
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
