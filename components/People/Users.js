import { useState } from "react";

import Dropdown from "../UI/Dropdown";
import Person from "./Person";
import SetRoleModal from "./SetRoleModal";
// import SetRoleModal from "./SetRoleModal";

function Users({ filteredUsers }) {
  return (
    <div>
      {filteredUsers.map((user) => (
        <div key={user._id}>
          <Person user={user} />
        </div>
      ))}
    </div>
  );
}

export default Users;
