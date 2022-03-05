import useCreateProject from "../../../hooks/useCreateProject";

import { useRouter } from "next/dist/client/router";

function SubmitProject({ name, description }) {
  const addProject = useCreateProject();
  const router = useRouter();

  const submit = () => {
    addProject.mutate(
      {
        name,
        description,
      },
      {
        onSuccess: async (res) => {
          const data = await res.json();
          console.log(data);
          const projectId = data?.data.project._id;
          router.push(`/project/${projectId}`);
        },
      }
    );
  };

  return (
    <div>
      <div
        className={`w-[110px] bg-[#3197F5] text-white rounded-[4px] flex items-center justify-center hover:shadow-md hover:cursor-pointer transition-shadow`}
      >
        <p className="px-5 py-[6px]" onClick={submit}>
          Create
        </p>
      </div>
      {/* {addIssue.isError && (
        <p>Could not add issue to the project. Please try again later</p>
      )} */}
    </div>
  );
}

export default SubmitProject;
