import { useQuery } from "react-query";

const getDeveloperById = async (userId) => {
  const res = await fetch(`/api/user/${userId}`);

  if (!res.ok) {
    throw new Error("No developer with that id found");
  }
  return res.json();
};

export default function useDeveloper(userId) {
  return useQuery(["developers", userId], () => getDeveloperById(userId), {
    enabled: !!userId,
  });
}
