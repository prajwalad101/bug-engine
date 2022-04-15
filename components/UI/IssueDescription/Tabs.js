const Tabs = ({ tab, setTab, tabItems }) => {
  return (
    <ul className="font-lato mt-5 flex flex-wrap text-base font-medium text-center text-gray-500 border-b border-gray-200 ">
      {tabItems.map((item) => (
        <li className="mr-2" key={item.id} onClick={() => setTab(item.name)}>
          <a
            className={`inline-block px-4 py-3 hover:bg-gray-100 rounded-t-lg cursor-pointer capitalize ${
              item.name === tab ? "text-blue-600 bg-gray-100" : "text-gray-500"
            }`}
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};
export default Tabs;
