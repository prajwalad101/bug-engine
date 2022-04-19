import { useState, useEffect } from "react";

export default function PeoplePagination({
  page,
  setPage,
  total,
  resultCount,
  limit,
}) {
  const [isLastPage, setIsLastPage] = useState(false);

  const initialCount = (page - 1) * limit + 1;
  let finalCount = initialCount + 9;

  if (isLastPage) finalCount = total;

  useEffect(() => {
    if (initialCount + 9 > total) {
      setIsLastPage(true);
    } else {
      setIsLastPage(false);
    }
  }, [initialCount, total]);

  const increasePage = () => {
    if (isLastPage) {
      return;
    }
    setPage((prevPage) => prevPage + 1);
  };
  const decreasePage = () => {
    setPage((prevPage) => {
      if (prevPage <= 1) {
        return prevPage;
      }
      return prevPage - 1;
    });
  };

  return (
    <div className="flex justify-between items-center my-5 font-ibm">
      <p className="text-sm text-gray-700">
        Showing {initialCount} to {finalCount} of {total} results
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
