export default function Pagination({
  pageNum,
  setPageNum,
  currentIssues,
  totalIssues,
}) {
  const increasePage = () => {
    setPageNum((pageNum) => pageNum + 1);
  };

  const decreasePage = () => {
    if (pageNum <= 1) {
      return;
    }
    setPageNum((pageNum) => pageNum - 1);
  };

  return (
    <div className="flex justify-between items-center my-5">
      <p className="text-sm text-gray-700 hidden vsm:block">
        Showing{" "}
        {currentIssues.length !== 0 ? (
          <span>
            <span className="font-semibold">{(pageNum - 1) * 10 + 1}</span> to{" "}
            <span className="font-semibold">{currentIssues.length}</span>
          </span>
        ) : (
          <span>0</span>
        )}{" "}
        of <span className="font-semibold">{totalIssues}</span> results
      </p>
      <div className="flex items-center">
        <p
          className="inline-flex items-center py-2 px-4 mr-3 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 hover:cursor-pointer"
          onClick={decreasePage}
        >
          Previous
        </p>
        <p
          className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 hover:cursor-pointer"
          onClick={increasePage}
        >
          Next
        </p>
      </div>
    </div>
  );
}
