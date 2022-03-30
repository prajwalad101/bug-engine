import { useState, useEffect } from "react";
import Dropdown from "../UI/Dropdown";
import SetRoleModal from "./SetRoleModal";

function Person({ user }) {
  const [selectedRole, setSelectedRole] = useState();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    user.role ? setSelectedRole(user.role) : setSelectedRole("not-assigned");
  }, [user.role, setSelectedRole]);

  return (
    <div className="flex items-center gap-5">
      <p>{user.name}</p>
      <Dropdown
        selectedRole={selectedRole}
        setSelectedRole={setSelectedRole}
        setOpen={setOpen}
      />
      <SetRoleModal
        open={open}
        setOpen={setOpen}
        selectedRole={selectedRole}
        user={user}
      />
    </div>
  );
}

export default Person;
