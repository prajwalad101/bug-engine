import { useState } from "react";

import PeoplePagination from "../components/People/PeoplePagination";
import useActivities from "../hooks/useActivities";

function Activity() {
  const [page, setPage] = useState(1);
  const { isLoading, isError, data, error } = useActivities(page, 10);

  const activities = data?.data;

  const total = data?.total;
  const resultCount = data?.resultCount;

  if (isLoading) {
    return <div>Loading activities</div>;
  }

  if (isError) {
    return <div>Some error occurred</div>;
  }

  return (
    <div className="m-4">
      <h1 className="text-2xl font-semibold mb-3">Activities</h1>

      {activities.map((activity) => (
        <div key={activity._id}>
          {activity.action === "create" && <p>Created new issue</p>}
          {activity.action === "comment" && <p>Added new comment</p>}
          {activity.action === "update" && <p>Updated issue</p>}
          {activity.action === "delete" && <p>Deleted issue</p>}
        </div>
      ))}
      <PeoplePagination
        page={page}
        setPage={setPage}
        total={total}
        resultCount={resultCount}
        limit={10}
      />
    </div>
  );
}

export default Activity;
