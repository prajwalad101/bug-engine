import { useQuery } from "react-query";

const getVerifiedUsers = async () => {
  const res = await fetch("/api/verifiedUsers");

  if (!res.ok) {
    throw new Error("Cound not fetch verified users", 404);
  }
  return res.json();
};

export default function useVerifiedUsers() {
  return useQuery("verified-users", getVerifiedUsers);
}
