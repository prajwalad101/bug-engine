import { useQuery } from "react-query";

const getAllActivities = async () => {
  const res = await fetch("/api/activities");

  if (!res.ok) {
    throw new Error("Unable to fetch activities");
  }

  return res.json();
};

export default function useActivities() {
  return useQuery("activities", getAllActivities);
}
