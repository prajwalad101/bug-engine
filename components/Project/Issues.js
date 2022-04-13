import { useSession } from "next-auth/react";
import { formatIssues, formatPagination } from "../../utils/issuesFunc.js";
import NoIssues from "../UI/Issues/NoIssues";

import UpdatedIssue from "./Issue.js";

function Issues({ project, issues, isAdmin }) {
  const { data: session } = useSession();

  if (!isAdmin) {
    // only show issues assigned for that user
    issues = formatIssues(issues, session);
  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
      <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-[14px] text-gray-500 uppercase bg-gray-100 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Priority
            </th>
            <th scope="col" className="px-6 py-3">
              Issue
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Assigned to
            </th>
          </tr>
        </thead>
        {issues.length !== 0 ? (
          issues.map((item) => (
            <UpdatedIssue key={item._id} issue={item} pId={project._id} />
          ))
        ) : (
          <NoIssues />
        )}
      </table>
    </div>
  );
}

export default Issues;
