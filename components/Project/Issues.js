import NoIssues from "../UI/Issues/NoIssues";
import Issue from "./Issue.js";

function Issues({ project, issues }) {
  return (
    <div className="relative overflow-x-auto shadow sm:rounded-sm mt-8">
      <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-[14px] text-gray-500 uppercase bg-gray-200 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Priority
            </th>
            <th scope="col" className="px-6 py-3">
              Issue
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Assignees
            </th>
          </tr>
        </thead>
        {issues.length !== 0 ? (
          issues.map((item) => (
            <Issue key={item._id} issue={item} pId={project._id} />
          ))
        ) : (
          <NoIssues />
        )}
      </table>
    </div>
  );
}

export default Issues;
