import { useRouter } from "next/router";
import { useState } from "react";

import { IoIosAddCircleOutline } from "react-icons/io";
import { getProjectById } from "../../utils/projectFunc";

import Issue from "./Issue";

function Issues({ project, setIsModalOpen }) {
  const issues = project.issues;

  const noStatusIssues = issues.filter((el) => el.status === "no status");
  const completedIssues = issues.filter((el) => el.status === "completed");
  const inProgressIssues = issues.filter((el) => el.status === "in progress");

  return (
    <div className="mt-6">
      <hr className="h-0 border-0 border-t-2 border-blue-300" />
      <div className="flex overflow-x-auto mb-10">
        {/* No status issues */}
        <div className="mt-2 shrink-0 w-[360px] pr-7 mb-10">
          <p className="mb-5">No Status ({noStatusIssues.length})</p>
          {noStatusIssues.map((issue) => {
            return <Issue issue={issue} key={issue.id} />;
          })}
          {/* Create new issue */}
          <div
            className="flex items-center gap-3 w-fit mt-5 py-3 px-3 text-[#040C24] hover:bg-slate-100 hover:cursor-pointer rounded-md"
            onClick={() => setIsModalOpen(true)}
          >
            <IoIosAddCircleOutline size={22} />
            <p>Create new issue</p>
          </div>
        </div>
        {/* In progress issues */}
        <div className="mt-2 shrink-0 w-[360px] pr-7 mb-10">
          <p className="mb-5">In Progress ({inProgressIssues.length})</p>
          {inProgressIssues.map((issue) => {
            return <Issue issue={issue} key={issue.id} />;
          })}
        </div>
        {/* Completed issues */}
        <div className="mt-2 shrink-0 w-[360px] pr-7">
          <p className="mb-5">Completed ({inProgressIssues.length})</p>
          {completedIssues.map((issue) => {
            return <Issue issue={issue} key={issue.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Issues;
