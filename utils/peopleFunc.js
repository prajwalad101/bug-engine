export const getFilteredUsers = (users, verifiedUsers) => {
  let adminUsers = verifiedUsers.filter((user) => user.isAdmin === true);
  adminUsers = adminUsers.map((user) => user.email);

  // console.log("Admin users", adminUsers);
  // console.log("All users", users);

  const filteredUsers = users.filter(
    (user) => !adminUsers.includes(user.email)
  );

  return filteredUsers;
};
