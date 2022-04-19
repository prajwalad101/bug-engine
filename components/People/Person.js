import { useState, useEffect } from "react";
import SetRoleModal from "./SetRoleModal";

import SelectMenu from "./SelectMenu";
import Image from "next/image";
import { getJoinedDate } from "../../utils/peopleFunc";

function Person({ user, verifiedUsers }) {
  const [selectedRole, setSelectedRole] = useState();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    user.role ? setSelectedRole(user.role) : setSelectedRole("not-assigned");
  }, [user.role, setSelectedRole]);

  const joinedDate = getJoinedDate(user, verifiedUsers);

  return (
    <tbody>
      <SetRoleModal
        open={open}
        setOpen={setOpen}
        selectedRole={selectedRole}
        user={user}
      />
      <tr className="bg-white border-b-[1.7px] border-gray-200 hover:bg-gray-50 text-base">
        <th
          scope="row"
          className=" text-gray-900 text-semibold   px-6 py-4 font-medium"
        >
          <div className="flex items-center gap-3 ">
            <Image
              alt="user-profile"
              src={user.image}
              width={30}
              height={30}
              className="rounded-full"
            />
            {user.name}
          </div>
        </th>
        <td className="px-6 py-4">{user.email}</td>
        <td className="px-6 py-4">{joinedDate}</td>
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
}

export default Person;
