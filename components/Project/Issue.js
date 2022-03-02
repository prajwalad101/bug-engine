function Issue({ issue }) {
  return (
    <div className="flex flex-col gap-2 sm:gap-1 pt-3 hover:bg-gray-100 hover:cursor-pointer hover:pl-2 side-transition">
      <h2 className="text-lg">{issue.name}</h2>

      <div className="font-sourcesans flex justify-between items-center">
        <div className="flex flex-col sm:flex-row sm:gap-1">
          <p className="text-base text-slate-600 font-medium">Development</p>
          <p className="text-gray-500 hidden sm:inline"> / </p>
          <p className="text-base text-gray-500">
            2 days ago by {issue.submitter}
          </p>
        </div>
        <div className="flex gap-1 mr-4">
          <div className="w-7 h-7 bg-gray-500 rounded-full"></div>
          <div className="w-7 h-7 bg-gray-500 rounded-full"></div>
        </div>
      </div>

      <hr className="hr-line sm:mt-2" />
    </div>
  );
}

export default Issue;
