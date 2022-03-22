import { useMutation, useQueryClient } from "react-query";

function useDeleteIssue(projectId, issueId) {
  const queryClient = useQueryClient();

  // return a mutation function
  const deleteIssue = useMutation(
    async () => {
      const res = await fetch(`/api/project/${projectId}/issue/${issueId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        throw Error("Error while deleting issue");
      }
      return res;
    },
    {
      onSuccess: () => {
        // refetch the issues
        return queryClient.invalidateQueries(["project", projectId]);
      },
    }
  );

  return deleteIssue;
}

export default useDeleteIssue;