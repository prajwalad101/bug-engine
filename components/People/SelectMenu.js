const roles = [
  { name: "developer", id: 1 },
  { name: "submitter", id: 2 },
];

export default function SelectMenu({ selectedRole, setSelectedRole, setOpen }) {
  const buttonHandler = (role) => {
    setSelectedRole(role);
    setOpen(true);
  };

  return (
    <div className="min-w-[130px] col-span-6 sm:col-span-3">
      <select
        id="country"
        name="country"
        autoComplete="country-name"
        className="capitalize mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option selected onClick={() => buttonHandler(selectedRole)}>
          {selectedRole}
        </option>
        {roles.map((role) => {
          if (role.name !== selectedRole)
            return (
              <option key={role.id} onClick={() => buttonHandler(role.name)}>
                {role.name}
              </option>
            );
        })}
      </select>
    </div>
  );
}
