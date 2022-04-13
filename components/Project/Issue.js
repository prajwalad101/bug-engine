import formatDate from "../../utils/formatDate";
import IssuePriority from "../UI/Issues/IssuePriority";

import { useRouter } from "next/router";
import Image from "next/image";

export default function UpdatedIssue({ issue, pId }) {
  const router = useRouter();
  const date = new Date(issue.createdAt).toLocaleDateString("en-gb", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "utc",
  });

  const relativeDate = formatDate(new Date(issue.createdAt));

  const showIssueInfo = () => {
    router.push(`/project/${pId}/issue/${issue._id}`);
  };

  return (
    <tbody>
      <tr
        className="h-16 bg-white border-b hover:bg-gray-50 hover:cursor-pointer"
        onClick={showIssueInfo}
      >
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
        >
          {issue.priority}
        </th>
        <td className="px-6 py-4">{issue.name}</td>
        <td className="px-6 py-4">{issue.type}</td>
        <td className="px-6 py-4">
          {relativeDate} by {issue.submitter.name}
        </td>
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
            <div>NA</div>
          )}
        </td>
      </tr>
    </tbody>
  );
}
