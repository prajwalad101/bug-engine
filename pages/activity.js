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
    <div className="m-4 ">
      <h1 className="text-2xl font-semibold mb-3">Activities</h1>
      <div className="relative overflow-x-auto shadow sm:rounded-sm mt-8">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-[14px] text-gray-500 uppercase bg-gray-200 font-hindsiliguri">
            <tr>
              <th scope="col" className="px-6 py-3">
                Issue ID
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>

              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Project
              </th>
            </tr>
          </thead>

          {activities.map((activity) => (
            <Activity activity={activity} key={activity._id} />
          ))}
        </table>
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
