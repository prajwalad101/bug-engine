export const getFilteredUsers = (users, verifiedUsers) => {
  // get only the admin users from the verified users
  let adminUsers = verifiedUsers.filter((user) => user.isAdmin === true);
  adminUsers = adminUsers.map((user) => user.email);

  // filter out the admin users from the logged in users
  const filteredUsers = users.filter(
    (user) => !adminUsers.includes(user.email)
  );

  return filteredUsers;
};
