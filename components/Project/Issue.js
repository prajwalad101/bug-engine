import IssueStatus from "../UI/Issues/IssueStatus";

function Issue({ issue }) {
  return (
    <div>
      <section className="flex items-start gap-3 pt-3 pb-3 hover:bg-gray-50 hover:cursor-pointer hover:pl-2 side-transition">
        {/* Issue Id */}
        <p className="hidden sm:block basis-14 text-gray-500 font-sourcesans text-lg">
          #532
        </p>
        {/* Issue name / details */}
        <div className="flex flex-col gap-[6px] grow">
          <h2 className="text-lg leading-snug">{issue.name}</h2>
          <div className="flex flex-col font-sourcesans sm:flex-row sm:items-center sm:gap-1">
            <p className="text-base text-slate-600 font-medium leading-tight">
              Development
            </p>
            <p className="text-gray-500 hidden sm:inline"> / </p>
            <p className="text-base text-gray-400">
              2 days ago by {issue.submitter}
            </p>
          </div>
        </div>
        {/* Issue status */}
        <IssueStatus />
        {/* Assigned to */}
        <div className="flex gap-1 mr-3 pt-4 sm:pt-2 sm:mr-10">
          <div className="w-7 h-7 bg-gray-500 rounded-full"></div>
          <div className="w-7 h-7 bg-gray-500 rounded-full"></div>
        </div>
      </section>
      {/* Horizontal line to differentiate issues */}
      <hr className="hr-line" />
    </div>
  );
}

export default Issue;
