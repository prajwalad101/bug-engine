import formatDate, { getFormattedDate } from "../../utils/formatDate";
import { classNames } from "../../utils/tailwindFunc";

import { useRouter } from "next/router";
import Image from "next/image";

export default function Issue({ issue, pId }) {
  const router = useRouter();

  const relativeDate = formatDate(new Date(issue.createdAt));

  const date = getFormattedDate(issue.createdAt);

  const showIssueInfo = () => {
    router.push(`/project/${pId}/issue/${issue._id}`);
  };

  return (
    <tbody>
      <tr
        className="h-16 bg-white border-b-[1.7px] border-gray-200 hover:bg-gray-50 hover:cursor-pointer"
        onClick={showIssueInfo}
      >
        <th
          scope="row"
          className={classNames(
            "px-6 py-4 text-[15px] font-medium uppercase",
            issue.priority === "High" && "text-red-700",
            issue.priority === "Medium" && "text-blue-500",
            issue.priority === "Low" && "text-gray-400"
          )}
        >
          {issue.priority}
        </th>
        <td className="px-6 py-4 whitespace-nowrap">
          <div>
            <p className="font-medium text-lg text-black">{issue.name}</p>
            <p className="mt-1 text-base">
              #{issue.type} / {relativeDate} by {issue.submitter.name}
            </p>
          </div>
        </td>
        {/* <td className="px-6 py-4">{issue.type}</td> */}
        <td className="px-6 py-4 text-base whitespace-nowrap">{date}</td>
        <td className="px-6 py-4">
          {issue.assignees.length !== 0 ? (
            issue.assignees.map((assignee) => (
              <div key={assignee._id}>
                <Image
                  // key={assignee._id}
                  alt="assignee"
                  src={assignee.image}
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </div>
            ))
          ) : (
            <div className="text-base">NA</div>
          )}
        </td>
      </tr>
    </tbody>
  );
}
