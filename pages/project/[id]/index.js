import { useRouter } from "next/router";
import { useState } from "react";
import { getSession, useSession } from "next-auth/react";
import useProject from "../../../hooks/useProject";

// components
import Heading from "../../../components/Project/Heading";
import Issues from "../../../components/Project/Issues";
import StatusToggle from "../../../components/UI/Issues/StatusToggle";

function ProjectPage() {
  const router = useRouter();

  // const { status } = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     router.push("/api/auth/signin");
  //   },
  // });

  const [issueStatus, setIssueStatus] = useState("open");

  const projectId = router.query.id;

  const { isLoading, isError, data, error } = useProject(projectId);

  const project = data?.data.project;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!project) {
    return <div>404 Error. Project not found</div>;
  }

  if (isError) {
    return <div>Error: {error}</div>;
  }

  // This component is rendered inside the heading section.
  const statusToggleComponent = (
    <StatusToggle issueStatus={issueStatus} setIssueStatus={setIssueStatus} />
  );

  return (
    <div className="mx-5 font-lato">
      <Heading
        project={project}
        statusToggleComponent={statusToggleComponent}
      />
      <Issues project={project} issueStatus={issueStatus} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}

export default ProjectPage;
