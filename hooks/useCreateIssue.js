import { useMutation, useQueryClient } from "react-query";

/*
returns a mutation object (addIssue) which can then be used to call 
the mutate function
*/
function useCreateIssue(projectId) {
  const queryClient = useQueryClient();

  const addIssue = useMutation(
    (newIssue) => {
      const res = fetch(`/api/project/${projectId}/issues`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newIssue),
      });
      return res;
    },
    {
      onSuccess: () => {
        // refetch the issues for the project
        queryClient.invalidateQueries(["project", projectId]);
      },
    }
  );

  return addIssue;
}

export default useCreateIssue;
