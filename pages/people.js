import Users from "../components/People/Users";
import useUsers from "../hooks/useUsers";
import useVerifiedUsers from "../hooks/useVerifiedUsers";

import { getFilteredUsers } from "../utils/peopleFunc";

function People() {
  const {
    isLoading: isUsersLoading,
    isError: isUsersError,
    data: usersData,
    error: usersError,
  } = useUsers();

  const {
    isLoading: isVerifiedUsersLoading,
    isError: isVerifiedUsersError,
    data: verifiedUsersData,
    error: verifiedUsersError,
  } = useVerifiedUsers();

  if (isUsersLoading || isVerifiedUsersLoading) {
    return <div>Loading users...</div>;
  }

  if (isUsersError || isVerifiedUsersError) {
    return (
      <div>
        An error occurred: {usersError && usersError}{" "}
        {verifiedUsersError && verifiedUsersError}
      </div>
    );
  }

  const users = usersData?.data; // all logged in users
  const verifiedUsers = verifiedUsersData?.data; // users entered into the verified collection

  // except admin users
  const filteredUsers = getFilteredUsers(users, verifiedUsers);

  return (
    <div>
      <p className="text-xl mb-5">Users</p>
      <Users filteredUsers={filteredUsers} />
    </div>
  );
}

export default People;
