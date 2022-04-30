import Head from "next/head";
import LoadingSpinner from "../components/LoadingSpinner";
import Person from "../components/People/Person";
import Users from "../components/People/Users";
import useUsers from "../hooks/useUsers";
import useVerifiedUsers from "../hooks/useVerifiedUsers";

import { getFilteredUsers, getJoinedDate } from "../utils/peopleFunc";

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
    return <LoadingSpinner />;
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
    <section className="mt-5 mx-5">
      <Head>
        <title>People | BugEngine</title>
      </Head>
      <h1 className="text-2xl font-semibold mb-3">Assignees</h1>
      <div className="relative overflow-x-auto shadow sm:rounded-sm mt-5 ">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-[14px] text-gray-500 uppercase bg-gray-200 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                User
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Joined On
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
            </tr>
          </thead>
          {filteredUsers.map((user) => (
            <Person user={user} key={user._id} verifiedUsers={verifiedUsers} />
          ))}
        </table>
      </div>
    </section>
  );
}

export default People;
