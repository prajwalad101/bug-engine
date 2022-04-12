import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export default function Pagination({ pageNum, setPageNum }) {
  const increasePage = () => {
    setPageNum((pageNum) => pageNum + 1);
  };

  const decreasePage = () => {
    if (pageNum <= 0) {
      return;
    }
    setPageNum((pageNum) => pageNum - 1);
  };

  return (
    <div className="flex flex-col items-center my-5 font-ibm">
      <span className="text-sm text-gray-700 ">
        Showing <span className="font-semibold text-gray-900 ">1</span> to{" "}
        <span className="font-semibold text-gray-900 ">10</span> of{" "}
        <span className="font-semibold text-gray-900 ">100</span> Entries
      </span>

      <div className="inline-flex mt-2 xs:mt-0">
        <button
          className="flex items-center gap-3 py-2 px-4 text-sm font-medium text-white bg-blue-700 rounded-l hover:bg-blue-900"
          onClick={decreasePage}
        >
          <BsArrowLeft />
          <span>Prev</span>
        </button>
        <button
          className="flex items-center gap-3 py-2 px-4 text-sm font-medium text-white bg-blue-700 rounded-r border-0 border-l border-gray-300 hover:bg-blue-800"
          onClick={increasePage}
        >
          <span>Next</span>
          <BsArrowRight />
        </button>
      </div>
    </div>
  );
}
