import { useQuery } from "react-query";

const getProjectById = async (projectId) => {
  const res = await fetch(`/api/project/${projectId}`);

  if (!res.ok) {
    throw Error("Error while fetching the post with that id");
  }
  return res.json();
};

export default function useProject(projectId) {
  return useQuery(["project", projectId], () => getProjectById(projectId), {
    enabled: !!projectId,
  });
}
