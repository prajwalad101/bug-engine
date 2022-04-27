import { useQuery } from "react-query";

const getIssueById = async (projectId, issueId) => {
  const res = await fetch(`/api/project/${projectId}/issue/${issueId}`);

  if (!res.ok) {
    throw Error("Error while fetching issue with that id");
  }
  return res.json();
};

export default function useIssue(projectId, issueId) {
  return useQuery(["issue", projectId, issueId], () =>
    getIssueById(projectId, issueId)
  );
}
