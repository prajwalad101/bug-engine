import { useState, useEffect } from "react";
import Dropdown from "../UI/Dropdown";
import SetRoleModal from "./SetRoleModal";

import { AiOutlineDown } from "react-icons/ai";
import SelectMenu from "./SelectMenu";

function Person({ user }) {
  const [selectedRole, setSelectedRole] = useState();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    user.role ? setSelectedRole(user.role) : setSelectedRole("not-assigned");
  }, [user.role, setSelectedRole]);

  return (
    <tbody>
      <SetRoleModal
        open={open}
        setOpen={setOpen}
        selectedRole={selectedRole}
        user={user}
      />
      <tr className="bg-white border-b-[1.7px] border-gray-200 hover:bg-gray-50 text-base">
        <th scope="row" className="px-6 py-4 font-medium">
          {user.name}
        </th>
        <td className="px-6 py-4">{user.email}</td>
        <td className="px-6 py-4 ">
          <SelectMenu
            selectedRole={selectedRole}
            setSelectedRole={setSelectedRole}
            setOpen={setOpen}
          />
        </td>
      </tr>
    </tbody>
  );

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
