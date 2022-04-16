// hooks
import { useRouter } from "next/router";
import { useState } from "react";
import useIssue from "../../../../hooks/useIssue";

// components
import EditIssueModal from "../../../../components/Modal/EditIssueModal";
import Tabs from "../../../../components/UI/IssueDescription/Tabs";
import Comments from "../../../../components/Issue/Comments";
import { FiEdit2 } from "react-icons/fi";
import { IoArrowBack } from "react-icons/io5";

// functions
import DOMPurify from "dompurify";
import { getFormattedDate } from "../../../../utils/formatDate";
import Image from "next/image";
import Link from "next/link";

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
    <div className="mx-5 mt-5 font-inter">
      {/* modal for editing issue */}
      <EditIssueModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        issue={issue}
        projectId={id}
        isAdmin={isAdmin}
      />
      <section className="flex">
        <div className="grow2">
          {/* Main Heading */}
          <div className="font-semibold flex items-center justify-between mb-10">
            {/* Back button and title wrapper */}
            <div className="flex items-center gap-5">
              <Link href={`/project/${id}`} passHref>
                <IoArrowBack
                  size={25}
                  className="hover:cursor-pointer"
                  // onClick={() => router.push(`/project/${id}`)}
                />
              </Link>
              <div>
                <span className="text-2xl">Issue:</span>{" "}
                <span className="text-xl text-gray-600 font-normal">#6434</span>
                <span className="text-sm text-gray-500 font-normal ml-10">
                  Created on {date}
                </span>
              </div>
            </div>
            <div
              className="mr-4 shadow-md p-2 rounded-md hover:cursor-pointer hover:bg-gray-50"
              onClick={() => setIsModalOpen(true)}
            >
              <FiEdit2 size={20} />
            </div>
          </div>

          {/* Issue title */}
          <div className="flex items-center justify-between mb-5">
            <p className="text-xl font-medium">
              Fix login screen remember password option
            </p>
            <div className="mr-4 bg-[#E8DFB3] px-3 py-1 rounded-md ">
              <span className="text-gray-600 uppercase text-sm">
                {issue.status}
              </span>
            </div>
          </div>

          <div className="mb-10">
            <dl className="max-w-[400px] text-base">
              <div className="py-[7px] grid grid-cols-2 vsm:grid-cols-3 gap-4">
                <dt className="font-normal text-gray-500">Tag:</dt>
                <dd className="text-gray-900 sm:mt-0 sm:col-span-2">
                  {issue.type}
                </dd>
              </div>
              <div className="py-[7px] grid grid-cols-2 vsm:grid-cols-3 gap-4">
                <dt className="font-normal text-gray-500">Priority:</dt>
                <dd className="text-gray-500 sm:mt-0 sm:col-span-2 uppercase">
                  {issue.priority}
                </dd>
              </div>

              <div className="py-[7px] grid grid-cols-2 vsm:grid-cols-3 gap-4">
                <dt className="font-normal text-gray-500">Submitter:</dt>
                <dd className="text-gray-900 sm:col-span-2">
                  {issue.submitter.name}
                </dd>
              </div>
              <div className="py-[7px] grid grid-cols-2 vsm:grid-cols-3 gap-4">
                <dt className="font-normal text-gray-500">Assignees:</dt>
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
          {/* {tab === "comments" && <Comments projectId={id} issueId={issueId} />} */}
        </div>
        <div className="border-l-2 h-[95vh]"></div>
        {/* COMMENTS SECTION */}
        <div className="grow1">
          <Comments projectId={id} issueId={issueId} />
        </div>
      </section>
    </div>
  );
}

export default IssuePage;
