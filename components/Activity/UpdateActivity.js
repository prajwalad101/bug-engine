export default function UpdateActivity({ activity }) {
  const updatedInfo = activity.updatedInfo[0];

  return (
    <div>
      {updatedInfo.changed === "assignees" && (
        <div>
          <p>
            {updatedInfo.oldItem > updatedInfo.newItem
              ? "Added new assignees"
              : "Remove assignees"}{" "}
          </p>
        </div>
      )}
      {updatedInfo.changed === "status" && (
        <div>
          <p>
            Changed status from {updatedInfo.oldItem} to {updatedInfo.newItem}{" "}
          </p>
        </div>
      )}
      {updatedInfo.changed === "priority" && (
        <div>
          <p>
            Changed priority from {updatedInfo.oldItem} to {updatedInfo.newItem}{" "}
          </p>
        </div>
      )}
    </div>
  );
}
