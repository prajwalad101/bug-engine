import { useMutation, useQueryClient } from "react-query";

function useCreateComment(projectId, issueId) {
  const queryClient = useQueryClient();

  const addComment = useMutation(
    async (newComment) => {
      const res = await fetch(
        `/api/comments/?projectId=${projectId}&issueId=${issueId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newComment),
        }
      );

      if (!res.ok) {
        throw Error("Error while adding comment");
      }
      return res;
    },
    {
      onSuccess: async () => {
        queryClient.invalidateQueries(["comments"]);
      },
    }
  );
  return addComment;
}

export default useCreateComment;
