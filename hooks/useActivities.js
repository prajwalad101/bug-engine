import { useQuery } from "react-query";

const getAllActivities = async (page, limit) => {
  const res = await fetch(`/api/activities?page=${page}&limit=${limit}`);

  if (!res.ok) {
    throw new Error("Unable to fetch activities");
  }

  return res.json();
};

export default function useActivities(page, limit) {
  return useQuery(["activities", page], () => getAllActivities(page, limit), {
    keepPreviousData: true,
  });
}
