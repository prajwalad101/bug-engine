import { useQuery } from "react-query";

const getAssignees = async () => {
  const res = await fetch("/api/users?user=developer");

  if (!res.ok) {
    return Error("Could not fetch assignees", 404);
  }

  return res.json();
};

function useAssignees() {
  return useQuery("assignees", getAssignees);
}

export default useAssignees;
