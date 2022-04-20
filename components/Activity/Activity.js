import formatDate from "../../utils/formatDate";
import UpdateActivity from "./UpdateActivity";

export default function Activity({ activity }) {
  const idArr = activity.issue[0]._id.split("");

  const idNum = idArr.filter((char) => !isNaN(char)).join("");
  const id1 = idNum.slice(0, 2);
  const id2 = idNum.slice(-3);

  const id = id1 + id2;

  const relativeDate = formatDate(new Date(activity.createdAt));

  return (
    <div className="px-3 py-3 border-b-2 hover:bg-gray-50 text-lg">
      {activity.action === "comment" && (
        <div>
          <p>
            Add new comment{" "}
            <span className="text-gray-500 text-base pl-1">{relativeDate}</span>{" "}
          </p>
        </div>
      )}
      {activity.action === "create" && (
        <div>
          <p>
            Created a new issue{" "}
            <span className="text-gray-500 text-base pl-1">{relativeDate}</span>{" "}
          </p>
        </div>
      )}
      {activity.action === "update" && (
        <UpdateActivity
          activity={activity}
          id={id}
          relativeDate={relativeDate}
        />
      )}
      {activity.action === "delete" && (
        <div>
          <p>
            Deleted an issue{" "}
            <span className="text-gray-500 text-base pl-1">{relativeDate}</span>
          </p>
        </div>
      )}
      <p className="text-base text-gray-700 mt-1">
        On issue #{id} / {activity.projectName}
      </p>
    </div>
  );
}
