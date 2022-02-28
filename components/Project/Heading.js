import { GoSettings } from "react-icons/go";
import FilterIssues from "../UI/Issues/FilterIssues";
import Searchbar from "../UI/Issues/Searchbar";
import StatusToggle from "../UI/Issues/StatusToggle";

function Heading({ project }) {
  const issues = project.issues;

  return (
    <div className="pl-1">
      <div className="flex items-end gap-4">
        <h1 className="font-bold text-[27px]">Issues</h1>
      </div>
      <div className="flex items-center justify-between">
        {/* TODO: Change hardcoded issue type */}
        <p className="text-gray-500 text-[15px]">{issues.length} Outstanding</p>
        <div className="flex items-center gap-2 text-gray-500 hover:cursor-pointer">
          <GoSettings size={18} className="peer" />
          <p className="hover:underline peer-hover:underline underline-offset-2">
            Project Details
          </p>
        </div>
      </div>
      <hr className="hr-line mt-4" />
      <div className="flex items-center justify-between mt-7">
        <Searchbar />
        <FilterIssues />
      </div>
      <div className="mt-6">
        <StatusToggle />
      </div>
    </div>
  );
}

export default Heading;
