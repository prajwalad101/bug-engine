import formatDate from "../../utils/formatDate";
import { getIssueId } from "../../utils/issuesFunc";
import ActivityTitle from "./ActivityTitle";

export default function Activity({ activity }) {
  const id = getIssueId(activity.issue[0]._id);
  const relativeDate = formatDate(new Date(activity.createdAt));

  return (
    <tbody className="font-hindsiliguri">
      <tr className=" bg-white border-b-[1.7px] border-gray-200 hover:bg-gray-50">
        <th
          scope="row"
          className="px-6 py-3 text-base font-medium uppercase font-worksans whitespace-nowrap"
        >
          # {id}
        </th>
        <td className="px-6 py-3 whitespace-nowrap">
          <ActivityTitle activity={activity} />
          <p className="mt-1 text-base">
            #{activity.issue[0].type} / {relativeDate}
          </p>
        </td>
        <td className="px-6 py-3 text-base whitespace-nowrap">Jan 21, 2022</td>
        <td className="px-6 py-3 text-base whitespace-nowrap">
          {activity.projectName}
        </td>
      </tr>
    </tbody>
  );
}
