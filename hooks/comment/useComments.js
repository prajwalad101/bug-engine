import { useQuery } from "react-query";

const getComments = async (projectId, issueId) => {
  const res = await fetch(
    `/api/comments/?projectId=${projectId}&issueId=${issueId}`
  );

  if (!res.ok) {
    throw new Error("Cound not get comments", 404);
  }

  return res.json();
};

function useComments(projectId, issueId) {
  return useQuery("comments", () => getComments(projectId, issueId));
}

export default useComments;
