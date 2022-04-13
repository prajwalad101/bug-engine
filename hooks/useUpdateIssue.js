import { useMutation, useQueryClient } from "react-query";
import { useSession } from "next-auth/react";

function useUpdateIssue(projectId, issueId) {
  const { data: session, status } = useSession();

  const queryClient = useQueryClient();

  const updateIssue = useMutation(
    async ({ issue, issueId }) => {
      const res = await fetch(`/api/project/${projectId}/issue/${issueId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ submitter: { ...session.user }, ...issue }),
      });

      if (!res.ok) {
        throw Error("Error while updating issue");
      }
      return res;
    },
    {
      onSuccess: () => {
        return queryClient.invalidateQueries(["issues", projectId]);
      },
    }
  );
  return updateIssue;
}

export default useUpdateIssue;
