import { useQuery } from "react-query";

const getDeveloperById = async (developerId) => {
  const res = await fetch(`/api/developer/${developerId}`);

  if (!res.ok) {
    throw new Error("No developer with that id found");
  }
  return res.json();
};

export default function useDeveloper(developerId) {
  return useQuery(
    ["developers", developerId],
    () => getDeveloperById(developerId),
    {
      enabled: !!developerId,
    }
  );
}
