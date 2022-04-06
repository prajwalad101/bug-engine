import { useSession } from "next-auth/react";

// icons
import { IoMdNotificationsOutline } from "react-icons/io";
import { GoSettings } from "react-icons/go";

// components
import CreateIssueButton from "../UI/Issues/CreateIssueButton";
import ListHeading from "../UI/Issues/ListHeading";
import Searchbar from "../UI/Issues/Searchbar";
import UserDropdown from "../UI/Heading/UserDropdown";

function Heading({ project, statusToggleComponent, isAdmin }) {
  const issues = project.issues;
  const { data: session, status } = useSession();

  return (
    <div className="mt-5">
      <section className="flex ">
        <div className="flex grow items-end justify-between lg:justify-start lg:gap-24">
          <div>
            <h1 className="font-bold text-[27px] leading-tight">Issues</h1>
            <p className="text-gray-500 text-base">
              {issues.length} Outstanding
            </p>
          </div>
          {/* Project Details */}
          <div className="flex items-center gap-2 text-gray-400 hover:cursor-pointer">
            <GoSettings size={18} className="peer" />
            <p className="hover:underline peer-hover:underline underline-offset-2">
              Project Details
            </p>
          </div>
        </div>

        {/* Notification / Profile */}
        <div className="hidden items-center gap-14 lg:flex ">
          <IoMdNotificationsOutline size={29} />
          <UserDropdown isAdmin={isAdmin} />
        </div>
      </section>

      <hr className="hr-line mt-4 lg:mt-3" />
      <section className="flex flex-col lgphone:items-center lgphone:flex-row lgphone:justify-between lg:mt-2">
        {/* Heading section 1 */}
        <div className="flex gap-10 items-center xl:gap-20 mt-5 grow">
          <Searchbar />
          {(isAdmin || session.user.role === "submitter") && (
            <CreateIssueButton projectId={project._id} />
          )}
        </div>
        {/* Heading section 2 */}
        <div className="flex items-center justify-between mt-5">
          {statusToggleComponent}
          {/* <FilterIssues /> */}
        </div>
      </section>
      <hr className="hr-line mt-5 lgphone:hidden" />
      <ListHeading />
    </div>
  );
}

export default Heading;
