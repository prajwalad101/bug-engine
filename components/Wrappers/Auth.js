import { useEffect } from "react";

import { useSession } from "next-auth/react";
import useVerifiedUsers from "../../hooks/useVerifiedUsers";
import LoadingSpinner from "../LoadingSpinner";

export default function Auth({ children, admin }) {
  const { data: session } = useSession({
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

  if (isLoading) return <div>Loading userdata</div>;
  if (isError) return <div>An error occurred {error}</div>;

  if (isUser && verified) {
    return children;
  }

  return (
    <div>
      <LoadingSpinner />
    </div>
  );
}
