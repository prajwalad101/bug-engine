import { useQuery } from "react-query";

const getUsers = async () => {
  const res = await fetch("/api/users");

  if (!res.ok) {
    return Error("Could not fetch users", 404);
  }

  return res.json();
};

function useUsers() {
  return useQuery("assignees", getUsers);
}

export default useUsers;
