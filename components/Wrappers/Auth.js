import { useEffect } from "react";

import { useSession } from "next-auth/react";
import useVerifiedUsers from "../../hooks/useVerifiedUsers";

export default function Auth({ children, admin }) {
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

  if (verified && verified.length !== 0) {
    admin.current = verified[0].isAdmin;
  }

  // useEffect(() => {
  //   if (!verified) {
  //     return;
  //   }
  //   if (verified.length !== 0) {
  //     admin.current = verified[0].isAdmin;
  //     setIsAdmin(verified[0].isAdmin);
  //   }
  // }, [verified, admin]);

  if (isLoading) return <div>Loading userdata</div>;
  if (isError) return <div>An error occurred {error}</div>;

  if (isUser && verified) {
    return children;
  }

  return <div>Loading session...</div>;
}
