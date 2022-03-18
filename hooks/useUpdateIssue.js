import { useMutation, useQueryClient } from "react-query";

function useUpdateIssue(projectId, issueId) {
  const queryClient = useQueryClient();

  const updateIssue = useMutation(
    async (issue) => {
      const res = await fetch(`/api/project/${projectId}/issue/${issueId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(issue),
      });

      if (!res.ok) {
        throw Error("Error while updating issue");
      }
      return res;
    },
    {
      onSuccess: () => {
        return queryClient.invalidateQueries(["issue", projectId, issueId]);
      },
    }
  );
  return updateIssue;
}

export default useUpdateIssue;
