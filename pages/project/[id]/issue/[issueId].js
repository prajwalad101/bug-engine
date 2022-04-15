// hooks
import { useRouter } from "next/router";
import { useState } from "react";
import useIssue from "../../../../hooks/useIssue";

// components
import EditIssueModal from "../../../../components/Modal/EditIssueModal";
import Tabs from "../../../../components/UI/IssueDescription/Tabs";
import Comments from "../../../../components/Project/Comments";
import { FiEdit2 } from "react-icons/fi";

// functions
import DOMPurify from "dompurify";
import { getFormattedDate } from "../../../../utils/formatDate";
import Image from "next/image";

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

  const date = getFormattedDate(issue.createdAt);

  return (
    <div className="mx-5 mt-5 font-lato">
      {/* modal for editing issue */}
      <EditIssueModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        issue={issue}
        projectId={id}
        isAdmin={isAdmin}
      />
      {/* <h1 className="mb-6">
        <span className="text-[27px] font-bold">Issue: </span>
        <span className="text-[23px] text-gray-500">#5835</span>
      </h1> */}
      <div className="flex items-center gap-5 sm:gap-14 mb-4">
        <p className="text-[23px]">
          Fix login screen remember password option{" "}
          <span className="text-xl text-gray-500">(#5835) </span>
        </p>
        <div
          className="shadow-md p-2 rounded-md hover:cursor-pointer hover:bg-gray-50"
          onClick={() => setIsModalOpen(true)}
        >
          <FiEdit2 size={20} />
        </div>
      </div>

      <div className="mb-10">
        <dl className="max-w-[400px] text-base">
          <div className="py-2 grid grid-cols-2 vsm:grid-cols-3 gap-4">
            <dt className="font-medium text-gray-500">Tag:</dt>
            <dd className="text-gray-900 sm:mt-0 sm:col-span-2">
              {issue.type}
            </dd>
          </div>
          <div className="py-2 grid grid-cols-2 vsm:grid-cols-3 gap-4">
            <dt className="font-medium text-gray-500">Priority:</dt>
            <dd className="text-gray-900 sm:mt-0 sm:col-span-2 uppercase">
              {issue.priority}
            </dd>
          </div>
          <div className="py-2 grid grid-cols-2 vsm:grid-cols-3 gap-4">
            <dt className="font-medium text-gray-500">Status:</dt>
            <dd className="text-gray-900 sm:col-span-2 uppercase">
              {issue.status}
            </dd>
          </div>
          <div className="py-2 grid grid-cols-2 vsm:grid-cols-3 gap-4">
            <dt className="font-medium text-gray-500">Date:</dt>
            <dd className=" text-gray-900 sm:col-span-2">{date}</dd>
          </div>
          <div className="py-2 grid grid-cols-2 vsm:grid-cols-3 gap-4">
            <dt className="font-medium text-gray-500">Submitter:</dt>
            <dd className="text-gray-900 sm:col-span-2">
              {issue.submitter.name}
            </dd>
          </div>
          <div className="py-2 grid grid-cols-2 vsm:grid-cols-3 gap-4">
            <dt className="font-medium text-gray-500">Assignees:</dt>
            <dd className="mt-1 text-gray-900 sm:mt-0 sm:col-span-2">
              {issue.assignees.map((assignee) => (
                <div key={assignee._id} className="rounded-full">
                  <Image
                    src={assignee.image}
                    alt="User profile"
                    width={28}
                    height={28}
                    className="rounded-full"
                  />
                </div>
              ))}
            </dd>
          </div>
        </dl>
      </div>

      <Tabs tab={tab} setTab={setTab} tabItems={tabItems} />
      {/* Description */}
      {tab === "description" && (
        <div dangerouslySetInnerHTML={sanitizedData()} className="mt-5" />
      )}
      {tab === "comments" && <Comments projectId={id} issueId={issueId} />}
    </div>
  );
}

export default IssuePage;
