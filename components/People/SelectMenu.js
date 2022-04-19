export default function SelectMenu({ selectedRole, setSelectedRole, setOpen }) {
  const buttonHandler = (role) => {
    setSelectedRole(role);
    setOpen(true);
  };

  return (
    <div>
      <select
        className="form-select block w-1/2 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray focus:bg-white focus:border-blue-600 focus:outline-none"
        aria-label="Default select example"
      >
        <option onClick={() => buttonHandler("developer")}>Developer</option>
        <option onClick={() => buttonHandler("submitter")}>Submitter</option>
      </select>
    </div>
  );
}
