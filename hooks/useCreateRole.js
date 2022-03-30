import { useMutation, useQueryClient } from "react-query";

function useCreateRole() {
  const queryClient = useQueryClient();

  const addRole = useMutation(
    async ({ userId, assignedRole }) => {
      const res = await fetch(`/api/user/${userId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(assignedRole),
      });
      if (!res.ok) {
        throw Error("Error while updating role");
      }
      return res;
    },
    {
      onSuccess: async () => {
        queryClient.invalidateQueries(["users"]);
      },
    }
  );

  return addRole;
}

export default useCreateRole;
