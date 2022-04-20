import { useState } from "react";
import Activity from "../components/Activity/Activity";

import PeoplePagination from "../components/People/PeoplePagination";
import useActivities from "../hooks/useActivities";

function ActivityPage() {
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

      <div>
        {activities.map((activity) => (
          <div key={activity._id}>
            <Activity activity={activity} />
          </div>
        ))}
      </div>
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

export default ActivityPage;
