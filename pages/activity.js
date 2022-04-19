import useActivities from "../hooks/useActivities";

function Activity() {
  const { isLoading, isError, data, error } = useActivities();

  const activities = data?.data;

  if (isLoading) {
    return <div>Loading activities</div>;
  }

  if (isError) {
    return <div>Some error occurred</div>;
  }

  console.log(activities[0]);
  return (
    <div>
      <h1 className="text-2xl">Activities</h1>
      {activities.map((activity) => (
        <div key={activity._id}>
          {activity.action === "create" && <p>Created new issue</p>}
          {activity.action === "comment" && <p>Added new comment</p>}
          {activity.action === "update" && <p>Updated issue</p>}
          {activity.action === "delete" && <p>Deleted issue</p>}
        </div>
      ))}
    </div>
  );
}

export default Activity;
