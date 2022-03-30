import { useSession } from "next-auth/react";
import useVerifiedUsers from "../../hooks/useVerifiedUsers";

export default function Auth({ children, isAdmin }) {
  const { data: session, status } = useSession({
    required: true,
  });
  const isUser = !!session?.user;

  // get the list of verified users to check for admin
  const { isLoading, isError, data: usersData, error } = useVerifiedUsers();

  if (isLoading) return <div>Loading userdata</div>;
  if (isError) return <div>An error occurred {error}</div>;

  const verifiedUsers = usersData?.data;

  const verified = verifiedUsers.filter(
    (user) => user.email === session?.user.email
  );

  if (verified.length !== 0) {
    isAdmin.current = verified[0].isAdmin;
  }

  if (isUser) {
    return children;
  }

  return <div>Loading session...</div>;
}
