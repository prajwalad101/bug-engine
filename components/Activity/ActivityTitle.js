import UpdateActivity from "./UpdateActivity";

export default function ActivityTitle({ activity }) {
  return (
    <div className="font-medium text-lg text-gray-800">
      {activity.action === "comment" && <p>Add new comment </p>}
      {activity.action === "create" && <p>Created a new issue </p>}
      {activity.action === "update" && <UpdateActivity activity={activity} />}
      {activity.action === "delete" && <p>Deleted an issue </p>}
    </div>
  );
}
