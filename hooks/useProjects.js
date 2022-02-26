import { useQuery } from "react-query";

const getProjects = async () => {
  const res = await fetch("/api/projects");

  if (!res.ok) {
    throw new Error("Unable to fetch data");
  }
  return res.json();
};

export default function useProjects() {
  return useQuery("projects", getProjects);
}
