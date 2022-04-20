export default function UpdateActivity({ activity, id, relativeDate }) {
  const updatedInfo = activity.updatedInfo[0];

  return (
    <div>
      {updatedInfo.changed === "assignees" && (
        <div>
          <p>
            {updatedInfo.oldItem > updatedInfo.newItem
              ? "Added new assignees"
              : "Remove assignees"}{" "}
            <span className="text-gray-500 text-base pl-1">{relativeDate}</span>
          </p>
        </div>
      )}
      {updatedInfo.changed === "status" && (
        <div>
          <p>
            Changed status from {updatedInfo.oldItem} to {updatedInfo.newItem}{" "}
            <span className="text-gray-500 text-base pl-1">{relativeDate}</span>
          </p>
        </div>
      )}
      {updatedInfo.changed === "priority" && (
        <div>
          <p>
            Changed priority from {updatedInfo.oldItem} to {updatedInfo.newItem}{" "}
            <span className="text-gray-500 text-base pl-1">{relativeDate}</span>
          </p>
        </div>
      )}
    </div>
  );
}
