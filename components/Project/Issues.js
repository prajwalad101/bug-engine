import { IoIosAddCircleOutline } from "react-icons/io";
import CreateIssueButton from "../UI/Issues/CreateIssueButton";

import Issue from "./Issue";

function Issues({ project, setIsModalOpen }) {
  const issues = project.issues;

  const noStatusIssues = issues.filter((el) => el.status === "no status");
  const completedIssues = issues.filter((el) => el.status === "completed");
  const inProgressIssues = issues.filter((el) => el.status === "in progress");

  return (
    <div className="mt-6">
      <hr className="hr-line border-blue-300" />
      {issues.length !== 0 ? (
        <div className="flex overflow-x-auto mb-10">
          {/* No status issues column */}
          <div className="mt-2 shrink-0 w-[360px] pr-7 mb-10">
            {/* Issue Heading */}
            <div className="flex items-center mb-5 ml-1 gap-5">
              <p className="underline underline-offset-4">No Status</p>
              <p className="text-gray-500">{noStatusIssues.length}</p>
            </div>
            {noStatusIssues.map((issue) => {
              return <Issue issue={issue} key={issue._id} />;
            })}
            <CreateIssueButton />
            {/* In progress issues column */}
          </div>
          <div className="mt-2 shrink-0 w-[360px] pr-7 mb-10">
            <div className="flex items-center mb-5 ml-1 gap-5">
              <p className="underline underline-offset-4">In Progress</p>
              <p className="text-gray-500">{inProgressIssues.length}</p>
            </div>
            {inProgressIssues.map((issue) => {
              return <Issue issue={issue} key={issue._id} />;
            })}
          </div>
          {/* Completed issues column */}
          <div className="mt-2 shrink-0 w-[360px] pr-7">
            <div className="flex items-center mb-5 ml-1 gap-5">
              <p className="underline underline-offset-4">Completed</p>
              <p className="text-gray-500">{completedIssues.length}</p>
            </div>
            {completedIssues.map((issue) => {
              return <Issue issue={issue} key={issue._id} />;
            })}
          </div>
        </div>
      ) : (
        <div className="mt-7 flex flex-col items-center">
          <div className="text-xl text-blue-300">No Issues Found</div>
          <div
            className="flex items-center gap-3 w-fit mt-5 py-3 px-3 text-[#040C24] bg-slate-100 hover:bg-slate-200 hover:cursor-pointer rounded-md"
            onClick={() => setIsModalOpen(true)}
          >
            <IoIosAddCircleOutline size={22} />
            <p>Create new issue</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Issues;
