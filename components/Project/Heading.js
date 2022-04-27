import { useSession } from "next-auth/react";

// components
import CreateIssueButton from "../UI/Issues/CreateIssueButton";
import Searchbar from "../UI/Issues/Searchbar";
import UserDropdown from "../UI/Heading/UserDropdown";

function Heading({ project, statusToggleComponent, isAdmin }) {
  const { data: session } = useSession();

  return (
    <div className="mt-5">
      <section className="flex ">
        <div className="flex grow items-end justify-between lg:justify-start lg:gap-24">
          <div>
            <h1 className="font-bold text-[27px] leading-tight">Issues</h1>
            <p className="text-gray-500 text-base">
              {project.issues.length} Outstanding
            </p>
          </div>
        </div>

        {/* Notification / Profile */}
        <div className="hidden items-center gap-14 lg:flex ">
          {/* <IoMdNotificationsOutline size={29} /> */}
          <UserDropdown isAdmin={isAdmin} />
        </div>
      </section>

      <hr className="hr-line mt-4 lg:mt-3" />
      <section className="flex flex-col lgphone:items-center lgphone:flex-row lgphone:justify-between lg:mt-2">
        {/* Heading section 1 */}
        <div className="flex gap-10 items-center xl:gap-20 mt-5 grow">
          <Searchbar />
          {(isAdmin ||
            session.user.role === "submitter" ||
            session.user.role === "demo") && <CreateIssueButton />}
        </div>
        {/* Heading section 2 */}
        <div className="flex items-center justify-between mt-5">
          {statusToggleComponent}
          {/* <FilterIssues /> */}
        </div>
      </section>
      <hr className="hr-line mt-5 lgphone:hidden" />
      {/* <ListHeading /> */}
    </div>
  );
}

export default Heading;
