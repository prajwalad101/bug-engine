import DOMPurify from "dompurify";

import { useRouter } from "next/router";
import { useState } from "react";
import useIssue from "../../../../hooks/useIssue";

import { AiOutlineEdit } from "react-icons/ai";
import EditIssueModal from "../../../../components/Modal/EditIssueModal";
import Tabs from "../../../../components/UI/IssueDescription/Tabs";
import Comments from "../../../../components/Project/Comments";
import EditIssue from "../../../../components/Issue/EditIssue";

const tabItems = [
  { name: "description", id: 1 },
  { name: "comments", id: 2 },
];

function IssuePage({ isAdmin }) {
  const router = useRouter();

  const { id, issueId } = router.query;
  const { isLoading, isError, data, error } = useIssue(id, issueId);

  const issue = data?.data;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tab, setTab] = useState(tabItems[0].name);

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
        open={isModalOpen}
        setOpen={setIsModalOpen}
        issue={issue}
        projectId={id}
        isAdmin={isAdmin}
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
        {issue.submitter.name}
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

      <Tabs tab={tab} setTab={setTab} tabItems={tabItems} />
      {/* Description */}
      {tab === "description" && (
        <div dangerouslySetInnerHTML={sanitizedData()} />
      )}
      {tab === "comments" && <Comments projectId={id} issueId={issueId} />}
    </div>
  );
}

export default IssuePage;
