import { useEffect } from "react";

import { useSession } from "next-auth/react";
import useVerifiedUsers from "../../hooks/useVerifiedUsers";

export default function Auth({ children, setIsAdmin }) {
  const { data: session, status } = useSession({
    required: true,
  });
  const isUser = !!session?.user;

  // get the list of verified users to check for admin
  const { isLoading, isError, data: usersData, error } = useVerifiedUsers();

  const verifiedUsers = usersData?.data;

  const verified = verifiedUsers?.filter(
    (user) => user.email === session?.user.email
  );

  useEffect(() => {
    if (!verified) {
      return;
    }
    if (verified.length !== 0) {
      setIsAdmin(verified[0].isAdmin);
    }
  }, [verified, setIsAdmin]);

  if (isLoading) return <div>Loading userdata</div>;
  if (isError) return <div>An error occurred {error}</div>;

  if (isUser) {
    return children;
  }

  return <div>Loading session...</div>;
}
