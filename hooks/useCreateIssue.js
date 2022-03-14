import { useMutation, useQueryClient } from "react-query";

/*
returns a mutation object (addIssue) which can then be used to call 
the mutate function
*/
function useCreateIssue(projectId) {
  const queryClient = useQueryClient();

  const addIssue = useMutation(
    async (newIssue) => {
      const res = await fetch(`/api/project/${projectId}/issues`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newIssue),
      });

      if (!res.ok) {
        throw Error("Error while adding issue");
      }
      return res;
    },
    {
      onSuccess: () => {
        // refetch the issues for the project
        return queryClient.invalidateQueries(["project", projectId]);
      },
    }
  );
  return addIssue;
}

export default useCreateIssue;
