const Tabs = ({ tab, setTab }) => {
  return (
    <ul className="font-lato mt-5 flex flex-wrap text-base font-medium text-center text-gray-500 border-b border-gray-200 ">
      <li className="mr-2" onClick={() => setTab("Description")}>
        <a
          className={`inline-block px-4 py-3 hover:bg-gray-100 rounded-t-lg cursor-pointer capitalize ${
            "Description" === tab
              ? "text-blue-600 bg-gray-100"
              : "text-gray-500"
          }`}
        >
          Description
        </a>
      </li>
      <li className="mr-2 tablet:hidden" onClick={() => setTab("Comments")}>
        <a
          className={`inline-block px-4 py-3 hover:bg-gray-100 rounded-t-lg cursor-pointer capitalize ${
            "Comments" === tab ? "text-blue-600 bg-gray-100" : "text-gray-500"
          }`}
        >
          Comments
        </a>
      </li>
    </ul>
  );
};
export default Tabs;
