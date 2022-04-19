import { classNames } from "../../utils/tailwindFunc";
import Person from "./Person";

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
