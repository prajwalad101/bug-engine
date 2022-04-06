import formatDate from "../../utils/formatDate";
import IssuePriority from "../UI/Issues/IssuePriority";

import { useRouter } from "next/router";
import Image from "next/image";

function Issue({ issue, pId }) {
  const router = useRouter();
  const date = new Date(issue.createdAt).toLocaleDateString("en-gb", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "utc",
  });

  const relativeDate = formatDate(new Date(issue.createdAt));

  const showIssueInfo = () => {
    router.push(`/project/${pId}/issue/${issue._id}`);
  };

  return (
    <div>
      <section
        className="flex items-start gap-4 xl:gap-10 pl-2 py-3 hover:bg-gray-100 hover:cursor-pointer hover:pl-4 side-transition"
        onClick={showIssueInfo}
      >
        {/* Issue priority */}
        <IssuePriority priority={issue.priority} />
        {/* Issue name / details */}
        <div className="flex flex-col gap-[6px] tablet:gap-1 grow">
          <h2 className="text-lg md:text-xl font-medium font-hindsiliguri">
            {issue.name}
          </h2>
          <div className="flex flex-col font-sourcesans lgphone:flex-row lgphone:items-center lgphone:gap-1">
            <p className="text-base text-slate-600 font-medium leading-tight">
              {issue.type}
            </p>
            <p className="text-gray-500 hidden lgphone:inline"> / </p>
            <p className="text-base text-gray-400">
              {relativeDate} by {issue.submitter.name}
            </p>
          </div>
        </div>
        {/* Issue Date */}
        <div className="hidden shrink-0 mt-1 tablet:flex basis-40 justify-center text-gray-600 items-center lgtablet:mr-5 xl:basis-48">
          <p>{date}</p>
        </div>

        {/* Assigned to */}
        <div className="flex shrink-0 gap-1 mt-4 lgphone:mt-1 lgphone:mr-9 lgtablet:mr-12 xl:basis-32">
          {issue.assignees.length !== 0 ? (
            issue.assignees.map((assignee) => (
              <Image
                key={assignee._id}
                alt="assignee"
                src={assignee.image}
                width={30}
                height={30}
                className="rounded-full"
              />
            ))
          ) : (
            <div>NA</div>
          )}
        </div>
      </section>
      {/* Horizontal line to differentiate issues */}
      <hr className="hr-line" />
    </div>
  );
}

export default Issue;
