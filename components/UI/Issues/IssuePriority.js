function IssuePriority({ priority }) {
  let priorityClass = "";
  priority = priority.toLowerCase();

  if (priority === "high") {
    priorityClass = "text-red-500 uppercase";
  } else if (priority === "medium") {
    priorityClass = "text-blue-400 uppercase";
  } else if (priority === "low") {
    priorityClass = "text-green-500 uppercase";
  } else {
    priorityClass = "text-gray-500";
  }

  return (
    <h3
      className={`hidden lgphone:flex basis-24 shrink-0 mt-1 font-poppins font-medium ${priorityClass}`}
    >
      {priority}
    </h3>
  );
}

export default IssuePriority;
