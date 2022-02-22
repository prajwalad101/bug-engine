import { useRouter } from "next/router";
import { GoSettings } from "react-icons/go";

import { getProjectById } from "../../utils/projectFunc";

function Heading() {
  const router = useRouter();

  const projectId = router.query.id;
  const project = getProjectById(projectId);

  // If project not loaded return null
  if (!project) return null;

  return (
    <div>
      <div className="flex items-end gap-4">
        <h1 className="font-bold text-2xl">{project.name}</h1>
        <p className="text-gray-500 ">21 January, 2021</p>
      </div>
      <div className="flex items-center gap-3 mt-2 text-gray-600 hover:cursor-pointer">
        <GoSettings />
        <p>Details</p>
      </div>
    </div>
  );
}

export default Heading;
