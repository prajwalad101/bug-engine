import { getFormattedDate } from "./formatDate";

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

export const getJoinedDate = (user, verifiedUsers) => {
  const verifiedUser = verifiedUsers.filter(
    (vUser) => vUser.email === user.email
  );

  if (verifiedUser[0]) {
    const date = getFormattedDate(verifiedUser[0].createdAt);
    return date;
  }
};
