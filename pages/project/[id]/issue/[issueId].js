import DOMPurify from "dompurify";

import { useRouter } from "next/router";
import { useState } from "react";
import useIssue from "../../../../hooks/useIssue";

import { AiOutlineEdit } from "react-icons/ai";
import EditIssueModal from "../../../../components/Modal/EditIssueModal";

function IssuePage() {
  const router = useRouter();

  const { id, issueId } = router.query;
  const { isLoading, isError, data, error } = useIssue(id, issueId);

  const issue = data?.data;

  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!issue) return null;

  // convert html type string to an actual string
  const sanitizedData = () => ({
    __html: DOMPurify.sanitize(issue.description),
  });

  if (isLoading) {
    return <h1>loading</h1>;
  }

  if (isError) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <div className="mx-5 mt-8 font-lato">
      {/* modal for editing issue */}
      <EditIssueModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        issue={issue}
      />
      <div className="flex items-center gap-56">
        {/* Name */}
        <h3 className="text-2xl font-lato  leading-6 text-gray-900">
          {issue.name}
        </h3>
        {/* Edit issue */}
        <div
          className="flex gap-2 text-gray-600 hover:cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <AiOutlineEdit size={23} className="peer" />
          <p className="hover:underline peer-hover:underline underline-offset-2">
            Edit
          </p>
        </div>
      </div>
      {/* Submitter */}
      <div className="mt-2">
        <span className="text-gray-500">Submitted by: </span>
        {issue.submitter}
      </div>
      {/* Type */}
      <div className="mt-5">
        <span className="text-gray-500">In {issue.type}</span>
      </div>
      {/* Status */}
      <div className="flex gap-3 mt-4">
        <span className="text-gray-500">Status:</span>
        <div className="bg-green-400 px-2 rounded-sm text-white">
          <span className="uppercase">{issue.status}</span>
        </div>
      </div>
      {/* Priority */}
      <div className="flex gap-3 mt-3">
        <span className="text-gray-500">Priority:</span>
        <span className="uppercase text-red-500">{issue.priority}</span>
      </div>
      {/* Description */}
      <div className="mt-5">
        <p className="text-gray-500 ">Description</p>
        <div dangerouslySetInnerHTML={sanitizedData()} />
      </div>
    </div>
  );
}

export default IssuePage;
