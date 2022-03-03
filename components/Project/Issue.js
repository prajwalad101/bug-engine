import IssueStatus from "../UI/Issues/IssueStatus";

function Issue({ issue }) {
  return (
    <div>
      <section className="flex items-start gap-4 xl:gap-10 pl-2 py-3 hover:bg-gray-100 hover:cursor-pointer hover:pl-4 side-transition">
        {/* Issue status */}
        <IssueStatus />
        {/* Issue Id */}
        {/* <p className="hidden sm:block basis-14 text-gray-500 font-sourcesans text-lg">
          #532
        </p> */}
        {/* Issue name / details */}
        <div className="flex flex-col gap-[6px] tablet:gap-1 grow">
          <h2 className="text-lg md:text-xl font-medium font-hindsiliguri">
            {issue.name}
          </h2>
          <div className="flex flex-col font-sourcesans lgphone:flex-row lgphone:items-center lgphone:gap-1">
            <p className="text-base text-slate-600 font-medium leading-tight">
              Development
            </p>
            <p className="text-gray-500 hidden lgphone:inline"> / </p>
            <p className="text-base text-gray-400">
              2 days ago by {issue.submitter}
            </p>
          </div>
        </div>
        {/* Issue Date */}
        <div className="hidden shrink-0 mt-1 tablet:flex basis-40 justify-center text-gray-600 items-center lgtablet:mr-5 xl:basis-48">
          <p>21 January, 2021</p>
        </div>

        {/* Assigned to */}
        <div className="flex shrink-0 gap-1 mt-4 lgphone:mt-1 lgphone:mr-9 lgtablet:mr-12 xl:basis-32">
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
