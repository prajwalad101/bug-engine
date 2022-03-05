import { useMutation, useQueryClient } from "react-query";

function useCreateProject() {
  const queryClient = useQueryClient();

  const addProject = useMutation(
    (newProject) => {
      const res = fetch(`/api/projects`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProject),
      });
      return res;
    },
    {
      onSuccess: async () => {
        queryClient.invalidateQueries(["projects"]);
      },
    }
  );

  return addProject;
}

export default useCreateProject;
