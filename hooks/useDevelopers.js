import { useQuery } from "react-query";

const getDevelopers = async () => {
  const res = await fetch("/api/developers");

  if (!res.ok) {
    throw new Error("Unable to fetch developers");
  }
  return res.json();
};

export function useDevelopers() {
  return useQuery("developers", getDevelopers);
}
