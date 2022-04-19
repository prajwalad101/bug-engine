import Person from "../components/People/Person";
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
    <section className="mt-5 mx-5">
      <p className="text-xl">Assignees</p>
      <div className="relative overflow-x-auto shadow sm:rounded-sm mt-5">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-[14px] text-gray-500 uppercase bg-gray-200 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                User
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
            </tr>
          </thead>
          {/* <tbody>
            <td>Data1</td>
            <td>Data2</td>
          </tbody> */}
          {filteredUsers.map((user) => (
            <Person user={user} key={user._id} />
          ))}
        </table>
      </div>
    </section>
  );
}

export default People;
